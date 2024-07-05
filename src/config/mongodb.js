import { MongoClient } from "mongodb";

const url = process.env.DB_URL;
console.log('url', url);

const client = new MongoClient(url);
const connectToMongodb = async ()=>{
    await client.connect();
    console.log('Connected to MongoDb');
}

export const dbCollection = async ()=> {
    return client.db().collection('issues');
}

export const projIssues = async (id)=> {
    const result = await client.db().collection('issues').findOne({_id: id});
    return result.issues;
}

export default connectToMongodb;