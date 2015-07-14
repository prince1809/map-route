var React = require('react');

var Header = React.createClass({
    render: function(){
        return (
            <header>
                <h1> <i className='icon-location-on'> </i>Google Map Route Planner </h1>
                <p className='author'> Built by <a title='prince- Javascript developer' href='http://www.princekr.com'> Prince </a></p>
            </header>
            );
    }
});

module.exports = Header;