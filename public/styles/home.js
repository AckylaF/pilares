import styled, { css } from 'styled-components'

export const Cover = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  background: url('/images/cover.jpg') no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  color: ${props => props.theme.colors.secondary};
  height: 100vh;
`

export const Title = styled.h1(
  ({ theme: { colors, media } }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 90%;
    margin: 0.5rem;
    font-size: 1.5rem;
    text-shadow: 1px 1px 1px ${colors.background.main};

    @media screen and (min-width: ${media.medium}) {
      width: 70%;
      margin: 10rem 4.5rem 0;
      font-size: 2.5rem;
    }
  `
)

export const CallToAction = styled.a(
  ({ theme: { colors, media } }) => css`
    margin: 1.5rem auto;
    padding: 1rem;
    color: ${colors.primary.main};
    border-radius: 2px;
    background-color: ${colors.secondary};
    box-shadow: 0px 0px 20px -2px ${colors.background.main};
    font-weight: bold;
    transition: 0.25s;

    @media screen and (min-width: ${media.medium}) {
      margin: 3rem 4.5rem 0;

      &:hover {
        background-color: ${colors.primary.main};
        color: ${colors.secondary};
        border-radius: 8px;
      }
    }
  `
)

export const AboutContainer = styled.article(
  ({ theme: { media } }) => css`
    background-color: #f7f7f7;
    display: grid;
    grid-template-columns: 1fr;
    padding-bottom: 3rem;

    @media screen and (min-width: ${media.medium}) {
      height: 95vh;
      grid-template-columns: 30% 60%;
      grid-gap: 3%;
      padding-bottom: 0;
    }
  `
)

export const Banner = styled.div(
  ({ theme: { media } }) => css`
    display: none;
    background: url('/images/cross.jpg');
    background-position: 20%;
    background-size: cover;
    opacity: 0.8;

    @media screen and (min-width: ${media.medium}) {
      display: initial;
      position: relative;
    }
  `
)

export const Info = styled.section(
  ({ theme: { colors } }) => css`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    h2,
    h3 {
      color: ${colors.text.title};
      align-self: center;
    }
    h2 {
      font-size: 1.5rem;
      border-bottom: 1px solid;
      text-transform: uppercase;
      margin: 2rem;
    }
  `
)

export const Topics = styled.ul(
  ({ theme: { media } }) => css`
    display: grid;
    align-items: center;
    grid-gap: 3%;
    margin-bottom: 2rem;

    @media screen and (min-width: ${media.medium}) {
      height: 80%;
    }
  `
)

export const ListItem = styled.li(
  ({ theme: { media } }) => css`
    display: grid;
    align-items: center;
    justify-items: center;

    @media screen and (min-width: ${media.medium}) {
      grid-template-columns: 15% 80%;
      grid-gap: 2%;
    }

    img {
      height: 6rem;
    }

    p {
      width: 90%;
    }

    ul {
      width: 90%;

      li {
        margin-top: 0.8rem;
        text-align: justify;
      }
    }
  `
)

export const ContactContainer = styled.article(
  ({ theme: { media } }) => css`
    background-color: #103c57;
    color: #fff;
    padding: 1.5rem 1rem 2rem;

    display: grid;
    grid-gap: 1rem;
    align-items: center;

    @media screen and (min-width: ${media.medium}) {
      grid-template-columns: 0.7fr 1fr;
    }
  `
)

export const Greeting = styled.section(
  ({ theme: { colors, media } }) => css`
    text-align: justify;
    line-height: 2rem;
    font-size: 1.2rem;

    @media screen and (min-width: ${media.medium}) {
      padding: 1rem;

      a {
        text-decoration: underline;
        transition: 0.25s;

        &:hover {
          color: #fff;
          text-decoration: none;
          background-position-x: 100%;
          background-color: ${colors.primary.main};
        }
      }
    }
  `
)
