
import React from "react";
import ReactDOM from "react-dom/client";

const Header = ()=>{
    return (
        <div className="header">
            <div className="logo-container">
                    <img 
                    className="logo" 
                    src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY="
                    />
            </div>
    
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>
                        <img
                            className="cart-logo"
                            src="https://cdn-icons-png.flaticon.com/512/6187/6187760.png"
                        />
                    </li>     

                                                                
                </ul>
            </div>
        </div>
        

    )

};

const AppLayout = ()=>{
    return (
        <div className="app">
            <Header />
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);