import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll.js';
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = { 
            robots: [],
            searchField: '',
        }
        console.log('1');
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
            return response.json();
        }).then(user => {
            this.setState({robots: user})
        })
    }

    onSearchChange = (event) => {
        console.log(event.target.value);
        this.setState({searchField: event.target.value})
    }

    render () {
        // console.log('3');
        let {robots, searchField} = this.state;
        const filteredRobots = robots.filter(robot => {
            //grab only the robots with names that includes the search field
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        )
}};

export default App;