
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CommentList from './CommentList';
import UserList from './UserList';
import Home from './Home';

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
        <Switch>

          <Route path="/users" component={UserList}  />
          <Route  path="/comments" component={CommentList} />
          <Route path="/" component={Home} />


        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
