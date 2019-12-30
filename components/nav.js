import React from "react"
import Link from "next/link"
import Search from "./search"
import ShoppingButton from "./shopping-button"

const Logo = () => (
  <div className="logo">
    RH
    <style jsx>
      {`
        .logo {
          height: 100%;
          padding: 0rem 0.75rem;
          color: #ecf2bb;
          text-decoration: none;
          text-align: center;
          background-color: #83a603;
          display: flex;
          flex-direction: column;
          justify-content: center;
          font-size: 2.5rem;
          font-family: "Dancing Script", cursive;
        }
      `}
    </style>
  </div>
)

const Nav = () => (
  <nav>
    <Logo />
    <Search />
    <ShoppingButton count={1} />
    <style jsx>{`
      nav {
        height: 70px;
        width: 100%;
        background-color: #ecf2bb;
        z-index: 100;
        position: fixed;
        left: 0;
        top: 0;
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
        display: flex;
        align-items: center;
      }
    `}</style>
  </nav>
)

export default Nav
