import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, handleCounterIncrement }) => {
  return (
    <div className={css.Div}>
      <h1>Please leave a feadback</h1>
      <div className={css.feedbackDiv}>
        <ul>
          {Object.keys(options).map(option => (

            <button
              key={option}
              name={option}
              type="button"
              onClick={handleCounterIncrement}
            >
              {option}
            </button>
          ))}
        </ul>
      </div>
    </div>
  );
};

FeedbackOptions.propTypes = {
	options: PropTypes.object,
	handleCounterIncrement: PropTypes.func.isRequired,
  };
  
export default FeedbackOptions;
