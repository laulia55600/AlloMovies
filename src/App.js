import React, {Component} from 'react';
import './App.css';
import {Header, MovieList, MovieDetails} from './components'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      movies: [{
        title:"The Godfather",
        img: "https://i0.wp.com/cinedweller.com/wp-content/uploads/2021/02/le-parrain-trilogie.jpg?resize=556%2C700&ssl=1",
        details: 'R | 175 min | Crime,Drama',
        description: "Le film aborde le sujet de la succession du patriarche de la famille, Vito Corleone dit le « Parrain » (Marlon Brando), et de l'ascension de son plus jeune fils, Michael (Al Pacino), qui initialement souhaite rester en dehors des activités criminelles de la famille."
      },
    {
      title:"Harry potter à l'école des sorciers",
      img: "https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWZL5XQS/image?locale=fr-fr&mode=crop&purposes=BoxArt&q=90&h=225&w=150&format=jpg",
      details: "R | 152 min | Fantastique, Famille",
      description: "Le jour de son onzième anniversaire, la vie de ce jeune garçon va prendre un tournant innatendu, il découvre qu'il est un sorcier"
    },
    {
      title:"Le seigneur des anneaux, les deux tours",
      img: "https://fr.web.img6.acsta.net/medias/nmedia/00/02/54/95/affiche2.jpg",
      details: " R | 180 min | Fantastiques, Aventure",
      description: "Frodon Sacquet, le Hobbit, doit braver de terribles dangers pour détruire l'anneau unique, convoité par Sauron, le seigneur des ténébres"
    },
    {
      title:"Le hobbit, un voyage innatendu",
      img: "https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/18/93/43/35/20273834.jpg",
      details: " R | 169 min | Fantastiques, Aventure",
      description: "Bilbon Sacquet, va voir sa vie devenir bien plus mouvementée quand on lui annoncera avoir besoin d'aide pour reprendre le Royaume perdu des nains d'Erebor conquis par Smaug, un redoutable dragon"
    }],
      selectedMovie: 0
    }
  }

  updateSelectedMovie = (title) => {
    const index = this.state.movies.findIndex((m) => {
      return title === m.title;
    })
    this.setState({
      selectedMovie: index
    })
  }
  
  render(){
  return (
    <div className="App d-flex flex-column">
        <Header />
        <div className='d-flex flex-row flex-fill pt-4 p-2'>
          <MovieList movies={ this.state.movies } updateSelectedMovie={this.updateSelectedMovie} />
          <MovieDetails movie={this.state.movies[this.state.selectedMovie]} />
        </div>
    </div>
  );
  }
}

export default App;
