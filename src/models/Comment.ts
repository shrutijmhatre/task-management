import {
  Table,
  Column,
  DataType,
  Model,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
  HasMany
} from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { IComment } from '../types/modelInterface.types';
import { Task } from './Task';
import { User } from './User';
import { CommentReply } from './CommentReply';

type ICommentAttributes = Optional<IComment, 'commentId'>;

@Table({
  timestamps: true,
  tableName: 'comments',
  modelName: 'Comment'
})
export class Comment extends Model<IComment, ICommentAttributes> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true
  })
  declare commentId: string;

  @ForeignKey(() => Task)
  @Column({
    type: DataType.UUID,
    allowNull: false
  })
  declare taskId: string;

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
  declare content: string;

  @CreatedAt
  declare createdAt?: Date;

  @UpdatedAt
  declare updatedAt?: Date;

  @HasMany(() => CommentReply, {
    onDelete: 'CASCADE'
  })
  declare commentReplies: CommentReply[];
}
