import React from 'react'
import { Modal, Icon, TransitionablePortal } from 'semantic-ui-react';

export default function BasicModal(props) {
    const { show, setShow, title, children, animation, ...rest} = props;

    const duration = animation ? 300 : 0;

    const onClose = () => setShow(false);

    return (
        <TransitionablePortal open={show} transition={{animation: 'horizontal flip', duration: duration}}>
            <Modal className="basic-modal" open={show} onClose={onClose} {...rest}>
                <Modal.Header id="modal-header">
                    <span>{title}</span>
                    <Icon name="close" onClick={onClose}/>
                </Modal.Header>
                <Modal.Content>
                    {children}
                </Modal.Content>
            </Modal>
        </TransitionablePortal>    
    )
}
