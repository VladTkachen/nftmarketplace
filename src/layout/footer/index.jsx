import "./style.css";
import Channels from "../channel";
const footer = () => {
  return (
    <>
      <br />

      <div className="footer-flex">
        <div className="master-intro">
          <img src="./logo.png" alt="" className="bottom_logo" />
          <p className="logo-for-color">
            is a collection of 21,000 Packaged Action Figure NFTs <br /> –
            unique digital collectables etched and immutable on <br /> the WAX
            Blockchain.
          </p>
          <p className="logo-for-email">business@email.com</p>
        </div>
        <div className="shop-collection">
          <p>Shop</p>
          <p>Collection</p>
          <p>Merchandise</p>
        </div>
        <div className="artist-story">
          <p>The Artist</p>
          <p>Stroy/Love</p>
        </div>
        <div className="roadmap-faq">
          <p>Roadmap</p>
          <p>FAQ</p>
        </div>
        <div className="terms-condition">
          <p style={{ color: "white" }}>
            Terms &<br />
            Conditions
          </p>
        </div>
        <div className="got-to-know">
          <h3 className="got-to-know-font">Get to know MOTBTC</h3>
          <input type="text" placeholder="Email" className="input-custom" />
          <br />
          <br />
          <div id="subcribe">
            <button className="subcribe">Subcribe</button>
          </div>
          <Channels style={{ marginLeft: "-50px" }} />
        </div>
      </div>
        <div className="copyright_flex">
          <div>Copyright © 2022-2024 MOTBTC Unlimited LLC</div>
        </div>
    </>
  );
};
export default footer;
