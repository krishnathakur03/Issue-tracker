import './env.js';
import bodyParser from "body-parser";
import express from "express";
import path from 'path';
import expressEjsLayouts from "express-ejs-layouts";

import homeRouter from "./src/feature/home/home.routes.js";
import projectRouter from "./src/feature/project/project.routes.js";
import { connectToMongoose } from './src/config/mongoose.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(path.resolve(), 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), 'src', 'views'));

app.use(expressEjsLayouts)

app.use('/', homeRouter);
app.use('/project', projectRouter);

const port = process.env.port || 3000;

app.listen(port, ()=>{
    console.log('Server is listning on port', port);
    connectToMongoose();
});
