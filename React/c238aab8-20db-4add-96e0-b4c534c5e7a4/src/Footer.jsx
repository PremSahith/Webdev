import React from "react";
const today = new Date();
const year = today.getFullYear();
function Footer() {
  return (
    <footer>
      <p>CopyRight {year}</p>
    </footer>
  );
}

export default Footer;
