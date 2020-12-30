import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MovieCreate from './movies/MovieCreate';
import MovieEdit from './movies/MovieEdit.js';
import MovieDelete from './movies/MovieDelete';
import MovieList from './movies/MovieList';
import MovieSelect from './movies/MovieSelect';
import Header from './Header';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={MovieList} />
          <Route path="/movies/new" exact component={MovieCreate} />
          <Route path="/movies/edit" exact component={MovieEdit} />
          <Route path="/movies/delete" exact component={MovieDelete} />
          <Route path="/movies/select" exact component={MovieSelect} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
