import React from 'react';
import { Row, Col, } from 'react-bootstrap';
import Modal from '../../../components/UI/Modal';
import Input from '../../../components/UI/Input';


const AddCategoryModal = (props) => {

    const {
        show,
        handleClose,
        modalTitle,
        categoryName,
        setCategoryName,
        parentCategoryId,
        setParentCategoryId,
        categoryList,
        handleCategoryImage,

    } = props;


    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalTitle={modalTitle}
        >
            <Row>
                <Col>
                    <Input
                        label="Category Name"
                        placeholder={'Category Name'}
                        value={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                        className="form-control-sm"
                    />
                </Col>
                <Col>
                    <select
                        className="form-control form-control-sm"
                        value={parentCategoryId}
                        onChange={(e) => setParentCategoryId(e.target.value)}
                    >
                        <option>select category</option>
                        {
                            categoryList.map(option =>
                                <option key={option.value} value={option.value}>{option.name}</option>)
                        }
                    </select>
                </Col>
            </Row>
            <Row>
                <Col>
                    <input type="file" name="categoryImage" onChange={handleCategoryImage} />

                </Col>
            </Row>

        </Modal>
    );
}

export default AddCategoryModal;