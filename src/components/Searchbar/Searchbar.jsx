// import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import scss from './Searchbar.module.scss';
import { Component } from 'react';

const initialValues = {
  searchName: '',
};

// let schema = yup.object().shape({
//   seach: yup.string().required(),
// });

class Searchbar extends Component {
  state = {
    searchName: '',
  };

  onSubmitClick = (value, { resetForm }) => {
    const searchName = value.searchName.trim().toLowerCase();

    if (searchName === '') {
      alert('this field is empty');
      return;
    }
    this.props.onSubmit(searchName);

    resetForm();
  };

  render() {
    return (
      <header>
        <Formik
          initialValues={initialValues}
          onSubmit={this.onSubmitClick}
          // validationSchema={schema}
        >
          <Form className={scss.Searchbar}>
            <button type="submit" className={scss.SearchFormButton}>
              <span>Search</span>
            </button>
            <label className={scss.SearchFormLabel}>
              <Field
                autoFocus
                type="text"
                autoComplete="off"
                placeholder="Search images and photos"
                name="searchName"
                className={scss.SearchFormInput}
              />
              <ErrorMessage name="searchName" />
            </label>
          </Form>
        </Formik>
      </header>
    );
  }
}

export default Searchbar;
