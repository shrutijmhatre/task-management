import {
  Table,
  Column,
  DataType,
  Model,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
  HasMany,
  BelongsToMany
} from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { ITask } from '../types/modelInterface.types';
import { User } from './User';
import { Comment } from './Comment';
import { Attachment } from './Attachment';
import { Tag } from './Tag';
import { TaskTag } from './TaskTag';

type ITaskAttributes = Optional<ITask, 'taskId'>;

@Table({
  timestamps: true,
  tableName: 'tasks',
  modelName: 'Task'
})
export class Task extends Model<ITask, ITaskAttributes> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true
  })
  declare taskId: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare title: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare description: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: false
  })
  declare creatorId: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.STRING
  })
  declare assigneeId: string;

  @Column({
    type: DataType.ENUM,
    values: ['todo', 'doing', 'done']
  })
  declare status: string;

  @Column({
    type: DataType.ENUM,
    values: ['low', 'medium', 'high']
  })
  declare priority: string;

  @CreatedAt
  declare createdAt?: Date;

  @UpdatedAt
  declare updatedAt?: Date;

  @HasMany(() => Comment, {
    onDelete: 'CASCADE'
  })
  declare comments: Comment[];

  @HasMany(() => Attachment, {
    onDelete: 'CASCADE'
  })
  declare attachments: Attachment[];

  @BelongsToMany(() => Tag, () => TaskTag)
  declare tags: Tag[];
}
