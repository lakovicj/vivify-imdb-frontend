import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { logIn } from '../../store/actions/AuthActions';
import { loginSchema } from '../forms/validation/authSchemas';

class Login extends Component {
  
  state = {
    email: '',
    password: ''
  };

  handleInputChange = field => event => this.setState({ [field]: event.target.value });

  submit = event => {
    event.preventDefault();

    let logInData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.logIn(logInData);
  };


  /*
  submit = (credentials, setSubmitting) => {
    this.props.logIn(credentials);
    setSubmitting(false);
  }
  */

  render() {
    return (
      /*
      <div>
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          validationSchema={loginSchema}
          onSubmit={(values, {setSubmitting}) => this.submit(values, setSubmitting)}
        >
          {({ errors, touched, isSubmitting}) => (
            <article className="card-body">
            <Form autoComplete="off"> 
              <div className="form-row">
                <Field type="email" name="email" placeholder="Email"/>
                {touched.email && errors.email && <p>{errors.email}</p>}
              </div>
              <div className="form-row">  
                <Field type="password" name="password" placeholder="Password"/>
                {touched.password && errors.password && <p>{errors.password}</p>}
              </div> 
              {this.props.loginError && <p>Bad credentials!</p>} 
              <button disabled={isSubmitting} type="submit">Log In</button>
            </Form>
          </article>
          )}
        </Formik>
      </div>
      */
      <div>
        <form onSubmit={this.submit}>
          <h2>Log In</h2>
          <input
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleInputChange('email')}
          />
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleInputChange('password')}
          />
          <input type="submit" value="Log in" />
          {this.props.loginError && <p>Login error</p>}
        </form>
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
