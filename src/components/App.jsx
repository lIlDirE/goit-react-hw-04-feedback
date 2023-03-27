import Statistics from './Statistics/Statistics.jsx';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions.jsx';
import Section from './Section/Section.jsx';
import Notification from './Notification/Notifiaction.jsx';
import React, { useEffect, useState } from 'react';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleCounterIncrement = e => {
    switch (e.target.name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };

  const total = () => {
    return good + bad + neutral;
  };

  const positivePercentage = () => {
    return +((good / total()) * 100).toFixed(1);
  };

  useEffect(() => {}, [good, neutral, bad]);

  return (
    <div>
      <Section title="FeedbackOptions">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          handleCounterIncrement={handleCounterIncrement}
        />
      </Section>
      {total() > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total()}
            positivePercentage={positivePercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
}
