import React from "react"
import styled from "styled-components"

const SignUpWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    line-height: 2.5rem;
  }
`

const SignUpForm = styled.form`
  border: 2px solid black;
  border-top: 13px solid black;
  width: 100%;
  max-width: 1000px;
  padding: 0 1em;
  margin-bottom: 4em;
`

const FormHeader = styled.div`
  color: var(--mainColor);
  text-align: center;
  line-height: 2.5rem;
  margin: 0;
`

const FormSubheader = styled.div`
  color: var(--mainColor);
  font-size: var(--fontH5);
  text-align: center;
  margin: 0 auto;
  line-height: 1rem;
`

const FormInputsWrapper = styled.div`
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  @media only screen and (min-width: 1280px) {
    flex-direction: row;
  }
`

const SingleInputWrapper = styled.div`
  margin: 0rem 1rem 0.5rem 1rem;
`

const InputLabel = styled.label`
  font-weight: 600;
`

const FormInput = styled.input`
  color: var(--mainColor);
  border: 1px solid black;
  font-weight: 400;
  font-size: var(--fontBody);
  font-family: "Varela Round";
  margin-top: 0.25em;
  padding: 0.5em;
  width: 100%;
  &:focus {
    outline: none;
  }
`

const FormSbmtBtn = styled.button`
  width: 100%;
  margin: 0 auto;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: var(--mainColor);
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
    font-size: var(--fontH3);
    letter-spacing: 0.2rem;
    line-height: 3rem;
  }
  @media only screen and (min-width: 1280px) {
    width: 60%;
  }
`

const SignUpGuaranteeWrapper = styled.div`
  margin: 1rem auto;
  padding: 0.25rem 1rem;
  color: inherit;
  font-size: var(--fontBody);
  font-weight: 400;
  text-align: center;
`

class Signup extends React.Component {
  render() {
    return (
      <SignUpWrapper className={"contentWrapper"}>
        <SignUpForm
          action="https://app.convertkit.com/forms/1343076/subscriptions"
          method="post"
          data-sv-form="1343076"
          data-uid="b63667beec"
          data-version="5"
          data-options="{settings:{after_subscribe:{action:message,success_message:Sukces! Teraz sprawdź swój email i potwierdź subskrybcję.,redirect_url:https://programistafrontend.pl/confirm},analytics:{google:null,facebook:null,segment:null,pinterest:null},modal:{trigger:timer,scroll_percentage:null,timer:5,devices:all,show_once_every:15},powered_by:{show:true,url:https://programistafrontend.pl;utm_content=form},recaptcha:{enabled:false},return_visitor:{action:show,custom_content:},slide_in:{display_in:bottom_right,trigger:timer,scroll_percentage:null,timer:5,devices:all,show_once_every:15},sticky_bar:{display_in:top,trigger:timer,scroll_percentage:null,timer:5,devices:all,show_once_every:15}},version:5}"
          min-width="400 500 600 700 800"
        >
          <div style={{ opacity: 0.2 }}></div>
          <div data-style="minimal">
            <FormHeader data-element="header">
              <h2>Zapisz się na newsletter!</h2>
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
                  <InputLabel htmlFor="name">Twoje imię:</InputLabel>
                  <FormInput
                    id="name"
                    name="fields[first_name]"
                    placeholder="Tutaj wpisz swoje imię"
                    required=""
                    type="text"
                  />
                </SingleInputWrapper>
                <SingleInputWrapper>
                  <InputLabel htmlFor="email">Twój email:</InputLabel>
                  <FormInput
                    id="email"
                    name="email_address"
                    placeholder="Tutaj wpisz swój adres email"
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
