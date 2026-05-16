const alertSchema = `
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "Alert",
  "type": "object",
  "required": [
    "_id",
    "title",
    "type",
    "status",
    "createdAt",
    "modifiedAt"
  ],
  "properties": {
    "_id": {
      "type": "string"
    },
    "title": {
      "type": "string",
      "minLength": 1,
      "description": "The title of the alert, must not be blank"
    },
    "type": {
      "type": "string",
      "enum": ["warning", "info", "promotion"],
      "description": "The type of the alert, must be one of: warning, info, promotion"
    },
    "status": {
      "type": "string",
      "enum": ["active", "inactive"],
      "description": "The status of the alert, must be one of: active or inactive"
    },
    "createdAt": {
      "type": "string",
      "format": "date-time"
    },
    "modifiedAt": {
      "type": "string",
      "format": "date-time"
    }
}`

const userSchema = `
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "User",
  "type": "object",
  "required": [
    "_id",
    "name",
    "address",
    "card",
    "orders"
  ],
  "properties": {
    "_id": {
      "type": "string"
    },
    "name": {
      "type": "string",
      "minLength": 3,
      "description": "The name of the user, must be at least 3 characters long"
    },
    "address": {
      "type": "array",
      "description": "Allowed multiple delivery addresses but must have at least one address.",
      "minItems": 1,
      "items": {
        "type": "string"
      }
    },
    "card": {
      "type": "object",
      "description": "The method of payment, must have all relevant fields",
      "required": [
        "cardNumber",
        "expirationDate",
        "cvv"
      ],
      "properties": {
        "cardNumber": {
          "type": "string",
          "pattern": "^[0-9]{16}$",
          "description": "The number on desired payment method, must be 16 digits long"
        },
        "expirationDate": {
          "type": "string",
          "pattern": "^(0[1-9]|1[0-2])\\/([0-9]{2})$",
          "description": "The card’s expiration date, must be MM/YY format"
        },
        "cvv": {
          "type": "string",
          "pattern": "^[0-9]{3}$",
          "description": "The CVV, must be 3 digits long"
        }
      },
      "additionalProperties": false
    },
    "orders": {
      "type": "array",
      "description": "Array of order objects",
      "items": {
        "type": "object"
      }
    }
}`

const reviewSchema = `
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "Review",
  "type": "object",
  "required": [
    "_id",
    "itemName",
    "rating",
    "review"
  ],
  "properties": {
    "_id": {
      "type": "integer"
    },
    "itemName": {
      "type": "string",
      "description": "Item name"
    },
    "rating": {
      "type": "integer",
      "enum": [1, 2, 3, 4, 5],
      "description": "Rating 1 through 5 displayed as stars"
    },
    "review": {
      "type": "string",
      "description": "The written review of the product"
    }
}`

const orderSchema = `
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "Order",
  "type": "object",
  "required": [
    "_id",
    "items",
    "total",
    "address",
    "card"
  ],
  "properties": {
    "_id": {
      "type": "integer"
    },
    "items": {
      "type": "array",
      "description": "Array of items",
      "items": {
        "type": "object",
        "required": [
          "_id",
          "name",
          "quantity",
          "price"
        ],
        "properties": {
          "_id": {
            "type": "integer"
          },
          "name": {
            "type": "string",
            "description": "Name of item"
          },
          "quantity": {
            "type": "integer",
            "description": "Number of the item ordered"
          },
          "price": {
            "type": "number",
            "description": "The price of the item ordered, multiplied by quantity"
          }
        },
        "additionalProperties": false
      }
    },
    "total": {
      "type": "number",
      "description": "Total price of order"
    },
    "address": {
      "type": "object",
      "description": "Delivery address"
    },
    "card": {
      "type": "object",
      "description": "Card used for purchase in case of return"
    }
}`
