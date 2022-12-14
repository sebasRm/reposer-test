import {Sequelize} from "sequelize";
const db=new Sequelize
(
    'restaurante',
    'root',
    '',
    {
        host:'localhost',
        dialect:'mysql'

    }
) 

export default db;