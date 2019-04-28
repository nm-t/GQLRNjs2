import * as React from "react";
import { useRef, useState, useEffect } from "react";
import Star from "@material-ui/icons/Star";
import StarBorder from "@material-ui/icons/StarBorder";

interface RatingStarsProps {
  onSetRating: (score: number) => void;
}
const RatingStars: React.FC<RatingStarsProps> = ({ onSetRating }) => {
  const { ref: hoverRef, value: hoverIndex } = useStarHover();
  const stars = Array.from(Array(10).keys());

  return (
    <div ref={hoverRef} className="rating-collector">
      {stars.map((star, i) => (
        <span key={star} data-sequence={i + 1}>
          {i < hoverIndex ? (
            <Star
              nativeColor="#ff9800"
              onClick={() => {
                onSetRating(i + 1);
              }}
            />
          ) : (
            <StarBorder nativeColor="#ff9800" />
          )}
        </span>
      ))}
    </div>
  );
};

export default RatingStars;

// Hook
function useStarHover() {
  const [value, setValue] = useState<number>(0);

  const ref: React.RefObject<HTMLDivElement> = useRef(null);

  const handleMouseOver = (sequence: number) => setValue(sequence);
  const handleMouseOut = () => setValue(0);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      const starIcons = node.querySelectorAll("span");
      const starIconsElements = Array.from(starIcons) as HTMLElement[];
      starIconsElements.forEach(starIcon => {
        starIcon.addEventListener("mouseover", e =>
          // @ts-ignore
          handleMouseOver(Number(e.currentTarget.getAttribute("data-sequence")))
        );
        node.addEventListener("mouseout", handleMouseOut);
      });

      return () => {
        starIconsElements.forEach(starIcon => {
          starIcon.removeEventListener("mouseover", () => handleMouseOver(0));
          starIcon.removeEventListener("mouseout", handleMouseOut);
        });
      };
    }
    return;
  }); // Recall only if ref changes

  return { ref, value };
}
