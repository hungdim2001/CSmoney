import React, {Component} from 'react';
import './UserAndCart.css';
import Search from './Search/Search';
import UserLogin from './UserLogin/UserLogin';
import Cart from './Cart/Cart';
class UserAndCart extends Component {
  render() {
    return (
      <div className="userAndCart">
        <Search />
        <UserLogin />
        <Cart />
      </div>
    );
  }
}
export default UserAndCart;
