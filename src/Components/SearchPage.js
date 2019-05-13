import React from 'react';
import{ Link } from 'react-router-dom';
import Book from './Books';
import * as BooksAPI from '../BooksAPI';

class SearchPage extends React.Component{

  state={
      query:'',
      queryResults:[],
      
  }
  updateQuery = (query) =>{
    this.setState({ query })
    this.showResults(query)
  }

  showResults= (query) => {
    if(query){
      BooksAPI.search(query)
      .then((queryResults) =>{
        if(queryResults.error){
          this.setState({queryResults:[]})
        }else{
          this.setState({queryResults})
        }
      })
    }else{
      this.setState({queryResults:[]})
    }
  }


render() {
const{ books,updateShelf}=this.props
return (
  <div className="search-books">
    <div className="search-books-bar">
    <Link className="close-search" to="/">Close</Link>
      <div className="search-books-input-wrapper">
        <input
        type="text"
        placeholder="Search by title or author"
        value={this.state.query}
        onChange={(event) =>  this.updateQuery(event.target.value)}
        />
      </div>
    </div>
    <div className="search-books-results">
      <ol className="books-grid">
		{
        this.state.queryResults.map(queryResult=>{
          	let shelf="none";
        		books.map(book=> (book.id===queryResult.id? shelf=book.shelf: '')
		);
		return(
			<li key={queryResult.id}>
          	<Book
              updateShelf={updateShelf}
              book={queryResult}
			  currentShelf={shelf}
              />
			</li>
			)
        })
        }
      </ol>
    </div>
  </div>
  );
  }
}

export default SearchPage;