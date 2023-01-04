const pg = require("pg");

const connectionString = "postgres://postgres:123@localhost:5432/efood_clone";

const pgClient = new pg.Client(connectionString);

const prosfores = [
    {
        menuCategoryId: "1",
        name: "1 Espresso διπλός ή freddo espresso & 1 νερό 500ml",
        description: "",
        price:"2,30",
        image:""
    },
    {
        menuCategoryId: "1",
        name: "1 Cappuccino διπλός ή freddo cappuccino & 1 νερό 500ml",
        description: "",
        price:"2,50",
        image:""
    },
    {
        menuCategoryId: "1",
        name: "1 Καφές διπλός της επιλογής σας, 1 τοστ & 1 νερό 500ml",
        description: "",
        price:"4,00",
        image:""
    },
    {
        menuCategoryId: "1",
        name: "1 Φυσικός χυμός πορτοκάλι & 1 μπαγκέτα της επιλογής σας",
        description: "",
        price:"4,50",
        image:""
    }
]

const dimofilestera = [
    {
        menuCategoryId: "2",
        name: "Μπαγκέτα ολικής άλεσης με γαλοπούλα",
        description: "",
        price:"3,00",
        image:"https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cove…m/000000001714?c=82817d703790281ac1665ac675413595"
    },
    {
        menuCategoryId: "2",
        name: "Cappuccino",
        description: "",
        price:"1,80",
        image:"https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cove…m/000000001218?c=e1b3512f87f93847bd7d65fea9c3600b"
    },
    {
        menuCategoryId: "2",
        name: "Freddo cappuccino",
        description: "",
        price:"2,20",
        image:"https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cove…m/000000001220?c=11c46b0f21fe91e35c582c935ed1a8e8"
    },
    {
        menuCategoryId: "2",
        name: "Muffin σοκολάτα",
        description: "",
        price:"1,50",
        image:""
    },
]

const kafedes = [
    {
        menuCategoryId: "3",
        name: "Espresso",
        description: "",
        price:"1,60",
        image:"https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/vertical:food:espresso?c=1670918334"
    },
    {
        menuCategoryId: "3",
        name: "Espresso ristretto",
        description: "",
        price:"1,60",
        image:"https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/vertical:food:espresso-ristretto?c=1667473456"
    },
    {
        menuCategoryId: "3",
        name: "Espresso lungo",
        description: "",
        price:"1,60",
        image:"https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/vertical:food:espresso-lungo?c=1667473446"
    },
    {
        menuCategoryId: "3",
        name: "Espresso americano",
        description: "",
        price:"1,60",
        image:"https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/vertical:food:espresso-americano?c=1667473447"
    },
    {
        menuCategoryId: "3",
        name: "Espresso macchiato",
        description: "",
        price:"1,70",
        image:"https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/vertical:food:espresso-macchiato?c=1667473448"
    },
    {
        menuCategoryId: "3",
        name: "Espresso con panna",
        description: "Espresso με σαντιγύ",
        price:"1,90",
        image:"https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/vertical:food:espresso-con-panna?c=1668610838"
    },
]

pgClient.connect()

// prosfores.map( async (items) =>{
//     try {
//         const query = await pgClient.query(`INSERT INTO foods ("menuCategoryId", "name" , "description", "price", "image", "createdAt", "updatedAt") VALUES ('${items.menuCategoryId}', '${items.name}', '${items.description}', '${items.price}', '${items.image}', Now(), Now())`)
//         console.log(items)
//     }
//     catch(err) {
//         console.log(err)
//     }
    
// })

kafedes.map( async (items) =>{
    try {
        const query = await pgClient.query(`INSERT INTO foods ("menuCategoryId", "name" , "description", "price", "image", "createdAt", "updatedAt") VALUES ('${items.menuCategoryId}', '${items.name}', '${items.description}', '${items.price}', '${items.image}', Now(), Now())`)
        console.log(items)
    }
    catch(err) {
        console.log(err)
    }
    
})

console.log("Done!")