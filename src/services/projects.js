import { ref, push, get, update } from 'firebase/database';
import { ref as sRef ,deleteObject } from 'firebase/storage';
import { db, storage } from '../config/firebase-config';

const dataFromSnapshot = (snapshot) => {
  const itemDocument = snapshot.val();

  return Object.keys(itemDocument).map(key => {
    const item = itemDocument[key];
    return {
      ...item,
      id: key,
    };
  });
};

export const addProject = (content) => {

  return push(
    ref(db, 'projects'),
    {
      content: {...content}
    },
  )
    .then(result => {
      return result.key;
    });
};

export const updateProject = (id, content) => {

  return update(
    ref(db, `projects/${id}`), {content});
};

export const deleteProject = async (id) => {
  deleteObject(sRef(storage, `project-images/${id}`));

  return update(ref(db), {
    [`/projects/${id}`]: null,
  });
};

export const getAllProjects = () => {

  return get(ref(db, 'projects'))
    .then (snapshot => {
      if (!snapshot.exists()) return [];

      return dataFromSnapshot(snapshot);
    });
};

export const getProjectById = (id) => {

  return get(ref(db, `projects/${id}`))
    .then(result => {
      if (!result.exists()) {
        throw new Error(`Project with id ${id} does not exist!`);
      }

      const project = result.val();
      project.id = id;

      return project;
    });
};
