import { Model, Column, DataType, Table } from "sequelize-typescript";


@Table({
    timestamps:true,
    tableName:"foods"
})
export class Foods extends Model {
    @Column({
        type: DataType.INTEGER
    })
    menuCategoryId!: number

    @Column({
        type: DataType.STRING
    })
    name!: string

    @Column({
        type: DataType.STRING
    })
    description!: string

    @Column({
        type: DataType.STRING
    })
    price!: string

    @Column({
        type: DataType.STRING
    })
    image!: string

    @Column({
        type: DataType.INTEGER
    })
    foodExtraMenuCategoriesId!: number
}