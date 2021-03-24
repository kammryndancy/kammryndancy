import React, { Component } from "react";
import '../styles/header.css';
import logo from "../TinLion_head.svg";

class Header extends Component {
  render() {
    return (
      <header className="Header Header--top">
        <div className="Header-inner Header-inner--top" data-nc-group="top">
          <div data-nc-container="top-left">
            <a href="/" className="Header-branding" data-nc-element="branding" data-content-field="site-title">
              <img src={logo} alt="Kammryn Dancy" class="Header-branding-logo"/>
            </a>
          </div>
          <div data-nc-container="top-center"></div>
          <div data-nc-container="top-right">
            <nav className="Header-nav Header-nav--primary" data-nc-element="primary-nav" data-content-field="navigation">
              <div className="Header-nav-inner">
                <a href="/" className="Header-nav-item Header-nav-item--active">home</a>
                <a href="/testApi" className="Header-nav-item">tinlion</a>
                <a href="/testApi" className="Header-nav-item">work</a>
                <a href="/testApi" className="Header-nav-item">contact</a>
                <a href="/testApi" className="Header-nav-item">about</a>
              </div>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
