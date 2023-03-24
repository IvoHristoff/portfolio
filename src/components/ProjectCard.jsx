import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Row } from 'react-bootstrap';

import './ProjectCard.css';

// id will be used for editing/deleting
// eslint-disable-next-line no-unused-vars
const ProjectCard = ({ id, project }) => {

  return (
    <Card bg='dark'>
      <Row>
        <Col>
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>{project.description}</Card.Text>
            <Card.Text><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
          </Card.Body>
        </Col>
        <Col className='text-center'>
          <img src={project.image} className="img-fluid" alt="..." />
        </Col>
      </Row>
    </Card>
  );
};

ProjectCard.propTypes = {
  id: PropTypes.string,
  project: PropTypes.object,
};

export default ProjectCard;
