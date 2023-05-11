import { Link, Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./Pages/home/Home"
export default function App(){
  return(
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
      </Routes>
    </div>
  )
}