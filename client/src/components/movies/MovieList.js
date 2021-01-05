import '../../styles/main.css';
import React, { Component } from 'react';
import { fetchMovies, fetchTmdb, addMovie } from '../../actions';
import { IMAGE_BASE_URL } from '../../apis/tmdb';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class MovieList extends Component {
  componentDidMount() {
    this.props.fetchTmdb();
    console.log('componentDidMount', this.props.fetchTmdb)
  }

  // renderAdmin(movie) {
  //   if (movie.userId === this.props.currentUserId) {
  //     return (
  //       <div className="flex flex-nowrap">
  //         <Link to={`/movies/edit/${movie.id}`} className="text-white font-semibold transition duration-200 ease-in-out focus:outline-none focus:shadow-outline py-2 px-4 mr-1 rounded bg-green-500 hover:bg-green-700">
  //           Edit
  //         </Link>
  //         <Link to={`/movies/delete/${movie.id}`} className="text-white font-semibold transition duration-200 ease-in-out focus:outline-none focus:shadow-outline py-2 px-4 mr-1 rounded bg-red-500 hover:bg-red-700">
  //           Delete
  //         </Link>
  //       </div>
  //     );
  //   }
  // }

  renderAdmin(movie) {
    return (
      <div>
        <Link to={`/movies/add/${movie.id}`}>Add to MY LIST</Link>
      </div>
    );
  }

  renderList() {
    console.log('list',this.props.movies);
    return this.props.movies.map((movie) => {
      return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg" key={movie.id}>
          <img alt={movie.original_title} src={`${IMAGE_BASE_URL}w1280${movie.backdrop_path}`} className="w-full" />

          <div className="px-6 py-4">
            <h2 className="font-bold text-blue-500 text-xl mb-2">{movie.title}</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
              {movie.overview}
            </p>
            {/* {this.renderAdmin(movie)} */}
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
      <div className="container mx-auto">
        <h2 className="">My Movies</h2>
        {this.renderCreate()}
        <div className="grid grid-cols-3 gap-4">
          {this.renderList()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state',state)
  return {
    movies: Object.values(state.tmdb),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchTmdb, addMovie })(MovieList);
