import React from "react";

export default function Header() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top pt-3 pb-3"
        style={{ background: "linear-gradient(to bottom, #141e30, #243b55)" }}
      >
        <a className="navbar-brand mx-3 header-name text-white" href="#">
          Rajnish's Portfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ml-auto mx-3 links">
            <li className="nav-item active">
              <a className="nav-link text-white" href="/">
                About Me
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link text-white" href="/">
                Projects
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link text-white" href="/">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
