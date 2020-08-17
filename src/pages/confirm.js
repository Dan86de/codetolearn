import React from "react"
import styled from "styled-components"

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const ConfirmPage = () => (
  <ContentWrapper>
    <h2>Jeszcze jedna rzecz...</h2>
    <p>
      Dziękuję ci za subskrybowanie mojego newslettera. Teraz musisz jedynie
      sprawdzić swoją skrzynkę i potwierdzić chęć otrzymywania moich wiadomości.
    </p>
  </ContentWrapper>
)

export default ConfirmPage
