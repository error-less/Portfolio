import React from 'react'
import './portfolio.scss'
function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
         <h1>Portfolio</h1>
         <ul>
             <li>Featured</li>
             <li className='active'>Web App</li>
             <li>Design</li>
             <li>Machine Learning</li>
             <li>Datascience</li>
         </ul>
         <div className="container">
             <div className="item">
                 <img src="assets/duet.png" alt="" />
                 <h3>Video-Call App</h3>
             </div>
             <div className="item">
                 <img src="assets/netflix.png" alt="" />
                 <h3>Netflix App</h3>
             </div>
             <div className="item">
                 <img src="assets/portfolio.png" alt="" />
                 <h3>Portfolio</h3>
             </div>
             <div className="item">
             <img src="assets/todo.png" alt="" />
                 <h3>Todo App</h3>
             </div>
             <div className="item">
             <img src="assets/drum.png" alt="" />
                 <h3>Drum-Kit App</h3>
             </div>
         </div>
        </div>
    )
}

export default Portfolio
