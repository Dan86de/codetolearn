import React from "react"
import Layout from "../layouts/index"

class Confirm extends React.Component {
  render() {
    return (
      <Layout>
        <h1>Jeszcze jedna rzecz...</h1>
        <p>
          Dziękuję ci za subskrybowanie mojego newslettera. Teraz musisz jedynie
          sprawdzić swoją skrzynkę i potwierdzić chęć otrzymywania moich
          wiadomości.
        </p>
      </Layout>
    )
  }
}

export default Confirm
