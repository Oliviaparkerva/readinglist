import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import MainPage from './Components/MainPage';
import SearchPage from './Components/SearchPage';
import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {
  
  state={
  	books:[]
  }

  componentDidMount(){
  	BooksAPI.getAll().then((books) => {
    	this.setState({books})
    })
  }

  updateShelf = (book, shelf) => {
      BooksAPI.update(book, shelf).then(updatedBooks=>{
      book.shelf =shelf;
      this.setState(state=>({
        books:state.books.filter(b => b.id !== book.id).concat(book)  
      }))
  })
  }

  render(){
    return(
      <div>
        <Route exact path="/" 
      		render={()=><MainPage 
    			books={this.state.books}
				updateShelf={this.updateShelf}
  				/>
				
  		}/>
        <Route exact path="/search" 
      		render={()=><SearchPage 
    			books={this.state.books}
  				updateShelf={this.updateShelf}
				/>
  		}/>
      </div>
    );
  }
}

export default BooksApp
// eslint-disable-next-line
//Imports: React,App.css, Route to use paths, mainpage & search page components from components folder
//Exports:BooksApp
//Route  https://is.gd/H1naCF  https://is.gd/3ZxfJN
//Component https://is.gd/hfKjeH