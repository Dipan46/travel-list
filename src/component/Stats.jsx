export function Stats({ items }) {
    if (!items.length)
        return (
            <p className="stats">
                <em>Add iteam to packing list</em>
            </p>
        );

    const numItem = items.length;
    const numberOdPackes = items.filter((items) => items.packed).length;
    const percentage = Math.round((numberOdPackes / numItem) * 100);

    return (
        <footer className="stats">
            <em>
                {percentage === 100
                    ? `You 'are ready to GO`
                    : `you have ${numItem} items in your list and you already packed
                ${numberOdPackes} (${percentage}%) 📦`}
            </em>
        </footer>
    );
}
