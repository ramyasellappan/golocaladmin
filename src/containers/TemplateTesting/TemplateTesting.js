import React, { useEffect } from 'react'
import Template from '../../components/UI/Template/Template';
import Layout from '../../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../actions/template.action';
import { Row, Col } from 'react-bootstrap';
/**
* @author
* @function TemplateTesting
**/

const TemplateTesting = (props) => {

    const template = useSelector(state => state.template);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProduct());


    }, []);

     const renderCategories = (categories) => {
        let myCategories = [];
        for (let template of categories) {
            myCategories.push(
            
                    <li>
                        {template.name}
                    {/* <Template 
                    title={template.name}
                    description={template.description}
                    src={template.productPictures}
                    price={template.price}
                    />     */}               

                    </li>

            );
        }
        return myCategories;
    }  

    return (
        <Layout sidebar>
            <h1>Product</h1>
            <ul>

             {renderCategories(template.categories)}
            </ul>

        </Layout>

    )

}

export default TemplateTesting;