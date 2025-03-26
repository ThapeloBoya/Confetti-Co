// src/components/CookieConsent.jsx
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookie_consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set("cookie_consent", "accepted", { expires: 365 });
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <p>
        We use cookies to improve your experience. By using this site, you agree
        to our use of cookies.
      </p>
      <div className="cookie-banner-buttons">
      <button onClick={acceptCookies}>Accept</button>
      <button onClick={acceptCookies}>Decline</button>
      </div>
      
    </div>
  );
};

export default CookieConsent;
