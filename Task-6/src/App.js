import React from "react";

const App = () => {
  const portfolioData = {
    greet: "Hello All👋",
    Name: " I AM GAJJALA THRIDIVA REDDY",
    Education: [
      "B.Tech-Vellore institute of technology",
      "Intermediate-Narayana Junior College",
      "School- Narayana E.M High School",
    ],
    Languages: ["Hindi", "English", "Telugu", "Tamil"],
    Skills: [
      "Time Management",
      "Creativity",
      "Problem solving",
      "Team Work",
      "App Development",
      "Web Development",
      "Artifical Intelligence",
      "Machine learning",
    ],
    activities: [
      {
        Title: "👉VIT Club Member:",
        Description:
          "As a dedicated member of the Youth Red Cross (YRC) Club, I have actively contributed to a range of humanitarian and community service initiatives. The YRC Club has not only been a platform for personal growth but has also allowed me to make a positive impact on society. ",
      },
      {
        Title: "👉Neural Space, Internship: ",
        Description:
          "Made a substantial contribution to the advancement of the in-house Natural Language Processing (NLP) Software for the Speech-To-Text Service through language input integration.",
      },
      {
        Title: "👉The Zuno Fellowship Exam, zuno by foundit:",
        Description:
          "Successfully participated in the highly competitive Zuno Fellowship Exam, a rigorous assessment designed to evaluate aptitude, problem-solving skills, and critical thinking. This challenging examination tested proficiency in key areas such as numerical reasoning, logical analysis, and quantitative assessment",
      },
      {
        Title: "👉Culinary club Member: ",
        Description:
          "As an enthusiastic member of the Culinary Club felt good! My involvement in the Culinary Club not only deepened my passion for food but also enhanced my teamwork, leadership, and organizational skills. It allowed me to explore and express my creativity ",
      },
    ],
  };
  return (
    <div className="portfolio">
      <div className="temp">
        <div className="header">
          <h2 className="G">{portfolioData.greet}</h2>
          <h3 className="N">{portfolioData.Name}</h3>
        </div>
        <div className="body">
          <div className="about">
            <h3>MY PROFILE😊:</h3>
            <p>
              Myself <b>Gajjala Thridiva Reddy</b> pursuing BTECH at Vellore
              Institute of Technology in computer science. I am more intrested
              in web development and coding as a BTech student.A passionate
              individual with a strong interest in the fields of Artificial
              Intelligence AI, Machine Learning ML, and Web Development. I'm
              excited to introduce myself and share my experiences and
              aspirations with you.
            </p>
          </div>
          <div className="Education">
            <h4>🎓EDUCATION:</h4>
            <ul>
              {portfolioData.Education.map((Education) => (
                <li key={Education}>{Education}</li>
              ))}
            </ul>
          </div>
          <div className="skills">
            <h4>✨SKILLS:</h4>
            <ul>
              {portfolioData.Skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="Languages">
            <h4>🌏Languages:</h4>
            <ul>
              {portfolioData.Languages.map((Languages) => (
                <li key={Languages}>{Languages}</li>
              ))}
            </ul>
          </div>
          <div className="activities">
            <h4>🥇ACTIVITIES:</h4>
            {portfolioData.activities.map((activities) => (
              <ul>
                <div className="activities" key={activities.Title}>
                  <h3>{activities.Title}</h3>
                  <p>{activities.Description}</p>
                </div>
              </ul>
            ))}
          </div>
          <div className="Con">
            <section>
              <h2>☏ Contact: </h2>
              <p>📞8498837445</p>
              <ul>
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="# ">gajjalathridivareddy@gmail.com </a>
                </li>
                <li>
                  <strong>LinkedIn:</strong>{" "}
                  <a
                    href="https://www.linkedin.com/in/thridiva/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click Here
                  </a>
                </li>
                <li>
                  <strong>Resume Link:</strong>{" "}
                  <a
                    href="https://drive.google.com/file/d/19JdWrHP5R3-kBBP9UxUWUEXf_tUbQZNd/view?usp=sharing"
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    Click Here
                  </a>
                </li>
              </ul>
              <p className="phnum">I'm eager to make a connection with you!</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
