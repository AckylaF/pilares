/* eslint-disable no-nested-ternary */
import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import ActionButton from './Button'

const FormContainer = styled.form`
  margin-top: 2rem;

  div {
    display: flex;
    flex-direction: column;
    width: 50%;

    @media screen and (min-width: ${props => props.theme.media.medium}) {
      width: 20%;
    }

    label {
      font-size: 1.1rem;
      font-weight: bold;
      margin: 2rem 0 0.4rem;
    }

    #email {
      padding: 0.5rem;
      font-size: 1rem;
      border: 1px solid #103c57;
      border-radius: 4px;
    }
  }

  #mentorship {
    margin: 0.5rem 0 1rem;
    padding: 0.5rem;
    font-size: 1.5rem;
    height: 10rem;
    width: 100%;
    border: 1px solid #103c57;
    border-radius: 4px;
    resize: vertical;
  }
`

const Message = styled.span`
  font-size: 0.8rem;
  margin-left: 0.5rem;
  color: ${props => (props.success ? '#1fa347' : '#foo')};
`

export default function FeedbackForm({ id }) {
  const [email, setEmail] = useState('')
  const [mentorship, setMentorship] = useState('')
  const [message, setMessage] = useState('')

  const sendEmail = () => {
    axios
      .post('/api/send', {
        email,
        feedbackDay: id,
        mentorship
      })
      .then(response => {
        setMessage(response.data)
      })
      .catch(err => {
        setMessage(err.message)
      })
  }

  const handleSubmit = e => {
    sendEmail()
    e.preventDefault()
    e.target.reset()
  }

  return (
    <FormContainer onSubmit={e => handleSubmit(e)}>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={e => setEmail(e.target.value)}
          placeholder="Escreva seu e-mail"
          required
        />
      </div>
      <textarea
        placeholder="Escreva aqui as suas dúvidas ou comentários sobre esse tópico"
        name="mentorship"
        id="mentorship"
        onChange={e => setMentorship(e.target.value)}
        required
      />
      <ActionButton text="Enviar" type="submit" />
      {message === 'Success' ? (
        <Message success>E-mail enviado com sucesso</Message>
      ) : message === 'Failure' ? (
        <Message failure>Falha no envio do e-mail</Message>
      ) : null}
    </FormContainer>
  )
}

export async function getStaticProps(context) {
  return {
    props: { context }
  }
}
