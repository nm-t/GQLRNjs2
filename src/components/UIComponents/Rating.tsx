import * as React from "react";
import StarIcon from "@material-ui/icons/Star";

interface RatingProps {
  rating: number;
  size?: "default" | "large";
}

const Rating: React.FC<RatingProps> = ({ rating, size }) => (
  <div className="rating">
    <StarIcon nativeColor="#ff9800" fontSize={size} />
    {rating}/10
  </div>
);

export default Rating;
