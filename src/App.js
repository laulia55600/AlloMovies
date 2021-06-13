import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import { Header } from './components';
import Films from './features/films';
import Favoris from './features/favoris';
import apiMovie, { apiMovieMap } from './config/api.movies';
import apiFirebase from './config/api.firebase';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: null,
			selectedMovie: 0,
			loaded: false,
			favoris: []
		};
	}

	componentDidMount() {
		apiMovie.get('/discover/movie')
			.then(response => response.data.results)
			.then(moviesApi => {
				const movies = moviesApi.map(apiMovieMap);
				this.updateMovies(movies);
			})
			.catch((err) => console.log(err));
		
		apiFirebase.get('favoris.json')
		 .then( response => {
			 let favoris = response.data ? response.data : [];
			 this.updateFavori(favoris)
		 })
		 .catch(err => console.log(err));
	}

	updateMovies = (movies) => {
		this.setState({
			movies,
			loaded: this.state.favoris ? true : false,
		})
	}

	updateFavori = (favoris) => {
		this.setState({
			favoris,
			loaded: this.state.movies ? true : false
		})
	}

	updateSelectedMovie = (index) => {
		this.setState({
			selectedMovie: index,
		});
	};

	addFavori = title => {
		const film = {...this.state.movies.find( m => m.title === title)};
		this.setState(state => ({
			favoris: [...this.state.favoris, film]
		}), this.saveFavoris);
	}

	removeFavori = title => {
		const index = this.state.favoris.findIndex( f => f.title === title );
		this.setState(state => ({
		  favoris: state.favoris.filter((_, i) => i !== index)
		}), this.saveFavoris);
		}
	
	saveFavoris = () => {
		apiFirebase.put('favoris.json', this.state.favoris);
	}


	render() {
		return (
			<Router>
				<div className="App d-flex flex-column">
					<Header />
          <Switch>
              <Route path="/films" render= { (props) => {
                  return (
                    <Films
                      { ...props }
						loaded={this.state.loaded}
						updateMovies={this.updateMovies}
						updateSelectedMovie={this.updateSelectedMovie}
					    movies={this.state.movies}
						selectedMovie={this.state.selectedMovie}
						addFavori={ this.addFavori }
						removeFavori={ this.removeFavori }
						favoris={ this.state.favoris.map( f => f.title )}
					/>
                  )
              }} />
              <Route path="/favoris" render={(props) => {
				  return (
					  <Favoris
					  	{...props}
						favoris={this.state.favoris}
						removeFavori={ this.removeFavori }
					   />
				  )
			  }} />
              <Redirect to="/films" />					
          </Switch>

				</div>
			</Router>
		);
	}
}

export default App;
