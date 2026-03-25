import { useState, useEffect } from "react"
import NavBar from "../NavBar/NavBar"

function NavBarContainer() {
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
    }, [])

    return (
        <NavBar categories={categories} />
    )
}

export default NavBarContainer