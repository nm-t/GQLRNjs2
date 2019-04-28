//TODO:
// 1. import { gql } from "apollo-boost";
import { gql } from "apollo-boost";

// 2. write your own query by following the formate:
/* 
query queryName($variableName: type) {
 query content
 movie(id: $id)
} 
*/

//3. export this query
export const GET_MOVIE = gql`
    query getMovie($id: ID!) {
        movie(id: $id) {
            id
            title
            keywords {
                id
                name
            }
            overview
            posterUrl
            posterPath
            tagline
            voteAverage
            releaseDate
            genres
            runtime
            revenue
            language
            imdbId
        }
    }
`
