import { Link } from "react-router-dom";
import Button from "./ButtonComponent";
import "./AutoComponent.css";

const Landing = () => {
  return (
    <div className="landingPage">
      <h1 className="test">Test Assignment</h1>
      <div className="landingButtons">
        <Link to="/autocomplete">
          <Button onClick="Redirect" buttonName="AutoSearch" />
        </Link>
        <Link to="/counter">
          <Button onClick="Redirect" buttonName="Counter" />
        </Link>
      </div>
    </div>
  );
};
export default Landing;
