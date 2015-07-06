var React = require('react'),
    WayPoint = require('./way-point'),
    WayPointModel = require('../models/way-point'),
    vent = require('../util/vent');
    
    
var RoutePlan= React.createClass({
    getIntialState: function(){
        
    },
    onAction: function(index,action,options){
        
    },
    editWayPoint: function(index){
        
    },
    saveWayPoint: function(index,value){
        
    },
    addWayPoint: function(){
        
    },
    removeWayPoint: function(){
        
    },
    updateRoutes: function(){
        
    },
    render: function(){
        return (
            <div className='route-plan'>
                <h2> Route Plan </h2>
                <input type="button" value="add" onClick={this.addWayPoint} />
            </div>
        );
    }
});

module.exports = RoutePlan;
