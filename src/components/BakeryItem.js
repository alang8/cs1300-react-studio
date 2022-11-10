// Create a component that displays a single bakery item
export default function BakeryItem(props) {
  function addToCart() {
    props.setTotal(props.total + props.item.price);
    props.setCart((cart) => {
      let newCart = [...cart];
      newCart[props.index] += 1;
      return newCart;
    });
  }

  return (
    <div className="bakeryItem">
      <img src={ props.item.image } alt={ props.item.name } className="bakeryItemImg"/>
      <h2 className="bakeryItemText">{ props.item.name }</h2>
      <p className="bakeryItemText"><i>{ props.item.description }</i></p>
      <p className="bakeryItemText">${ props.item.price }</p>
      <button onClick={ addToCart } className="bakeryItemButton">Add to Cart</button>
    </div>
  );
}    