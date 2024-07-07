import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {
  CartDropDownContainer,
  CartItemSection,
  EmptyMessage,
} from "./cart-dropdown.styles.jsx";
import { CartContext } from "../../contexts/cart.context";
const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToChecOutHandler = () => {
    navigate("checkout");
  };
  return (
    <CartDropDownContainer>
      <CartItemSection>
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CartItem key={item.id} cartItem={item} />;
          })
        ) : (
          <EmptyMessage>Your Cart Is Empty</EmptyMessage>
        )}
      </CartItemSection>
      <Button onClick={goToChecOutHandler}>GO TO CHECKOUT</Button>
    </CartDropDownContainer>
  );
};

export default CartDropDown;
