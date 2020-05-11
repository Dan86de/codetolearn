import React from "react"
import styled from "styled-components"

const SignUpWrapper = styled.div`
  width: 100%;
  max-width: 1536px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

class Signup extends React.Component {
  render() {
    return (
      <SignUpWrapper>
        <form
          action="https://app.convertkit.com/forms/1343076/subscriptions"
          method="post"
          data-sv-form="1343076"
          data-uid="b63667beec"
          data-version="5"
          min-width="400 500 600 700 800"
          style={{ backgroundColor: "rgb(249, 250, 251)", borderRadius: "4px" }}
        >
          <div style={{ opacity: 0.2 }}></div>
          <div data-style="minimal">
            <div
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

            <ul data-element="errors" data-group="alert"></ul>
            <div data-element="fields" data-stacked="false">
              <div>
                <input
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
                style={{
                  color: "rgb(255, 255, 255)",
                  backgroundColor: "rgb(22, 119, 190)",
                  borderRadius: "4px",
                  fontWeight: 400,
                }}
              >
                <div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <span>Zapisz mnie</span>
              </button>
            </div>

            <div
              data-element="guarantee"
              style={{
                color: "rgb(77, 77, 77)",
                fontSize: "13px",
                fontWeight: 400,
              }}
            >
              <p>Nie wysyłam spamu. Możesz wypisać się w każdej chwili.</p>
            </div>
          </div>
        </form>
      </SignUpWrapper>
    )
  }
}

export default Signup
