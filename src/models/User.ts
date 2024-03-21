import { Table, Column, DataType, Model, CreatedAt, UpdatedAt, HasMany } from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { IUser } from '../types/modelInterface.types';
import { Task } from './Task';
import { Comment } from './Comment';
import { Reply } from './Reply';
import { Attachment } from './Attachment';

type IUserAttributes = Optional<IUser, 'userId'>;

@Table({
  timestamps: true,
  tableName: 'users',
  modelName: 'User'
})
export class User extends Model<IUser, IUserAttributes> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true
  })
  declare userId: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare firstName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare lastName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare passwordHash: string;

  @CreatedAt
  declare createdAt: Date;

  @UpdatedAt
  declare updatedAt: Date;

  @HasMany(() => Task, {
    onDelete: 'CASCADE'
  })
  declare tasks: Task[];

  @HasMany(() => Comment, {
    onDelete: 'CASCADE'
  })
  declare comments: Comment[];

  @HasMany(() => Reply, {
    onDelete: 'CASCADE'
  })
  declare replies: Reply[];

  @HasMany(() => Attachment, {
    onDelete: 'CASCADE'
  })
  declare attachments: Attachment[];
}
