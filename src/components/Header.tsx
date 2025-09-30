import { useState } from "react";

interface Language {
  language_name: string;
  language_code: string;
}

interface HeaderProps {
  action: string; // Prop to determine if ordering has started
  languages: Language[];
}

function Header({ action, languages }: HeaderProps) {
  let [languageIndex, setLanguage] = useState(0);
  return (
    <>
      <div className="container-fluid background-red header">
        <div className="row align-items-center">
          <div className="col-auto header-side">
            <div className="dropdown">
              <button
                className="btn dropdown-toggle text-white"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {languages[languageIndex]?.language_name}
              </button>
              <ul className="dropdown-menu">
                {languages.map(
                  (item, index) =>
                    languageIndex !== index && (
                      <li key={item.language_code}>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={() => setLanguage(index)}
                        >
                          {item.language_name}
                        </a>
                      </li>
                    )
                )}
              </ul>
            </div>
          </div>

          <div className="col text-center">
            <div id="logo">
              <a href="#">
                <img
                  src="./logo.svg"
                  className="logo-svg m-0 p-0"
                  alt="Jollibee Logo"
                ></img>
              </a>
            </div>
          </div>

          <div className="col-auto d-flex justify-content-center align-items-center header-side">
            {action == "ordering" ? (
              <a
                href="#"
                className="d-flex justify-content-center align-items-center text-decoration-none"
              >
                <img src="./cart.png" className="cart-png" alt="Cart" />
                <p className="mb-3 cart-num text-light p-1 ">0</p>
              </a>
            ) : (
              <div className="cart-png m-1"></div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
