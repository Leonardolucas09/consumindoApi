import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../paginas/Login/Login.jsx"
import Home from "../paginas/Home/Home.js"

function Rotas(props) {
    return(
      <>
      <BrowserRouter>
        <Routes>
            <Route index element={<Login/>}/>
            <Route path={Home} element={<Home news={props.news} setNews={props.setNews}/>}/>
        </Routes>
      </BrowserRouter>
      </>  
    )
}

export default Rotas