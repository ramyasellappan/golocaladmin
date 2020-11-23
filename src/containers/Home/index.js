import React from 'react'
import { Container, Jumbotron,Row,Col, } from 'react-bootstrap'
import Layout from '../../components/Layout';
import './style.css'
import {NavLink} from 'react-router-dom';

/**
* @author
* @function Home
**/

const Home = (props) => {
  return (
    <div>
      <Layout sidebar>
        
       {/*<Jumbotron style={{margin: '5rem', background:'#fff' }} className="text-center">
          <h1> Welcome to GoLocal</h1>
  </Jumbotron>*/}

      </Layout>
    </div>


  )

}

export default Home;