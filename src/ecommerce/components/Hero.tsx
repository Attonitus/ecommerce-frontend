import { NavLink } from 'react-router-dom';
import sale from '/homepage/sale.jpg';
import limited from '/homepage/limited.jpg';
import newImg from '/homepage/new.jpg';
import jeans from '/homepage/jeans.png';
import shirts from '/homepage/shirts.png';
import stone from '/homepage/stone-washed.png';


import './hero.css';

export const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-g">
                <NavLink className="a-img" to="/">
                    <img src={sale} alt="" />
                </NavLink>
            </div>

            <div className="hero-m card-img">
                <NavLink className="a-img" to="/limited-edition" >
                    <img src={limited} alt="" />
                </NavLink>
                <NavLink className="a-img" to="/new" >
                    <img src={newImg} alt="" />
                </NavLink>
            </div>

            <div className="hero-s card-img">
                <NavLink className="a-img" to="/jeans">
                    <img src={jeans} alt="" />
                </NavLink>
                <NavLink className="a-img" to="/shirts">
                    <img src={shirts} alt="" />
                </NavLink>
                <NavLink className="a-img" to="/stone-washed">
                    <img src={stone} alt="" />
                </NavLink>
            </div>

        </div>
    )
}