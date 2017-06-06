const React = require('react');
const PropTypes = require('prop-types');

// because foundation does remove the modal from the DOM after closing:
const ReactDOM = require('react-dom');
const ReactDOMServer = require('react-dom/server');

class ErrorModal extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount = () => {
    //
    // lets get tricky
    //
    let {title, message} = this.props;

    let modalMarkup = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">Okay</button>
        </p>
      </div>
    );

    // jQuery creates an element from HTML markup
    let $modal = $(ReactDOMServer.renderToString(modalMarkup));
    // add the created element into the React Modal Element
    $(ReactDOM.findDOMNode(this)).html($modal);

    // run the modal element
    let modal = new Foundation.Reveal($('#error-modal'));
    // Foundation makes some changes to the DOM
    modal.open();
  }

  render() {
    return (
      <div></div>
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
