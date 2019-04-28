// TODO:
// 1. import { gql } from "apollo-boost";
import { gql } from "apollo-boost";
// 2. write your own query by following the formate:
/* 
query queryName {
 query content
} 
*/

//3. export this query

export const GET_MOVIES = gql`
    query getMovies {
        movies {
            id
            title
            overview
            posterUrl
            tagline
            voteAverage
        }
    }
`;
