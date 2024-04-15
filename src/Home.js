import React, { useEffect } from 'react';
import './styles.css';

const Home = () => {
    return (
    <div className="home-container">
      <h1 className="page-title">
        Predictive Analysis for Disease Outbreaks using Artificial Intelligence and Computer Science Related Techniques
      </h1>
      <div className="left-box">
      <h2 className="project-background">Project Background</h2>
      <p className="left-box-body-text">
      Pandemics are worldwide outbreaks of a disease. Pandemics can increase mortality in humans, as well as cause economic, social and political disruption. 
      Pandemics were not a thing when humans were hunter-gatherers. The main shifts from epidemics to pandemics stem from the factors of changing to an agrarian society, 
      expansion of trade, increases in proximity of humans and animals in terms of newer farming practices, expansion into cities and towns, as well as travel and increase in human 
      population. 
      </p>
      <p>
      As global travel, urbanization, and rise in human population continue, the threat of pandemics only increases. The world has seen 249 pandemics throughout its 
      history and will continue to see them in the future. According to the U.S. Department of Health and Human Services, it’s important to maintain detection, reporting and responding 
      policies and procedures. After the 2009 influenza pandemic, the International Health Regulations, created by the World Health Organization, have established standards for detection,
      reporting and responding. However, what if instead of reaction there was a way for proactive action? Artificial Intelligence may be the answer to help minimize effects of future 
      pandemics.
      </p>

      <p className = "left-box-body-text2">
      This project aims at contributing to the field of public health by providing an up-to-date, computer science focused predictive analytical system in an effort to assist governments, 
      researchers, and the general public by helping to assist in mitigation, prevention, and forewarning of disease outbreaks. This map will be accessible to those interested and may be used 
      in highlighting areas of the world which are at higher risk for pandemic outbreaks  or higher transmission rates, this would create the ability to mitigate the risk through different 
      practices. 
      <p>
      It is important to remember the difference in pandemic v.s. epidemic. This project will be focusing on the pandemics of history. 
      An epidemic is a large but contained or expected and attempted control of spread, where a pandemic is international and uncontrollable.
      </p>
      </p>
      </div>
      <div className="right-box">
      <h2 className="project-background">Research Plan</h2>
      <p className="right-box-body-text" style={{ marginBottom: '50px' }}>
      Factors to consider in data collection:
        <ol>
          <li>Geographic Spread</li>
          <li>Epidemiological data</li>
          <li>Population density and demographics</li>
          <li>Public Health measures</li>
          <li>Vaccination rates</li>
          <li>Community engagement</li>
          <li>Education and awareness programs</li>
          <li>Government response to pandemics</li>
          <li>Healthcare infrastructures</li>
          <li>Climate and environment factors</li>
          <li>Behavioral patterns of humans</li>
          <li>Timeline of pandemics</li>
          <li>Global connectivity during the time of a pandemic</li>
        </ol>
        Most importantly this project will focus on the United States and use data collected from COVID-19, as well as HIV/AIDs data. This is to ensure the most recent pandemics for the most accurate representation of the world.
      </p>
      <h2 className="project-background">Objectives</h2>
        <p className = "right-box-body-text2">
        <ul className="bullet-list">
    <li>Research past epidemics and pandemics</li>
    <li>Develop a predictive model</li>
    <li>Data collection and processing</li>
    <li>Decide on methodologies of engineering and algorithms to enhance predictive power</li>
    <li>Research, select, create, and optimize predictive modeling</li>
    <li>Interpret, define, and apply evaluation methods involving computer science principles</li>
    <li>Data visualization to present predictions in an understandable manner</li>
    <li>Optimization and scalability</li>
    <li>Documentation of challenges, solutions, and code for transparency and reproducibility</li>
    <li>Design and create a website that can host the project</li>
  </ul>
        </p>
      </div>
    </div>
  );
}

export default Home;