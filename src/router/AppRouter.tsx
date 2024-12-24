import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage, ItemProductPage, 
    ProductsPage, ShoppingCartPage } from "../ecommerce/pages"


export const AppRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/*" element={<ItemProductPage />} />
            <Route path="/shopping-cart" element={<ShoppingCartPage />} />

            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    )
}