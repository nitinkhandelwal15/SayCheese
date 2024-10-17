
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


const RestaurantCard = ({resName, cuisine})=> {
    return (
        <div className="res-card" style ={{backgroundColor:"#f0f2f5"}}>
            <img alt="res-logo" className="res-logo" src="https://img.freepik.com/premium-photo/indian-hindu-veg-thali-also-known-as-food-platter-is-complete-lunch-dinner-meal-closeup-selective-focus_466689-9090.jpg"
            />
            <h2>{resName}</h2>
            <h3>4.4 stars</h3>
            <h3>35-40 mins</h3>
            <h4>{cuisine}</h4>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search"> Search</div>
            <div className="res-container">
                <RestaurantCard resName="Meghana Foods" cuisine="North Indian, Chinese, Asian"/><RestaurantCard/><RestaurantCard/><RestaurantCard/><RestaurantCard/><RestaurantCard/><RestaurantCard/><RestaurantCard/><RestaurantCard/><RestaurantCard/><RestaurantCard/><RestaurantCard/><RestaurantCard/><RestaurantCard/><RestaurantCard/>
            </div>
        </div>
    )
}

const AppLayout = ()=>{
    return (
        <div className="app">
            <Header />
            <Body/>
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);