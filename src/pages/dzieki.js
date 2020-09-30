import React from "react"
import styled from "styled-components"

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
  span {
    font-weight: 700;
  }
`

const AboutPage = props => (
  <ContentWrapper>
    <h1>Dzięki za zapisanie się na newsletter!</h1>
    <p>
      Newsletter traktuję jako bardziej prywatna forma kontaktu. Możesz
      spokojnie pisać na email <span> daniel@programistafrontend.pl</span>.
      Postaram Ci się odpowiedzieć na wszystkie Twoje pytania i wątpliwości.
      Chcę pomagać innym, którzy tak jak ja marzą o tym by zostać programistami
      i pracować w branży IT. Jest to możliwe, niezależnie gdzie się dzisiaj
      znajdujesz. Potrzeba tylko samozaparcia i cierpliwości. Przy odpowiednio
      dobranych metodach nauki i jasno określonej drodze też zostaniesz
      programistą ! Powodzenia!
    </p>
  </ContentWrapper>
)

export default AboutPage
