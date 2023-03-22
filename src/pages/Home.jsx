import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';

import './Home.css';

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [projects, setProjects] = useState([]);

  return (
    <>
      <header>
        <img className='profile-picture' src='https://fastly.picsum.photos/id/200/200/200.jpg?hmac=mk1Tu6dXHQvpaA8RfxlDUZjbWG23krNkiB9kyYoEmO8' />
        <h1>Ivo Hristov</h1>
      </header>

      <main>
        <div className='stats'>stats</div>
        <div className='projects'>
          <div className='filters'>
            filter by
          </div>
          <div className='projects-container'>
            {projects.length?
              projects.map((project, i) => {
                return (<ProjectCard
                  key={i}
                  id={project.id}
                  title={project.title}
                  photo={project.photo}
                  languages={project.languages}
                  finished={project.finished}

                />);
              })
              :
              <>there are no projects</>}
          </div>

        </div>
      </main>

      <div className="stars"></div>
    </>
  );
};

export default Home;
