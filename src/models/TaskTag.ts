import { Table, Column, DataType, Model, ForeignKey } from 'sequelize-typescript';
import { Task } from './Task';
import { Tag } from './Tag';

@Table({
  timestamps: true,
  tableName: 'taskTags',
  modelName: 'TaskTag'
})
export class TaskTag extends Model {
  @ForeignKey(() => Task)
  @Column({
    type: DataType.UUID,
    allowNull: false
  })
  declare taskId: string;

  @ForeignKey(() => Tag)
  @Column({
    type: DataType.UUID,
    allowNull: false
  })
  declare tagId: string;
}
