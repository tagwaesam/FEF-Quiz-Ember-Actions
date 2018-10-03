import Ember from 'ember';

export default Ember.Route.extend({
  cart: Ember.inject.service('shopping-cart'),
  model(){
    console.log(this.get('cart').getItems());
    return this.get('cart').getItems();
  }
});
