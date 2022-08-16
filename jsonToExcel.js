    const XLSX = require('xlsx')
    const response = [
        {
            "total": 60000,
            "id": 4,
            "customerId": 1,
            "createdAt": "2022-07-10T02:12:33.886Z",
            "customer": {
                "id": 1,
                "name": "oiltodiesel",
                "lastName": "transformation",
                "identityNumber": null,
                "phone": "6911",
                "phoneTwo": "099375681",
                "countryOfResidence": null,
                "province": null,
                "city": null,
                "postalCode": null,
                "createdAt": "2022-07-10T02:00:16.102Z",
                "userId": 2,
                "user": {
                    "id": 2,
                    "email": "firscustomer@customer.com",
                    "recoveryToken": null,
                    "role": "customer",
                    "createdAt": "2022-07-10T02:00:16.102Z"
                }
            },
            "items": [
                {
                    "id": 2,
                    "name": "emprendedor",
                    "image": "http://placeimg.com/640/480",
                    "description": "emprendiendo un nuevo futuro",
                    "price": 15000,
                    "createdAt": "2022-07-10T01:55:30.839Z",
                    "categoryId": 1,
                    "OrderProduct": {
                        "id": 6,
                        "createdAt": "2022-07-10T10:44:18.589Z",
                        "amount": 4,
                        "orderId": 4,
                        "productId": 2
                    }
                }
            ]
        },
        {
            "total": 150000,
            "id": 6,
            "customerId": 1,
            "createdAt": "2022-07-10T11:18:02.694Z",
            "customer": {
                "id": 1,
                "name": "oiltodiesel",
                "lastName": "transformation",
                "identityNumber": null,
                "phone": "6911",
                "phoneTwo": "099375681",
                "countryOfResidence": null,
                "province": null,
                "city": null,
                "postalCode": null,
                "createdAt": "2022-07-10T02:00:16.102Z",
                "userId": 2,
                "user": {
                    "id": 2,
                    "email": "firscustomer@customer.com",
                    "recoveryToken": null,
                    "role": "customer",
                    "createdAt": "2022-07-10T02:00:16.102Z"
                }
            },
            "items": [
                {
                    "id": 2,
                    "name": "emprendedor",
                    "image": "http://placeimg.com/640/480",
                    "description": "emprendiendo un nuevo futuro",
                    "price": 15000,
                    "createdAt": "2022-07-10T01:55:30.839Z",
                    "categoryId": 1,
                    "OrderProduct": {
                        "id": 7,
                        "createdAt": "2022-07-10T11:21:57.991Z",
                        "amount": 10,
                        "orderId": 6,
                        "productId": 2
                    }
                }
            ]
        },
        {
            "total": 1000,
            "id": 9,
            "customerId": 1,
            "createdAt": "2022-07-14T16:52:52.981Z",
            "customer": {
                "id": 1,
                "name": "oiltodiesel",
                "lastName": "transformation",
                "identityNumber": null,
                "phone": "6911",
                "phoneTwo": "099375681",
                "countryOfResidence": null,
                "province": null,
                "city": null,
                "postalCode": null,
                "createdAt": "2022-07-10T02:00:16.102Z",
                "userId": 2,
                "user": {
                    "id": 2,
                    "email": "firscustomer@customer.com",
                    "recoveryToken": null,
                    "role": "customer",
                    "createdAt": "2022-07-10T02:00:16.102Z"
                }
            },
            "items": [
                {
                    "id": 4,
                    "name": "producto",
                    "image": "http://placeimg.com/640/480",
                    "description": "nuevo producto",
                    "price": 1000,
                    "createdAt": "2022-07-14T16:45:04.946Z",
                    "categoryId": 1,
                    "OrderProduct": {
                        "id": 8,
                        "createdAt": "2022-07-14T16:54:01.310Z",
                        "amount": 1,
                        "orderId": 9,
                        "productId": 4
                    }
                }
            ]
        },
        {
            "total": 0,
            "id": 5,
            "customerId": 1,
            "createdAt": "2022-07-10T11:16:35.588Z",
            "customer": {
                "id": 1,
                "name": "oiltodiesel",
                "lastName": "transformation",
                "identityNumber": null,
                "phone": "6911",
                "phoneTwo": "099375681",
                "countryOfResidence": null,
                "province": null,
                "city": null,
                "postalCode": null,
                "createdAt": "2022-07-10T02:00:16.102Z",
                "userId": 2,
                "user": {
                    "id": 2,
                    "email": "firscustomer@customer.com",
                    "recoveryToken": null,
                    "role": "customer",
                    "createdAt": "2022-07-10T02:00:16.102Z"
                }
            },
            "items": []
        },
        {
            "total": 0,
            "id": 8,
            "customerId": 1,
            "createdAt": "2022-07-10T11:21:24.924Z",
            "customer": {
                "id": 1,
                "name": "oiltodiesel",
                "lastName": "transformation",
                "identityNumber": null,
                "phone": "6911",
                "phoneTwo": "099375681",
                "countryOfResidence": null,
                "province": null,
                "city": null,
                "postalCode": null,
                "createdAt": "2022-07-10T02:00:16.102Z",
                "userId": 2,
                "user": {
                    "id": 2,
                    "email": "firscustomer@customer.com",
                    "recoveryToken": null,
                    "role": "customer",
                    "createdAt": "2022-07-10T02:00:16.102Z"
                }
            },
            "items": []
        }
    ]

    const ordenes = response.map(x => x);
    const customer = response.map(x => x.customer);
    const items = response.map(x => x.items);
    const items2 = items.flat(Infinity);
/*     console.log(items2); */
    const orderProduct = items2.map(x => x.OrderProduct);

const convertJsonToExcel = (arrayO, namou) => {

    const workSheet = XLSX.utils.json_to_sheet(arrayO);

    const workBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workBook, workSheet, `${namou}`)
    // Generate buffer
    XLSX.write(workBook, { bookType: 'xlsx', type: "buffer" })

    // Binary string
    XLSX.write(workBook, { bookType: "xlsx", type: "binary" })

    XLSX.writeFile(workBook, `${namou}.xlsx`)

}

/*     const resp = array.forEach(element => `${element.id}`);
    return resp; */
/* console.log(b); */
const name = {
    orders: 'ordenes',
    customers: 'clientes',
    items: 'productos',
    orderProducts: 'orden-producto'
}

const metods = {
    orders: ordenes,
    customers: customer,
    items: items2,
    orderProducts: orderProduct
}

convertJsonToExcel(metods.orders, name.orders);

