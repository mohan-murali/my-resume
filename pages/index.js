import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Timeline } from "primereact/timeline";
import { Button } from "primereact/button";
import Socials from "../components/Socials";
import Event from "../components/Event";

export default function Home() {
  const socials = [
    { icon: "pi-envelope", name: "mohanmuralid28@gmail.com" },
    { icon: "pi-phone", name: "+918056099130" },
    { icon: "pi-globe", name: "mohan-murali.netlify.app" },
    { icon: "pi-github", name: "github.com/mohan-murali" },
    { icon: "pi-linkedin", name: "linkedin.com/in/mohan-murali-b-m-24903864/" },
  ];

  const events = [
    {
      title: "Lead Product Engineer",
      company: "Nepris Inc (payroll TEQNirvana)",
      date: "Apr 2021 - Present",
      location: "Bangalore",
      technologies:
        "Dotnet Core, ReactJs, NextJs, Kendo React, Azure Functions, Azure SQL, Azure App Service",
      roles: [
        "Worked on Azure Functions API for a new seasonal feature which helped in increasing the new customers registrations by 12%",
        "Worked with CTO and the solution architect to design and impliment end to end message delivery service inside Nepris",
        "Created the users public facing profile page",
        "Created bash script to help in genration of common servicestack API's request and response files",
      ],
    },
    {
      title: "Technical Lead",
      company: "HCL technologies",
      date: "Jan 2018 - Mar 2021",
      location: "Chennai",
      technologies:
        "Dotnet Core, ReactJs, Redux, Redux thunks, Azure App Service, Teamcity, Splunk",
      roles: [
        "Worked on an application to reduce the manual documentation for home loan application which increased the home loan conversion rate by 18%",
        "Created a POC GraphQL API using dotnet core hotchoclate framework and express with prisma framework along with Apollo react in the front end to show the usecases of a graphQL API to the clients",
        "Was actively taking part in mentoring and training both new joinees and experienced folks in ReactJs and Redux",
      ],
    },
    {
      title: "Associate",
      company: "Cognizant Technology Solutions",
      date: "Nov 2011 - Dec 2017",
      location: "Chennai",
      technologies: "VB6, Dotnet WebApi 2, JQuery, Kendo UI, SQL Server",
      roles: [
        "Automated common document genration which was  a common pain point to the team",
        "Worked in maintenance of excel macro based application which a VB6 server. Was later part of the development team to migrate this excel based app into a web application",
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
    "Service Stack",
    "HTML/CSS",
    "NodeJs",
    "ExpressJs",
    "SQL Server",
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
                Entusiastic and passionate software develeloper with over 10+
                years of professional experience in developing fullstack
                applications using various javascript and dotnet frameworks.
                Worked in agile as well as waterfall software models and have a
                good understanding of both funtional and object oriented
                programming paradigms.
              </p>
            </section>
          </div>
          <section>
            {socials.map((x, i) => (
              <Socials key={`${i}-${x.icon}`} icon={x.icon} name={x.name} />
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
          <h3>Personal Project</h3>
          <span>
            <strong>Whatsdown Chat App</strong> (NextJs, Styled Components,
            Material UI, Firebase)
            <br /> Hobby project which I built to learn NextJs. Its a real time
            chat app which is inspired by Whatsapp's Web format. You can check
            the live demo{" "}
            <a href="https://whatsdown.vercel.app/">
              <em>here</em>
            </a>{" "}
            or by going to "https://whatsdown.vercel.app/"
            <ul>
              <li>Used the real-time messaging feature from firebase</li>
              <li>Makes use of google firebase authentication</li>
              <li>
                Made use of MaterialUI components and Styled Component for CSS
                in JS
              </li>
            </ul>
          </span>
          <span>
            <strong>Technical Blogging in Dev.to</strong>
            <br /> Apart from just tinkering around and building stuffs, I also
            write my thoughts and findings in Dev.to. You can read about my
            blogs{" "}
            <a href="https://dev.to/_mohanmurali">
              <em>here</em>
            </a>{" "}
            or by going to "https://dev.to/_mohanmurali"
          </span>
        </section>
        <section>
          <h3>Education</h3>
          <span>
            <strong>Bachleor In Mechanical Engineering</strong> from{" "}
            <em>Sri Sairam Engineering College, Anna University</em> Chennai
          </span>
        </section>
        <section>
          <h3>Hobbies & Interests</h3>
          <span>
            <p>
              I like to read Fantasy Novels, and play games which has some
              element of fantasy in It. Apart from that, I like to travel to
              different places and try different food. I love nature and
              mountains and like to go on long walking treks.
            </p>
          </span>
        </section>
      </main>
    </div>
  );
}
