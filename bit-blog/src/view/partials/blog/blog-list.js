import React, { Component } from 'react';
import { BlogItem } from './BlogItem';
import { fetchPosts } from '../../../services/service'

class BlogList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {

        fetchPosts()
            .then((niz) => { this.setState({ posts: niz }) });
        // this.setState({ posts: [] })


    }

    render() {

        const oneListItem = this.state.posts.map(function (post, index) {

            if (index <= 5) {

                return <BlogItem title={post.title} text={post.body} />

            }
        })

        return (
            <ul className="collection" >
                {
                    [
                        <div>
                            {oneListItem}
                        </div>

                    ]
                }
            </ul>

        )
    }
}


export { BlogList }