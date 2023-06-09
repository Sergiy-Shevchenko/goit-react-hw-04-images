import css from './ImageGallery.module.css';

export const ImageGallery = ({ children }) => {
  return (
    <div>
      <ul className={css.ImageGallery}>{children}</ul>
    </div>
  );
};

//----------------------------------3-DZ-----------------------------------------------

// export default class ImageGallery extends Component {
//   state = {
//     imageItem: [],
//     error: null,
//     status: 'idle',
//     page: 1,
//     nextPage: false,
//     showModal: false,
//     modalImage: '',
//   };

//   //----------------------------------old-fetch--------------------------------------------------------------------
//   // componentDidUpdate(prevProps, prevState, ) {
//   //   if (prevProps.imageTagsProps !== this.props.imageTagsProps || prevState.page !== this.state.page) {
//   //     this.setState({ status: 'pending' });

//   //     fetch(
//   //       `https://pixabay.com/api/?q=${this.props.imageTagsProps}&key=34892278-814f9e10ef5118b0e5ee7c1d3&image_type=photo&orientation=horizontal&per_page=12&page=${this.state.page}`
//   //     )
//   //       .then(response => {
//   //         if (response.ok) {
//   //           return response.json();
//   //         }
//   //         return Promise.reject(new Error(`Error!`));
//   //       })
//   //       .then(({ hits }) => {
//   //         if (hits.length === 0) {
//   //           return this.setState({

//   //             // status: 'rejected',
//   //             error: alert(
//   //               'Sorry, there are no images matching your search query. Please try again.'
//   //             ),
//   //           });
//   //         }
//   //         this.setState({
//   //           imageItem: [...prevState.imageItem, ...hits],
//   //           status: 'resolved',

//   //         });
//   //       })
//   //       .catch(error => this.setState({ error, status: 'rejected' }));
//   //   }

//   // }

//   //----------------------------------------new-fetch-------------------------------------------------
//   // componentDidUpdate(prevProps, prevState) {
//   //   if (prevProps.imageTagsProps !== this.props.imageTagsProps) {
//   //     this.setState({ status: 'pending' });

//   //     fetch(
//   //       `https://pixabay.com/api/?q=${this.props.imageTagsProps}&key=34892278-814f9e10ef5118b0e5ee7c1d3&image_type=photo&orientation=horizontal&per_page=12&page=${this.state.page}`
//   //     )
//   //       .then(response => {
//   //         if (response.ok) {
//   //           return response.json();
//   //         }
//   //         return Promise.reject(new Error(`Error!`));
//   //       })
//   //       .then(({ hits }) => {
//   //         if (hits.length === 0) {
//   //           return this.setState({
//   //             imageItem: hits,
//   //                           status: 'rejected',
//   //             error: alert(
//   //               'Sorry, there are no images matching your search query. Please try again.'
//   //             ),
//   //           });
//   //         }
//   //         this.setState({
//   //           imageItem: hits,
//   //           status: 'resolved',
//   //           page: 1,
//   //         });
//   //       })
//   //       .catch(error => this.setState({ error, status: 'rejected' }));
//   //   }

//   //   if (prevState.page !== this.state.page && this.state.page !== 1) {
//   //     this.setState({ nextPage: true });
//   //     fetch(
//   //       `https://pixabay.com/api/?q=${this.props.imageTagsProps}&key=34892278-814f9e10ef5118b0e5ee7c1d3&image_type=photo&orientation=horizontal&per_page=12&page=${this.state.page}`
//   //     )
//   //       .then(response => {
//   //         if (response.ok) {
//   //           return response.json();
//   //         }
//   //         return Promise.reject(new Error(`Error!`));
//   //       })
//   //       .then(({ hits }) => {
//   //         if (hits.length === 0) {
//   //           return this.setState({
//   //             imageItem: hits,
//   //             status: 'rejected',
//   //             error: alert(
//   //               'Sorry, there are no images matching your search query. Please try again.'
//   //             ),
//   //           });
//   //         }
//   //         this.setState(prevState => ({
//   //           imageItem: [...prevState.imageItem, ...hits],
//   //           nextPage: false,
//   //           status: 'resolved',
//   //         }));
//   //       })

//   //       .catch(error => this.setState({ error, status: 'rejected' }));
//   //   }

//   //  }
//   //---------------------------------------------hetch-api----------------------------------------------------------------------

//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.imageTagsProps !== this.props.imageTagsProps) {
//       this.setState({ status: 'pending' });

//       fetchPhotos(this.props.imageTagsProps, 1)
//         .then(({ hits }) => {
//           if (hits.length === 0) {
//             return this.setState({
//               imageItem: hits,
//               status: 'rejected',
//               error: alert(
//                 'Sorry, there are no images matching your search query. Please try again.'
//               ),
//             });
//           }
//           this.setState({
//             imageItem: hits,
//             status: 'resolved',
//             page: 1,
//           });
//         })
//         .catch(error => this.setState({ error, status: 'rejected' }));
//     }

//     if (prevState.page !== this.state.page && this.state.page !== 1) {
//       this.setState({ nextPage: true });
//       fetchPhotos(this.props.imageTagsProps, this.state.page)
//         .then(({ hits }) => {
//           if (hits.length === 0) {
//             return this.setState({
//               imageItem: hits,
//               status: 'rejected',
//               error: alert(
//                 'Sorry, there are no images matching your search query. Please try again.'
//               ),
//             });
//           }
//           this.setState(prevState => ({
//             imageItem: [...prevState.imageItem, ...hits],
//             nextPage: false,
//             status: 'resolved',
//           }));
//         })

//         .catch(error => this.setState({ error, status: 'rejected' }));
//     }
//   }
//   //-------------------------------------------------------------------------------------------
//   openModal = webformatURL => {
//     this.setState({
//       showModal: true,
//       modalImage: webformatURL,
//     });
//   };

//   togleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };

//   onClickLadMore = () => {
//     this.setState(({ page }) => ({ page: page + 1 }));
//   };

//   render() {
//     const { imageItem, error, status, showModal, modalImage, nextPage } =
//       this.state;

//     if (status === 'idle') {
//       return <></>;
//     }

//     if (status === 'pending') {
//       return <SearchLoader />;
//     }

//     if (status === 'rejected') {
//       return <p>{error}</p>;
//     }

//     if (status === 'resolved') {
//       return (
//         <div>
//           <ul className={css.ImageGallery}>
//             <ImageGalleryItem
//               imageItemProps={imageItem}
//               onImgClick={this.openModal}
//             />
//           </ul>
//           {nextPage ? (
//             <SearchLoader />
//           ) : (
//             <Button onClickBtn={() => this.onClickLadMore()} />
//           )}
//           {showModal && (
//             <Modal onClose={this.togleModal}>
//               <img src={modalImage} alt={'webformatURL'} />
//             </Modal>
//           )}
//         </div>
//       );
//     }
//   }
// }

//--------------------------------------------2-var---------------------------
// import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
// import css from './ImageGallery.module.css';

// function ImageGallery({items}) {
//   return(
// <>
//           <ul className={css.ImageGallery}>
//             {items.map(item => (
//                <ImageGalleryItem key={item.id} item={item}/>
//             ))}

//           </ul>
// </>
//   )
// }

// export default ImageGallery;
