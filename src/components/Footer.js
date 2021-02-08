import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.background.main};
  color: #fff;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 100%;
    margin-left: 1rem;
  }
`

export default function Footer() {
  return (
    <FooterContainer className="footer">
      <span>&copy; Projeto Pilares</span>
      <img
        src="/images/pilares.svg"
        alt="Pilares - estilo de vida cristão bíblico"
      />
    </FooterContainer>
  )
}
