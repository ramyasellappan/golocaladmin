import React from 'react';
import Layout from '../../components/Layout';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import Input from '../../components/UI/Input';
import { login } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';


/**
* @author
* @function Signin
**/

const Signin = (props) => {

 


  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

 
  const schema = yup.object({

    email: yup.string().email('Invalid email address').required('Email is Required'),
    password: yup.string().required('Password is Required'),


  });
  if (auth.authenticate) {
    return <Redirect to={'/'} />
  }

  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: '80px' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Formik
          
              validationSchema={schema}
              onSubmit={values => { dispatch(login(values)) }}
              initialValues={{
                email: '',
                password: '',
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

export default Signin;