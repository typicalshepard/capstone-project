import React from 'react';
import './styles.css';

const Research = () => {
  return (
    <div className="research-container">
      <section className="research-section">
        <h2>Research Areas</h2>
        <h3>Because of the time constraints of this project, it was decided to narrow down the orginal 13 factors. The 5 factors selected for this project were deemed 
          to be the most important in regards to the spread of a virus. From there, each section has 3-4 points of quantitative vectors in order to assist in the training
          and creation of the A.I.
        </h3>
        <p>Factors for pandemics: 
          <ol>
            <li><strong>Geographical Spread:</strong>
                <ul>
                    <li>Distance covered by outbreak (km)</li>
                    <li>Number of affected regions or countries</li>
                    <li>Rate of spread (new cases per day/week)</li>
                </ul>
            </li>

            <li><strong>Epidemiological Data:</strong>
                <ul>
                    <li>Basic reproduction number (R0)</li>
                    <li>Incubation period (days)</li>
                    <li>Case fatality rate (percentage)</li>
                </ul>
            </li>

            <li><strong>Government Response:</strong>
                <ul>
                    <li>Time taken to implement intervention (days)</li>
                    <li>Index of government measurements</li>
                    <li>Resources allocated (monetary/personnel)</li>
                </ul>
            </li>

            <li><strong>Healthcare Infrastructure:</strong>
                <ul>
                    <li>Number of hospital beds per capita</li>
                    <li>Healthcare density</li>
                    <li>Availability of critical medical equipment</li>
                </ul>
            </li>

            <li><strong> Public Health measure:</strong>
                <ul>
                    <li>Percent of population under quarantine</li>
                    <li>Adherence rate to social distance guidelines </li>
                    <li>Success rate of contact tracing efforts </li>
                </ul>
            </li>
          </ol>
        </p>
      </section>

      <section className="research-section">
        <h2>Methodology</h2>
        <h3>The top 5 deadliest pandemics since 1900 have been narrowed down to COVID-19 and HIV/AIDS to be studied for this project. This was due to time contraints, as well as the attempt at recreating the modern world as closely as possible, yet 
          allowing for a wide range of data to be accessed.
        </h3>
        <p>
        Pandemics:
          <ul>
            <li>Spanish Flu (Influenza) - 1918 - 1919</li>
            <li>Asian Flu - 1957 </li>
            <li>Hong Kong Flu - 1968-1969  </li>
            <li>HIV/AIDS 2005 - 2012 </li>
            <li> COVID 2019 - Current *The data will be up until 2023, as the current numbers are still changing.*</li>
          </ul>

          Narrowed down to COVID, and HIV/AIDS. This gives the time from of 2005 - Current, focus on the United States
        </p>
      </section>

      <section className="research-section">
        <h2>Data</h2>
        <p>
            Data placeholder
        </p>
      </section>

      <section className="research-section">
        <h2>Results and Findings</h2>
        <p>
           After running the artifical intelligence alogirhthm over the course of the semester, I would save them and see 
        </p>
      </section>


      <section className="coding-section">
        <h2>Algorithm and Programming</h2>
        <p>
        Algorithms discussed:
          <ul>
            <li>Autoregressive Integrated Moving Average (ARIMA) - ARIMA is a time series forecasting model that captures temporal dependencies by modeling the relationship between an observation and a linear combination of lagged observations and lagged forecast errors.</li>
            <li>Seasonal Autoregressive Integrated Moving-Average (SARIMA) - extends ARIMA to account for seasonal patterns in the data. It incorporates additional parameters to model seasonal variations, making it more suitable for datasets with recurring seasonal patterns.</li>
            <li>Exponential Smoothing (ETS) - ETS is a family of models that use exponential weighting to forecast time series data. </li>
            <li>Long Short-Term Memory (LSTM) Networks -  LSTM networks are a type of recurrent neural network (RNN) that can learn long-term dependencies in sequential data.</li>
            <li>Gated Recurrent Units (GRUs) - Another type of RNN that is similar to LSTM networks but with a simpler architecture. They are more computationally efficient and may be suitable for smaller datasets.</li>
          </ul>
          Additon features for raw data:
          <ul>
            <li>Lag features: Previous values of key factors (e.g., number of cases, rate of spread).</li>
            <li>Moving averages: Smoothed averages of key factors over a specified window.</li>
            <li>Interaction terms: Products or ratios of different factors (e.g., R0 * healthcare density).</li>
            <li>Seasonal indicators: Binary variables indicating the presence of seasonal patterns.</li>
            <li>Time since last outbreak: Duration since the last pandemic or major outbreak.</li>
          </ul>
        </p>
      </section>
    </div>
  );
}

export default Research;