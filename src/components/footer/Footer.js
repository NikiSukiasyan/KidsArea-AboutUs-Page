import "./Footer.css";
import Rights from "../../images/copyright-square.svg";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="rights-container">
          <img src={Rights} />
          <p>All Rights Reserved</p>
        </div>
        <div className="navigation">
          <nav>
            <ul>
              <li>ჩვენს შესახებ</li>
              <li>კონტაქტი</li>
              <li>cookie policy</li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Footer;
