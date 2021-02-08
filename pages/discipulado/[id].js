import React from 'react'
import Image from 'next/image'
import axios from 'axios'
import {
  Banner,
  Wrapper,
  Title,
  Content,
  Farewell
} from '../../public/styles/discipulado'

import Head from '../../src/infra/components/Head'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'
import FeedbackForm from '../../src/components/FeedbackForm'

const UnsafeComponent = ({ html }) => (
  // eslint-disable-next-line react/no-danger
  <div dangerouslySetInnerHTML={{ __html: html }} />
)

export default function Discipulado({ posts, id }) {
  const content = posts.filter(post => post.id === parseInt(id, 10))[0]

  return (
    <>
      <Head title={`Dia ${id} / Discipulado Pilares`} />
      <Header />
      <Banner>
        <Image
          src="/images/bible.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
        />
      </Banner>

      <Wrapper>
        <h1>Nível 1 de capacitação - Guia de 27 dias de caminhada</h1>

        <Title>{content.title}</Title>

        <Content>
          <UnsafeComponent html={content.content} />
        </Content>

        <FeedbackForm id={id} />

        <Farewell>Com a graça de Deus, nos vemos amanhã!</Farewell>
      </Wrapper>
      <Footer />
    </>
  )
}

export async function getServerSideProps(context) {
  const response = await axios.get('https://projetopilares.com/api/get-content')

  return {
    props: { posts: response.data, ...context.params }
  }
}
