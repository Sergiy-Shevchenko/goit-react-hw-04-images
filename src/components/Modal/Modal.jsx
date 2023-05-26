import { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <div className={css.Overlay} onClick={handleBackdropClick}>
      <div className={css.Modal}>{children}</div>
    </div>
  );
};
export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

//------------------------------------------3-DZ----------------------------------------
// export default class Modal extends Component {
//   state = {
//     modalImage: '',
//   };

//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = event => {
//     if (event.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleBackdropClick = event => {
//     if (event.currentTarget === event.target) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     const { children } = this.props;
//     return createPortal(
//       <div className={css.Overlay} onClick={this.handleBackdropClick}>
//         <div className={css.Modal}>{children}</div>
//       </div>,
//       modalRoot
//     );
//   }
// }

// Modal.propTypes = {
//   onClose: PropTypes.func.isRequired,
// }

//----------------------------------------------------------------------------------------------
// import React, { Component } from 'react';
// import { createPortal } from 'react-dom';
// import css from './Modal.module.css';

// const modalRoot = document.querySelector('#modal-root');

// export default class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = event => {
//     if (event.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleBackdropClick = event => {
//     if (event.currentTarget === event.target) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     const {largeImageURL} = this.props.image;
//     return createPortal(
//       <div className={css.Overlay} onClick={this.handleBackdropClick}>
//         <div className={css.Modal}>
//           <img src={largeImageURL} alt="img" />
//         </div>
//       </div>,
//       modalRoot
//     );
//   }
// }

//-------------------------------------------------------------------
