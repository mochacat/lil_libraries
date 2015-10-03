var React = require('react');

module.exports = React.createClass({
  getDefaultProps : function () {
    return {
      lat : 34.1442,
      lng : -118.0019, 
      zoom : 14
    };
  },
  componentDidMount : function (){
    var mapOptions = {
      center : this.centerLatLng(),
      zoom : this.props.zoom 
    },
    map = new google.maps.Map(React.findDOMNode(this.refs.newMap), mapOptions),
    marker = new google.maps.Marker({position : this.centerLatLng(), title: 'test', map : map});
    this.setState({map: map});
  },
  centerLatLng : function () {
    var props = this.props;
    return new google.maps.LatLng(props.lat, props.lng);
  },
  componentDidUpdate : function () {
    var map = this.state.map;
    map.panTo(this.centerLatLng());
  },
  render: function() {
    return (
      <div className='map' ref='newMap'></div>
    );    
  }
});
