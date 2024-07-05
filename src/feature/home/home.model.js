import { ObjectId } from "mongodb";
import { dbCollection } from "../../config/mongodb.js";

export default class HomeModel {
    constructor (project, desc, author){
        this._id =  new ObjectId().toString(),
        this.project = project,
        this.desc = desc,
        this.author = author,
        this.issues = [] // initially issues is none/empty
    }

    static async addProject (reqBody){
        try {
            const collection = await dbCollection();
            const project = new HomeModel(reqBody.project, reqBody.desc, reqBody.author);
            collection.insertOne(project); // insert project in data server
            return project;
        } catch (error) {
            console.log("error in inserting project in model ", error);
            return;
        }
    }
}