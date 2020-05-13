import React from "react"
import styled from "styled-components"

const SignUpWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SignUpForm = styled.form`
  border: 2px solid black;
  padding: 2rem 15rem;
  border-top: 13px solid black;
`

const FormHeader = styled.div`
  color: var(--mainColor);
  text-align: center;
  margin: 0;
  margin-bottom: 1rem;
  h1 {
    margin: 0;
    padding: 0;
  }
  p {
  }
`

const FormSubheader = styled.div`
  color: var(--mainColor);
  font-size: var(--fontH5);
  text-align: center;
  margin: 0;
  padding: 0;
`

const FormInputsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`

const SingleInputWrapper = styled.div`
  width: 50%;
`

const FormInput = styled.input`
  color: var(--mainColor);
  border: 1px solid black;
  font-weight: 400;
  font-size: var(--fontBody);
  font-family: "Varela Round";
  padding: 0.5rem 1rem 0.5rem 0.5rem;
  margin: 0 1rem;
  width: 45%;
  &:focus {
    outline: none;
  }
`

const FormSbmtBtn = styled.button`
  margin: 0 auto;
  margin-top: 2rem;
  display: block;
  color: white;
  background-color: var(--mainColor);
  padding: 0.8rem 9rem;
  border: 2px solid black;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    color: black;
    background-color: white;
  }
  span {
    font-family: "Montserrat";
    font-weight: 700;
    font-size: var(--fontH2);
    letter-spacing: 0.2rem;
  }
`

const SignUpGuaranteeWrapper = styled.div`
  margin: 1rem auto;
  color: inherit;
  font-size: var(--fontBody);
  font-weight: 400;
  text-align: center;
`

class Signup extends React.Component {
  render() {
    return (
      <SignUpWrapper>
        <h1>Zostańmy w kontakcie!</h1>
        <SignUpForm
          action="https://app.convertkit.com/forms/1343076/subscriptions"
          method="post"
          data-sv-form="1343076"
          data-uid="b63667beec"
          data-version="5"
          data-options="{settings:{after_subscribe:{action:message,success_message:Sukces! Teraz sprawdź swój email i potwierdź subskrybcję.,redirect_url:https://codetolearn.pl/confirm},analytics:{google:null,facebook:null,segment:null,pinterest:null},modal:{trigger:timer,scroll_percentage:null,timer:5,devices:all,show_once_every:15},powered_by:{show:true,url:https://codetolearn.pl;utm_content=form},recaptcha:{enabled:false},return_visitor:{action:show,custom_content:},slide_in:{display_in:bottom_right,trigger:timer,scroll_percentage:null,timer:5,devices:all,show_once_every:15},sticky_bar:{display_in:top,trigger:timer,scroll_percentage:null,timer:5,devices:all,show_once_every:15}},version:5}"
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
                <strong> sprawdzone sposoby nauki front-endu</strong> prosto na
                Twój email.
              </p>
            </FormSubheader>

            <ul data-element="errors" data-group="alert"></ul>
            <div data-element="fields" data-stacked="false">
              <FormInputsWrapper>
                <SingleInputWrapper>
                  <label htmlFor="name">Twoje imię:</label>
                  <FormInput
                    id="name"
                    name="fields[first_name]"
                    placeholder="Twoje imię"
                    required=""
                    type="text"
                  />
                </SingleInputWrapper>
                <SingleInputWrapper>
                  <label htmlFor="email">Twój email:</label>
                  <FormInput
                    id="email"
                    name="email_address"
                    placeholder="Twój adres email"
                    required=""
                    type="email"
                  />
                </SingleInputWrapper>
              </FormInputsWrapper>
              <FormSbmtBtn data-element="submit">
                <span>Subskrybuj</span>
              </FormSbmtBtn>
            </div>

            <SignUpGuaranteeWrapper data-element="guarantee">
              <p>Nie wysyłam spamu. Możesz wypisać się w każdej chwili.</p>
            </SignUpGuaranteeWrapper>
          </div>
        </SignUpForm>
      </SignUpWrapper>
    )
  }
}

export default Signup
