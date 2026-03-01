import './ItemListContainer.css'

function ItemListContainer({ message }) {
    return(
        <div className="greeting">
            <h1>{message}</h1>
        </div>
    )
}

export default ItemListContainer