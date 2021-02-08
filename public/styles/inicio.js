import styled, { css } from 'styled-components'

export const Cover = styled.div(
  ({ theme: { media } }) => css`
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.colors.secondary};
    height: 80vh;

    background: url('/images/path.jpg') no-repeat;
    background-position: center;
    background-size: cover;

    @media screen and (min-width: ${media.medium}) {
      height: 60vh;
    }
  `
)

export const Title = styled.h1(
  ({ theme: { colors, media } }) => css`
    display: flex;
    flex-wrap: wrap;
    padding: 2rem;
    font-size: 1.5rem;
    text-shadow: 1px 1px 1px ${colors.background.main};

    @media screen and (min-width: ${media.medium}) {
      width: 70%;
      font-size: 2rem;
    }
  `
)

export const Wrapper = styled.main(
  ({ theme: { media } }) => css`
    background-color: #f7f7f7;
    padding: 3rem 1rem;

    @media screen and (min-width: ${media.medium}) {
      height: 100vh;
    }
  `
)

export const Grid = styled.section(
  ({ theme: { media } }) => css`
    display: grid;
    grid-row-gap: 3rem;

    article {
      display: flex;
      justify-content: center;

      iframe {
        width: 95%;
      }
    }

    @media screen and (min-width: ${media.medium}) {
      grid-template-columns: repeat(3, minmax(30%, 1fr));
      height: 100%;
    }
  `
)
