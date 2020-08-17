import React from "react"
import styled from "styled-components"

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const ThanksPage = () => (
  <ContentWrapper>
    <h2>Dziękuję ci za zubskrybowanie mojego bloga.</h2>
    <p>
      Potwierdziłeś chęć otrzymywania moich wiadomości. Możesz spodziewać się
      nowych wiadomości jak tylko umieszczę nowy content na stronie.
    </p>
  </ContentWrapper>
)

export default ThanksPage
