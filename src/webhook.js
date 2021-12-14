class Webhook {
    constructor(axios, shop_id){
        this.axios = axios,
        this.shop_id = shop_id
    }
    id(id){
        return id ? id : this.shop_id;
    }
    fetch(shop_id){
        shop_id = this.id(shop_id)
        return this.axios.get(`/shops/${shop_id}/webhooks.json`)
    }
    lists(shop_id) {
        return this.fetch(shop_id);
    }
    info(id, shop_id) {
        shop_id = this.fetch.id(shop_id);
        return this.axios.get(`/shops/${shop_id}/webhooks/${id}.json`)
    }
    update(data, shop_id) {
        shop_id = this.id(shop_id);
        return this.axios.post(`/shops/${shop_id}/webhooks.json`, data)
    }
    delete(id, shop_id) {
        shop_id = this.id(shop_id);
        return this.axios.delete(`/shops/${shop_id}/webhooks/${id}.json`);
    }
}

module.exports = Webhook;