import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { register } from '../../store/actions/AuthActions';
import { registerSchema } from '../forms/validation/authSchemas';

class Register extends Component {

  submit = (data, setSubmitting) => {
    console.log(data);
    const {name, email, password} = data;
    const registerData = {name, email, password}

    this.props.register(registerData)
    setSubmitting(false);
  }

  render() {
    return (
      <div>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
          }} 
          validationSchema={registerSchema} 
          onSubmit={(values, {setSubmitting}) => this.submit(values, setSubmitting)}
        >
          {({ errors, touched, isSubmitting }) => (
            <article className="card-body">
              <Form autoComplete="off"> 
                <div className="form-row">
                  <Field type="text" name="name" placeholder="Name"/>
                  {touched.name && errors.name && <p>{errors.name}</p>}
                </div>
                <div className="form-row">
                  <Field type="email" name="email" placeholder="Email"/>
                  {touched.email && errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-row">  
                  <Field type="password" name="password" placeholder="Password"/>
                  {touched.password && errors.password && <p>{errors.password}</p>}
                </div>  
                <div className="form-row">
                  <Field type="password" name="confirmPassword" placeholder="Confirm password"/>
                  {touched.confirmPassword && errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                </div> 
                {this.props.registerError && <p>Email is already taken</p>}
                <button disabled={isSubmitting} type="submit">Register</button>
              </Form>
            </article>
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
