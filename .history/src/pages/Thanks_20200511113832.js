import React from "react"
import Layout from "../layouts/index"

class Thanks extends React.Component {
  render() {
    return (
      <Layout>
        <h1>Dziękuję ci za zubskrybowanie mojego bloga.</h1>
        <p>
          Potwierdziłeś chęć otrzymywania moich wiadomości. Możesz spodziewać
          się nowych wiadomości jak tylko umieszczę nowy content na stronie.
        </p>
      </Layout>
    )
  }
}

export default Thanks
