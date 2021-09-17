import React, { useState, useEffect } from "react";
import Review from "./Review";
import data from "./data";

let person = 0;

function App() {
  const [review, setReview] = useState(data);

  //On initial render, start with data[0]
  useEffect(() => {
    setReview(data[person]);
  }, []);

  //Navigate reviews by using variable 'person'
  const previousReview = () => {
    //handle 'edge' reviews
    person === 0 ? (person = 3) : (person -= 1);
    setReview(data[person]);
  };
  const nextReview = () => {
    //Handle 'edge' reviews
    person === 3 ? (person = 0) : (person += 1);
    setReview(data[person]);
  };

  const randomReview = () => {
    //get random int 0-data.length(3)
    let randomPerson = Math.floor(Math.random() * data.length);
    //if already on current review, reroll
    if (randomPerson === person) {
      randomReview();
    } else {
      person = randomPerson;
      setReview(data[randomPerson]);
    }
  };

  return (
    <div className="container">
      <h1>Our Reviews</h1>
      <div className="underline"></div>
      <Review
        data={data}
        review={review}
        previousReview={previousReview}
        nextReview={nextReview}
        randomReview={randomReview}
      />
    </div>
  );
}

export default App;
