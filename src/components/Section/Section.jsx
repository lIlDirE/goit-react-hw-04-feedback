import PropTypes from 'prop-types';

const Section = ({children,title}) => (
	<section title={title}>
		{children}
  	</section>
)

Section.propTypes = {
	children: PropTypes.element.isRequired,
	title: PropTypes.string.isRequired
  };

export default Section