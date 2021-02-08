import styled from 'styled-components'

export const Banner = styled.section`
  position: relative;
  height: 95vh;
  margin-top: -8rem;
  z-index: -1;

  @media screen and (min-width: ${props => props.theme.media.medium}) {
    height: 90vh;
  }
`

export const Wrapper = styled.article`
  padding: 0.5rem;

  p {
    line-height: 1.5rem;
  }

  @media screen and (min-width: ${props => props.theme.media.medium}) {
    width: 70%;
    margin: 0 auto;

    p {
      text-align: justify;
      margin-top: 0.5rem;
    }
  }
`

export const Title = styled.h1`
  font-size: 1.3rem;
  margin: 1rem 0;

  @media screen and (min-width: ${props => props.theme.media.medium}) {
    text-align: center;
    margin: 2rem 0;
  }
`

export const Link = styled.a`
  display: flex;
  justify-content: center;
  width: 50%;
  padding: 1rem;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${props => props.theme.colors.primary.main};
  color: #fff;
  border-radius: 4px;
  margin: 1rem auto;

  @media screen and (min-width: ${props => props.theme.media.medium}) {
    margin: 2rem auto;
    width: 30%;
    transition: 0.25s;

    &:hover {
      background-color: #fff;
      color: ${props => props.theme.colors.primary.main};
      box-shadow: 0px 0px 10px -4px;
    }
  }
`
