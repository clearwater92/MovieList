import _ from 'lodash';
import { Component } from 'react';
import { connect } from 'react-redux';
import MovieForm from './MovieForm';
import { fetchMovie, editMovie } from '../../actions';

class MovieEdit extends Component {
  componentDidMount() {
    console.log('before fetching');
    this.props.fetchMovie(this.props.match.params.id);
    console.log('fetched Movie !!');
  }

  submit = (formValues) => {
    this.props.editMovie(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.movie) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>Edit a Movie</h3>
        <MovieForm
          initialValues={_.pick(this.props.movie, 'title', 'description')}
          onSubmit={this.submit}
        ></MovieForm>
      </div>
    );
  }
}

//export default MovieEdit;
// 말 그대로 (스토어 안에 들어 있는) state를 props에 어떻게 엮을지 정하는 함수입니다.
const mapStateToProps = (state, ownProps) => {
  return { movie: state.movies[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchMovie, editMovie })(MovieEdit);
