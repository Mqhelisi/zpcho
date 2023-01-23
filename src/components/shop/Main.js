import React from 'react';
import Product from './Product';

import CardItem from '../CardItem'
import '../Cards.css'

export default function Main(props){
    const {countCartItems, products, onAdd } = props;
    // console.log(products)
    return(
        <div className = 'cards'>
            <h1> Product listing: Items on List = {countCartItems}</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                <ul className="cards__items">
            {products.map((product, index) => {
                return(
                    <CardItem
                    product={product}
                    key={product.id}
                    onAdd={onAdd}

                    />
                )
            
        })
    }

                    

                </ul>
                </div>
            </div>
        </div>
    )
}


// export default function Main(props) {
//   const { products, onAdd } = props;
//   return (
//     <main className="block col-2">
//       <h2>Products</h2>
//       <div className="row">
//         {products.map((product) => (
//           <Product key={product.id} product={product} onAdd={onAdd}></Product>
//         ))}
//       </div>
//     </main>
//   );
// }
