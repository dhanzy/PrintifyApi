# Printify API


### Setup
1. Clone the repository to your project page
```
git clone https://github.com/dhanzy/PrintifyApi.git
```

2. Copy the src path of the project into project and rename it to PrintifyApi

3. Import PrintifyApi from the path you cloned the repository
> For example if it is on the same path with the file

```js
const PrintifyApi = require("./PrintifyApi");

const API = new PrintifyApi({
	shop_id: 123456, // Insert your shop id here
	access_token: "xxxxxxxxxx"
});
```

## Example
```js
const PrintifyApi = require("./PrintifyApi");

const API = new PrintifyApi({
	shop_id: 123456, // Insert your shop id here
	access_token: "xxxxxxxxxx"
});
```
```js
API.product.fetch().then(data => {
	console.log(data);
});

// support async
const result = await API.Product.fetch();

// or custom shop_id
const result = await API.Product.fetch(shop_id);
```
```js
// Retrieve a product 
const result = await API.Product.info(product_id);

// or custom shop_id
const result = await API.Product.info(product_id, shop_id);
```
```js
// Create a new product
const data = {
	"description": "Good product",
    "blueprint_id": 384,
    "print_provider_id": 1,
    "variants": [
        {
			"id": 45740,
			"price": 400
		},
		{
			"id": 45742,
			"price": 400
		},
		{
			"id": 45744,
			"price": 400
		},
		{
			"id": 45746 ,
			"price": 400
		}
      ],
      "print_areas": [
        {
          "variant_ids": [45740,45742,45744,45746],
          "placeholders": [
            {
              "position": "front",
              "images": [
                  {
                    "id": "5d15ca551163cde90d7b2203", 
                    "x": 0.5, 
                    "y": 0.5, 
                    "scale": 1,
                    "angle": 0
                  }
              ]
            }
          ]
        }
    ],
};

const result = API.Product.create(data);
// or
const result = API.Product.create(data, shop_id);
```
```js
// Update a product
const data = {
	id: 1234,
	title:'Product 1'
};

const result = await API.Product.update(data);

// or
const result = await API.Product.update(data, shop_id);

```
```js
const result = await API.Product.delete(1234);
```
```js
// Publish a product
const result = await API.Product.publish(1234);

// Notify that a product was successfully published
const result = await API.Product.publish(1234, 'success');

// Notify that a product publishing has failed
const result = await API.Product.publish(1234, 'error');
```
```js
 // Retrieve a list of orders
const result = await API.Order.fetch();

// or custom shop_id
const result = await API.Order.fetch(shop_id);
```
```js
 // Get order details by id
const result = await API.Order.info(order_id);

// or custom shop_id
const result = await API.Order.fetch(order_id, shop_id);
```
```js
 // Submit an order

const data = {
    "external_id": "2750e210-39bb-11e9-a503-452618153e4a",
    "line_items": [
      {
        "product_id": "5bfd0b66a342bcc9b5563216",
        "variant_id": 17887,
        "quantity": 1
      }
    ],
    "shipping_method": 1,
    "send_shipping_notification": false,
    "address_to": {
      "first_name": "John",
      "last_name": "Smith",
      "email": "example@msn.com",
      "phone": "0574 69 21 90",
      "country": "BE",
      "region": "",
      "address1": "ExampleBaan 121",
      "address2": "45",
      "city": "Retie",
      "zip": "2470"
    }
  };

const result = await API.Order.create(data);

// or custom shop_id
const result = await API.Order.create(data, shop_id);
```
```js
// Send an existing order to production
const result = await API.Order.publish(order_id);

// or custom shop_id
const result = await API.Order.publish(order_id, shop_id);
```
```js
// Calculate the shipping cost of an order

const order = {
    "line_items": [{
        "product_id": "5bfd0b66a342bcc9b5563216",
        "variant_id": 17887,
        "quantity": 1
    },{
        "print_provider_id": 5,
        "blueprint_id": 9,
        "variant_id": 17887,
        "quantity": 1
    },{
        "sku": "MY-SKU",
        "quantity": 1
    }],
    "address_to": {
        "first_name": "John", // not required
        "last_name": "Smith", // not required
        "email": "example@msn.com", // not required
        "phone": "0574 69 21 90", // not required
        "country": "BE",
        "region": "",
        "address1": "ExampleBaan 121",
        "address2": "45",
        "city": "Retie",
        "zip": "2470"
    }
};

const result = await API.Order.shipping_cost(order);

// or custom shop_id
const result = await API.Order.shipping_cost(order, shop_id);
```
```js
// Retrieve a list of webhooks
const result = await API.Webhook.fetch();

// or custom shop_id
const result = await API.Webhook.fetch(shop_id);
```
```js
// Retrieve a webhook
const result = await API.Webhook.info(webhook_id);

// or custom shop_id
const result = await API.Webhook.info(webhook_id, shop_id);
```
```js
// Create a new webhook
const data = {
    "topic": "order:created",
    "url": "https://morioh.com/webhooks/order/created"
}

const result = await API.Webhook.create(data);

// or custom shop_id
const result = await API.Webhook.create(data, shop_id);
```
```js
// Modify a webhook
var data = {
    id: 12345,
    "url": "https://othersite.com/callback/order/created"
};
var result = await API.Webhook.update(data);

// or custom shop_id
var result = await API.Webhook.update(data, shop_id);
```