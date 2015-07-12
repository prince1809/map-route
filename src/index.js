var React = require('react'),
    domReady = require('domready'),
    Application = require('./components/application'),
    GoogleMaps = require('google-maps');

domReady(function () {
    GoogleMaps.LIBRARIES = ['places'];
    GoogleMaps.load(function (google) {
        console.log('loaded google maps', google);
        React.render(<Application mapService={google}/>, document.getElementById('app'));
    });
});