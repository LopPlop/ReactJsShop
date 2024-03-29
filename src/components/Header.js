import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';

const showOrders = (props) => {
  return (<div>{props.orders.map(order => (
    <Order key={order.id} item={order} onDelete={props.onDelete}/>
    ))}
    <p className='summa'>Сумма: ${calcOrdersSum(props.orders)}</p>
  </div>)
}

const calcOrdersSum = (orders) => {
  let sum = 0;
  orders.map(i => {sum += i.price})
  return sum;
}

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false) 

  return (
    <header>
        <div>
            <span className='logo'>House Staff</span>
            <ul className='nav'>
                <li>Про нас</li>
                <li>Контакты</li>
                <li>Кабинет</li>
            </ul>
            <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>

            {cartOpen && <div className='shop-cart'>
                {props.orders.length > 0 ? showOrders(props) : <p>Корзина пуста</p>}
            </div>}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
