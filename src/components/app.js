import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import React from 'react';
import Posts from './posts';
import NewPost from './new_post';
import SinglePost from './single_post';
import SignIn from './signin';
import SignUp from './sign_up';
import NavBar from './nav_bar';
import PrivateRoute from './privateRoute';

const App = (props) => {
  return (
    <Router>
      <div className="overall">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Posts} />
          <PrivateRoute exact path="/posts/new" component={NewPost} />
          <Route exact path="/posts/:postID" component={SinglePost} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route render={() => (<div>post not found</div>)} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
