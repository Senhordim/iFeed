import { JSX } from "react"
import { Post } from "./components/Post"

import './global.css'
import { Header } from "./components/Header"

function App() : JSX.Element {
  return (
    <>
      <Header />
      <Post title="Meu avião" content="apenas um avião" />
    </>

  )
}

export default App
