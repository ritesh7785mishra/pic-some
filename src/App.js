import React from "react"
import {Routes, Route} from "react-router-dom"

import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"

function App() {    
    return (
        <div className="picsome">
            <Header />
            <Routes>
                <Route exact path="/" element={<Photos/>}>  
                </Route>
                <Route exact path="/cart" element={<Cart/>}>
                </Route>
            </Routes>
        </div>
    )
}

export default App