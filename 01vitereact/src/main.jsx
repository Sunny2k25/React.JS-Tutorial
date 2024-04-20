import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



function Myapp(){
    return(
        <div>
            <h1>Custom App!</h1>
        </div>
    )
}

/*
const reactElement = {
    type : 'a',
    props : {
        href : 'http://google.com',
        target : '_blank'
    },
    children : 'Click me to visit google'
}
*/

const anotherElement =(
    <a href='http://google.com' target='blank'> Visit Google</a>

)

const anotherUser = "Chai aur React"

const reactElement = React.createElement(
    'a',
    {href : 'http://google.com', target: '_blank'},
    'click me to visit google',
    anotherElement

)


ReactDOM.createRoot(document.getElementById('root')).render(
    // <Myapp />
    // anotherElement
    reactElement
)