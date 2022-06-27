import Card from "../components/shared/Card"
import { Link } from "react-router-dom";

function AboutPage() {

  return (
    <Card>
      <div className="about">
        <h2>AboutPage</h2>
        <p> This is the about page </p>

        <p>Version 1.0</p>

        <Link to="/">Back to home</Link>
      </div>
    </Card>
  );
}

export default AboutPage