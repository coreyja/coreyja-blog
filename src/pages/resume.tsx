import React from "react";

import SEO from "../components/seo";

import styles from "./resume.module.scss";
import "./resumeOld.scss";

import ColoredBars from "../components/coloredBars";

const Header = () => (
  <div className={styles.Header}>
    <h1 className={styles.HeaderName}>Corey Alexander</h1>
    <h2 className={styles.HeaderBlogUrl}>coreyja.com</h2>
    <h2 className={styles.HeaderGithub}>github.com/coreyja</h2>
    <h2 className={styles.HeaderTagline}>complex to simple</h2>
  </div>
);

const Resume: React.FunctionComponent = () => {
  return (
    <div className={styles.wrapper}>
      <SEO
        title="Corey Alexander Resume"
        keywords={[`Corey`, `Corey Alexander`, `coreyja`, `resume`]}
      />
      <div className={styles.constrainedContent}>
        <Header />
      </div>
      <ColoredBars />
      <div className={`${styles.constrainedContent} ${styles.ContactInfo}`}>
        <div className={styles.ContactBlock}>
          <h2 className={styles.ContactBlockTitle}>Email</h2>
          <h2 className={styles.ContactBlockValue}>coreyja@gmail.com</h2>
        </div>

        <div className="contact-block">
          <h2 className="title">Phone</h2>
          <h2 className="contact-info">(347) 863-4518</h2>
        </div>
      </div>

      <div id="work-experience" className="wrap">
        <h1 className="title">Work Experience</h1>

        <div className="experience">
          <div className="info">
            <div className="top-info">
              <span className="job-title">Jr Software Engineer</span>
              <span className="company-name">Betterment</span>
              <span className="time">June 2015 - Present</span>
            </div>
            <div className="description">
              Currently working on the Retail team, focusing on the web app and
              developing new features.
              <br />
              Recently helped design and build the Aggregation product, allowing
              users to link accounts at other Financial Institutions to view all
              their accounts in one place. Worked on the backend architecture of
              how we update and store this data on a daily basis, as well as the
              front end display of the data.
            </div>
          </div>
        </div>

        <div className="experience">
          <div className="info">
            <div className="top-info">
              <span className="job-title">Consulting Intern</span>
              <span className="company-name">West Monroe Partners</span>
              <span className="time">Summer 2014</span>
            </div>
            <div className="description">
              Personally rewrote the HTML/CSS templates for a client .NET
              application as well as created a mobile version of their site,
              with both iOS and Android native wrappers
              <br />
              Debugged and added features to a client&apos;s legacy Visual Basic
              web application
            </div>
          </div>
        </div>

        <div className="experience">
          <div className="info">
            <div className="top-info">
              <span className="job-title">Freelance Web Developer</span>
              <span className="company-name"> </span>
              <span className="time">Aug 2010 - 2014</span>
            </div>
            <div className="description">
              Worked as a developer on many different websites and webapps using
              a variety of tools
              <br />
              For a more complete portfolio of projects visit coreyja.com
              <br />
            </div>
          </div>
        </div>

        <div className="experience">
          <div className="info">
            <div className="top-info">
              <span className="job-title">Junior Developer</span>
              <span className="company-name">Giftovus</span>
              <span className="time">Summer 2013</span>
            </div>
            <div className="description">
              Worked as a web developer on the Giftovus team.
              <br />
              Familiar with and coded for the both frontend and backend of the
              Giftovus web app: giftovus.com
              <br />
              Wrote code that was shipped in the live app: Python with Django
              and Javascript
              <br />
              Gained experience working in a startup environment
              <br />
            </div>
          </div>
        </div>

        <div className="experience">
          <div className="info">
            <div className="top-info">
              <span className="job-title">Intern</span>
              <span className="company-name">Centaur Technology</span>
              <span className="time">Summer 2010</span>
            </div>
            <div className="description">
              Tested hardware, aimed at finding CPU bugs
              <br />
              Wrote automated programs to detect hardware bugs
              <br />
              Developed programs dealing with the encoding and decoding of MSR
              and CPUID values
              <br />
            </div>
          </div>
        </div>
      </div>

      <div id="education" className="wrap">
        <h1 className="title">Education</h1>

        <div className="info">
          <div className="top-info">
            <span className="job-title">
              Rose-Hulman Institute of Technology
            </span>
            <span className="company-name">CS/SE/MA</span>
            <span className="time">Class of 2015</span>
          </div>
          <div className="description">
            Graduated with a Bachelors of Science Triple Major in Computer
            Science, Software Engineering and Mathematics
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
