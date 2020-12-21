import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { register } from '../../store/actions/AuthActions';
import { registerSchema } from '../forms/validation/authSchemas';

class Register extends Component {

  submit = (data, setSubmitting) => {
    console.log(data);
    const { name, email, password } = data;
    const registerData = { name, email, password }

    this.props.register(registerData)
    setSubmitting(false);
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h2 className="display-4">Welcome to Pocket IMDB</h2>
          <h3 className="display-5">Sign Up</h3>
        </div>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
          }}
          validationSchema={registerSchema}
          onSubmit={(values, { setSubmitting }) => this.submit(values, setSubmitting)}
        >
          {({ errors, touched, isSubmitting }) => (
            <div className="container">
              <div className="row">
                <div className="col-md-6 offset-md-3 col-lg-6 offset-lg-3">
                  <article className="card-body">
                    <Form autoComplete="off">
                      <div className="form-group">
                        <Field type="text" name="name" placeholder="Name" className="form-control" />
                        {touched.name && errors.name && <small className="text-danger">{errors.name}</small>}
                      </div>
                      <div className="form-group">
                        <Field type="email" name="email" placeholder="Email" className="form-control" />
                        {touched.email && errors.email && <small className="text-danger">{errors.email}</small>}
                      </div>
                      <div className="form-group">
                        <Field type="password" name="password" placeholder="Password" className="form-control" />
                        {touched.password && errors.password && <small className="text-danger">{errors.password}</small>}
                      </div>
                      <div className="form-group">
                        <Field type="password" name="confirmPassword" placeholder="Confirm password" className="form-control" />
                        {touched.confirmPassword && errors.confirmPassword && <small className="text-danger">{errors.confirmPassword}</small>}
                      </div>
                      {this.props.registerError && <p className="text-danger">Email is already taken</p>}
                      <button disabled={isSubmitting} type="submit" className="btn btn-outline-primary">Register</button>
                    </Form>
                  </article>
                </div>
              </div>
            </div>
          )}
        </Formik>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    registerError: state.error.registerError
  };
};

const mapDispatchToProps = {
  register
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Register)
);
