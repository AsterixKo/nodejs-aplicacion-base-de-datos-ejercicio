import { Model, DataType, Sequelize, DataTypes } from 'sequelize';
import { database } from '../database';

export class Product extends Model {
    public id!: number;
    public name!: string;
    public familyName!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
}

Product.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
},{
    tableName: 'products',
    sequelize: database
});