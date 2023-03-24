import React, { useEffect, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';
import { getAllProjects } from '../services/projects';

import './Home.css';

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [filters, setFilters] = useState({sort: 'relevant', stack: 'all', type: 'all', hosted: false, finished: false});

  useEffect(() => {
    getAllProjects()
      .then((res) => {
        setProjects(res);
      });
  }, []);

  return (
    <>
      <header>
        <img className='profile-picture' src='https://fastly.picsum.photos/id/200/200/200.jpg?hmac=mk1Tu6dXHQvpaA8RfxlDUZjbWG23krNkiB9kyYoEmO8' />
        <h1>IVO HRISTOV</h1>
      </header>

      <main>
        <div className='stats'>stats</div>
        <div className='projects-container'>
          <Form className='filters'>
            <Form.Select value={filters.sort} onChange={(el) => setFilters({...filters, sort: el.target.value})}>
              <option value="relevant">relevant</option>
              <option value="latest">latest</option>
            </Form.Select>
            <Form.Select value={filters.stack}>
              <option value="all">All stacks</option>
              <option value="javascript">javascript</option>
              <option value="java">java</option>
              <option value="python">python</option>
            </Form.Select>
            <Form.Select value={filters.type}>
              <option value="all">All types</option>
              <option value="server">server</option>
              <option value="client">client</option>
              <option value="service">service</option>
            </Form.Select>
            <Form.Check
              type='switch'
              id="hosted"
              label="hosted"
              value={filters.hosted}
            />
            <Form.Check
              type='switch'
              id="finished"
              label="finished"
              value={filters.finished}
            />
          </Form>
          <Container className='projects'>
            {projects.length?
              projects.map((project, i) => {
                return (<ProjectCard
                  key={i}
                  id={project.id}
                  project={project.content}
                />);
              })
              :
              <>there are no projects</>}
          </Container>
        </div>
      </main>

      <div className="stars"></div>
    </>
  );
};

export default Home;


/*

                .filter((el) => {
                  if (filters.stack === 'all') return true;
                  return el.content.stack.includes(filters.stack);
                })
                .filter((el) => {
                  if (filters.type === 'all') return true;
                  return el.content.type === filters.type;
                })
                .filter((el) => {
                  if (filters.hosted) return true;
                  return filters.hosted === !!el.content.hosted;
                })
                .filter((el) => {
                  if (filters.finished) return true;
                  return filters.finished === !!el.content.finished;
                })
                .sort((a, b) => {
                  return a || b;
                })

*/
