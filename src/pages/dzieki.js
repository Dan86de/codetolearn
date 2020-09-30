import React from "react"
import styled from "styled-components"

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
  h2 {
    line-height: 1.2em;
  }
  span {
    font-weight: 700;
  }
`

const AboutPage = props => (
  <ContentWrapper>
    <h2>Dzięki za zapisanie się na newsletter!</h2>
    <p>
      Newsletter traktuję jako bardziej prywatna forma kontaktu. Możesz
      spokojnie pisać na email <span> daniel@programistafrontend.pl</span>.
      Postaram Ci się odpowiedzieć na wszystkie Twoje pytania i wątpliwości.
      Chcę pomagać innym, którzy tak jak ja marzą o tym, by zostać programistami
      i pracować w branży IT.
    </p>
    <br />
    <p>
      Jest to możliwe, niezależnie od tego gdzie się dzisiaj znajdujesz.
      Potrzeba tylko samozaparcia i cierpliwości. Przy odpowiednio dobranych
      metodach nauki i jasno określonej drodze też zostaniesz programistą i
      spełnisz swoje marzenia! Jeżeli mogę Ci jakoś pomóc pisz śmiało!
      Powodzenia!
    </p>
  </ContentWrapper>
)

export default AboutPage
