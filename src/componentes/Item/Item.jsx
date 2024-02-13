function Item({ item }) {
    return (
        <li>
            <p>{`${item.id} - ${item.name}`}</p>
        </li>
    )
}

export default Item;