const mongoose = require('mongoose');
const { default: Product } = require('../../client/src/components/Product');

var schema = mongoose.Schema({
    products: [{             // List of all products - include quantity
        prod: {              //the product
            type: Product,
            required: true
        },
        qty: {              // quantity
            type: Int16Array,
            required: true
        }
    }]
}, {
    versionKey: false,
    timestamps: true
}
);

module.exports = mongoose.model("Order", schema, "Order");