import { HasMany, Sequelize } from "sequelize-typescript";

import { Category } from "../models/Category";
import { Company } from "../models/Company";
import { Users } from "../models/User";
import { Operation_Hours } from "../models/Operation_Hours";
import { Menu } from "../models/Menu";
import { MenuCategory } from "../models/MenuCategory";
import { Foods } from "../models/Foods";

const sequelize = new Sequelize({
    host:"localhost",
    dialect:"postgres",
    username:"postgres",
    password:"123",
    database: "efood_clone",
    models:[Users, 
        Company, 
        Category, 
        Operation_Hours, 
        Menu, 
        MenuCategory,
        Foods,
    ],
})

Category.hasMany(Company, {
    foreignKey: "categoryId"
})
Company.belongsTo(Category, {
    foreignKey: "categoryId"
})

Company.hasMany(Operation_Hours, {
    foreignKey: "companyId"
})

Operation_Hours.belongsTo(Company, {
    foreignKey: "companyId"
})

Company.hasOne(Menu, {
    foreignKey: "companyId"
})

Menu.belongsTo(Company, {
    foreignKey: "companyId"
})

Menu.hasOne(MenuCategory, {
    foreignKey: "menuId"
})

MenuCategory.belongsTo(Menu, {
    foreignKey:"menuId"
})

Company.hasOne(MenuCategory, {
    foreignKey:"companyId"
})

MenuCategory.belongsTo(Company, {
    foreignKey:"companyId"
})

MenuCategory.hasMany(Foods, {
    foreignKey: "menuCategoryId"
})

Foods.belongsTo(MenuCategory, {
    foreignKey: "menuCategoryId"
})

Menu.hasMany(Foods, {
    foreignKey: 'menuId'
})

Foods.belongsTo(Foods, {
    foreignKey:"menuId"
})


sequelize.authenticate()
.then(() =>{
    console.log(`Connection has been established!`)
})
.catch(err=>{
    console.log(err)
});

export default sequelize;