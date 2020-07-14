import React from "react"
import styled from "styled-components"

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const AboutPage = props => (
  <ContentWrapper>
    <h1>O mnie</h1>
    <p>
      Cześć jestem Daniel jestem 34 letnim samoukiem Front End Developerem. W
      marcu 2018 roku poczułem, że nie jestem naprawde szczęśliwy, pracując jako
      inżynier dla dużej marki samochodowej w USA. Zdecydowałem więc, że zrobię
      wszystko by zrealizować swoją pasję zostania programistą frontendowym.
    </p>
    <br />
    <p>
      Tak się składa, że decyzja ta zbiegła się z narodzinami mojego syna.
      Szybko okazało się, że pracując na etacie i poświęcając czas rodzinie nie
      zostaje go wiele, by móc uczyć się programowania. Zacząłem wstawać o 5
      rano i poświęcać 3 godziny dziennie na naukę programowania.
    </p>
    <br />
    <p>
      Na początku 2020 roku pomyślałem, że dobrym pomysłem będzie dokumentować
      drogę przez jaką przechodzę, by móc inspirować innych do spełniania swoich
      marzeń oraz rozliczyć się przed samym sobą z postępu.
    </p>
    <br />
    <p>
      Uczę się głównie z kursów online na platformach takich jak Udemy czy
      FreeCodeCamp. Nieustannie wychodzę ze swojej strefy komfortu by dowiedzieć
      się wiecej i polepszać swoje umiejętności koderskie. Czytaj, inspiruj się
      i spełniaj swoje marzenia!
    </p>
  </ContentWrapper>
)

export default AboutPage
