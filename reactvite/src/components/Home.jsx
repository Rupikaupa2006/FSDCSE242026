import React from 'react'
import {Link} from 'react-router-dom'//Link is a component provided by React Router it creates a clickable ink that navigates to a route in the application.
function Home() {
  return (
    <div>
        <h2>Welcome to Home Page</h2>
        <nav>
            <ul>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to='/registration'>Registration</Link>
                </li>
                </ul>
        </nav>
    </div>
  )
}

export default Home