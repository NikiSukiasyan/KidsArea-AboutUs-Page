import "./Header.css";
import Logo from "../../images/Logo.svg";
function Header() {
  return (
    <>
      <div className="header-container">
        <img src={Logo} />
      </div>
    </>
  );
}

export default Header;
