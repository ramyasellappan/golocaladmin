import React  from 'react'
import Layout from '../../components/Layout'
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import Input from '../../components/UI/Input';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../actions';
import { Formik } from 'formik';
import * as yup from 'yup';
/**
* @author
* @function Signup
**/

const Signup = (props) => {
 

  const auth = useSelector(state => state.auth);
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();
 
  const schema = yup.object({
    firstName: yup.string()
      .required('First Name is Required'),
    lastName: yup.string()
      .required('Last Name is Required'),
    email: yup.string()
      .email('Invalid email address')
      .required('Email is Required'),
    password: yup.string()
      .required('Password is Required')
      .min(6, "Password must be 6 characters at minimum"),
    phonenumber: yup.string()
      .required('Phone number is Required')
      .min(10, "Valid Phone number required"),



  });

  if (auth.authenticate) {
    return <Redirect to={'/'} />
  }

  
  return (
    <Layout>
      <Container >
        {user.message}
        <Row style={{ marginTop: '50px' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Formik
              validationSchema={schema}
              onSubmit={values => { dispatch(signup(values)) }}
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                phonenumber: '',
              }}
            >
              {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
              }) => (
                  <Form onSubmit={handleSubmit}>
                    <Input
                      label="First Name"
                      type="text"
                      placeholder="firstName"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.firstName && errors.firstName}
                      errormessage={errors.firstName}
                    />
                    <Input
                      label="Last Name"
                      type="text"
                      placeholder="lastName"
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.lastName && errors.lastName}
                      errormessage={errors.lastName}
                    />

                    <Input
                      label="Email"
                      type="email"
                      placeholder="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.email && errors.email}
                      errormessage={errors.email}
                    />

                    <Input
                      label="Password"
                      type="password"
                      placeholder="password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.password && errors.password}
                      errormessage={errors.password}
                    />
                     <Input
                      label="Phone Number"
                      type="phonenumber"
                      placeholder="phonenumber"
                      name="phonenumber"
                      value={values.phonenumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.phonenumber && errors.phonenumber}
                      errormessage={errors.phonenumber}
                    />
                    <Button type="submit">Submit</Button>
                  </Form>
                )}
            </Formik>
          </Col>
        </Row>

      </Container>
    </Layout>
  )

}

export default Signup;