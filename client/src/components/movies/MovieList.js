import '../../styles/main.css';
import React, { Component } from 'react';
import { fetchMovies } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class MovieList extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  renderAdmin(movie) {
    if (movie.userId === this.props.currentUserId) {
      return (
        <div className="flex flex-nowrap">
          <Link to={`/movies/edit/${movie.id}`} className="text-white font-semibold transition duration-200 ease-in-out focus:outline-none focus:shadow-outline py-2 px-4 mr-1 rounded bg-green-500 hover:bg-green-700">
            Edit
          </Link>
          <button className="text-white font-semibold transition duration-200 ease-in-out focus:outline-none focus:shadow-outline py-2 px-4 mr-1 rounded bg-red-500 hover:bg-red-700">
            Delete
          </button>
        </div>
      );
    }
  }

  renderList() {
    return this.props.movies.map((movie) => {
      return (
        <div
          className="flex flex-wrap text-center justify-center"
          key={movie.id}
        >
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold text-black">{movie.title}</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
              {movie.description}
            </p>
            {this.renderAdmin(movie)}
          </div>
        </div>
      );
    });
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div className="flex flex-row-reverse">
          <button className="text-white font-semibold transition duration-200 ease-in-out focus:outline-none focus:shadow-outline py-2 px-4 mr-1 rounded bg-gray-800 hover:bg-black">
            <Link to="/movies/new">Register Movie</Link>
          </button>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Movies</h2>
        {this.renderCreate()}
        <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
          {this.renderList()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: Object.values(state.movies),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchMovies })(MovieList);
