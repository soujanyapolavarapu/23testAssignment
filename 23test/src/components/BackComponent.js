import React from "react";
import { useHistory } from "react-router-dom";

const BackButtonComponent = () => {
  let history = useHistory();

  const redirectToLandingPage = () => {
    history.push("/");
  };
  return (
    <div>
      <i
        className="fas fa-arrow-left"
        onClick={redirectToLandingPage}
        style={{ fontSize: "25px", marginTop: "20px", cursor: "pointer" }}
      ></i>
    </div>
  );
};
export default BackButtonComponent;
