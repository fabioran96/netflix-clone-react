import React from 'react';
import { Container } from 'react-bootstrap';
import NavBar from './navbar';
import Footer from './footer';
import MovieGallery from './MovieGallery';

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Container fluid className="px-4">
        <MovieGallery title="Trending Now" searchQuery="trending" />
        <MovieGallery title="Watch it Again" searchQuery="watch" />
        <MovieGallery title="New Releases" searchQuery="new" />
      </Container>
      <Footer />
    </div>
  );
};

export default HomePage;

