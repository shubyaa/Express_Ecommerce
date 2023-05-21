
# E Commerce APIs using Express.js

An e-commerce app is a digital platform that allows businesses to sell products or services online. It enables users to browse through a catalog of products, add items to their shopping cart, make secure online payments, and track the progress of their orders.

The ultimate aim is to make API routes for e-commerce app using **Express.js** and **Node**.

## API Reference

#### Get all items

```http
  GET /api/users/
```

Get all users from the database.


#### Get item

```http
  GET /api/users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | Get users by id |


#### Add item

```http
  GET /api/users/add
  ```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`| `string` | userame |
| `email`| `string` | email of the user |
| `name`| `string` | name of the user |
| `password`| `string` | hashed password of the user |
| `phone`      | `string` | phone of the user |
| `email_verification`      | `boolean` | check the email_verification |
| `image_url`      | `string` | image path |
| `verifyMobile`      | `boolean` | chck mobile verification |
| `favourite_stores`      | `list` | List of ids favourite shops |

adds the user in the database.

Such Many more endpoints are yet to be added.
## Demo

Insert gif or link to demo

Get all Users
![Image 1](https://github.com/shubyaa/Express_Ecommerce/blob/main/outputs/Screenshot%20(585).png)


Get Images by id
![Image 1](https://github.com/shubyaa/Express_Ecommerce/blob/main/outputs/Screenshot%20(585).png)
## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/shubham-pednekar-573369213/)
