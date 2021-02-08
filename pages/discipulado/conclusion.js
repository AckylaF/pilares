import React from 'react'
import Image from 'next/image'
import {
  Banner,
  Wrapper,
  Content,
  Grid,
  Title,
  Farewell
} from '../../public/styles/discipulado'

import Head from '../../src/infra/components/Head'
import Header from '../../src/components/Header'
import FeedbackForm from '../../src/components/FeedbackForm'
import Footer from '../../src/components/Footer'

export default function Conclusion() {
  return (
    <>
      <Head title="Conclusão / Discipulado Pilares" />
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

        <Title>Dia 27</Title>

        <Content>
          <p>
            Chegamos ao final deste guia e estamos muito felizes porque Deus nos
            permitiu caminhar juntos! Vejamos agora um resumo do que envolve a
            sua <strong>vivência dos PILARES como estilo de vida</strong>:
          </p>

          <Grid className="article__grid">
            <div className="grid__image grid__image--1" />
            <p>
              {' '}
              Ter Deus como prioridade, adorá-Lo e fazer a Sua vontade,
              glorificando o Seu nome. E saber que tudo depende da graça dEle.
            </p>

            <div className="grid__image grid__image--2" />
            <p>
              Ser batizado com água e com o Espírito Santo e viver a nova vida
              que Ele te deu, com virtudes e sinais sobrenaturais.
            </p>

            <div className="grid__image grid__image--3" />
            <p>
              Diariamente orar, ler a Bíblia, praticar, testemunhar, amar e
              servir as pessoas.
            </p>

            <div className="grid__image grid__image--4" />
            <p>
              Viver em unidade com seus irmãos em Cristo, fazendo tudo o que é
              necessário para o bem comum e encontrar-se continuamente para
              cultos, comunhão, discipulado e ministério.
            </p>

            <div className="grid__image grid__image--5" />
            <p>
              Alcançar outras pessoas e ensiná-las a andar no mesmo caminho,
              visando não deixar ninguém desta terra de fora deste alcance.
            </p>
          </Grid>

          <p>Assim sendo, queremos encerrar te encorajando:</p>

          <ul style={{ margin: '0.5rem' }}>
            <li>
              • Viva esses princípios, pois você é igreja e assim também irá
              plantar igreja (no sentido de alcançar pessoas e discipular);
            </li>
            <li>• Ao plantar igreja, ensine às pessoas estes princípios.</li>
          </ul>

          <p>
            Enfim, Jesus é o SENHOR e dEle virá tudo o que você precisa para a
            sua vida e para a sua missão neste mundo! Apenas fizemos parte de um
            trecho da sua caminhada. Assim, não pare de se equipar, caminhar,
            progredir. Avance cada vez mais. Mas nunca construa sobre outros
            fundamentos. PERMANEÇA nesses PILARES. Deus te abençoe!
          </p>
        </Content>

        <FeedbackForm id={27} />

        <Farewell>Com a graça de Deus, nos vemos em breve!</Farewell>
      </Wrapper>

      <Footer />
    </>
  )
}
