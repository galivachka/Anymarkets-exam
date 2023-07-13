import { SideBar } from "../export";
import { logoutLogo } from "../../assets/re-export";
import "./Header.scss";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="main-header">
        <header className="site-header">
          <div className="container">
            <div className="site-header__block">
              <div className="site-header__content-block">
                <h2>Products</h2>
                <div className="site-header__content">
                  <h3>Main</h3>
                  <h3>/</h3>
                  <h3>Products</h3>
                </div>
              </div>
              <button
                className="site-header__btn"
                onClick={() =>
                  setTimeout(() => {
                    navigate("/");
                  }, 100)
                }>
                
                Exit
              </button>
            </div>
          </div>
        </header>
        <SideBar />
      </div>
    </>
  );
};

export default Header;
