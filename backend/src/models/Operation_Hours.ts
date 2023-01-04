import { Model, Table, Column, DataType} from "sequelize-typescript"

@Table({
    timestamps:true,
    tableName:"operation_hours"
})
export class Operation_Hours extends Model {
    @Column({
        type: DataType.TIME
    })
    start_at!: TimeRanges
    @Column({
        type: DataType.TIME
    })
    end_at!: TimeRanges
    @Column({
        type: DataType.INTEGER
    })
    companyId!:number
    @Column({
        type: DataType.STRING
    })
    day!: string
}