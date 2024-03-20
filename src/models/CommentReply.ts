import {
  Table,
  Column,
  DataType,
  Model,
  CreatedAt,
  UpdatedAt,
  ForeignKey
} from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { ICommentReply } from '../types/modelInterface.types';
import { User } from './User';
import { Comment } from './Comment';

type ICommentReplyAttributes = Optional<ICommentReply, 'replyId'>;

@Table({
  timestamps: true,
  tableName: 'commentReplys',
  modelName: 'CommentReply'
})
export class CommentReply extends Model<
  ICommentReply,
  ICommentReplyAttributes
> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true
  })
  declare replyId: string;

  @ForeignKey(() => Comment)
  @Column({
    type: DataType.UUID,
    allowNull: false
  })
  declare commentId: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: false
  })
  declare userId: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare reply: string;

  @CreatedAt
  declare createdAt?: Date;

  @UpdatedAt
  declare updatedAt?: Date;
}
