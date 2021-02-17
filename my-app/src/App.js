import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import Menu from './components/menu/index';
import Header from './components/layout/header';
import Layout from './components/layout';

import Contacts from './pages/contacts';
import Photos from './pages/photos';
import Posts from './pages/posts';

import './pages/posts/components/post/post.css';
import './pages/contacts/post/contacts.css'

export default function App() {
  return (
    <Router>
      <div className = 'nav_panel'>
         <Menu/>
      </div>
      
      <div className = 'layout'>
        <Layout>
        <Switch>
          <Route path="/posts">
            <div className = 'post' >
                <Posts />
            </div>
          </Route>
          <Route path="/photos">
            <Photos />
          </Route>
          <Route path="/contacts">
            <div className = 'contacts'>
              <Contacts />
            </div>
          </Route>
        </Switch>
        </Layout>
      </div>
    </Router>
  );
}
