import Modal from 'react-modal';

export default function ImageModel({
  src,
  modalIsOpen,
  closeModal,
  full_name,
}) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className="flex items-center justify-center h-full"
      shouldCloseOnOverlayClick={true}
      style={{
        overlay: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        content: {
          position: 'relative',
          inset: 'auto',
        },
      }}
    >
      <img
        src={src}
        alt={full_name ? full_name : 'Image'}
        style={{
          maxWidth: '90vw',
          maxHeight: '90vh',
          objectFit: 'contain',
          zIndex: 1000,
        }}
      />
    </Modal>
  );
}
