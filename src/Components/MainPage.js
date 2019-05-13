import React from 'react';
import{ Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Shelf from './Shelves';

class MainPage extends React.Component{

  state = {
  	books:[]
    
  }
	componentDidMount(){
  	BooksAPI.getAll().then((allTheBooks) => {
    	this.setState({books:allTheBooks})
    })
  }
  
  render(){
   return(
    <div>
      <div  className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf
              name="Currently Reading"
              books={this.state.books.filter(book => book.shelf === "currentlyReading")}
    		  updateShelf={this.props.updateShelf}
			 />
            <Shelf
              name="Want to Read"
              books={this.state.books.filter(book => book.shelf === "wantToRead")}
			  updateShelf={this.props.updateShelf}
            />
            <Shelf
              name="Read"
              books={this.state.books.filter(book => book.shelf === "read")}
			  updateShelf={this.props.updateShelf}
            />

          </div>
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  )
  }
}


export default MainPage;
// eslint-disable-next-line
{/*The shelves get their books by running a filter and checking what the state(placement) of the books is after they're rendered and pulling them into the shelf once a match is made to the book.shelf.IMPORTANT TO FILTER BY THE STATE OF THE BOOKS NOT THE PROPS AND DONT FORGET TO CONCAT otherwise the choice will change but it will NOT produce no new array that tacs the affected book on.
Getting updateShelf method from App.js as prop
*/}