import React from 'react'
import Head from 'next/head'

import { Cover, Title, Wrapper, Grid } from '../public/styles/inicio'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'

export default function Start() {
  return (
    <>
      <Head title="Discipulado Pilares" />
      <Cover>
        <Header />
        <Title>
          Aqui começa a sua caminhada para viver os pilares como um estilo de
          vida cristão bíblico
        </Title>
      </Cover>
      <Wrapper>
        <Grid>
          <article>
            <iframe
              title="Introdução"
              src="https://www.youtube.com/embed/iE4o7ybsTpo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </article>
          <article>
            <iframe
              title="Pilar 1"
              src="https://www.youtube.com/embed/KCxKiplKhH0"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </article>
          <article>
            <iframe
              title="Pilar 2"
              src="https://www.youtube.com/embed/lRE6Fu8cgFQ"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </article>
          <article>
            <iframe
              title="Pilar 3"
              src="https://www.youtube.com/embed/QeICVqsHxQI"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </article>
          <article>
            <iframe
              title="Pilar 4"
              src="https://www.youtube.com/embed/EYAQzPXzguI"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </article>
          <article>
            <iframe
              title="Pilar 5"
              src="https://www.youtube.com/embed/NOYU6zP6kPc"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </article>
        </Grid>
      </Wrapper>
      <Footer />
    </>
  )
}
