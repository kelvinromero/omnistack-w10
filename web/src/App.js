import React from 'react';

import './global.css';
import './App.css';
import './sidebar.css';
import './main.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/8683337?s=460&v=4" alt=""/>
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
              <img src="https://avatars3.githubusercontent.com/u/8683337?s=460&v=4" alt=""/>
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
              <img src="https://avatars3.githubusercontent.com/u/8683337?s=460&v=4" alt=""/>
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
              <img src="https://avatars3.githubusercontent.com/u/8683337?s=460&v=4" alt=""/>
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
