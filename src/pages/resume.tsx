import React from "react";

import SEO from "../components/seo";

import styles from "./resume.module.scss";

import ColoredBars from "../components/coloredBars";
import Color from "../utils/colors";
import Gray from "../utils/grays";

const Header = () => (
  <div className={`${styles.constrainedContent} ${styles.Header}`}>
    <h1 className={styles.HeaderName}>Corey Alexander</h1>
    <h2 className={styles.HeaderBlogUrl}>
      corey<span style={{ color: Color.purple }}>ja</span>
      <span style={{ color: Gray["high-contrast"] }}>.com</span>
    </h2>
    <h2 className={styles.HeaderGithub}>github.com/coreyja</h2>
    <h2 className={styles.HeaderTagline}>complex to simple</h2>
  </div>
);

interface ContactBlockProps {
  title: string;
  value: string;
}

const ContactBlock = ({ title, value }: ContactBlockProps) => (
  <div className={styles.ContactBlock}>
    <h2 className={styles.ContactBlockTitle}>{title}</h2>
    <h2 className={styles.ContactBlockValue}>{value}</h2>
  </div>
);

const ContactInfo = () => (
  <div className={`${styles.constrainedContent} ${styles.ContactInfo}`}>
    <ContactBlock title="Email" value="coreyja@gmail.com" />
    <ContactBlock title="Phone" value="(347) 863-4518" />
  </div>
);

interface ExperienceProps {
  jobTitle: string;
  company: string;
  timespan: string;
}

const Experience: React.FunctionComponent<ExperienceProps> = ({
  children,
  jobTitle,
  company,
  timespan,
}) => (
  <div className={styles.Experience}>
    <div className={styles.ExperienceHeader}>
      <h3
        className={`${styles.ExperienceHeaderItem} ${styles.ExperienceHeaderItemLeft}`}
      >
        {jobTitle}
      </h3>
      <h3
        className={`${styles.ExperienceHeaderItem} ${styles.ExperienceHeaderItemCenter}`}
      >
        {company}
      </h3>
      <h3
        className={`${styles.ExperienceHeaderItem} ${styles.ExperienceHeaderItemRight}`}
      >
        {timespan}
      </h3>
    </div>
    <p className={styles.ExperienceBody}>{children}</p>
  </div>
);

const WorkExperience = () => (
  <div className={styles.constrainedContent}>
    <h1 className={styles.ExperienceLabel}>Work Experience</h1>

    <Experience
      jobTitle="Senior Software Engineer"
      company="Wellsheet"
      timespan="October 2019 - Present"
    >
      <p>
        Working on the Infrastructure Team. Working on infrastructure to run the
        app and our background job system. This system is responsible for
        interfacing with EHRs and making sure we operate on the most up-to-date
        data possible.
      </p>
      <p>
        Leading the Developer Tooling and Experience initiatives, making sure my
        fellow engineers can be as happy and productive as possible.
      </p>
    </Experience>

    <Experience
      jobTitle="Senior Software Engineer"
      company="Betterment"
      timespan="June 2015 - Sept 2019"
    >
      <p>
        Worked on the Retail team, eventually leading the Cashflow team,
        focusing on the web app and developing new features.
      </p>
      <p>
        Recently helped design and build the Aggregation product, allowing users
        to link accounts at other Financial Institutions to view all their
        accounts in one place. Worked on the backend architecture of how we
        update and store this data daily and how it was displayed to Customers.
        Also implemented and maintained the algorithm that used this data to
        transfer money between a checking and savings account automatically,
        optimizing for having 3-5 weeks of spending money in your checking
        account at any one time.
      </p>
    </Experience>

    <Experience
      jobTitle="Consulting Intern"
      company="West Monroe Partners"
      timespan="Summer 2014"
    >
      <p>
        Personally rewrote the HTML/CSS templates for a client .NET application
        and created a mobile version of their site, with both iOS and Android
        native wrappers.
      </p>
      <p>
        Debugged and added features to a client&apos;s legacy Visual Basic web
        application.
      </p>
    </Experience>

    <Experience
      jobTitle="Freelance Web Developer"
      company=""
      timespan="Aug 2010 - 2014"
    >
      <p>
        Worked as a developer on many different websites and web apps using a
        variety of tools. Most of this work was done through the &quot;MadLab
        Media Group&quot; in Longmont, CO.
      </p>
    </Experience>

    <Experience
      jobTitle="Junior Developer"
      company="Giftovus"
      timespan="Summer 2013"
    >
      <p>Worked as a web developer on the Giftovus team.</p>
      <p>
        Familiar with and coded for the both frontend and backend of the
        Giftovus web app: giftovus.com
      </p>
      <p>
        Wrote code that was shipped in the live app: Python with Django and
        Javascript
      </p>
    </Experience>
  </div>
);

const Education = () => (
  <div className={styles.constrainedContent}>
    <h1 className={styles.ExperienceLabel}>Education</h1>

    <Experience
      jobTitle="Rose-Hulman Institute of Technology"
      company="CS/SE/MA"
      timespan="Class of 2015"
    >
      <p>
        Graduated with a Bachelors of Science Triple Major in Computer Science,
        Software Engineering and Mathematics
      </p>
    </Experience>
  </div>
);

const Resume: React.FunctionComponent = () => {
  return (
    <div className={styles.wrapper}>
      <SEO
        title="Corey Alexander Resume"
        keywords={[`Corey`, `Corey Alexander`, `coreyja`, `resume`]}
      />
      <Header />
      <ColoredBars />
      <ContactInfo />

      <WorkExperience />
      <Education />
    </div>
  );
};

export default Resume;