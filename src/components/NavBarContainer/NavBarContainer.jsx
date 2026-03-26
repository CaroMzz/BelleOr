import { useState, useEffect } from "react"
import NavBar from "../NavBar/NavBar"
import { getCategories } from "../../firebase/db"

function NavBarContainer() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
            getCategories()
            .then(cate => setCategories(cate))
    }, [])

    return (
        <NavBar categories={categories} />
    )
}

export default NavBarContainer