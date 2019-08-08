import React from 'react'

const NavBar = () => {
    return (
        <div>
            <nav aria-label="breadcrumb">
  
                <ol className="breadcrumb">
                    <li>
                        <i className="material-icons">home</i>
                    </li>
                    <li className="breadcrumb-item"><a href="#"> Home</a>
                    </li>
                    <li className="breadcrumb-item"><a href="#"> Filters & Search</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page"> Orders
                    
                    </li>
                </ol>
            </nav>
        </div>
    )
}

export default NavBar
