const apiUrl = 'http://localhost:3030';

 export default {
//  async getAllMovies() {
//     const response = await fetch(`${apiUrl}/data/movies`);
//     const result = await response.json();
  
//     return result;
//  },

//  async createMovie(movieData) {

//    const response = await fetch(`${apiUrl}/data/movies`, {
//       method: 'POST',
//       headers: {
//          'Content-Type': 'application/json', 
//       },
//       body: JSON.stringify(movieData),
//    });

//    const result = await response.json();

//    return result;
//  },

// async getOneMovieById(movieId) {
//    const response = await fetch(`${apiUrl}/data/movies/${movieId}`);
//    const result = await response.json();

//    return result;
// },

 //!TODO returns error unauthorized
// async deleteMovieById(movieId) {
//  const response = await fetch(`${apiUrl}/data/movies/${movieId}`, {
//    method: 'DELETE'
//  });

//  return response; 
// },


// async editMovieById(movieId, movieData) {
//    const response = await fetch(`${apiUrl}/data/movies/${movieId}`, {
//       method: 'PUT',
//       headers: {
//          'Content-Type': 'application/json',
//       },
//       //трябва да подам и id-то, защото при редакция сървъра не праща автоматично id
//       body: JSON.stringify({ ...movieData, _id: movieId }),
//    });

//    const result = await response.json();

//    return result;  
// },

}


