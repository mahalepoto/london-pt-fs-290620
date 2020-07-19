/**
 * Exercise 1
 *
 * create an object "user", which has
 * properties "firstName", "lastName" and "age"
 *
 * PS: use console.log() to see the result
 */
const user = {
    firstName: 'Jasey',
    lastName: 'JS',
    age: 26
}
console.log(user);

/**
 * Exercise 2
 *
 * create an object "allTypes" with a property of types:
 * string, number, array, object, function, boolean
 *
 * PS: use console.log() to see the result
 */
const allTypes = {
    greetings: 'Hello',
    numberOfPeople: 4,
    namesOfPeople: ['Jasey', 'Josh', 'Mushtaq', 'Ahmed'],
    fullDetailsOfPeople : {
        jaseySurname: 'JS',
        AhmedSurname: 'Qureshi',
        maxAgesAllowed: 60,
    },

    action: function() {
        console.log(allTypes.greetings);
    },
    party: true
}
console.log(allTypes);

/**
 * Exercise 3
 *
 * create a function "createMovieObject" which takes
 * name, rating and ticketPrice and returns a movie object
 * with these properties
 *
 * PS: use console.log() to see the result
 */
function createMovieObject(name, rating, ticketPrice) { 
    let myFavoriteMovie = {
        name: 'Home Alone',
        rating: 8.5,
        ticketPrice: 20
    }    
    return myFavoriteMovie;
}
console.log(createMovieObject());
