import React, {useContext} from "react"
import {useNavigate} from "react-router-dom"

import {Context} from "../Context"

function Header() {
    const navigate = useNavigate()
    const {cartItems} = useContext(Context)
    const cartClassName = cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"
    return (
        <header>
            {/* <Link to="/"><h2>Pic Some</h2></Link> */}
            <h2 className="title" onClick={() => navigate('/')}>Pic Some</h2>
            <i onClick={() => navigate('/cart')} className={`${cartClassName} ri-fw ri-2x`}></i>
        </header>
    )
}

export default Header
