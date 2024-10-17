import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-14 h-10 rounded-lg items-center justify-center flex font-bold  shadow-md  text-xl">
            <p className="orange-gradient_text">Home</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-orange-700' : 'text-white'}>
                About
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-orange-700' : 'text-white'}>
                Projects
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar
