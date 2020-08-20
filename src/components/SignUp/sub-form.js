import React, { useState } from "react"
import styled from "styled-components"

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
`
// FORM STYLES

const HeroTextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    line-height: 2.2rem;
    text-align: center;

    strong {
      display: block;
      position: relative;
      padding-top: 0.5rem;
      text-decoration: underline;
    }
  }
  p {
    text-align: center;
    padding: 1rem;
  }
`

const StatusMsg = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  font-weight: 600;
  font-size: var(--fontH3);
`
// INPUT STYLING

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media only screen and (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-between;
  }
  input {
    width: 90%;
    margin-bottom: 0.2rem;
    border: 1px solid var(--mainColor);
    color: var(--mainColor);
    padding: 0.6rem 0.8rem 0.2rem 0.4rem;
    @media only screen and (min-width: 1280px) {
      width: 45%;
    }
  }
`

const SbmtButton = styled.button`
  display: block;
  width: 90%;
  margin: 1rem auto 0rem auto;
  padding: 1rem 2rem;
  background-color: var(--mainColor);
  color: var(--textOnMain);
  font-size: var(--fontH3);
  font-weight: 600;
  letter-spacing: 0.1em;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: var(--textOnMain);
    color: var(--mainColor);
  }
  @media only screen and (min-width: 1280px) {
    width: 100%;
  }
`

const BtmMsgWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  text-align: center;
`

const SubscriptionForm = () => {
  const [status, setStatus] = useState(null)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")

  const newLocal = process.env.GATSBY_FORM_URL
  const FORM_URL = newLocal

  const handleSubmit = async e => {
    e.preventDefault()
    const data = new FormData(e.target)
    try {
      const response = await fetch(FORM_URL, {
        method: "post",
        body: data,
        headers: {
          accept: "application/json",
        },
      })
      setEmail("")
      const json = await response.json()
      if (json.status === "success") {
        setStatus("SUCCESS")
        return
      }
    } catch (err) {
      setStatus("ERROR")
      console.log(err)
    }
  }

  const handleEmailChange = event => {
    const { value } = event.target
    setEmail(value)
  }

  const handleNameChange = event => {
    const { value } = event.target
    setName(value)
  }

  return (
    <ContentWrapper>
      <HeroTextContainer>
        <h2>
          Dołącz do mojego
          <strong>NEWSLETTERA!</strong>
        </h2>
        <p>
          Bądź na bieżąco z nowościami na <strong>kanale YouTube</strong> i
          stronie
          <strong> Programistafrontend.pl</strong>. Dołącz do społeczności
          zapalonych front end web developerów.
        </p>
      </HeroTextContainer>
      <StatusMsg>
        {status === "SUCCESS" && <p>Proszę potwierdź swoją subskrybcję!</p>}
        {status === "ERROR" && (
          <p>Oops, Coś poszło nie tak! spróbuj raz jeszcze.</p>
        )}
      </StatusMsg>

      <form action={FORM_URL} method="post" onSubmit={handleSubmit}>
        <InputWrapper>
          <input
            type="text"
            aria-label="Twoje imię"
            //The name attribute should be the same as on you selected form.
            name="fields[first_name]"
            placeholder="Twoje imię"
            onChange={handleNameChange}
            value={name}
            required
          />

          <input
            type="email"
            aria-label="Twój email"
            //The name attribute should be the same as on you selected form.
            name="email_address"
            placeholder="Twój adres email"
            onChange={handleEmailChange}
            value={email}
            required
          />
        </InputWrapper>

        <SbmtButton type="submit">Zapisz mnie!</SbmtButton>
      </form>
      <BtmMsgWrapper>
        <p>Nie wysyłam spamu i możesz wypisać się w każdym momencie</p>
      </BtmMsgWrapper>
    </ContentWrapper>
  )
}

export default SubscriptionForm
