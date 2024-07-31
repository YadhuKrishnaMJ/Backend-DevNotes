const {MongoClient} = require("mongodb");
const atlas_uri = require("./atlas_uri");

console.log(uri)

const client = new MongoClient(uri)

const dbname = "bank"

const connectToDatabase = async() =>{
    try{
        await client.connect();
        console.log(`Connected to Database ${dbname}`);
    }
    catch(err){
        console.log(`Failled to connect to Database: ${err}`);
    }
}

const main = async() =>{
    try{
        await connectToDatabase();

    }
    catch(err){
        console.log(`Failled to connect to Database: ${err}`);
    } finally {
        await client.close();
    }
}

main();