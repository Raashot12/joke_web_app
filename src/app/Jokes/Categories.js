import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class Categories extends Component {
    state = {
        categories: []
    }

    componentDidMount () {
        //fetch joke categories
        this.fetchCategoriesFromJokesAPI()
    }

    fetchCategoriesFromJokesAPI = () => {
        const url = 'https://sv443.net/jokeapi/v2/categories'

		fetch(url)
		.then(response => response.json())
		.then(result => {
           this.setState({ 
               categories: result.categories
           })
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        const {categories} = this.state
        return (
            <div className="cate2">
				<h3 className="cate">Joke Categories <i class="fa fa-car fa-5x"></i></h3>
                <div className= "cate3">
					{categories.map((funny, idx) =>
						<Link to={"/jokes/" + funny} key={idx}>
							<p> {} {funny} {}</p>
						</Link>
					)}
				</div>
        </div>
        )
       
    }
}