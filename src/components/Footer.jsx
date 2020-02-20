import React from "react";
import { Menu, Header } from "semantic-ui-react";

const footerStyle = {
  backgroundColor: "#282c34",
  minHeight: "12vh",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  margin: "1rem 0",
  textAlign: "center"
};

const copyStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "1rem 0"
};

const Footer = props => {
  return (
    <div>
      <Menu style={footerStyle}>
        <Menu.Item>
          <Header as="h1" color="olive" style={footerStyle}>
            {props.footer}
          </Header>
        </Menu.Item>
      </Menu>
      <h1 style={copyStyle}>&copy; dionys1s {new Date().getFullYear()}</h1>
    </div>
  );
};

export default Footer;
