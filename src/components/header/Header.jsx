import { Carrito } from "./Carrito"
import { NavBar } from "./NavBar"

export const Header = () => {
  return (
    <header className="header">
        <h1>Che Pistacho</h1>
        <NavBar />
        <Carrito />
    </header>
  )
}
