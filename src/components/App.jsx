import Statistics from './Statistics/Statistics.jsx';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions.jsx';
import Section from './Section/Section.jsx'
import Notification from './Notification/Notifiaction.jsx';
import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // const { good, bad, neutral } = this.state;

  handleFeedback = evt => {
    this.setState(prevState => ({
      [evt.target.name]: prevState[evt.target.name] + 1,
    }));
  };

  total = () => {
      const { good, bad, neutral } = this.state
        return good + bad + neutral
  }

  positivePercentage = ({good}) => {
    return +((good / this.total()) * 100).toFixed(1)
  }

  render() {
    return (
      <div>
		<Section title="FeedbackOptions">
			<FeedbackOptions
			options={Object.keys(this.state)}
			onLeaveFeedback={this.handleFeedback}
			/>
		</Section>
		{this.total() > 0 ? (
		<Section title="Statistics">
			<Statistics
			good={this.state.good}
			neutral={this.state.neutral}
			bad={this.state.bad}
			total={this.total()}
			positivePercentage={this.positivePercentage(this.state)}
			/>
		</Section>
      ) : (
        <Notification message="There is no feedback"/>
      )}
      </div>
    );
  }
}
