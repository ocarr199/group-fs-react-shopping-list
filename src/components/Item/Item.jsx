import './Item.css';

function Item(props) {
  return (
    <>
      <div id="itemBox">
        <ul>
          <li>{props.item.name}</li>
          <li>{props.item.quantity} {props.item.unit}</li>
          <li>
            <button class="itemButton btn btn-success">Buy</button>
            <button class="itemButton btn btn-warning">Remove</button>
          </li>
        </ul>
      </div>
    </>
  ) // End return
} // Item

export default Item;