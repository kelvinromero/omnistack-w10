import React, { useState, useEffect } from 'react';

import './global.css';
import './App.css';
import './sidebar.css';
import './main.css';

function App() {
  const [github_username, setGitHubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err)
      },
      {
        timeout: 30000
      }
    );
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username"
              id="github_username"
              required
              value={github_username}
              onChange={e => setGitHubUsername(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              name="techs"
              id="techs"
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="number"
                name="latitude"
                id="latitude"
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type="number"
                name="longitude"
                id="longitude"
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>


      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/8683337?s=460&v=4" alt="" />
              <div className="user-info">
                <strong>Kelvin Romero</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde voluptas ea quos dolores fugiat ullam sunt, debitis corrupti commodi aspernatur. Natus, cumque labore animi veritatis rerum quis totam nam soluta.</p>
            <a href="">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/8683337?s=460&v=4" alt="" />
              <div className="user-info">
                <strong>Kelvin Romero</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde voluptas ea quos dolores fugiat ullam sunt, debitis corrupti commodi aspernatur. Natus, cumque labore animi veritatis rerum quis totam nam soluta.</p>
            <a href="">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/8683337?s=460&v=4" alt="" />
              <div className="user-info">
                <strong>Kelvin Romero</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde voluptas ea quos dolores fugiat ullam sunt, debitis corrupti commodi aspernatur. Natus, cumque labore animi veritatis rerum quis totam nam soluta.</p>
            <a href="">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/8683337?s=460&v=4" alt="" />
              <div className="user-info">
                <strong>Kelvin Romero</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde voluptas ea quos dolores fugiat ullam sunt, debitis corrupti commodi aspernatur. Natus, cumque labore animi veritatis rerum quis totam nam soluta.</p>
            <a href="">Acessar perfil no github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
