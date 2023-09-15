import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../paginas/Login/Login.jsx"

function Rotas() {
    return(
      <>
      <BrowserRouter>
        <Routes>
            <Route index element={<Login/>}/>
        </Routes>
      </BrowserRouter>
      </>  
    )
}

export default Rotas