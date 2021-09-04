import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import data from "./data";

let person = 0;
const Review = () => {
  const [review, setReview] = useState(data);

  useEffect(() => {
    setReview(data[person]);
  }, []);

  const previousReview = (data) => {
    person === 0 ? (person = 3) : (person -= 1);
    setReview(data[person]);
  };
  const nextReview = (data) => {
    person === 3 ? (person = 0) : (person += 1);
    setReview(data[person]);
  };

  const randomReview = () => {
    let randomPerson = Math.floor(Math.random() * data.length);

    if (randomPerson === person) {
      randomReview();
    } else {
      person = randomPerson;
      setReview(data[randomPerson]);
    }
  };

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
          <button onClick={() => previousReview(data)}>
            <FaChevronLeft />
          </button>
          <button onClick={() => nextReview(data)}>
            <FaChevronRight />
          </button>
          <button onClick={() => randomReview(data, person)}>
            Surprise Me
          </button>
        </div>
      </div>
    </>
  );
};

export default Review;
