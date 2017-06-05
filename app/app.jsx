'use strict';

// webpack loads the modules:
const React = require('react');
const ReactDOM = require('react-dom');

const {BrowserRouter, Route, Switch} = require('react-router-dom');
const Router = BrowserRouter;

//const {Main} = require('Main');
const {Nav} = require('Nav');
const {Weather} = require('Weather');
const {About} = require('About');
const {Examples} = require('Examples');
const {NotFound} = require('NotFound');

// load foundation-sites with the style loader and css loader
// 'style-loader!css-loader!foundation-sites/dist/css/foundation.min.css'
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

ReactDOM.render(
  // a jsx element with the name of the React Class from above
  //<Greeter name={firstName} message={message}/>,
  <Router>
    <div className="container">
      <Nav/>
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">
          <Switch>
            <Route exact path='/' component={Weather}/>
            <Route path='/about' component={About}/>
            <Route path='/examples' component={Examples}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </div>
    </div>
  </Router>,
  // This is where React inserts the generated HTML: div#app
  document.getElementById('app')
);
