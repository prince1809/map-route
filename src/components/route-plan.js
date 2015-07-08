var React = require('react'),
    WayPoint = require('./way-point'),
    WayPointModel = require('../models/way-point'),
    vent = require('../util/vent');
    
    
var RoutePlan= React.createClass({
    getIntialState: function(){
        return ({
            editingAt: -1
        })
        
    },
    onAction: function(index,action,options){
        switch(action){
            case 'edit':
                this.editWayPoint(index);
                break;
            case 'save':
                this.saveWayPoint(index,options.value);
                break;
            case 'remove':
                this.removeWayPoint(index);
                break;
            case 'add':
                this.addWayPoint(index);
                break;
        }
        
    },
    editWayPoint: function(index){
        this.setState({
            editingAt: index
        });
        
    },
    saveWayPoint: function(index,value){
        var route = this.props.route;
        route.at(index).set({
            name: value
        });
        
        this.setState({
            editingAt:  -1
        });
    },
    addWayPoint: function(index){
        var route = this.props.route;
        route.add(new WayPointtModel(),{at: index+1});
        this.setState({
            editingAt:index+1
        });
        
    },
    removeWayPoint: function(index){
        var route = this.props.route;
        if(route.length > 2){
            
            route.remove(route.at(index));
            this.setState({
                editingAt: -1
            });
            
        }else {
            alert(' Sorry . You need atleast two destinations in here');
        }
        
    },
    updateRoutes: function(){
        
        vent.trigger('map:route:update');
    },
    render: function(){
        var route = this.props.route,
                self = this,
                wayPoints = route.map(function(wayPoint,index){
                    var key = 'wayPoint' + index;
                    return (
                        <WayPoint
                        ref={key}
                        key={key}
                        wayPoint= {wayPoint}
                        />
                        );
                });
        return (
            <div className='route-plan'>
                <div ref='wayPoints'>
                { wayPoints }
                </div>
                <button onClick={this.updateRoutes}> Update </button>
            </div>
        );
    }
});

module.exports = RoutePlan;
