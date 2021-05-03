import {
  BrowserRouter as Router, Route, Switch, NavLink,
} from 'react-router-dom';
import React from 'react';
import Posts from './posts';
import NewPost from './new_post';
import SinglePost from './single_post';
import EditPage from './edit_page';

const NavBar = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/posts/new">New Post</NavLink></li>
      </ul>
    </nav>
  );
};

/*
const Test = (props) => {
  return <div>ID: {props.match.params.postID}</div>;
};
*/

const App = (props) => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/posts/new" component={NewPost} />
          <Route exact path="/posts/:postID" component={SinglePost} />
          <Route exact path="/posts/edit/:postID" component={EditPage} />
          <Route render={() => (<div>post not found</div>)} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
