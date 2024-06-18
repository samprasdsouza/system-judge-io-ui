import React from 'react';

import Button from '../Button';
import { ModalBuilder } from '../Modal';
import ErrorFace from '../svgs/ErrorFace';

export default function ErrorModal({ showModal, message, onOk }) {
  return (
    <ModalBuilder
      show={showModal}
      onHide={onOk}
      showHeader={false}
      showFooter={false}
      style={{ marginTop: '25px' }}
    >
      <div className="p-3" style={{ padding: '32px 48px' }}>
        <div className="mb-3">
          <ErrorFace />
        </div>
        <span className="mt-4 text-13 px-12">{message}</span>
        <div className="mt-4 d-flex justify-content-center">
          <Button name="Ok" variant="active" className="me-3" onClick={onOk} />
        </div>
      </div>
    </ModalBuilder>
  );
}
