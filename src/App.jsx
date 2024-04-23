import { useState, useEffect } from 'react';
import Feedback from "./components/Feedback/Feedback";
import Description from "./components/Description/Description";
import Notification from "./components/Notification/Notification";
import Options from "./components/Options/Options";



export default function App() {
  const [reviews, setReviews] = useState(() => {
    const saveReviews = localStorage.getItem("save-reviews");
    return saveReviews !== null ? JSON.parse(saveReviews) :
      {
        good: 0,
        neutral: 0,
        bad: 0
      }
  }

  )

  useEffect(() => {
    localStorage.setItem("save-reviews", JSON.stringify(reviews))
  }, [reviews])

  const updateFeedback = feedbackType => {
    setReviews({
      ...reviews,
      [feedbackType]: reviews[feedbackType] + 1
    })
  }

  const reset = () => {
    setReviews({
      good: 0,
      neutral: 0,
      bad: 0
    })
  }

  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
  const positiveFeedback = totalFeedback > 0 ? Math.round((reviews.good / totalFeedback) * 100) : 0;


  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} total={totalFeedback} onReset={reset} />
      {totalFeedback ? <Feedback reviews={reviews} totalReviews={totalFeedback} positive={positiveFeedback} /> : <Notification />}
    </>
  )
}