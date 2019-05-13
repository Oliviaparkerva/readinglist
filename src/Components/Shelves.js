import React from 'react';
import Book from './Books';

class Shelf extends React.Component{

  render(){
    const {books,updateShelf, name} = this.props

    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          	{
              books.map(book => (
                <li key={book.id}>
                  <Book
                    book={book}
                    updateShelf={updateShelf}
					currentShelf={book.shelf}

                  />
                </li>
              ))
            }

          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf;
// eslint-disable-next-line
{/* https://is.gd/StJbGb
  */}