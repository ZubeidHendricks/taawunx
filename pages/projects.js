import { useState, useEffect } from 'react';
import { getProjects } from '../lib/api';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const data = await getProjects();
    setProjects(data.projects);
  };

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name}: {project.description}</li>
        ))}
      </ul>
    </div>
  );
}
