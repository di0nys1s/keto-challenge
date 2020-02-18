import React from "react";
import { Header } from "semantic-ui-react";

const headerStyle = {
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

const FormHeader = props => {
  return (
    <Header as="h1" color="olive" style={headerStyle}>
      {props.header}
    </Header>
  );
};

export default FormHeader;
