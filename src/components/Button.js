import React from 'react'
import styled, { css } from 'styled-components'

const Button = styled.button(
  ({ theme: { spacing, colors } }) => css`
    cursor: pointer;
    width: ${spacing(10)};
    height: ${spacing(4)};
    border-radius: 50px;
    color: ${colors.text.inverse};
    font-weight: bold;
    background-color: ${colors.primary.main};
    transition: 0.25s;

    &:hover {
      background-color: ${colors.text.inverse};
      color: ${colors.primary.main};
      border: 1px solid;
    }
  `
)

export default function ActionButton({ text, fn, type }) {
  return (
    <Button onClick={fn} type={type}>
      {text}
    </Button>
  )
}
