import React from 'react';

import Project from '../components/Portfolio/Project';
import { projects } from '../components/Portfolio/projects';

const Portfolio = () => {
  function renderProjects() {

    const listProjects = projects.map(function(project) {
      const {url, image, title, description, tools} = project;
      return <Project url={url} image={image} title={title} description={description} tools={tools} />;
    });
    return listProjects;
  }

  return (
    <div>
      {renderProjects()}
    </div>
  );

};

export default Portfolio;
