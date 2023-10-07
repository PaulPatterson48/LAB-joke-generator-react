import React from 'react';
import PropTypes from 'prop-types';

function Joke({ jokes, btnText }) {
  return (
    <>
      <h1>{jokes.setup}</h1>
      <h2>{btnText !== 'Get A Punchline' ? jokes.delivery : ''}</h2>
    </>
  );
}

Joke.propTypes = {
  jokes: PropTypes.shape({
    setup: PropTypes.string,
    delivery: PropTypes.string,
  }).isRequired,
  btnText: PropTypes.string.isRequired,
};

export default Joke;
