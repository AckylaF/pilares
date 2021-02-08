import React from 'react'
import Image from 'next/image'
import { Banner, Title, Wrapper, Link } from '../public/styles/ebook'

import Head from '../src/infra/components/Head'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'

export default function Ebook() {
  return (
    <>
      <Head title="E-book / Discipulado Pilares" />
      <Header />
      <Banner>
        <Image
          src="/images/ebook.jpeg"
          layout="fill"
          objectFit="cover"
          objectPosition="15%"
          quality="100"
        />
      </Banner>
      <Wrapper>
        <Title>Pilares: Uma vida alicerçada e frutífera com Jesus</Title>
        <p>
          Viver não é apenas sobreviver, mas ter um propósito e uma direção a
          seguir. Aquilo que for a base da sua vida norteará todo o resto.
          Então, sobre quais fundamentos você está construindo a sua vida?
        </p>
        <p>
          Este livro te mostrará PILARES para ter uma vida alicerçada e
          frutífera com Jesus. Viver para Ele, estar aliançado com Ele,
          experimentar as virtudes e o poder que vêm dEle, ter uma vida
          devocional diária, dar testemunho, ter um amor prático, ser parte da
          comunidade cristã e multiplicar, são princípios bíblicos chaves que
          serão apresentados e estão ligados à nossa existência.
        </p>
        <p>
          Mas conhecer os PILARES é o princípio do caminho, logo em seguida deve
          estar a vivência. Portanto, neste livro você também será desafiado a
          dar passos práticos em direção a sua reconstrução pessoal. E,
          decidindo segui-los, perceberá que a sua vida vai além de você mesmo.
          Aprenderá como ser igreja e plantar igreja de modo simples, focando em
          pessoas e não em prédios. Alcançará aquilo que a graça de Deus te
          permitir e que for para a glória dEle!
        </p>

        <Link
          href="https://amzn.to/350ZYRm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Adquira já o seu
        </Link>
      </Wrapper>
      <Footer />
    </>
  )
}
