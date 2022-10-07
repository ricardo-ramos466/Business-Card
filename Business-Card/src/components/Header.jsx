import React from 'react'

export default function Header(){
    return (
        <header>
            <div className='header'>
                <img className='headshot' src = "src/images/Ricardo-Ramos.jpg"/>
            <div className="id">
                <h1 className='name'>Ricardo Ramos</h1>
                <h3 className='title'>Full-Stack Developer</h3>
                <a className='site'>ricardo.ramos</a>
            </div>
            </div>
            
        </header>
    )
}