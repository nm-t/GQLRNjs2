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

// 3. use { Mutation } component provided by "react-apollo"
import { Mutation } from 'react-apollo';

const RatingCollector: React.FC<{ movieId: string }> = ({ movieId }) => {
  // These are React hooks! They reduce the need for React Classes (and are much faster).
  const [score, setRatingScore] = useState<number | undefined>(undefined);
  // Temporary identifier
  const [userId, setUserId] = useState<string | undefined>(undefined);

  React.useEffect(() => {
    setUserId(getUserId()!);
  });

  console.log(userId)

  return (
    <div>
      {score ? (
        <div>
          <Star nativeColor="#ff9800" />
          <span> Your Rating: {score}</span>
        </div>
      ) : (
        // 4. pass GraphQL mutation into Mutation component as the field of mutation
        <Mutation mutation={ SET_RATING }>
          {
            (setRating) => {
              // Set local and remote states
              const onSetRating = (score: number) => {
                setRatingScore(score); // local
                setRating({ //remote
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
      )}
    </div>
  );
};

export default RatingCollector;