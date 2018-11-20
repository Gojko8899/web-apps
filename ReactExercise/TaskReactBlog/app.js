
const elem = ""

const Header = () => {
    return (
        <header>
            <h1>
                My React Blog
            </h1>

        </header>
    )
}

const PostItem = (props) => {

    console.log(props.title)

    return (

        <div>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
        </div>
    )
}



const PostList = (props) => {
    console.log(props)

    const newArray = props.posts.map(function (post) {

        return <PostItem body={post.body} title={post.title} />


    })



    return (
        <div>

            {newArray}
        </div>
    )

}




const App = () => {

    return (
        <div>

            <Header />

            <PostList posts={posts} />

        </div>

    )
}



const rootElement = document.querySelector('.root')
ReactDOM.render(<App />, rootElement)