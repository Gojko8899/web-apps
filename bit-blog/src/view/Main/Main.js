import React from "react";
import { MyAuthors } from '../partials/blog/Authors'
import { Switch, Route, Redirect } from "react-router-dom"
import { MyAbout } from '../partials/about/About'
import { BlogList } from '../partials/blog/blog-list'



const ListBlog = () => {

    return (

        <div>
            <Switch>
                <Route path='/about' component={MyAbout} />
                <Route path='/authors' component={MyAuthors} />
                <Route path='/' component={BlogList} />
            </Switch>
        </div>

    )

}

export { ListBlog }