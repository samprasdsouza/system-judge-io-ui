import Modal from 'react-bootstrap/Modal'

export const ModalBuilder = ({
  show,
  onHide,
  title,
  subTitle,
  children,
  footer,
  size,
  style,
  dialogClassName,
  showCloseButton = true,
  showHeader = true,
  showFooter = true,
  centered = false
}) => {
  return (
    <Modal show={show} onHide={onHide} size={size} dialogClassName={dialogClassName} backdrop='static' style={style} centered={centered}>
      {showHeader && (
        <Modal.Header
          className='px-3 py-2 text-start'
          style={{ height: subTitle ? '54px' : '48px' }}
          closeButton={showCloseButton}
        >
          <Modal.Title>
            <div className='text-14 common-modal-title-color'> {title} </div>
            {subTitle && (
              <div className='text-12 text-light-grey common-modal-title-color'>{subTitle}</div>
            )}
          </Modal.Title>
        </Modal.Header>
      )}
      <Modal.Body className='p-0'>{children}</Modal.Body>
      {showFooter && <Modal.Footer>{footer}</Modal.Footer>}
    </Modal>
  )
}
