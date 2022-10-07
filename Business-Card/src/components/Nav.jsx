import React from 'react'

export default function Nav(){
    return (
        <nav>
            <ul className='nav'>
                <li className='nav-item email'> <img src="src/images/Mail.png" alt="mail" /> <a className='nav-link' href='mailto:ricardo.r.p466@gmail.com'>Email</a></li>
                <li className='nav-item in'> <img src="src\images\linkedin.png" alt="in logo" /> <a className='nav-link' href='https://www.linkedin.com/in/ricardo-ramos466/'>LinkedIn</a></li>
            </ul>
        </nav>
    )
}