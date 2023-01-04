import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
    timestamps:true,
    tableName:"menu_categories"
})

export class MenuCategory extends Model{
    @Column({
        type: DataType.INTEGER
    })
    menuId!: number

    @Column({
        type: DataType.INTEGER
    })
    companyId!: number

    @Column({
        type: DataType.STRING
    })
    name!:string
}