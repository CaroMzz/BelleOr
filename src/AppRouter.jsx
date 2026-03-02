import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import CartWidget from "./components/CartWidget/CartWidget"

function AppRouter() {
    const [categories, setCategories] = useState([])

    const allowed = [
        "womens-jewellery",
        "womens-watches",
        "mens-watches",
        "sunglasses",
        "womens-bags"
    ]

    useEffect(() => {
        fetch('https://dummyjson.com/products/category-list')
            .then(res => res.json())
            .then(data => {
                const categoryAccesories = data.filter(cat => allowed.includes(cat))
                setCategories(categoryAccesories)
            })
    }, []);

    return (
        <BrowserRouter>
            <NavBar categories={categories}/>
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:categoryName" element={<ItemListContainer />} />
                <Route path="/item/:itemId" element={<ItemListContainer />} />
                <Route path="*" element={<h2>404</h2>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter