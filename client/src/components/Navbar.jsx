import { Link } from "react-router-dom"
import ThemeToggle from "./ThemeToggle"

// import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <nav className="flex justify-end items-center pr-10 gap-10 font-bold text-lg shad ow-md py-3 shadow-md mb-6 shadow-blue-300 dark:bg-slate-800">
      <Link to="/" className="dark:text-white" >Home</Link>
      <Link to="/create" className="dark:text-white">Create blog</Link>
      <ThemeToggle />
    </nav>
  )
}

export default Navbar