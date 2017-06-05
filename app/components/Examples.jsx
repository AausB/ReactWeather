const React = require('react');
const {Link} = require('react-router-dom');

// class Examples extends React.Component {
//   render() {
//     return(
//       <div className='examples component'>
//         <h3>Examples Component</h3>
//       </div>
//     );
//   }
// }

const Examples = (props) => {
  return(
    <div>
      <h1 className="page-title text-center">Examples</h1>
      <p>Here are a few example locations to try out</p>
      <ol>
        <li>
          <Link to='/?location=Berlin'>Berlin</Link>
        </li>
        <li>
          <Link to='/?location=Rio'>Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  );
}

module.exports = {Examples};
