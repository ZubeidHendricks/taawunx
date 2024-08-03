import { useState, useEffect } from 'react';
import { getProjects, createProject } from '../lib/api';

import Layout from '../components/Layout';

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ name: '', description: '' });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const data = await getProjects();
    setProjects(data.projects);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createProject(newProject);
    fetchProjects();
    setNewProject({ name: '', description: '' });
  };

  return (
    <Layout>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name}: {project.description}</li>
        ))}
      </ul>

      <h2>Create New Project</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Project Name"
          value={newProject.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Project Description"
          value={newProject.description}
          onChange={handleInputChange}
        />
        <button type="submit">Create Project</button>
      </form>
    </Layout>
  );
}
