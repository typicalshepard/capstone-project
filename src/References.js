import React from 'react';
import './styles.css';

const Reference = () => {
  return (
    <div className="reference-container">
      <h1 className="page-title">References</h1>

      <div className="reference-list">
        <h2 className="reference-section-title">Research Papers</h2>
        <ul className="reference-items">
          <li>Devaraj, C. G., & Wang, C. (2021). Review of Machine Learning Approaches for COVID-19 Data Analysis and Predictions. Journal of Healthcare Informatics Research, 5(2), 97-118. https://doi.org/10.1007/s41666-021-00076-9</li>
      
        
          <li></li>
          {/* Add more references as needed */}
        </ul>
      </div>

      <div className="reference-list">
        <h2 className="reference-section-title">Online Resources</h2>
        <ul className="reference-items">
          <li>Hunter, J. D. (2007). matplotlib: A 2D graphics environment. Computing in Science & Engineering, 9(3), 90–95. https://doi.org/10.1109/MCSE.2007.55</li>
          <li>Sudalairajkumar. 2024. COVID-19 in USA. Kaggle. URL: https://www.kaggle.com/datasets/sudalairajkumar/covid19-in-usa</li>
          <li>Eeemonts. (Year). Weather/Climate Data & COVID-19. Kaggle. URL: https://www.kaggle.com/datasets/eeemonts/weatherclimate-data-covid19</li>
          <li>Population Reference Bureau. (Year). Age 65 and Over in the United States: 2021 Snapshot. Retrieved from https://www.prb.org/usdata/indicator/age65/snapshot/</li>
          
        </ul>
      </div>
    </div>
  );
}

export default Reference;
