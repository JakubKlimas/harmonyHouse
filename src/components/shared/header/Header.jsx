import { Link } from "react-router-dom";

import "./header.css";

export const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={`contacts/1`}>HOME</Link>
        </li>
        <li>
          <Link to={`contacts/2`}>TRZY KROKI</Link>
        </li>
        <li>
          <Link to={`contacts/2`}>BUDOWA</Link>
        </li>
        <li>
          <Link to={`contacts/2`}>PROJEKTY</Link>
        </li>
        <li>
          <Link to={`o-nas`}>O HARMONY HOUSE</Link>
        </li>
        <li>
          <Link to={`finansowanie`}>FINANSOWANIE</Link>
        </li>
        <li>
          <Link to={`contacts/2`}>KONTAKT</Link>
        </li>
        <li className="btn__cta">
          <Link className="cta_link" to={`contacts/2`}>
            WYCENA ▶
          </Link>
        </li>
      </ul>
    </nav>
  );
};
