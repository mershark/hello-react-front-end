import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRandomGreeting } from './actions';

const Greeting = ({ randomGreeting, fetchRandomGreeting }) => {
  useEffect(() => {
    fetchRandomGreeting();
  }, [fetchRandomGreeting]);

  return (
    <div>
      <h2>Greeting</h2>
      <p>{randomGreeting}</p>
    </div>
  );
};

// prop type validations
Greeting.propTypes = {
  randomGreeting: PropTypes.string.isRequired,
  fetchRandomGreeting: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  randomGreeting: state?.randomGreeting ? state.randomGreeting : '',
});

const mapDispatchToProps = {
  fetchRandomGreeting,
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
