import React from 'react'
import styled, { css } from 'styled-components'

const MenuContainer = styled.ul(
  ({ theme: { colors, media } }) => css`
    cursor: pointer;
    height: 3rem;
    width: 3rem;
    padding: 0.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    position: absolute;
    top: 4%;
    right: 2%;
    z-index: 2;

    @media screen and (min-width: ${media.medium}) {
      &:hover li {
        background-color: ${colors.primary.main};
      }
    }
  `
)

const Line = styled.li(
  ({ theme: { colors } }) => css`
    background-color: ${colors.secondary};
    height: 3px;
    width: 60%;
    margin: 0.2rem;
    transition: 0.4s;
  `
)

const Line1 = styled(Line)`
  transform: rotate(45deg);
  width: 80%;
`

const Line2 = styled(Line)`
  visibility: hidden;
  opacity: 0;
`

const Line3 = styled(Line)`
  transform: rotate(-45deg);
  width: 80%;
`

export default function Menu({ isSidebarOpen, toggleSidebar }) {
  return (
    <MenuContainer onClick={toggleSidebar}>
      {isSidebarOpen === false ? (
        <>
          <Line />
          <Line />
          <Line />
        </>
      ) : (
        <>
          <Line1 />
          <Line2 />
          <Line3 />
        </>
      )}
    </MenuContainer>
  )
}
