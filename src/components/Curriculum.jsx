import React from "react";
import CVDesc from "./CVDesc";
import CVSkills from "./CVSkills";
import fotoPerfil from "../assets/foto-perfil.jpg";

function Curriculum() {
  return (
    <div className="Curriculum px-3 md:px-20">
      <section className="curriculum-header">
        <div className="flex flex-col lg:flex-row w-full items-center">
          <div className="profile-pic w-32 h-32 md:w-72 md:h-72 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover object-center"
              src={fotoPerfil}
            />
          </div>
          <div className="text-center lg:text-left md:ml-5">
            <h1 className="text-4xl md:text-5xl font-bold">
              Manuel Esteban Ramírez Umaña
            </h1>
            <h4 className="text-lg text-center lg:text-left md:text-xl font-thin italic">
              Web Developer, Software Developer
            </h4>
          </div>
        </div>
      </section>
      <section className="curriculum-content mt-10">
        <div className="flex flex-col md:flex-row w-full">
          <div className="Skills shrink-0 md:w-72 mb-10 md:mb-0">
            <h2 className="text-3xl font-bold text-center w-full mb-5">Skills</h2>
            <div className="cv-skills flex flex-col gap-4 px-2">
              <CVSkills
                name={"React"}
                rate={3}
                delay={0}
              />
              <CVSkills
                name={"Vue"}
                rate={1}
                delay={100}
              />
              <CVSkills
                name={"HTML, CSS, JS"}
                rate={4}
                delay={200}
              />
              <CVSkills
                name={"AJAX"}
                rate={4}
                delay={300}
              />
              <CVSkills
                name={"PHP"}
                rate={4}
                delay={400}
              />
              <CVSkills
                name={"Node.js"}
                rate={3}
                delay={500}
              />
              <CVSkills
                name={"Express"}
                rate={3}
                delay={600}
              />
              <CVSkills
                name={"MySQL"}
                rate={4}
                delay={700}
              />
              <CVSkills
                name={"MongoDB"}
                rate={2}
                delay={800}
              />
              <CVSkills
                name={"Git/GitHub"}
                rate={3}
                delay={900}
              />
            </div>
          </div>
          <div className="details px-5">
            <div className="experience">
              <h2 className="text-3xl font-bold text-center mb-5">
                Job Experience
              </h2>
              <CVDesc 
                title={"Full Stack Web Developer - Trend Watchers - Marietta, Georgia, USA."}
                duration={"Nov 2022 - Present"}
                desc={`I am currently designing and developing the "Short Video Trends" system for the company Trend Watchers. I work on a fixed price basis and provide excellent quality at a lower price. It's an excellent company with a very cooperative owner.`}
              />
              <CVDesc 
                title={`Web Developer - Arepahamburger la 14 - Caicedonia, Valle del Cauca, Colombia`}
                duration={"Jul 2021 - Dec 2022"}
                desc={`I completed my final project for the academic phase of my technical career at SENA in ADSI. I developed an online ordering system for the fast food company Arepahamburger la 14.`}
              />
            </div>
            <div className="studies mt-10">
              <h2 className="text-3xl font-bold text-center mb-5">
                Academic Background
              </h2>
              <CVDesc
                title={"Technology in software developing - Universidad del Valle - Caicedonia, Valle del Cauca, Colombia"}
                duration={"Mar 2023 - Present"}
                desc={"Currently coursing a Technology degree at the 8th best univesity in Colombia. So far so good."}
              />
              <CVDesc
                title={"Technology in Analysis and Development of Information Systems - National Learning Service (SENA) - Pilaito, Huila, Colombia"}
                duration={"Jul 2021 - Present"}
                desc={"Successfully completed the academic phase in December 2022 and currently in the practical phase."}
              />
              <CVDesc
                title={"Agroindustrial Barchelor - E. I. Luis Granada Mejía - Barragan, Quíndio, Colombia"}
                duration={"Jan 2014 - Dec 2020"}
                desc={"Graduated with a High School Diploma and a Technical graduate in food agribusiness Degree"}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Curriculum;
