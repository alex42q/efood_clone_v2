import { Company } from "../models/Company";
import { Category } from "../models/Category";
import { MenuCategory } from "../models/MenuCategory";
import { Request, Response, NextFunction } from "express";
import { Menu } from "../models/Menu";
import { Operation_Hours } from "../models/Operation_Hours";
import { Foods } from "../models/Foods";
import { Op, literal }  from  'sequelize';
import bcrypt from "bcrypt"

export const RegisterNewCompany = async (req: Request, res: Response, next: NextFunction) =>{
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(req.body.password, salt);
    const category = await Category.findOne({
        where: {id: req.body.categoryId}
    });
    if (category) {
        try {
            const company = {
                    companyName: req.body.companyName,
                    email: req.body.email,
                    password: hash,
                    image: req.body.image,
                    location: req.body.location,
                    elaxisti: req.body.elaxisti,
                    categoryId: req.body.categoryId,
                    rank: req.body.rank,
                    mo: req.body.mo
                }
                const createCompany = await Company.create(company)
                return res.status(201).json({
                    data:createCompany
                })
        }
        catch(err){
            return res.status(401).send("Error register new company@!!")
        }
    }else{
        return res.status(401).send("Error register new company")
    }
}

export const GetFourOffersIndex = async (req: Request, res: Response, next: NextFunction) =>{
    const companies = await Company.findAll({
        order:[
            ['createdAt', "DESC"]
        ],
        limit: 4
    })
    return res.status(200).json({
        data:companies
    })
}

export const GetTwoRecomendedCompaniesOperationHours = async(req: Request, res: Response, next: NextFunction) =>{
    const getTheCompanies = await Company.findAll({
        limit:2,
        include: [{
            model: Operation_Hours,
            required: false,
            where: {
                [Op.and]:[
                    {day: literal("day=(select TRIM(to_char(now(), 'Day')))")},
                    {localtime: literal("localtime between start_at and end_at")},
                ]
            }
        }, {model:Category}],
        where:{
            [Op.and]: [
                {recomended: true}
            ]
        },
    })

    const getTheCompanies2 = await Operation_Hours.findAll({
        limit:2,
        include: [{
            model: Company,
            include: [Category],
        }],
        where: {
            [Op.and]:[

                {day: literal("day=(select TRIM(to_char(now(), 'Day')))")},
               
                {recomeded: literal(`"Company"."recomended" = true`)}
            ]
        },
    })

    try {
        return res.status(200).json({
            data:getTheCompanies
        })
    }
    catch(err) {
        return res.status(404).send("Error on query!")
    }
}

export const GetAllCompaniesWithOperationHours = async(req: Request, res: Response, next: NextFunction) =>{
    const getAllShops = await Operation_Hours.findAll({
        include:[{
            model: Company,
            include: [Category]
        }]
    })
    try{
        return res.status(200).json({
            data:getAllShops
        })
    }
    catch(err) {
        return res.status(404).send("Error on query")
    }
}

export const GetOneCompany = async(req: Request, res:Response, next: NextFunction) =>{
    const slug = req.params.slug;
    try{
        const oneShop = await Company.findOne({
            include:{
                model:Category
            },
            where: {
                slug:slug
            }
        })
        const oneShopMenu = await Menu.findOne({
            where:{
                companyId: oneShop?.id
            }
        })
        const oneShopCategories = await MenuCategory.findAll({
            include:[
                {
                model:Company
                },
                {
                    model:Menu
                }
        ],
            where:{
                companyId: oneShop?.id
            }
        })
        const oneShopFoods = await Foods.findAll({
            where:{
                menuId: oneShopMenu?.id
            }
        })
        return oneShop === null ? res.status(404).send("No found!") :res.status(200).json({data:oneShop, menuCategories: oneShopCategories, foods: oneShopFoods});
    }
    catch(err) {
        console.log(err)
        return res.status(404).send("No found!")
    }
}
