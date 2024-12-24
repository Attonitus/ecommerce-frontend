import { NavLink } from "react-router-dom";
import { ProductSimple } from "./ProductSimple";

import './listofproducts.css';

interface Props {
    title: string,
    products: string[]
}

export const ListOfProducts = ({title, products}: Props) => {

    return(
        <div className="container-s">
            <div className="top-info">
                <h3 className="title-list">{title}</h3>
                <NavLink className="link" to="/products">View all ➡</NavLink>
            </div>
            <div className="list-products">
                {
                    products.map( (product, index) => (
                        <ProductSimple product={product} key={index} />
                    ))
                }
            </div>
        </div>
    )
}