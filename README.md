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
var data = {
	id: 1234,
	title:'Product 1'
};

var result = await API.Product.update(data);

// or
var result = await API.Product.update(data, shop_id);

```
```js
var result = await API.Product.delete(1234);
```
```js
// Publish a product
var result = await API.Product.publish(1234);

// Notify that a product was successfully published
var result = await API.Product.publish(1234, 'success');

// Notify that a product publishing has failed
var result = await API.Product.publish(1234, 'error');
```