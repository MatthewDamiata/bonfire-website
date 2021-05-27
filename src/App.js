import './App.css';
import logo from './assets/logo_44.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@material-ui/core';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

function App() {

  return (
    <div className="App">
      
      <div className="fire">
        <div className="fire-main">
          <div className="particle-fire"></div>
        </div>
      </div>

      <div className="fire2">
        <div className="fire2-main">
          <div className="particle-fire-2"></div>
        </div>
      </div>

    <img src={logo} id="logo" alt="Logo" /> 
     
     Bonfire
     
      <br></br>
      
      <div id="desc">
        Have trouble making conversation with friends? 
        <br></br>
        Bonfire provides fun, social games to play with anyone.
      </div>
      <div className="buttons">
      <Button href="https://github.com/MatthewDamiata/bonfire" variant="contained"     
        style={{
          backgroundColor: "#f7b858",
          margin: '5px'
        }}>
        Check it out
        <FontAwesomeIcon style={{marginLeft: '5px'}} icon={faGithubAlt} />
      </Button>
        
      <Button href="https://discord.com/api/oauth2/authorize?client_id=838622344738111498&permissions=0&scope=bot" variant="contained"     
        style={{
          backgroundColor: "#e63b4e",
          margin: '5px'
        }}>
        Invite Bonfire
        <FontAwesomeIcon style={{marginLeft: '5px', marginBottom: '2px'}} icon={faRobot} />
      </Button>
      </div>
      <div id="footer">

        <span>{'Made with ❤️ by '} </span>

          <a href="https://github.com/MatthewDamiata">Matt Damiata</a>

          <span>{' & '}</span>

          <a href="https://github.com/criewerts">Christian Riewerts</a>

      </div>

    </div>
  );

}

export default App;
