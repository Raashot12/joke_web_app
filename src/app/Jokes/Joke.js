import React, { Component } from 'react'

export default class Joke extends Component {
    state = {
        jokes:[], 
        loading:true
    }

    componentDidMount () {
        //fetch joke
        this.fetchJokeFromJokeAPI()
    }

    fetchJokeFromJokeAPI = () => {
        this.setState({ loading: true })
        const funny = this.props.match.params.funny
        const url = ` https://sv443.net/jokeapi/v2/joke/${funny}?type=single&amount=10`

        fetch(url).then(response => response.json()).then(result => {
           this.setState({
               jokes: result.jokes,
               loading:false
           })
        }).catch(error => {
            console.log(error)
            this.setState({
                loading:false,
                message: "Ah, something went wrong"
            })
        })
    }

    render () {
        const { jokes, loading } = this.state
        return (
            <div  className="central">
				<h3> {this.props.match.params.funny} Jokes<i class="fa fa-car fa-2x"></i> </h3>
                {loading && <p>Loading...</p>}
                {jokes.map((joke, idx)=>(
                <div className="Rasheed" key={idx}>
                    <p>{idx+1}. {joke.joke}</p>
                </div>
                ))}

                <button className="Madoo"onClick={this.fetchJokeFromJokeAPI} >Get New Jokes</button>
            </div>
        )
    }
}