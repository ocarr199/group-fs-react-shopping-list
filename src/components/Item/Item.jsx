function Item(props) {
  return (
    <>
      <li>{props.item.name}</li>
      <li>{props.item.quantity} {props.item.unit}</li>
      <li>
        <button>Buy</button>
        <button>Remove</button>
      </li>
    </>
  ) // End return
} // Item

export default Item;