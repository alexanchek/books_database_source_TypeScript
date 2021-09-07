import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { NavBar } from './components/Navbar/Navbar'
import { MoviesList } from './components/Pages/MoviesList/MoviesList'
import { MoviesAdd } from './components/Pages/MoviesAdd/MoviesAdd'
import { BooksAdd } from './components/Pages/BooksAdd/BooksAdd'
import { BooksList } from './components/Pages/BooksList/BooksList'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
          <Switch>
              <Route component={MoviesList} exact path="/"/>
              <Route component={MoviesList} exact path="/movies"/>
              <Route component={MoviesAdd} exact path="/movies-add"/>
              <Route component={BooksList} exact path="/books"/>
              <Route component={BooksAdd} exact path="/books-add"/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
