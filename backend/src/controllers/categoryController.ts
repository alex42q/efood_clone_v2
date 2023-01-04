import { Category } from "../models/Category";
import { Request, Response, NextFunction } from "express";

export const AddCreateNewCategory = async (req: Request, res: Response, next: NextFunction) =>{
    const category = {
        name: req.body.name,
        slug: req.body.slug,
        image: req.body.image
    }
    try {
        const createCategory = await Category.create(category);
        return res.status(201).json({
            data:createCategory
        })
    }
    catch(err) {
        console.log(err)
        return res.status(401).send("Error create category");
    }
}

export const GetAllCategories = async (req: Request, res: Response, next: NextFunction) =>{
    try{
        const allCategories = await Category.findAll();
        return res.status(200).json({
            data:allCategories
        })
    }
    catch(err) {
        return res.status(404).send("No catgories found!")
    }
    
}