import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.Div}>
      <h1>Please leave a feadback</h1>
      <div className={css.feedbackDiv}>
        <ul>
          {options.map(option => (
            <button
              key={option}
              name={option}
              type="button"
              onClick={onLeaveFeedback}
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
	options: PropTypes.arrayOf(
		PropTypes.shape({
			good: PropTypes.number.isRequired,
			neutral:PropTypes.number.isRequired,
			bad:PropTypes.number.isRequired,
		   })
	).isRequired,
	onLeaveFeedback: PropTypes.func.isRequired,
  };
  
export default FeedbackOptions;
