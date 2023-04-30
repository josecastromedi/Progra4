/*import {useEffect, useState} from 'react';
import getRepositories from '../../git/git';

const Repositories = () => {

const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchRepositories = async () => {
      const data = await getRepositories();
      setRepositories(data);
    };

    fetchRepositories();
  }, []);

  return (
    <div className="projects-container">
      <h2>Mis proyectos en GitHub:</h2>
      <ul>
        {repo.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
};*/