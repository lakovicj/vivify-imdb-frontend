import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { logIn } from '../../store/actions/AuthActions';
import { loginSchema } from '../forms/validation/authSchemas';

class Login extends Component {

  submit = (credentials, setSubmitting) => {
    this.props.logIn(credentials);
    setSubmitting(false);
  }

  render() {
    return (

      <div>
        <div className="jumbotron">
          <h2 className="display-4">Welcome to Pocket IMDB</h2>
          <h3 className="display-5">Log In</h3>
        </div>
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          validationSchema={loginSchema}
          onSubmit={(values, { setSubmitting }) => this.submit(values, setSubmitting)}
        >
          {({ errors, touched, isSubmitting }) => (
            <div className="container">
              <div className="row">
                <div className="col-md-6 offset-md-3 col-lg-6 offset-lg-3">
                  <article className="card-body">
                    <Form autoComplete="off">
                      <div className="form-group">
                        <Field type="email" name="email" placeholder="Email" className="form-control" />
                        {touched.email && errors.email && <small className="text-danger">{errors.email}</small>}
                      </div>
                      <div className="form-group">
                        <Field type="password" name="password" placeholder="Password" className="form-control" />
                        {touched.password && errors.password && <small className="text-danger">{errors.password}</small>}
                      </div>
                      {this.props.loginError && <p className="text-danger">Bad credentials!</p>}
                      <button disabled={isSubmitting} type="submit" className="btn btn-outline-primary">Log In</button>
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
    loginError: state.error.loginError
  };
};

const mapDispatchToProps = {
  logIn
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
