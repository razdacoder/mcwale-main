import { cn } from "@/lib/utils";
import React from "react";
import { MdStar, MdStarHalf, MdStarOutline } from "react-icons/md";

interface ReviewStarsProps {
  rating: number;
  className?: string;
}

const ReviewStars: React.FC<ReviewStarsProps> = ({ rating, className }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = !Number.isInteger(rating);
  const noStar = Math.floor(5 - rating);

  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, index) => (
        <MdStar
          key={index + "star"}
          className={cn("text-black/90 w-6 h-6", className)}
        />
      ))}
      {hasHalfStar && (
        <MdStarHalf className={cn("text-black/90 w-6 h-6", className)} />
      )}
      {[...Array(noStar)].map((_, index) => (
        <MdStarOutline
          key={index + "star-outline"}
          className={cn("text-black/90 w-6 h-6", className)}
        />
      ))}
    </div>
  );
};

export default ReviewStars;
