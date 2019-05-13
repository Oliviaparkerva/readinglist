import React from 'react';

class Book extends React.Component{

  render(){
  const {book, currentShelf, updateShelf} = this.props

  return(

      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks?book.imageLinks.thumbnail:"https://via.placeholder.com/128x193/4286f4/FFFFFF.png?text=Sorry+No+Image"}")` }}></div>
          <div className="book-shelf-changer">
            <select
              value={currentShelf}
              onChange={(event) => updateShelf(book, event.target.value)}>

              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>


    )
  }
}

export default Book;
// eslint-disable-next-line
{/*This is a book component it just builds the individual books that get called into the shelves on the main page or the search page
	The value of the books needs to be the same on the main and search pages. It is marked as current shelf passed down from Page->shelves
    Items like author and title can accept props from the parents
    IF theres no imageLinks available fill in the spot with a placeholder of the correct size via.placeholdeer.com allows customization
*/}