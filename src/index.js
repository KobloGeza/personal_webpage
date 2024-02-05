import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import RenderExperience from "./Experiences.js";

import exp_work from './experience_work.json';
import exp_education from './experience_education.json';


// TODO
function hey() {alert('You clicked me!')}
document.querySelector(".b-email").onclick = hey



let container = document.querySelector(".experience-item.work");
let root = ReactDOM.createRoot(container);
root.render(
  <StrictMode>
    <>{RenderExperience(exp_work)}</>
  </StrictMode>
);

container = document.querySelector(".experience-item.education");
root = ReactDOM.createRoot(container);
root.render(
  <StrictMode>
    <>{RenderExperience(exp_education)}</>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


