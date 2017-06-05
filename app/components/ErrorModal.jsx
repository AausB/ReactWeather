const React = require('react');
const PropTypes = require('prop-types');

class ErrorModal extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount = () => {
    let modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  }

  render() {
    let {title, message} = this.props;

    return(
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">Okay</button>
        </p>
      </div>
    );
  }
}

ErrorModal.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string.isRequired
}

ErrorModal.defaultProps = {
  title: 'Error'
};

module.exports = {ErrorModal};
