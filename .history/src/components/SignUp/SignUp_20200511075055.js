import React from "react"

import "./Signup.css"

class Signup extends React.Component {
  render() {
    return (
      <form
        action="https://app.convertkit.com/forms/1343076/subscriptions"
        className="seva-form formkit-form"
        method="post"
        data-sv-form="1343076"
        data-uid="b63667beec"
        data-version="5"
        min-width="400 500 600 700 800"
        style={{ backgroundColor: "rgb(249, 250, 251)", borderRadius: "4px" }}
      >
        <div className="formkit-background" style={{ opacity: 0.2 }}></div>
        <div data-style="minimal">
          <div
            className="formkit-header"
            data-element="header"
            style={{
              color: "rgb(77, 77, 77)",
              fontSize: "27px",
              fontWeight: 700,
            }}
          >
            <h1>Zapisz się na newsletter CodeToLearn!</h1>
          </div>

          <div
            className="formkit-subheader"
            data-element="subheader"
            style={{ color: "rgb(104, 104, 104)", fontSize: "18px" }}
          >
            <p>
              <span style={{ color: "rgb(51, 51, 51)" }}>
                Informacje o <strong>nowych artykułach</strong> i{" "}
                <strong>sposobach na skuteczną naukę programowania</strong>{" "}
                prosto na Twój e-mail
              </span>
            </p>
          </div>

          <ul
            className="formkit-alert formkit-alert-error"
            data-element="errors"
            data-group="alert"
          ></ul>
          <div
            data-element="fields"
            data-stacked="false"
            className="seva-fields formkit-fields"
          >
            <div className="formkit-field">
              <input
                className="formkit-input"
                name="email_address"
                placeholder="Twój adres email"
                required=""
                type="email"
                style={{
                  color: "rgb(0, 0, 0)",
                  borderColor: "rgb(227, 227, 227)",
                  borderRadius: "4px",
                  fontWeight: 400,
                }}
              />
            </div>
            <button
              data-element="submit"
              className="formkit-submit formkit-submit"
              style="color: rgb(255, 255, 255); background-color: rgb(22, 119, 190); border-radius: 4px; font-weight: 400;"
            >
              <div className="formkit-spinner">
                <div></div>
                <div></div>
                <div></div>
              </div>
              <span>Zapisz mnie</span>
            </button>
          </div>

          <div
            className="formkit-guarantee"
            data-element="guarantee"
            style="color: rgb(77, 77, 77); font-size: 13px; font-weight: 400;"
          >
            <p>Nie wysyłam spamu. Możesz wypisać się w każdej chwili.</p>
          </div>
        </div>
      </form>
    )
  }
}

export default Signup
