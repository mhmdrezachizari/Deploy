import React from "react";
import Link from "next/link";
import Styles from './nabar.module.css'
const Footer = () => (
  <footer className="page-footer font-small blue pt-4 bg-dark mt-4">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <hr className="clearfix w-100 d-md-none pb-0" />
        <div className="col-md-6 mb-md-0 mb-3">
          <ul className="list-unstyled">
            <li>
              <Link href='/Login'  className={`${Styles.linkbav} nav-link`}>SingUp</Link>
            </li>
            <li>
              <Link href="/product"  className={`${Styles.linkbav} nav-link`}>Products</Link>
            </li>
            <li>
              <Link href="/sale"  className={`${Styles.linkbav} nav-link`}>increadible</Link>
            </li>
            <li>
              <Link href="/about"  className={`${Styles.linkbav} nav-link`}>About</Link>
            </li>
          </ul>
        </div>

        <div className="col-md-6 mb-md-0 mb-3">
          <ul className="list-unstyled">
          <li>
              <Link href='/Login'  className={`${Styles.linkbav} nav-link`}>SingUp</Link>
            </li>
            <li>
              <Link href="/product"  className={`${Styles.linkbav} nav-link`}>Products</Link>
            </li>
            <li>
              <Link href="/sale"  className={`${Styles.linkbav} nav-link`}>increadible</Link>
            </li>
            <li>
              <Link href="/about"  className={`${Styles.linkbav} nav-link`}>About</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3 text-primary">
      © 2024 made by :
      <Link href='/about' className={`${Styles.navbarbrand} nav-link navbar-brand text-primary`}>mhmdrezachizari</Link>    </div>
  </footer>
);
export default Footer;
