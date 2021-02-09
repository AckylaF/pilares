/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  top: 0;
  height: 1.5rem;
  width: 100vw;
  background: rgba(0, 0, 0, 0.2);
  text-align: center;
  color: #fff;
`

const Close = styled.span`
  position: absolute;
  right: 3%;
  top: 5%;

  color: #fff;
  font-weight: bold;
  cursor: pointer;
`

export default function Modal({ hideModal }) {
  return (
    <Container>
      <Link href="/ebook">
        <a>
          Garanta já o seu e-book Pilares: Uma vida alicerçada e frutífera com
          Jesus
        </a>
      </Link>
      <Close onClick={hideModal}>X</Close>
    </Container>
  )
}
