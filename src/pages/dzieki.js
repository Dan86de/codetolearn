import React from "react"
import styled from "styled-components"

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
  text-align: center;
  h3 {
    margin: 0;
    padding: 0;
  }
  span {
    font-weight: 700;
    color: #2c4d99;
  }
  .alert {
    color: red;
  }
`

const DziekiPage = props => (
  <ContentWrapper>
    <h3>
      Dzięki to <span>prawie</span> wszystko!
    </h3>
    <br />
    <h3 className="alert">!!! WAŻNE !!!</h3>
    <br />
    <p>Za chwilę otrzymasz e-mail z prośbą o potwierdzenie podanego adresu.</p>
    <p>
      Jeśli wiadomość nie przyszła to sprawdź folder <span>SPAM</span> i
      <span> OFERTY</span>.
      <br />
      Adres: newsletter@programistafrontend.pl.
      <br />
      <span className="alert">Musisz kliknąć w przycisk z tej wiadomości!</span>
      <br />
      Jeśli tego nie zrobisz: nie będę mógł Ci niczego wysyłać i ominie Cię masa
      ciekawostek ze świata frontendu!
      <br />
      Do przeczytania wkrótce!
      <br />
      Daniel Noworyta z kanału Programistafrontend
    </p>
  </ContentWrapper>
)

export default DziekiPage
