class Product {
    constructor(axios, shop_id) {
        this.axios = axios;
        this.shop_id = shop_id;
    }
    id(id) {
        return id ? id : this.shop_id;
    }
    create(data, shop_id) {
        shop_id = thi.id(shop_id)
        return this.axios.post(`/shops/${shop_id}/products.json`, data)
    }
    fetch(shop_id) {
        shop_id = this.id(shop_id);
        return this.axios.get(`/shops/${shop_id}/products.json`);
    }
    info(product_id, shop_id){
        shop_id = this.id(shop_id);
        return this.axios.get(`/shops/${shop_id}/products/${product_id}.json`)
    }
    update(data, shop_id){
        shop_id = this.id(shop_id);
        product_id = data.id
        return this.axios.put(`/shops/${shop_id}/products/${product_id}.json`, data)
    }
    delete(product_id, shop_id){
        shop_id = this.id(shop_id);
        return this.axios.delete(`/shops/${shop_id}/products/${product_id}.json`)
    }
    pubish(product_id, notify, data, shop_id) {
        shop_id = this.id(shop_id);
        switch(notify){
            case "success":
                return this.axios.post(`/shops/${shop_id}/products/${product_id}/publishing_succeeded.json`, data=data)
            case "error":
                return this.axios.post(`/shops/${shop_id}/products/${product_id}/publishing_failed.json`, data=data)
            default:
                return this.axios.post(`/shops/${shop_id}/products/${product_id}/publish.json`, data=data)
        }
    }
}


module.exports = Product;