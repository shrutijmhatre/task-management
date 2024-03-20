type IUser = {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

type ITask = {
  taskId: string;
  title: string;
  description: string;
  creatorId: string;
  assigneeId: string;
  status: 'todo' | 'doing' | 'done';
  priority: 'low' | 'medium' | 'high';
  dueDate: Date;
};

type ITag = {
  tagId: string;
  tagName: string;
};

type IComment = {
  commentId: string;
  taskId: string;
  userId: string;
  content: string;
};

type ICommentReply = {
  replyId: string;
  commentId: string;
  userId: string;
  replyContent: string;
};

type IAttachment = {
  attachmentId: string;
  taskId: string;
  userId: string;
  attachmentUrl: string;
  attachmentName: string;
  attachmentType: string;
};

export type { IUser, ITask, ITag, IComment, ICommentReply, IAttachment };
