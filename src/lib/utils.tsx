import { USERS, User } from "../data/userData";
import { POSTS, Post } from "../data/postData";
import { COMMENTS, Comment } from "../data/commentData";

export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const fetchUserData = async (
  userId: number
): Promise<User | undefined> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return USERS.find((user) => user.id === userId);
};

export const fetchAllUsers = async (): Promise<User[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return USERS;
};

export const fetchPostById = async (
  postId: number
): Promise<Post | undefined> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return POSTS.find((post) => post.id === postId);
};

export const fetchUserPosts = async (userId: number): Promise<Post[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return POSTS.filter((post) => post.userId === userId);
};
export const fetchPostByTopic = async (topicId: string): Promise<Post[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return POSTS.filter((post) => post.topic === topicId);
};

export const fetchCommentsByPostId = async (
  postId: number
): Promise<Comment[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return COMMENTS.filter((comment) => comment.postId === postId);
};

export const getRandomElementsWithDelay = (
  data: any[],
  count: number
): Promise<any[]> => {
  return new Promise<any[]>((resolve) => {
    setTimeout(() => {
      const shuffledData = [...data].sort(() => 0.5 - Math.random());
      const randomElements = shuffledData.slice(0, count);
      resolve(randomElements);
    }, 500);
  });
};

export { USERS, type User, POSTS, type Post, COMMENTS, type Comment };
