import React from 'react';

async function MakeOrder(values, tot) {
 var someData =values
 var shopping = {
  johnhamm: [],
  check:[]
};
shopping.check.push({
  "location": "Waterford",
  "total": tot
})
for(var i in someData) {    

  var item = someData[i];   

  shopping.johnhamm.push({ 
      "shop" : item.label,
      "item" : item.text,
      "price"  : item.price,
      "quantity"       : item.qty 
  });
}

  fetch('http://localhost:5000/order',{
    method: 'POST',
    body:JSON.stringify(shopping),
    headers:{
        "Content-type": "application/json; charset=UTF-8"
    }
}).then(response => response.json())
.then(message => {
  alert("thanks for your order, your order " + message)
})
 }

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0;
  const shippingPrice = itemsPrice > 2000 ? 0 : 2;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.text}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => MakeOrder(cartItems, totalPrice)}>
              {/* <button onClick={() => alert(JSON.stringify(cartItems))}> */}

                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
