var React = require('react');
var Gmap = require('./Gmap.jsx');
var $ = jQuery = require('../../lib/jquery/dist/jquery');
var bootstrap = require('../../lib/bootstrap-sass/assets/javascripts/bootstrap');

React.render(
  <Gmap />,
  document.getElementsByClassName('container-fluid')[0]
);
