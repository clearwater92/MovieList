import '../../styles/main.css';
import React, { Component } from 'react';
import { fetchMovies } from '../../actions';
import { connect } from 'react-redux';

class MovieList extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  renderList() {
    return this.props.movies.map((movie) => {
      return (
        <div className="flex flex-wrap text-center justify-center" key={movie.id}>
          <div className="w-full lg:w-6/12 px-4">
          <h2 className="text-4xl font-semibold text-black">{movie.title}</h2>
          <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">{movie.description}</p>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Movies</h2>
        <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { movies: Object.values(state.movies) };
};

export default connect(mapStateToProps, { fetchMovies })(MovieList);
