import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class MovieGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = async () => {
    const { searchQuery } = this.props;
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=2c0caa62&s=${searchQuery}`);
      const data = await response.json();
      if (data.Response === "True") {
        this.setState({ movies: data.Search, loading: false });
      } else {
        this.setState({ error: data.Error, loading: false });
      }
    } catch (err) {
      this.setState({ error: err.message, loading: false });
    }
  };

  render() {
    const { title } = this.props;
    const { movies, loading, error } = this.state;

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
      <div>
        <h4>{title}</h4>
        <Row className="mb-4">
          {movies.map(movie => (
            <Col key={movie.imdbID} className="mb-2 text-center px-1" xs={6} sm={4} lg={2}>
              <img className="img-fluid" src={movie.Poster} alt={movie.Title} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default MovieGallery;
