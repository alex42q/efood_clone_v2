import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
    timestamps:true,
    tableName:"menus"
})
export class Menu extends Model {
    @Column({
        type: DataType.INTEGER
    })
    companyId!: number
}