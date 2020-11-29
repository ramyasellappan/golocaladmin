import React from 'react';
import Modal from '../../../components/UI/Modal';


const DeleteCategoryModal = (props) => {


    const {
        show,
        handleClose,
        modalTitle,
        

    } = props;
    return (
        <Modal
            modalTitle="Confirm"
            show={deleteCategoryModal}
            handleClose={() => setDeleteCategoryModal(false)}
            buttons={[
                {
                    label: 'No',
                    color: 'primary',
                    onClick: () => {
                        alert('no');
                    }
                },
                {
                    label: 'Yes',
                    color: 'danger',
                    onClick: deleteCategories
                }
            ]}
        >
            <h5>Expanded</h5>
            {
                expandedArray.map((item, index) => <span key={index}>{item.name}</span>)
            }
            <h5>Checked</h5>
            {
                checkedArray.map((item, index) => <span key={index}>{item.name}</span>)
            }

        </Modal>
    );
}


export default DeleteCategoryModal;