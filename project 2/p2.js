document.addEventListener('DOMContentLoaded', () => {
    async function fetchPopularMovies() {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTk5ZjRhNjMwZTlhOTlkYWM5NDgyNzVkY2YyZWQ3ZiIsIm5iZiI6MTcwMjQxNTAyNy40MjQsInN1YiI6IjY1NzhjYWIzYWY1OGNiMDE0MWZmMWIyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dylVxP9Zoubphx7PF8hpJaY1khCPgaadb4TmsuvVIZY'
            }
        };

        try {
            const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            displayMovies(data.results);
        } catch (error) {
            console.error('Error fetching popular movies:', error);
            displayError('Failed to fetch movie data.');
        }
    }

    function displayMovies(movies) {
        const movieContainer = document.getElementById('movie-container');
        movieContainer.innerHTML = ''; 

        movies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');

            const posterPath = movie.poster_path
                ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                : 'https://via.placeholder.com/200x300?text=No+Image';

            movieCard.innerHTML = `
                <img src="${posterPath}" alt="${movie.title} poster">
                <h3>${movie.title}</h3>
                <p>${movie.overview.substring(0, 100)}...</p>
            `;
            movieContainer.appendChild(movieCard);
        });
    }

    function displayError(message) {
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = message;
    }

    
    fetchPopularMovies();
});

document.addEventListener('DOMContentLoaded', () => {
    async function fetchJoke() {
      try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayJoke(data);
      } catch (error) {
        console.error('Error fetching joke:', error);
        displayError('Failed to fetch joke.');
      }
    }
    
    function displayJoke(data) {
      const jokeElement = document.getElementById('joke');
      
      if (data.type === 'single') {
        jokeElement.textContent = data.joke;
      } else if (data.type === 'twopart') {
        jokeElement.innerHTML = `<strong>${data.setup}</strong><br>${data.delivery}`;
      } else {
        jokeElement.textContent = 'No joke at this time.';
      }
    }
    
    function displayError(message) {
      const errorMessage = document.getElementById('error-message');
      errorMessage.textContent = message;
    }
    
    
    fetchJoke();
  });



