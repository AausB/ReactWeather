const React = require('react');

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
    <div className='examples component'>
      <h3>Examples stateless functional component</h3>
    </div>
  );
}

module.exports = {Examples};
