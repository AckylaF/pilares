/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'

const Container = styled.section(
  ({ theme: { colors, media } }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${colors.secondary};
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 1;

    overflow: hidden;
    width: ${props => (props.open ? '100%' : '0')};
    opacity: ${props => (props.open ? '1' : '0')};
    visibility: ${props => (props.open ? 'visible' : 'hidden')};

    background-color: ${colors.background.main};
    transition: 0.3s;

    @media screen and (min-width: ${media.medium}) {
      width: ${props => (props.open ? '25%' : '0')};
    }
  `
)

const Background = styled.div(
  ({ theme: { media } }) => css`
    position: fixed;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(33, 37, 41, 0.5);
    transition: 0.3s ease-out;

    @media screen and (min-width: ${media.medium}) {
      width: ${props => (props.open ? '75%' : '0')};
    }
  `
)

const SidebarContainer = styled.nav(
  () => css`
    position: relative;
    height: 50%;
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: center;
  `
)

const List = styled.ul(
  () => css`
    position: absolute;
    backface-visibility: hidden;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 1.5rem;

    transition: 0.3s;
  `
)

const OuterList = styled(List)`
  transform: ${props => (props.active ? 'rotateY(180deg)' : 'rotateY(0deg)')};
  height: 65%;
  width: 100%;

  li {
    cursor: pointer;
    transition: 0.25s;
  }

  @media screen and (min-width: ${props => props.theme.media.medium}) {
    li {
      &:hover {
        color: ${props => props.theme.colors.primary.main};
      }
    }
  }
`

const InnerList = styled(List)`
  transform: ${props => (props.active ? 'rotateY(0deg)' : 'rotateY(180deg)')};
  height: 100%;
  width: 100%;

  div::before {
    content: '<';
    position: absolute;
    left: 47%;
    top: -15%;
    cursor: pointer;
  }
`

const ListItem = styled.li(
  () => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    cursor: pointer;
    transition: 0.25s;

    &:hover h3 {
      color: ${props => props.theme.colors.primary.main};
    }

    .menu__section--visible {
      padding: 1.5rem 0;
      opacity: 1;
      visibility: visible;
    }

    section {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-top: 0.5rem;
      font-size: 1rem;

      height: 0;
      opacity: 0;
      visibility: hidden;
      transition: 0.3s;

      a {
        transition: 0.25s;
      }
    }

    @media screen and (min-width: ${props => props.theme.media.medium}) {
      section {
        & > a:hover {
          background-color: ${props => props.theme.colors.primary.main};
          padding: 0.3rem;
          border-radius: 50px;
        }
      }
    }
  `
)

export default function MenuSidebar({ isSidebarOpen, toggleSidebar }) {
  const [active, setActive] = useState(false)
  const toggleInnerList = () => setActive(!active)
  const toggleMenuSection = e => {
    document
      .querySelector('.menu__section--visible')
      ?.classList.remove('menu__section--visible')
    e.target.nextSibling.classList.toggle('menu__section--visible')
  }

  return (
    <Container open={isSidebarOpen}>
      <Background open={isSidebarOpen} onClick={toggleSidebar} />
      <SidebarContainer>
        <OuterList active={active}>
          <li>
            <h3>
              <a href="/">Home</a>
            </h3>
          </li>
          <li>
            <h3>
              <a href="/inicio">Início</a>
            </h3>
          </li>
          <li>
            <h3>
              <a href="/#about" onClick={toggleSidebar}>
                Sobre
              </a>
            </h3>
          </li>

          <li onClick={toggleInnerList}>
            <h3>Discipulado</h3>
          </li>

          <li>
            <h3>
              <a href="/ebook">E-book</a>
            </h3>
          </li>

          <li>
            <h3>
              <a href="/#contact" onClick={toggleSidebar}>
                Contato
              </a>
            </h3>
          </li>
        </OuterList>
        <InnerList active={active}>
          <div onClick={toggleInnerList} />
          <ListItem onClick={e => toggleMenuSection(e)}>
            <h3>
              <a href="/discipulado/intro">Introdução</a>
            </h3>
          </ListItem>

          <ListItem onClick={e => toggleMenuSection(e)}>
            <h3>Pilar G</h3>
            <section>
              <Link href="/discipulado/2">
                <a onClick={toggleSidebar}>Dia 2</a>
              </Link>
              <Link href="/discipulado/3">
                <a onClick={toggleSidebar}>Dia 3</a>
              </Link>
              <Link href="/discipulado/4">
                <a onClick={toggleSidebar}>Dia 4</a>
              </Link>
              <Link href="/discipulado/5">
                <a onClick={toggleSidebar}>Dia 5</a>
              </Link>
              <Link href="/discipulado/6">
                <a onClick={toggleSidebar}>Dia 6</a>
              </Link>
            </section>
          </ListItem>

          <ListItem onClick={e => toggleMenuSection(e)}>
            <h3>Pilar A</h3>
            <section>
              <Link href="/discipulado/7">
                <a onClick={toggleSidebar}>Dia 7</a>
              </Link>
              <Link href="/discipulado/8">
                <a onClick={toggleSidebar}>Dia 8</a>
              </Link>
              <Link href="/discipulado/9">
                <a onClick={toggleSidebar}>Dia 9</a>
              </Link>
              <Link href="/discipulado/10">
                <a onClick={toggleSidebar}>Dia 10</a>
              </Link>
              <Link href="/discipulado/11">
                <a onClick={toggleSidebar}>Dia 11</a>
              </Link>
            </section>
          </ListItem>

          <ListItem onClick={e => toggleMenuSection(e)}>
            <h3>Pilar D</h3>
            <section>
              <Link href="/discipulado/12">
                <a onClick={toggleSidebar}>Dia 12</a>
              </Link>
              <Link href="/discipulado/13">
                <a onClick={toggleSidebar}>Dia 13</a>
              </Link>
              <Link href="/discipulado/14">
                <a onClick={toggleSidebar}>Dia 14</a>
              </Link>
              <Link href="/discipulado/15">
                <a onClick={toggleSidebar}>Dia 15</a>
              </Link>
              <Link href="/discipulado/16">
                <a onClick={toggleSidebar}>Dia 16</a>
              </Link>
            </section>
          </ListItem>

          <ListItem onClick={e => toggleMenuSection(e)}>
            <h3>Pilar C</h3>
            <section>
              <Link href="/discipulado/17">
                <a onClick={toggleSidebar}>Dia 17</a>
              </Link>
              <Link href="/discipulado/18">
                <a onClick={toggleSidebar}>Dia 18</a>
              </Link>
              <Link href="/discipulado/19">
                <a onClick={toggleSidebar}>Dia 19</a>
              </Link>
              <Link href="/discipulado/20">
                <a onClick={toggleSidebar}>Dia 20</a>
              </Link>
              <Link href="/discipulado/21">
                <a onClick={toggleSidebar}>Dia 21</a>
              </Link>
            </section>
          </ListItem>

          <ListItem onClick={e => toggleMenuSection(e)}>
            <h3>Pilar M</h3>
            <section>
              <Link href="/discipulado/22">
                <a onClick={toggleSidebar}>Dia 22</a>
              </Link>
              <Link href="/discipulado/23">
                <a onClick={toggleSidebar}>Dia 23</a>
              </Link>
              <Link href="/discipulado/24">
                <a onClick={toggleSidebar}>Dia 24</a>
              </Link>
              <Link href="/discipulado/25">
                <a onClick={toggleSidebar}>Dia 25</a>
              </Link>
              <Link href="/discipulado/26">
                <a onClick={toggleSidebar}>Dia 26</a>
              </Link>
            </section>
          </ListItem>

          <ListItem>
            <h3>
              <a href="/discipulado/conclusion">Conclusão</a>
            </h3>
          </ListItem>
        </InnerList>
      </SidebarContainer>
    </Container>
  )
}
