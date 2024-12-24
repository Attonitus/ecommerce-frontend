import { NavLink } from "react-router-dom"
import './productsimple.css';

interface Props {
    product: string,
}


export const ProductSimple = ({product}: Props) => {
    return(
        <NavLink className="link-img" to="/product/black-jeans" >
            <img src={product} alt="" />
        </NavLink>
    )
}