import useReview from "../../hooks/useReview";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useReview();

  return (
    <div>
      <h2 className="text-4xl text-violet-900 italic p-6 border-4 border-b-indigo-500">
        Some reviews of our beloved Customers
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-10">
        {reviews.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
