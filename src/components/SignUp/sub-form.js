//In src/components/sub-form.component.js
import React, { useState } from "react"

const SubscriptionForm = () => {
  const [status, setStatus] = useState(null)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")

  const FORM_URL = `https://app.convertkit.com/forms/1343076/subscriptions`

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
    <div className="sub">
      <h2>Dołącz do mojego newslettera!</h2>
      <p>
        Jeżeli myślisz, że treści umieszczane tutaj są dla Ciebie interesujące
        zapisz się na newsletter by otrzymywać informacje od razu na Twoją
        skrzynkę pocztową.
      </p>

      {status === "SUCCESS" && <p>Proszę potwierdź swoją subskrybcję!</p>}
      {status === "ERROR" && (
        <p>Oops, Coś poszło nie tak! spróbuj raz jeszcze.</p>
      )}

      <form
        className="sub__form"
        action={FORM_URL}
        method="post"
        onSubmit={handleSubmit}
      >
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

        <button type="submit">Zapisz mnie!</button>
      </form>

      <p className="sub__tag">
        Nie wysyłam spamu i możesz wypisać się w każdym momencie
      </p>
    </div>
  )
}

export default SubscriptionForm
