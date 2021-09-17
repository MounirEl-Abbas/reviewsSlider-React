import React, {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteRight,
} from "react-icons/fa";

const Review = ({ previousReview, nextReview, randomReview, review }) => {
  const { id, name, job, image, text } = review;
  return (
    <>
      <div key={id} className="review-container">
        <div className="img-container">
          <img src={image} alt={name} />
          <span>
            <FaQuoteRight />
          </span>
        </div>
        <h4>{name}</h4>
        <p>{job}</p>
        <p>{text}</p>
        <div className="btn-container">
          <button onClick={previousReview}>
            <FaChevronLeft />
          </button>
          <button onClick={nextReview}>
            <FaChevronRight />
          </button>
          <button onClick={() => randomReview()}>Surprise Me</button>
        </div>
      </div>
    </>
  );
};

export default Review;
