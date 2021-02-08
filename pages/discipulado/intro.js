import React from 'react'
import Image from 'next/image'
import {
  Banner,
  Wrapper,
  Title,
  Content,
  Grid,
  Farewell
} from '../../public/styles/discipulado'

import Head from '../../src/infra/components/Head'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'
import FeedbackForm from '../../src/components/FeedbackForm'

export default function Intro() {
  return (
    <>
      <Head title="Intro / Discipulado Pilares" />
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

        <Title>Dia 1</Title>

        <Content>
          <p>
            Olá, se você chegou até aqui é porque está decidido a assumir o
            compromisso de <strong>viver os PILARES!</strong> Glória a Deus por
            isso! Você está indo na direção certa e nós queremos caminhar com
            você mais um pouco. Nós dividimos o aprendizado em etapas para o
            melhor aproveitamento, então siga esse guia fazendo{' '}
            <u>um dia de cada vez</u>, ok?
          </p>
          <p>
            Primeiramente, é muito importante falar que os PILARES que
            apresentamos a você não foram inventados por homem ou mulher; eles
            são instruções do próprio Deus. Todos eles foram retirados da Bíblia
            e destacados como FUNDAMENTOS NECESSÁRIOS para a vida cristã.
          </p>
          <p>
            Isso quer dizer, que viver os PILARES é ter um{' '}
            <strong>estilo de vida cristão bíblico</strong>.
          </p>
          <p>
            É claro que a vida cristã não se resume a eles, porém afirma-se de
            novo: são fundamentos necessários! Você precisa deles para começar,
            para crescer, para permanecer, até que Jesus volte. Você NUNCA vai
            deixar de vivê-los, embora outras coisas sejam acrescentadas ao
            longo do caminho. Por isso, eles são tão importantes.
          </p>
          <p>
            Agora veremos passos práticos que você precisa tomar para viver os
            PILARES.
          </p>

          <p className="article__steps">
            Passo 1- Viver os PILARES é um estilo de vida em que você busca:
          </p>

          <Grid className="article__grid">
            <div className="grid__image grid__image--1" />
            <p>Conhecer a Deus constantemente</p>

            <div className="grid__image grid__image--2" />
            <p>Conhecer a nova vida que Ele te deu</p>

            <div className="grid__image grid__image--3" />
            <p>
              Diariamente orar, ler a Bíblia, praticar, testemunhar, amar e
              servir às pessoas
            </p>

            <div className="grid__image grid__image--4" />
            <p>Viver em união e cooperação com seus irmãos em Cristo</p>

            <div className="grid__image grid__image--5" />
            <p>Conectar outras pessoas ao que você tem vivido</p>
          </Grid>

          <p>
            Então responda: O que você precisa fazer HOJE para se adequar a essa
            realidade? Escreva em um papel seus planos, se necessário. Isso
            ajuda organizar as ideias.
          </p>
        </Content>

        <FeedbackForm id={1} />

        <Farewell>Com a graça de Deus, nos vemos amanhã!</Farewell>
      </Wrapper>
      <Footer />
    </>
  )
}
