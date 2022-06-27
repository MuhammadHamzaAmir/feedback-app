import Card from "../components/shared/Card"

function AboutPage() {

  return (
    <Card>
      <div className="about">
        <h2>AboutPage</h2>
        <p> This is the about page </p>

        <p>Version 1.0</p>

        <a href="/">Back to home</a>
      </div>
    </Card>
  );
}

export default AboutPage