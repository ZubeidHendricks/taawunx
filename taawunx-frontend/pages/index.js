import Head from 'next/head';
import axios from 'axios';
import { getProjects } from '../lib/api';

export default function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      const response = await getProjects();
      setProjects(response.projects);
    }
    fetchProjects();
  }, []);

  const [newProject, setNewProject] = useState({ name: '', description: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await createProject(newProject);
    setProjects([...projects, response.project]);
    setNewProject({ name: '', description: '' });
  };

  return (
    <div>
      <Head>
        <title>TaawunX</title>
      </Head>
      <h1>Home Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Project Name:
          <input type="text" value={newProject.name} onChange={(event) => setNewProject({ ...newProject, name: event.target.value })} />
        </label>
        <br />
        <label>
          Project Description:
          <input type="text" value={newProject.description} onChange={(event) => setNewProject({ ...newProject, description: event.target.value })} />
        </label>
        <br />
        <button type="submit">Create Project</button>
      </form>
      <h2>Projects:</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
}
