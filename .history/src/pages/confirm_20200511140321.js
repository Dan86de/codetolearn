import React from "react"
import styled from "styled-components"

const ConfirmWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`

const ConfirmPage = () => (
  <>
    <ConfirmWrapper>
      <h1>Jeszcze jedna rzecz...</h1>
      <p>
        Dziękuję ci za subskrybowanie mojego newslettera. Teraz musisz jedynie
        sprawdzić swoją skrzynkę i potwierdzić chęć otrzymywania moich
        wiadomości.
      </p>
    </ConfirmWrapper>
  </>
)

export default ConfirmPage
