/* eslint-disable no-nested-ternary */
import React, { useState } from 'react'
import axios from 'axios'
import styled, { css } from 'styled-components'

import Button from './Button'

const Container = styled.form(
  ({ theme: { media } }) => css`
    margin: 0 auto;

    label {
      font-size: 1.1rem;
      font-weight: bold;
      margin-bottom: 0.4rem;
    }

    input,
    select {
      font-size: 1rem;
      padding: 0.5rem;
      border-radius: 3px;
      margin-bottom: 1.5rem;
    }

    @media screen and (min-width: ${media.medium}) {
      width: 80%;
    }
  `
)

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const InputGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(3rem, 1fr));
  align-items: end;
  grid-gap: 2%;
`

const Message = styled.span`
  font-size: 0.8rem;
  margin-left: 0.5rem;
  color: ${props => (props.success ? '#1fa347' : '#foo')};
`

export default function Form() {
  const [name, setName] = useState('')
  const [birth, setBirth] = useState('')
  const [gender, setGender] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const sendEmail = () => {
    axios
      .post('/api/send', {
        name,
        birth,
        gender,
        address,
        email,
        phone
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
    <Container onSubmit={e => handleSubmit(e)} id="contact">
      <InputContainer>
        <label htmlFor="name" id="name__label">
          Nome
        </label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={e => setName(e.target.value)}
          placeholder="Escreva seu nome"
          required="required"
        />
      </InputContainer>

      <InputGroup>
        <InputContainer>
          <label htmlFor="birth" id="birth__label">
            Data de nascimento
          </label>
          <input
            type="date"
            name="birth"
            id="birth"
            onChange={e => setBirth(e.target.value)}
            placeholder="Idade"
            required="required"
          />
        </InputContainer>

        <InputContainer>
          <label htmlFor="gender" id="gender__label">
            Sexo
          </label>
          <select
            name="gender"
            id="gender"
            onChange={e => setGender(e.target.value)}
            defaultValue="default"
            required
          >
            <option value="default" disabled>
              Selecione
            </option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
          </select>
        </InputContainer>
      </InputGroup>

      <InputContainer>
        <label htmlFor="address" id="address__label">
          Residência
        </label>
        <input
          type="text"
          name="address"
          id="address"
          onChange={e => setAddress(e.target.value)}
          placeholder="Cidade, estado e país apenas"
          required="required"
        />
      </InputContainer>

      <InputContainer>
        <label htmlFor="email" id="email__label">
          E-mail
        </label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={e => setEmail(e.target.value)}
          placeholder="Escreva seu e-mail"
          required="required"
        />
      </InputContainer>

      <InputContainer>
        <label htmlFor="phone" id="phone__label">
          Whatsapp (opcional)
        </label>
        <input
          type="number"
          name="phone"
          id="phone"
          onChange={e => setPhone(e.target.value)}
          placeholder="(xx) 9xxxx-xxxx"
        />
      </InputContainer>

      <div>
        <Button type="submit" text="Enviar" />
        {message === 'Success' ? (
          <Message success>E-mail enviado com sucesso</Message>
        ) : message === 'Failure' ? (
          <Message failure>Falha no envio do e-mail</Message>
        ) : null}
      </div>
    </Container>
  )
}
