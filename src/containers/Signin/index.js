import React, { useEffect, useState } from 'react';
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

  {/*const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const [error, setError] = useState('');*/}


  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  {/*const userLogin = (e) => {


    e.preventDefault();

    const user = {
      email, password
    }

    dispatch(login(user));
  }
*/}
  
  {/* 
const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
   
    validationSchema: Yup.object({

      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(5, 'Minimun 5 chars')
        .required('Required'),

    }),
    onSubmit:
      values => {
        dispatch(login(values));
        console.log(values);

      },
  });

*/}
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
        <Row style={{ marginTop: '50px' }}>
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