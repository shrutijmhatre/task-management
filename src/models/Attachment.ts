import { Table, Column, DataType, Model, ForeignKey } from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { IAttachment } from '../types/modelInterface.types';
import { Task } from './Task';
import { User } from './User';

type IAttachmentAttributes = Optional<IAttachment, 'attachmentId'>;

@Table({
  timestamps: true,
  tableName: 'attachments',
  modelName: 'Attachment'
})
export class Attachment extends Model<IAttachment, IAttachmentAttributes> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true
  })
  declare attachmentId: string;

  @ForeignKey(() => Task)
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare taskId: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare userId: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare attachment: string;
}
