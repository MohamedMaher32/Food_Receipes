import { Link, NavLink } from "react-router-dom"
import Logo from "../../Image/logo.png"
import { useState } from "react"
export default function Navbar() {
  let [navbar, setNavbar] = useState(false)
  let changeNavbarBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 36) {
      setNavbar(true)
    }
    else {
      setNavbar(false)
    }
  }
  window.addEventListener("scroll", changeNavbarBackground)
  return (
    <>
      <nav className={navbar ? "navbar navbar-expand-lg navbarStyle py-3 fixed-top shadow" : "navbar navbar-expand-lg bg-white py-3 fixed-top shadow"}>
        <div className="container">
          <Link to='/' className="navbar-brand" ><img src={Logo} alt="logo" className="w-100" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to='/' className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/pizza' className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Pizza</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/pasta' className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Pasta</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/dessert' className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Deesert</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/contact' className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}