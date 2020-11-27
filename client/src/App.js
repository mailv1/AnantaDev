import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import MongoForm from './components/MongoForm'
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

import { getPosts } from './actions/posts';
import useStyles from './styles';
import memories from './images/memories.png';
import Navbar from './components/Navbar'

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <Route path='/home' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/mongoForm' component={MongoForm} />
    </BrowserRouter>

  );
};

export default App;
