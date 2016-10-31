import React, { Component } from 'react';
import { Link } from 'react-router';

import Logo from '../Logo';

class Sidebar extends Component {
  render() {
    return (
      <div id="Sidebar">
        <div className="w-15-l h-100 ph1 pv4 fixed br b--black-10 fl dib-l dn">
          <Link to="/" className="dim w4 db center">
            <Logo />
          </Link>
          <ul className="list mt4">
            <Link to="/projects" className="link">
              <li className="black forward pv3">Projects</li>
            </Link>
            <Link to="/about" className="link">
              <li className="black forward pv3">About</li>
            </Link>
            <Link to="/contact" className="link black">
              <li className="forward pv3">Contact</li>
            </Link>
            <Link to="/sponsor" className="link">
              <li className="black forward pv3">Sponsor</li>
            </Link>
          </ul>
          <ul className="list mt2">
            <Link to="/newsletter" className="link">
              <li className="forward pv3 black-50">Newsletter</li>
            </Link>
            <Link to="/" className="link">
              <li className="forward pv3 black-50">Wallpapers</li>
            </Link>
          </ul>
          <div id="Sponsor" className="w-90 mb3 db pl3 center bottom-0 absolute">
            <span className="f6 i black-20">Sponsored by</span>
            <div className="bg-black-05 br2 mt2 pa4">
              <span className="tc">Squarespace</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;