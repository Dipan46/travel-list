export function Item({ item, onDeleteItem, onHandleCheck }) {
    return (
        <li>
            <input
                type="checkbox"
                value={item.packed}
                onChange={() => onHandleCheck(item.id)}
            />
            <span style={item.packed ? { textDecoration: "line-Through" } : {}}>
                {item.quantity} {item.description}
            </span>
            <button onClick={() => onDeleteItem(item.id)}>❌</button>
        </li>
    );
}
