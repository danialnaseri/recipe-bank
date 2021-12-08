import React, { useState } from "react"
import { Link } from "gatsby"
import { FaAlignJustify } from "react-icons/fa"
import logo from "../assets/images/logoImg.jpg"
import logoText from "../assets/images/RecipeBank.svg"
import { StaticImage } from "gatsby-plugin-image"

const Navbar = () => {
  const [show, setShow] = useState(false)

  const navItems = [
    {
      label: "home",
      to: "/",
    },
    {
      label: "recipes",
      to: "/recipes",
    },
    {
      label: "tags",
      to: "/tags",
    },
    {
      label: "about",
      to: "/about",
    },
  ]

  const navLinks = navItems.map((item, index) => {
    const { label, to } = item

    return (
      <Link
        to={to}
        key={index}
        className="nav-link"
        activeClassName="active-link"
        onClick={() => setShow(false)}
      >
        {label}
      </Link>
    )
  })

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" className="d-flex">
            {/* <StaticImage
              src="../assets/images/logoImg.jpg"
              className="custom-logo"
              placeholder="blurred"
            /> */}
            <img src={logo} alt="Logo" className="custom-logo" />
            {/* <span className="btn">RecipeBank</span> */}
            <img src={logoText} alt="logo text" className="logo-text" />
          </Link>
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <FaAlignJustify />
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          {navLinks}
          <div className="nav-link contact-link">
            <Link to="/contact" className="btn" onClick={() => setShow(false)}>
              contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
