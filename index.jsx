var React = require('react');
var ReactDOM = require('react-dom');

var Cards = function (){
    return (
        <li className="card">{List.props.inputVal}</li>
    )
}

var List = React.createClass({
    getInitialState: function () {
        return {editing: false}
    },
    editMode: function() { // added in button clickHandler
        this.setState({editing: !this.state.editing})
    },
    addItem: function (props) {
        if (this.state.editing) {
            var inputVal = this.refs.newItem.value;
        }
        return (<li>inputVal</li>)
    },
    renderNormal: function () {
        var {className, color, listName} = this.props;
        return (
            <div id={className} className={color}>
                <h1>{listName}</h1>
                <ul>
                    <Cards />
                </ul>
                <button onClick={this.editMode}>+</button>
            </div>
        )
    },
    renderForm: function () {
         var {className, color, listName} = this.props;
        return (
            <div id={className} className={color}>
                <h1>{listName}</h1>
                <ul>
                    {<Cards />}
                </ul>
                <input ref="newItem" placeholder="Add item here"></input>
                <button onClick={this.addItem}>+</button>
            </div>
        )
    },
    render () {
       if (this.state.editing) {
            return this.renderForm()
       }else {
            return this.renderNormal()

       }
    }
});

var CardList = function () {
   return (
        <div className="all-lists-wrapper">
            <List listName="Need" className="list-one" color="red"/>
            <List listName="Want" className="list-two" color="blue"/>
            <List listName="Have" className="list-three" color="yellow"/>
        </div>
        )
}


    document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<CardList />, document.getElementById('board'));
});