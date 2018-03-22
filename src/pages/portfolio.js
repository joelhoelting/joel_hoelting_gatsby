import React from 'react';
import Radium from 'radium';

import ProjectCard from '../components/Portfolio/ProjectCard';
import { projects } from '../components/Portfolio/projects_json';

const Portfolio = () => {
  const styles = {
    base: {
      display: 'grid',
      gridTemplateColumns: '33% 33% 33%',
      gridAutoRows: 'auto',
      gridGap: '.5em',
      paddingTop: '2em',
      '@media (max-width: 1050px)': {
        gridTemplateColumns: '50% 50%'
      },
      '@media (max-width: 700px)': {
        gridTemplateColumns: '100%',
        gridGap: '2em',
      }
    }
  };

  function renderProjects() {
    const listProjects = projects.map(function(project, i) {
      return <ProjectCard key={i} project={project} />;
    });
    return listProjects;
  }

  return (
    <div style={styles.base}>
      {renderProjects()}
    </div>
  );

};

export default Radium(Portfolio);
