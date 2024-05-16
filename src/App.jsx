import { ItemListConteiner } from "./components/ItemListConteiner"
import { Header } from "./components/header/Header"
import "./css/main.css"


function App() {
  const productos  = "Proximamente aqui veras todos los productos"
  
  return (
    <>
      <Header />
      <ItemListConteiner mensaje = {productos} />
    </>
  )
}

export default App
