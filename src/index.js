'use strict'

const axios = require('axios');
const util = require('util');
const EventEmitter = require('events').EventEmitter

const Product = require('./Product');
const Webhook = require('./webhook');
const Order = require('./Order');

class PrintifyApi {
    constructor(option) {
        EventEmitter.call(this);
        this.opts = Object.assign({ version: 'v1', access_token: '', shop_id: '' }, option || {});
        this.baseURL = ['https://api.printify.com', this.opts.version].join('/');

        this.axios = axios.create({
            baseURL: this.baseURL,
            setTimeout: '3000',
            headers: { 'Authorization': `Bearer ${this.opts.access_token}` }
        });

        this.axios.interceptors.response.use(function (response) {
            return response && response.data ? response.data : null;
        }, function (error) {
            console.log(util.inspect(error));
            return Promise.reject(error && error.response ? error.response.data : error);
        });
        this.Product = new Product(this.axios, this.opts.shop_id);
        this.Webhook = new Webhook(this.axios, this.opts.shop_id);
        this.Order = new Order(this.axios, this.opts.shop_id);
    }
    // Retrieve a list of shops in a printify account
    shops() {
        return this.axios.get('/shops.json');
    }
    // Disconnect a shop
    disconnect_shop() {
        return this.axios.delete(`/shop/${this.opts.shop_id}/connection.json`)
    }
    // Retrieve a list of available blueprint
    catalogues() {
        return this.axios.get(`/catalog/blueprints.json`)
    }
    // Retrieve a specific blueprint
    catalog() {
        return this.axios.get(`/catalog/blueprint/${id}.json`);
    }
    // If id is undefined Retrieve a list of all availabe print-providers
    providers(id) {
            return id ? this.axios.get(`/catalog/blueprint/${id}/print_providers.json`) : this.axios.get(`/catalog/print_providers.json`)
    }
    provider(id) {
        return this.axios.get(`/catalog/print_providers/${id}/.json`)
    }
    variants(cid, pid) {
        return this.axios.get(`/catalog/blueprints/${cid}/print_providers/${pid}/shipping.json`)
    }
    shipping(cid, pid) {
        return this.axios.get(`/catalog/blueprints/${cid}/print_providers/${pid}/shipping.json`)
    }
    upload() {
        return this.axios.post(`/uploads/images.json`, data)
    }
}

module.exports = PrintifyApi;