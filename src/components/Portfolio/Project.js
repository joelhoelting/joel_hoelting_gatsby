import React from 'react';

const Project = (props) => (
 <div>
  <a href={props.url} target="_blank"><img src={props.image} /></a>
  <h1>{props.title}</h1>
  <h3>{props.description}</h3>
  <h6>Tools: {props.tools.join(' ')}</h6>
 </div>
);

export default Project;
