import { useNavigate } from "react-router-dom";
import { basket, maskLogo, profile, settings } from "../../assets/re-export";

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <aside className="aside">
        <div className="container">
          <div className="aside__block">
            <ul className="aside__list">
              <li className="aside__item">
                <img src={maskLogo} alt="mask logo!" />
              </li>
              <li className="aside__item" onClick={() => navigate("/home")}>
                <img src={settings} alt="settings logo!" />
              </li>
              <li className="aside__item">
                <img src={profile} alt="profile logo!" />
              </li>
              <li className="aside__item" onClick={() => navigate("/create")}>
                <img src={basket} alt="basket logo!" />
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
