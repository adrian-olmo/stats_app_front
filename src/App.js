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
import { UserProfile } from './components/userProfile/UserProfile';

function App() {

  return (
    <div className="App">
      <BrowserRouter>

        <Navbar />
        <Switch>
          <Route path="/" component={Gallery} exact></Route>
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/teams" component={Teams} />
          <Route path="/detail/:id" component={TeamDetail} />
          <Route path="/change-team/:id" component={UpdateTeam} />
          <Route path="/new-team" component={CreateTeam} />
          <Route path="/new-player" component={CreatePlayer} />
          <Route path="/change-player/:id" component={UpdatePlayer} />
          <Route path="/matches" component={Matches} />
          <Route path="/new-match" component={CreateMatch} />
          <Route path="/change-match/:id" component={UpdateMatch} />
          <Route path="/user/profile/:id" component={UserProfile} />

        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
