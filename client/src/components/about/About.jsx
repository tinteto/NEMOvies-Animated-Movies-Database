//TODO: change images and text

export default function About() {
    return (
        <>
        <div className="about-section">
    <h1>Some text here</h1>
    <p>Some text here </p>
    <p>Some text here</p>
  </div>
  
  <div className="about-row">
    <div className="about-column">
      <div className="about-card">
        <img src="./../../assets/caju-gomes-QDq3YliZg48-unsplash.jpg" alt="teamMemberPhoto" />
        <div className="about-container">
          <h2>Radostina Dimitrova</h2>
          <p className="title">Founder</p>
          <p className="keenEye">Some text here</p>
          <p className="email">radostina@example.com</p>
        </div>
      </div>
    </div>
  
    <div className="about-column">
      <div className="about-card">
        <img src="./../../assets/s-l-M3VeZnz3cLQ-unsplash.jpg" alt="teamMemberPhoto" />
        <div className="about-container">
          <h2>Vania Angelova</h2>
          <p className="title">Designer</p>
          <p className="keenEye">Some text here</p>
          <p className="email">vania@example.com</p>
        </div>
      </div>
    </div>
  </div>
        </>
    )
}



