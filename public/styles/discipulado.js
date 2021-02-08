import styled from 'styled-components'

export const Banner = styled.section`
  position: relative;
  height: 70vh;
  margin-top: -8rem;
  z-index: -1;
`

export const Title = styled.h3`
  font-size: 1.5rem;
  margin-top: 2rem;
`

export const Wrapper = styled.section`
  width: 90%;
  margin: 0 auto;

  h1 {
    font-size: 1.5rem;
    margin-top: 1.5rem;
    text-align: center;
  }

  @media screen and (min-width: ${props => props.theme.media.medium}) {
    width: 70%;
  }
`

export const Content = styled.article`
  text-align: justify;

  p {
    margin-top: 1rem;
    line-height: 1.5rem;
  }

  table {
    border: 1px solid;
    margin: 0 auto;
    text-align: center;
    font-size: 0.7rem;
    border-radius: 4px;

    @media screen and (min-width: ${props => props.theme.media.medium}) {
      width: 70%;
      font-size: 1rem;
    }
  }

  tr {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export const Grid = styled.section`
  display: grid;
  grid-template-columns: 8rem 1fr;
  align-items: center;

  .grid__image {
    background: url('../images/sprite.png') no-repeat;
    height: 10rem;
    width: 7rem;
    background-size: cover;
    justify-self: center;
  }

  .grid__image--2 {
    background-position-x: -110px;
  }
  .grid__image--3 {
    background-position-x: -220px;
  }
  .grid__image--4 {
    background-position-x: -323px;
  }
  .grid__image--5 {
    background-position-x: -430px;
  }
`

export const Farewell = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 1.3rem;
  margin: 2rem 0;
`
