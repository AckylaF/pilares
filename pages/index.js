import React, { useRef, useState } from 'react'
import Image from 'next/image'
import {
  Cover,
  Title,
  CallToAction,
  AboutContainer,
  Banner,
  Info,
  Topics,
  ListItem,
  ContactContainer,
  Greeting
} from '../public/styles/home'

import Head from '../src/infra/components/Head'
import Header from '../src/components/Header'
import Arrow from '../src/components/Arrow'
import Form from '../src/components/Form'
import Footer from '../src/components/Footer'
import Modal from '../src/components/Modal'

export default function Home() {
  const [isModalVisible, setIsModalVisible] = useState(true)
  const contact = useRef()
  const scrollToContactSection = () => {
    contact.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Head title="Discipulado Pilares" />
      <Cover>
        <Header />
        <Title>
          Ser igreja e plantar igreja através de uma vida alicerçada e frutífera
          com Jesus!
        </Title>
        <CallToAction onClick={scrollToContactSection}>Faça parte</CallToAction>
        <Arrow />
      </Cover>

      <main>
        <AboutContainer id="about">
          <Banner />
          <Info>
            <h2>Sobre</h2>
            <h3>Missão, Visão e Objetivos</h3>

            <Topics>
              <ListItem>
                <Image
                  src="/icons/glasses.svg"
                  alt="visão"
                  width={50}
                  height={50}
                />
                <p>
                  Ver cristãos comprometidos com Jesus e com a Sua obra na
                  igreja e através dela.
                </p>
              </ListItem>
              <ListItem>
                <Image
                  src="/icons/mission.svg"
                  alt="missão"
                  width={50}
                  height={50}
                />
                <p>
                  Mobilizar cristãos para serem igreja e plantarem igreja por
                  todo o mundo.
                </p>
              </ListItem>
              <ListItem>
                <Image
                  src="/icons/target.svg"
                  alt="objetivos"
                  width={50}
                  height={50}
                />
                <ul>
                  <li>
                    Oferecer capacitação e mentoreamento online sobre os
                    <span> pilares </span>
                    centrais da vida da igreja;
                  </li>
                  <li>
                    Encorajar cristãos a viverem os
                    <span> pilares </span>e passar essas práticas a outros por
                    si mesmos;
                  </li>
                  <li>
                    Despertar cristãos para um compromisso pessoal de plantar
                    igreja de modo prático e não estrutural, isto é, não focando
                    em construir prédios, mas alcançar pessoas e discipular;
                  </li>
                  <li>
                    Fazer tudo para a glória de Jesus, isto é, para que Ele seja
                    conhecido e adorado.
                  </li>
                </ul>
              </ListItem>
            </Topics>
          </Info>
        </AboutContainer>

        <ContactContainer ref={contact}>
          <Greeting>
            <p>
              Seja bem-vindo!
              <br />O projeto{' '}
              <span style={{ textTransform: 'uppercase' }}>pilares</span> visa
              te oferecer mais do que um conteúdo e sim um discipulado. Por
              isso, para que nós possamos te acompanhar, faça o seu cadastro ao
              lado.
            </p>
            <p>
              Depois acesse a página <a href="/inicio">Início</a> para conhecer
              os <span style={{ textTransform: 'uppercase' }}>pilares</span> e a
              seguir a página <a href="/discipulado/intro">Discipulado</a> para
              aprender como colocá-los em prática.
            </p>
          </Greeting>
          <Form />
        </ContactContainer>
      </main>
      <Footer />
      {isModalVisible ? (
        <Modal hideModal={() => setIsModalVisible(false)} />
      ) : null}
    </>
  )
}
