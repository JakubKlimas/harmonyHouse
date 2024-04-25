import "./footer.css";
import Logo from "../../../assets/logo.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_inner_container">
        <img src={Logo} alt="" />
        <div className="footer_company_data">
          <div className="footer_company_data_address">
            <p>Harmony House Sp. z o.o.</p>
            <p>Jana Pawła II 27, 00-867 Warszawa</p>
          </div>
          <div>
            <p>KRS 0000882XXX</p>
            <p>NIP 5272949XXX</p>
            <p>REGON 288161XXX</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
