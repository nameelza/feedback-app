import Card from "./shared/Card";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>This is a react app to leave feedback about product or service</p>
        <p>Version: 1.0.0</p>
        <p>
            <a href="/">Back To Home</a>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
