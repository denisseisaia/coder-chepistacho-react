import { CartWidget } from "./CartWidget"
import { NavBar } from "./NavBar"

export const Header = () => {
  return (
    <header className="header">
        <h1>Che Pistacho</h1>
        <NavBar />
        <CartWidget />
    </header>
  )
}
