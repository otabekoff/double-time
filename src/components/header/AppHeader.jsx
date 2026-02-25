import React from 'react'
import "./header.css";

export default function AppHeader() {
  return (
    <header className="app-header">
      <div className="app-header__inner">
        <div className="app-header__logo">Logo</div>

        <nav className="app-header__nav">
          <a className="app-header__link" href="#">
            Home
          </a>
          <a className="app-header__link" href="#">
            Pricing
          </a>
          <a className="app-header__link" href="#">
            Futures 
          </a>
          <a className="app-header__link" href="#">
            Articles
          </a>
        </nav>
      </div>
    </header>
  );
}