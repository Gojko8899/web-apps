import React from "react";
import { MySingleAuthor } from '../partials/blog/SingleAuthor'
import { MyAuthors } from '../partials/blog/Authors'
import { Switch, Route, Redirect } from "react-router-dom"



const ListBlog = () => {

    return (

        <div>
            <Switch>
                <Route path='/' component={MyAuthors} />
                <Redirect from='/' to='singleauthors' />
            </Switch>
        </div>

    )

}

export { ListBlog }