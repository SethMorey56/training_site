import React from 'react';

class Blog extends React.Component {
    render() {
        return (
            <div className="ui container">
                <div class="ui very padded segment">
                    <div href="google" class="ui medium rounded right floated image">
                        <img src="https://cdn.pixabay.com/photo/2010/12/13/10/05/background-2277_960_720.jpg" alt="pretty"/>
                    </div>
                    <h1>My Journey</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta repellendus vitae facilis ratione qui accusantium porro molestiae similique fugit eaque a, est molestias nihil quas tenetur! Praesentium porro reprehenderit repudiandae!</p>
                    <button className="ui inverted button violet">Read More</button>
                </div>
                <div class="ui very padded segment">
                    <div href="google" class="ui medium rounded right floated image">
                        <img src="https://cdn.pixabay.com/photo/2010/12/13/10/05/background-2277_960_720.jpg" alt="pretty"/>
                    </div>
                    <h1>This is a Title</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta repellendus vitae facilis ratione qui accusantium porro molestiae similique fugit eaque a, est molestias nihil quas tenetur! Praesentium porro reprehenderit repudiandae!</p>
                    <button className="ui inverted button violet">Read More</button>
                </div>
                <div class="ui very padded segment">
                    <div href="google" class="ui medium rounded right floated image">
                        <img src="https://cdn.pixabay.com/photo/2010/12/13/10/05/background-2277_960_720.jpg" alt="pretty"/>
                    </div>
                    <h1>Here We Go</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta repellendus vitae facilis ratione qui accusantium porro molestiae similique fugit eaque a, est molestias nihil quas tenetur! Praesentium porro reprehenderit repudiandae!</p>
                    <button className="ui inverted button violet">Read More</button>
                </div>
            </div>
        )
    }
}

export default Blog;