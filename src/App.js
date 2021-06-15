import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Containers
import { SignUp } from './containers/signup/Signup';
import { Login } from './containers/login/Login';
import { Navbar } from './components/navbar/Navbar';
import { Teams } from './containers/teams/Teams';
import { Footer } from './components/footer/Footer';
import { Gallery } from "./components/gallery/Gallery";
import { TeamDetail } from "./components/teamDetail/TeamDetail";
import { UpdateTeam } from './containers/updateTeam/UpdateTeam';
import { CreateTeam } from './containers/createTeam/CreateTeam';
import { CreatePlayer } from "./containers/createPlayer/CreatePlayer";
import { UpdatePlayer } from './containers/updatePlayer/UpdatePlayer';
import { Matches } from './containers/matches/Matches';
import { CreateMatch } from './containers/createMatch/CreateMatch';
import { UpdateMatch } from './containers/updateMatch/UpdateMatch';
import { UserProfile } from "./containers/userProfile/UserProfile";
import { FormUser } from './components/formUser/FormUser';
import { useEffect, useState } from 'react';

function App() {

  const [logged, setLogged] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('session')) {
      setLogged(true);
    }


  })

  return (
    <BrowserRouter>
      <div className="App">


        <Navbar setLoggedApp={setLogged} logged={logged} />
        <Switch>
          <Route path="/" component={Gallery} exact></Route>
          <Route path="/signup" component={SignUp} exact />
          <Route path="/login">
            <Login setLoggedApp={setLogged} />
          </Route>
          <Route path="/teams" component={Teams} exact />
          <Route path="/detail/:id" component={TeamDetail} exact />
          <Route path="/change-team/:id" component={UpdateTeam} exact />
          <Route path="/new-team" component={CreateTeam} exact />
          <Route path="/new-player" component={CreatePlayer} exact />
          <Route path="/change-player/:id" component={UpdatePlayer} exact />
          <Route path="/matches" component={Matches} exact />
          <Route path="/new-match" component={CreateMatch} />
          <Route path="/change-match/:id" component={UpdateMatch} exact />
          <Route path="/user/profile" component={UserProfile} exact />
          <Route path="/user/profile/data" component={FormUser} exact />

        </Switch>


      </div >
    </BrowserRouter >

  );
}

export default App;
