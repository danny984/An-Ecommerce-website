import React from "react";
import Logo from "../../assets/logo.png";
import {
  InboxIcon,
  LocationMarkerIcon,
  LoginIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />

      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} alt="" />
          <span>amazon</span>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact Us</span>
            <span className={css.pngLine}>
              <LocationMarkerIcon className={css.icon} />
              <span>Newjump avenue, Florida</span>
            </span>

            <span className={css.pngLine}>
              {" "}
              <InboxIcon className={css.icon} />
              <a href="Tel:223 252 2589">223 252 2589</a>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Account</span>
            <span className={css.pngLine}>
              <LoginIcon className={css.icon} />
              Sign In
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>
            <span className={css.pngLine}>
              <UsersIcon className={css.icon} />
              <a href="/about">
              <p>About us</p>
              </a>
            </span>
          </div>
        </div>
      </div>
      
<div className={css.copyRight}>
<span>Copyright@2023 by Amazon, Inc</span>
<span>All rights reserved.</span>
</div>
</div>
  );
};

export default Footer;
