import { Model, Table, Column, DataType} from "sequelize-typescript"

@Table({
    timestamps:true,
    tableName: "categories"
})
export class Category extends Model {
    @Column({
        type: DataType.STRING
    })
    name!: string;

    @Column({
        type: DataType.STRING
    })
    slug!: string;

    @Column({
        type: DataType.STRING
    })
    image!: string;
}