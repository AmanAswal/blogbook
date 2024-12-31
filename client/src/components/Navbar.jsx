import { Link } from "react-router-dom"

// import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <nav className="flex justify-center items-center gap-10 font-bold text-lg shad ow-md py-3">
      <Link to="/">Home</Link>
      <Link to="/create">Create blog</Link>
    </nav>
  )
}

export default Navbar