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
  .alert {
    color: red;
  }
`

const DziekiBardzoPage = props => (
  <ContentWrapper>
    <h3>
      Dzięki to <span>WSZYSTKO!</span>
    </h3>
    <h3>Udało Ci się zapisać na listę!</h3>
    <p>
      Newsletter traktuję jako bardziej prywatna forma kontaktu. Możesz
      spokojnie pisać na email <span> daniel@programistafrontend.pl</span>.
      Postaram Ci się odpowiedzieć na wszystkie Twoje pytania i wątpliwości.
      Chcę pomagać innym, którzy tak jak ja marzą o tym, by zostać programistami
      i pracować w branży IT.
    </p>
    <br />
    <p>
      Ale mam jeszcze jedną UWAGĘ...
      <br />
      Pamiętaj, aby koniecznie dodać mój adres{" "}
      <span className="alert">newsletter@programistafrontend.pl</span> do
      kontaktów. Dzięki temu moje treści na pewno do Ciebie dotrą :).
    </p>
    <br />
    Pozdrawiam Cię serdecznie!
    <br />
    <p>Daniel Noworyta z kanału Programistafrontend</p>
  </ContentWrapper>
)

export default DziekiBardzoPage
