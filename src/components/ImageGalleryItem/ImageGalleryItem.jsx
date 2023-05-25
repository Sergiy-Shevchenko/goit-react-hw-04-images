import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ imageItemProps, onImgClick }) {
  return (
    <>
      {imageItemProps.map(({ id, webformatURL, largeImageURL, tags }) => (
        <li key={id} className={css.ImageGalleryItem}>
          <img
            className={css.ImageGalleryItem__image}
            src={largeImageURL}
            alt={tags}
            onClick={() => onImgClick(webformatURL)}
          />
        </li>
      ))}
    </>
  );
}

ImageGalleryItem.propTypes = {
  onImgClick: PropTypes.func.isRequired,
  imageItemProps: PropTypes.arrayOf (
    PropTypes.shape({
      id: PropTypes.number.isRequired, 
      webformatURL: PropTypes.string.isRequired, 
      largeImageURL: PropTypes.string.isRequired, 
      tags: PropTypes.string.isRequired,
    })
  )

}


//-----------------------------------------------------------------------------------------------

// import React, { Component } from 'react';
// import Modal from 'components/Modal/Modal';
// import css from './ImageGalleryItem.module.css';

// class ImageGalleryItem extends Component {
//   state = {
//     showModal: false,
//   };

//   onModal = () => {
//     this.setState(({ showModal }) => ({ showModal: !showModal }));
//   };
//   render() {
//     const { item } = this.props;
//     const { webformatURL } = item;
//     return (
//       <li className={css.ImageGalleryItem}>
//         <img
//         onClick={this.onModal}
//           className={css.ImageGalleryItem__image}
//           src={webformatURL}
//           alt="img"

//         />
//         {this.state.showModal && <Modal onClose={this.onModal} image={item} />}
//       </li>
//     );
//   }
// }

// export default ImageGalleryItem;
