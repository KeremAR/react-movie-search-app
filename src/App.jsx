import React from "react"
import SearchMovies from "./SearchMovie"
import Footer from "./Footer"
function App() {

  return (
    <div className="container">
      <div className="content">
      <h1 className="title">React Movie Search</h1>
      <SearchMovies />
      </div>
      <Footer />
      </div>
  )
}

export default App
