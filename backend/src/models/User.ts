import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
    timestamps:true,
    tableName: "users"
})
export class Users extends Model {
    @Column({
        type: DataType.STRING
    })
    firstName!: string;
    @Column({
        type: DataType.STRING
    })
    lastName!: string;
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
    address!: string;
}