import Ember from 'ember';

export default Ember.Route.extend({
  warehouse: Ember.inject.service('brick-warehouse'),
  shoppingCart: Ember.inject.service('shopping-cart'),

  model() {
    return this.get('warehouse').getRedBricks();
  },

  actions:{


  addToCart(size,price) {
    //console.log(size,price);
    this.get('shoppingCart').addToCart("red",size,price);
    this.get('warehouse').hold("red",size);
  }

}
});
