// import React, { Component } from 'react';
import { useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import {ImageGallery} from './ImageGallery/ImageGallery';

export const App = () => {
  const [tags, setTags] = useState('');
  const [imageItem, setImageItem] = useState([]);
  const [page, setPage] = useState(1);

  const handleFormSubmit = (tags, imageItem, page) => {
    setTags(tags);
    setImageItem(imageItem);
    setPage(page);
     };

  return (
    <div>
      <Searchbar SubmitTagProps={handleFormSubmit} />
      <ImageGallery TagsProps={tags}></ImageGallery>
    </div>
  );
};

//----------------------------------------3-DZ----------------------------------
// export class App extends Component {
//   state = {
//     tags: '',
//   };

//   handleFormSubmit = tags => {
//     this.setState({ tags });
//   };

//   render() {
//     return (
//       <div>
//         <Searchbar SubmitTagProps={this.handleFormSubmit} />
//         <ImageGallery imageTagsProps={this.state.tags}></ImageGallery>
//       </div>
//     );
//   }
// }

// export default App;
//----------------------------------------------------------------------------------------------------------------
// import React, { Component } from 'react';
// import { fetchImages } from './API/api';
// import ImageGallery from './ImageGallery/ImageGallery';
// import { Searchbar } from './Searchbar/Searchbar';
// import Loader from './Loader/Loader';
// import Button from './Button/Button';

// import css from './styles.module.css';

// let page = 1;

// class App extends Component {
//   state = {
//     inputData: '',
//     items: [],
//     totalHits: 0,
//     status: 'idle',
//     page: 1
//   };

//   handleSubmit = async inputData =>
//   { page = 1;
//     if (inputData.trim() === '') {
//        alert('Please enter search name');
//        return
//    } else {

// try {
//         this.setState({ status: 'pending' });
//         const {totalHits, hits} = await fetchImages(inputData, page);
//         if (hits.length < 1) {
//           this.setState ({status: 'idle'})
//         alert( 'Sorry, there are no images matching your search query. Please try again.')
//         }
//         else {
//         this.setState ({
//           items: hits,
//           inputData: '',
//           totalHits: totalHits,
//           status: 'resolved'
//         });
//       }

// } catch (error) {
//   this.setState({status: 'rejected'})
// }
//   }
// };

// onNextPage = async () => {
//   this.setState({status:'pending'})

// try{
//   const {hits} = await fetchImages(this.state.inputData, (page+=1))
//   this.setState(prevState => ({
//     items: [...prevState.items, ...hits],
//     // page: page + 1,
//     status: 'resolved'
//   }))

// } catch (error) {
//   this.setState({status: 'rejected'})
// }
// }

//   render() {
//     const {totalHits, status, items} = this.state;

//     if (status === 'idle') {
//       return (
//         <div className={css.App}>
//       <Searchbar onSubmit={this.handleSubmit}/>
//       </div>
//       )
//     }

//     if (status === 'pending') {
//       return (
//         <div className={css.App}>
//       <Searchbar onSubmit={this.handleSubmit}/>
//       <Loader/>
//       </div>
//       )
//     }

//     if (status === 'rejected') {
//       return (
//         <div className={css.App}>
//       <Searchbar onSubmit={this.handleSubmit}/>
//      <p>Something wrong, try later</p>
//       </div>
//       )
//     }

//     if (status === 'resolved') {
//       return (
//         <div className={css.App}>
//      <Searchbar onSubmit={this.handleSubmit}/>
//      <ImageGallery page={page} items={this.state.items}/>
//      {totalHits > 12 && totalHits > items.length && (
//      <Button onClick={this.onNextPage}/>)}

//       </div>
//       )
//     }

//   }
// }

// export default App;
