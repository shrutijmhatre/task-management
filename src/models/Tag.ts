import {
  Table,
  Column,
  DataType,
  Model,
  BelongsToMany
} from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { ITag } from '../types/modelInterface.types';
import { TaskTag } from './TaskTag';
import { Task } from './Task';

type ITagAttributes = Optional<ITag, 'tagId'>;

@Table({
  timestamps: true,
  tableName: 'tags',
  modelName: 'Tag'
})
export class Tag extends Model<ITag, ITagAttributes> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true
  })
  declare tagId: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare tagName: string;

  @BelongsToMany(() => Task, () => TaskTag)
  declare tasks: Task[];
}
