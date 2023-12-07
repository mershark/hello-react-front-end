export const FETCH_RANDOM_GREETING = 'FETCH_RANDOM_GREETING';

export const fetchRandomGreeting = () => (dispatch) => {
  fetch('http://localhost:3000/random_greeting')
    .then((response) => response.json())
    .then((data) => dispatch({ type: FETCH_RANDOM_GREETING, payload: data.greeting }));
};
