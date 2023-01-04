const pg = require("pg");

const connectionString = "postgres://postgres:123@localhost:5432/efood_clone";

const pgClient = new pg.Client(connectionString);

const categories = [
    "Προσφορές",
    "Δημοφιλέστερα",
    "Καφέδες",
    "Ροφήματα",
    "Φυσικοί χυμοί",
    "Smoothies",
    "Γρανίτες",
    "Sandwiches",
    "Κριτσίνια",
    "Snacks αλμυρά",
    "Snacs γλυκά",
    "Αναψυχτικά",
    "Καφεκοπτείο espresso μονοποικιλιακοί",
    "Μπύρες"
]

pgClient.connect()


categories.map((items) =>{
    try {
        setTimeout( async() =>{
            const query = await pgClient.query(`INSERT INTO menu_categories ("menuId", "companyId" , "name", "createdAt", "updatedAt") VALUES ('1', '3', '${items}', Now(), Now())`)
            console.log(items)
            console.log(query.rows[0])
            
        }, 1000)
 
    }
    catch(err) {
        console.log(err)
    }
})


console.log("Done!")

pgClient.end()