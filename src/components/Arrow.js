import React from 'react'
import styled, { css } from 'styled-components'

const ArrowContainer = styled.div(
  ({ theme: { media } }) => css`
    align-self: center;
    margin-top: 0.5rem;
    height: 3rem;
    width: 3.5rem;

    @media screen and (min-width: ${media.medium}) {
      margin-top: 10%;
    }
  `
)

const Line = styled.span(
  ({ theme: { colors } }) => css`
    background-color: ${colors.secondary};
    display: block;
    height: 3px;
    border-radius: 4px;
    width: 100%;
    margin: 0.2rem;
    transition: 0.4s;
  `
)

const Line1 = styled(Line)`
  transform: rotate(45deg);
  transform-origin: 0.5rem 0.2rem;
  width: 50%;
`

const Line2 = styled(Line)`
  transform: rotate(-45deg);
  transform-origin: 1.4rem -1.3rem;
  width: 50%;
`

export default function Arrow() {
  return (
    <ArrowContainer>
      <Line1 />
      <Line2 />
    </ArrowContainer>
  )
}
