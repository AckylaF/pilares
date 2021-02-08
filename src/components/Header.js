import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import MenuIcon from './MenuIcon'
import MenuSidebar from './MenuSidebar'

const HeaderContainer = styled.header`
  display: flex;
  margin-bottom: auto;
`

const LogoContainer = styled.a(
  ({ theme: { media } }) => css`
    width: 8rem;

    @media screen and (min-width: ${media.medium}) {
      width: 10rem;
    }
  `
)

const Logo = styled.img`
  width: 100%;
  height: 100%;
`

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <>
      <HeaderContainer>
        <LogoContainer href="/">
          <Logo
            src="/images/pilares.svg"
            alt="Pilares - estilo de vida cristão bíblico"
          />
        </LogoContainer>
        <MenuIcon isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </HeaderContainer>
      <MenuSidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
    </>
  )
}
