import Head from "next/head";
import { Button } from "primereact/button";
import { Timeline } from "primereact/timeline";
import Event from "../components/Event";
import Socials from "../components/Socials";
import styles from "../styles/Home.module.css";

export default function Home() {
  const socials = [
    { icon: "pi-envelope", name: "mohanmuralid28@gmail.com" },
    { icon: "pi-phone", name: "+447767934699" },
    {
      icon: "pi-globe",
      name: "mohan-murali.netlify.app/",
      type: "link",
    },
    { icon: "pi-github", name: "github.com/mohan-murali" },
    {
      icon: "pi-linkedin",
      name: "linkedin.com/in/mohan-b-m/",
    },
    {
      icon: "pi-home",
      name: "Leicester, United Kingdom ",
    },
  ];

  const events = [
    {
      title: "Student Innovation Assistant",
      company: "Leicester Innovation Hub, University of Leicester (part-time)",
      date: "Jan 2023 - Apr 2023",
      location: "Leicester, Uk",
      technologies:
        "ReactJs, NextJs, NodeJs, ExpressJs, Google Lightspeed APIs, CO2Js",
      roles: [
        "Collaborated closely with the client to design and implement the complete backend API.",
        "Developed the backend infrastructure for https://www.webzero.earth/, a website dedicated to calculating carbon emissions for web pages.",
      ],
    },
    {
      title: "Lead Product Engineer",
      company: "Nepris Inc (payroll GPracta)",
      date: "Apr 2021 - Sep 2022",
      location: "Bangalore",
      technologies:
        "Dotnet Core, ExpressJs, ReactJs, NextJs, Kendo React, Azure Functions, Azure SQL, Azure App Service",
      roles: [
        "Spearheaded the development of an Azure Functions API for a novel seasonal feature, resulting in a notable 12% increase in new customer registrations.",
        "Collaborated closely with the Chief Technology Officer (CTO) and the solution architect to conceptualize and execute a comprehensive end-to-end message delivery service within the Nepris platform.",
        "Designed and constructed user-facing public profile pages to enhance the overall user experience.",
        "Innovatively crafted a Bash script to streamline the generation of essential ServiceStack API request and response files, enhancing efficiency and productivity within the development workflow.",
      ],
    },
    {
      title: "Technical Lead",
      company: "HCL technologies",
      date: "Jan 2018 - Mar 2021",
      location: "Chennai",
      technologies:
        "Dotnet Core, ExpressJs, ReactJs, Redux, Redux thunks, Azure App Service, Teamcity, Splunk",
      roles: [
        "Led the development of an application aimed at automating manual documentation for home loan applications, resulting in a substantial 18% boost in home loan conversion rates.",
        "Successfully crafted a Proof of Concept (POC) GraphQL API utilizing the Dotnet Core HotChocolate framework and Express in combination with the Prisma framework. Implemented the Apollo React library on the front end to effectively demonstrate the utility and versatility of GraphQL API to clients.",
        "Actively engaged in mentoring and training activities, providing guidance and knowledge transfer to both new hires and seasoned professionals in ReactJs and Redux, contributing to the skill development and growth of the team.",
      ],
    },
    {
      title: "Associate",
      company: "Cognizant Technology Solutions",
      date: "Nov 2011 - Dec 2017",
      location: "Chennai",
      technologies: "VB6, Dotnet WebApi 2, JQuery, Kendo UI, SQL Server",
      roles: [
        "Spearheaded the automation of routine document generation, effectively alleviating a prevalent pain point within the team.",
        "Played a pivotal role in maintaining an Excel macro-based application, initially developed on a VB6 server. Subsequently, joined the development team to orchestrate the seamless migration of this Excel-based application into a modern web-based platform.",
      ],
    },
  ];

  const skills = [
    "JavaScript",
    "TypeScript",
    "C#",
    "ReactJs",
    "NextJs",
    "Redux",
    "Dotnet Core",
    "NodeJs",
    "ExpressJs",
    "SQL Server",
    "MongoDB",
    "HTML/CSS",
    "Postman",
    "Git & GitHub",
  ];
  const customEvent = (item) => {
    return <Event {...item} />;
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Mohans Resume</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header className="p-d-flex">
          <div className={styles.header}>
            <section>
              <h1>Mohan Murali Dharan B M</h1>
              <label>
                <strong>Fullstack Developer</strong>
              </label>
            </section>
            <section>
              <p>
                Highly skilled and dedicated software developer with over a
                decade of extensive experience in architecting and crafting
                full-stack applications, utilizing a diverse range of
                frameworks. Adept at adapting to emerging technologies and
                committed to continuous learning. Proficient in Agile and
                Waterfall software development methodologies, with a
                comprehensive understanding of both functional and
                object-oriented programming paradigms.
              </p>
            </section>
          </div>

          <section className={styles.socials}>
            {socials.map((x, i) => (
              <Socials
                key={`${i}-${x.icon}`}
                icon={x.icon}
                name={x.name}
                type={x.type}
              />
            ))}
          </section>
        </header>
        <section>
          <h3>Skills</h3>
          {skills.map((x, i) => (
            <span key={i}>
              <Button
                label={x}
                className="p-ml-1 p-mb-1 p-button-rounded p-button-secondary"
              />
            </span>
          ))}
        </section>

        <section>
          <h3>Work Experience</h3>
          <Timeline value={events} align="left" content={customEvent} />
        </section>
        <section>
          <h3>Education</h3>
          <span>
            <strong>Masters in cloud computing</strong> from{" "}
            <em>University of Leicester</em> UK, Sep 2022 - Sep 2023
          </span>
        </section>
        <section>
          <h3>Personal Project</h3>
          <div className={styles.project}>
            <strong>Whatsdown Chat App</strong> (NextJs, Styled Components,
            Material UI, Firebase)
            <br /> Hobby project which I built to learn NextJs. Its a real time
            chat app which is inspired by Whatsapp&apos;s Web format. You can
            check the live demo{" "}
            <a href="https://whatsdown.vercel.app/">
              <em>here</em>
            </a>{" "}
            or by going to &ldquo;https://whatsdown.vercel.app/&ldquo;
          </div>
          <div className={styles.project}>
            <strong>Bhramand Nayak Discord Bot</strong> (Node.Js, Discord.js)
            <br /> During the pandamic discord became my primary socialising
            platform. While using discord, I came accross useful bots. Bhramand
            Nayak is a bot I created. You can see its functionalities{" "}
            <a href="https://github.com/mohan-murali/bhramand-nayak/blob/main/Readme.md">
              <em>here</em>
            </a>{" "}
            or by going to
            &ldquo;https://github.com/mohan-murali/bhramand-nayak/blob/main/Readme.md&ldquo;
          </div>
          <div className={styles.project}>
            <strong>Technical Blogging in Dev.to</strong>
            <br /> Apart from just tinkering around and building stuffs, I also
            write my thoughts and findings in Dev.to. You can read about my
            blogs{" "}
            <a href="https://dev.to/_mohanmurali">
              <em>here</em>
            </a>{" "}
            or by going to &ldquo;https://dev.to/_mohanmurali&ldquo;
          </div>
        </section>

        {/* <section>
          <h3>Hobbies & Interests</h3>
          <span>
            <p>
              I like to read Fantasy Novels/Mangas, and play games which have
              some element of fantasy in it. I also love watching anime. Apart
              from that, I like to travel to different places and try different
              food. I love nature and mountains and like to go on long walking
              treks.
            </p>
          </span>
        </section> */}
      </main>
    </div>
  );
}
