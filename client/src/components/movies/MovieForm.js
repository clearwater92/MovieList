import React, { Component } from 'react';
import '../../styles/main.css';
import { Field, reduxForm } from 'redux-form';

// const MovieCreate = () => {
//   return <div>MovieCreate</div>;
// };
class MovieForm extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div>
          <div>{error}</div>
        </div>
      );
    }
  }

  // input과 meta는 원래 Field의 props에 들어있었고
  // label은 추가해 준 것입니다.
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label className="px-1 text-sm text-gray-600">{label}</label>
        <input
          className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          {...input}
          //{...formProps.input}
          // onChange={formProps.input.onChange}
          // value={formProps.input.value}
          autoComplete="off"
        />
        {this.renderError(meta)}
      </div>
    );
  };

  submit = (formValues) => {
    console.log(this.props);
    this.props.submit(formValues);
  };

  render() {
    return (
      <form className="mt-8" onSubmit={this.props.handleSubmit(this.submit)}>
        <div className="mx-auto max-w-lg ">
          <Field
            name="title"
            component={this.renderInput}
            label="Enter Title"
          />
          <Field
            name="description"
            component={this.renderInput}
            label="Enter Description"
          />
          <button
            className="mt-3 text-lg font-semibold
            bg-gray-800 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
          >
            Register
          </button>
        </div>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

// export default reduxForm({
//   form: 'movieCreate',
//   validate
// })(MovieCreate);

// reduxForm() 설정 객체를 취해서 새로운 함수를 반환합니다.
// form 컴포넌트를 wrapping 하고 사용자 상호작용을 바인딩하여 Redux 발동합니다.

export default reduxForm({
	form: 'movieForm',
	validate
})(MovieForm);