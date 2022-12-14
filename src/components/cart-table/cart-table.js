import React from "react";
import "./cart-table.scss";
import { connect } from "react-redux";
import { deleteFromCart } from "../../actions";
import { postData } from "../../actions";

const CartTable = ({ items, deleteFromCart, postData }) => {
  return (
    <>
      <div className="cart__order">
        <button className="cart__order-btn" onClick={() => postData()}>
          Order
        </button>
      </div>
      <div className="cart__title">Ваш заказ:</div>

      <div className="cart__list">
        {items.map((item) => {
          const { title, price, url, id, amt } = item;
          return (
            <div key={id} className="cart__item">
              <img src={url} className="cart__item-img" alt={title}></img>
              <div className="cart__item-title">{title}</div>
              <div className="cart__item-price">{price}$</div>
              <div className="cart__item-price">x{amt}</div>
              <div onClick={() => deleteFromCart(id)} className="cart__close">
                &times;
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const mapStateToProps = ({ items }) => {
  return {
    items,
  };
};

const mapDispatchToProps = {
  deleteFromCart,
  postData,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
