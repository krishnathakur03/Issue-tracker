import './env.js';
import bodyParser from "body-parser";
import express from "express";
import path from 'path';
import expressEjsLayouts from "express-ejs-layouts";

import connectToMongodb from "./src/config/mongodb.js";
import homeRouter from "./src/feature/home/home.routes.js";
import projectRouter from "./src/feature/project/project.routes.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(path.resolve(), 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), 'src', 'views'));

app.use(expressEjsLayouts)

app.use('/', homeRouter);
app.use('/project', projectRouter);

app.listen(8000, ()=>{
    console.log('Server is listning on port 8000');
    connectToMongodb();
});
