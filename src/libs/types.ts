interface PostOwnnerProps {
    userImagePath : string;
    username : string;
    studentId : string;
    postText : string;
    likeNum : number;
}
export type { PostOwnnerProps };

interface CommentProps {
    userImagePath : string;
    username : string;
    commentText : string;
    likeNum : number;
    replies : string;
}
export type { CommentProps };

interface ReplyProps {
    userImagePath : string;
    username : string;
    replyText : string;
    likeNum : string;
}
export type { ReplyProps };
