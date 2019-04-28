// 1. use {gql} from "apollo-boost"
import { gql } from 'apollo-boost';

import * as React from "react";
import { useState } from "react";
import Star from "@material-ui/icons/Star";
import { getUserId } from "../../utils/userIdHelper";
import RatingStars from '../UIComponents/RatingStars';

// 2. write your own mutation by following the formate:
/* 
mutation mutationName($variableName: type) {
 mutation content
 setRating(input: $input) {
  message
  }
} 
*/
const SET_RATING = gql`
  mutation setRating($setRatingInput: SetRatingInput!) {
    # Matches the function we wrote yesterday
    setRating(setRatingInput: $setRatingInput) {
      message
    }
  }
`;

const GET_RATING = gql`
  query getRating($getRatingInput: GetRatingInput!) {
    movieUserRating(getRatingInput: $getRatingInput) {
      score
    }
  }
`;

// 3. use { Mutation } component provided by "react-apollo"
import { Mutation, Query } from 'react-apollo';

const RatingCollector: React.FC<{ movieId: string }> = ({ movieId }) => {
  // These are React hooks! They reduce the need for React Classes (and are much faster).
  const [score, setRatingScore] = useState<number | undefined>(undefined);
  // Temporary identifier
  const [userId, setUserId] = useState<string | undefined>(undefined);

  React.useEffect(() => {
    setUserId(getUserId()!);
  });

  return userId ? (
    <Query 
      query = { GET_RATING } 
      variables={{ getRatingInput: { movieId, userId } }}
    >
      {({ data }) => {
        const userScore = 
            data && data.movieUserRating && data.movieUserRating.score;

          return userScore ? (
            <div>
              <Star nativeColor="#ff9800" />
              <span> Your Rating: { userScore }</span>
            </div>
          ) : (
            // 4. pass GraphQL mutation into Mutation component as the field of mutation
            <Mutation mutation={ SET_RATING }>
              {
                (setRating) => {
                  // Set local and remote states
                  const onSetRating = (score: number) => {
                    setRatingScore(score); // Set local
                    setRating({ // Set remote
                      variables: {
                        setRatingInput: {
                          movieId,
                          userId,
                          score
                        }
                      }
                    })
                  }
                  // 5. You can use your mutation within the mutation component as props Rating Mutator
                  return <RatingStars onSetRating={onSetRating} />
                }
              }
            </Mutation>
          )
        }
      }

    </Query>
  ) : null;
};

export default RatingCollector;