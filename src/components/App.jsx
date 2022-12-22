import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification ';

export class App extends Component {
  // Static
  // Тут присвоюються дефолтні значення пропсів, якщо не прийшли з бекенду
  // static defaultProps = {
  // initialValue: 0,
  // };

  // тут описуються propTypes
  // static propTypes = {};

  // State
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // Methods
  onLeaveFeedback = event => {
    console.log(event.target.name);

    this.setState(prevState => ({
      [event.target.name]: prevState[event.target.name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    // console.log(values);
    return values.reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = (total, good) => {
    const percent = Math.round((good / total) * 100);
    return percent;
  };

  // Render
  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() >= 1 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positiveFeedback={this.countPositiveFeedbackPercentage(
                this.countTotalFeedback(),
                good
              )}
            />
          ) : (
            <Notification />
          )}
        </Section>
      </>
    );
  }
}
