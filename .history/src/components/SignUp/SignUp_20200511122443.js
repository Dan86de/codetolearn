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

const SignUpForm = styled.form`
  background-color: #d5d5d5;
  border: 2px solid black;
  padding: 1rem 2rem;
`

const FormHeader = styled.div`
  color: var(--mainColor);
  text-align: center;
`

const FormSubheader = styled.div`
  color: var(--mainColor);
  font-size: var(--fontH3);
  text-align: center;
`

const FormInput = styled.input`
  color: var(--mainColor);
  border-color: black;
  border-radius: "4px";
  font-weight: 400;
  font-size: var(--fontH4);
`

const FormSbmtBtn = styled.button`
  margin: 0 auto;
  display: block;
  color: white;
  background-color: var(--mainColor);
  padding: 1rem 3rem;
  border: none;
  span {
    font-family: "Montserrat";
    font-weight: 600;
    font-size: var(--fontH1);
    letter-spacing: 0.2rem;
  }
`

class Signup extends React.Component {
  render() {
    return (
      <SignUpWrapper>
        <SignUpForm
          action="https://app.convertkit.com/forms/1343076/subscriptions"
          method="post"
          data-sv-form="1343076"
          data-uid="b63667beec"
          data-version="5"
          data-options="{settings:{after_subscribe:{action:message,success_message:Sukces! Teraz sprawdź swój email i potwierdź subskrybcję.,redirect_url:https://codetolearn.pl/Confirm},analytics:{google:null,facebook:null,segment:null,pinterest:null},modal:{trigger:timer,scroll_percentage:null,timer:5,devices:all,show_once_every:15},powered_by:{show:true,url:https://codetolearn.pl;utm_content=form},recaptcha:{enabled:false},return_visitor:{action:show,custom_content:},slide_in:{display_in:bottom_right,trigger:timer,scroll_percentage:null,timer:5,devices:all,show_once_every:15},sticky_bar:{display_in:top,trigger:timer,scroll_percentage:null,timer:5,devices:all,show_once_every:15}},version:5}"
          min-width="400 500 600 700 800"
        >
          <div style={{ opacity: 0.2 }}></div>
          <div data-style="minimal">
            <FormHeader data-element="header">
              <h1>Zapisz się na newsletter CodeToLearn!</h1>
            </FormHeader>

            <FormSubheader data-element="subheader">
              <p>
                Informacje na temat <strong>nowości na blogu</strong> i
                sprawdzone <strong>sposoby nauki front-endu</strong> prosto na
                Twój email.
              </p>
            </FormSubheader>

            <ul data-element="errors" data-group="alert"></ul>
            <div data-element="fields" data-stacked="false">
              <div>
                <FormInput
                  name="email_address"
                  placeholder="Twój adres email"
                  required=""
                  type="email"
                />
              </div>
              <FormSbmtBtn data-element="submit">
                <span>Zapisz mnie</span>
              </FormSbmtBtn>
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
        </SignUpForm>
      </SignUpWrapper>
    )
  }
}

export default Signup
