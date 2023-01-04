import { Model, Table, Column, DataType} from "sequelize-typescript"

@Table({
    timestamps:true,
    tableName:"companies"
})
export class Company extends Model {
    @Column({
        type: DataType.STRING
    })
    companyName!: string;

    @Column({
        type: DataType.STRING
    })
    email!: string;

    @Column({
        type: DataType.STRING
    })
    password!: string;

    @Column({
        type: DataType.STRING
    })
    image!: string;

    @Column({
        type: DataType.STRING
    })
    location!: string;
    
    @Column({
        type: DataType.STRING
    })
    elaxisti!: Float32Array;

    @Column({
        type: DataType.STRING
    })
    categoryId!: number;

    @Column({
        type: DataType.STRING
    })
    rank!: number;

    @Column({
        type: DataType.STRING
    })
    mo!: number;

    @Column({
        type: DataType.BOOLEAN
    })
    recomended!: boolean;

    @Column({
        type:DataType.STRING
    })
    slug!: string;


    @Column({
        type: DataType.STRING
    })
    logo!: string;
}