class Order {
    constructor (axios, shop_id) {
        this.axios = axios;
        this.shop_id = shop_id;
    }
    id(id) {
        return id ? id : this.shop_id;
    }
    // Retrieve a list of all the orders
    fetch(shop_id){
        shop_id = this.id(shop_id);
        return this.axios.get(`/shops/${shop_id}/orders.json`)
    }
    lists(shop_id){
        return this.fetch(shop_id);
    }
    info(id, shop_id){
        shop_id = this.id(shop_id);
        return this.axios.get(`/shops/${shop_id}/${id}.json`);
    }
    create(data, shop_id){
        shop_id = this.id(shop_id);
        return this.axios.post(`/shops/${shop_id}/orders.json`, data)
    }
    send_to_production(id, shop_id){
        shop_id = this.id(shop_id)
        return this.axios.post(`/shops/${shop_id}/orders/${id}/send_to_production.json`)
    }
    publish(id, shop_id){
        return this.send_to_production(id, shop_id);
    }
    shipping_cost(order, shop_id){
        shop_id = this.id(shop_id);
        return this.axios.post(`/shops/${shop_id}/orders/shipping.json`, order);
    }
}


module.exports = Order;