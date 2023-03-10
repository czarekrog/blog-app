import { PostComment } from "./PostComment";

export interface Post {
  id: string;
  title: string;
  tags: string;
  shortDesc: string;
  content: string;
  image: string;
  author: string;
  date: number; //in milliseconds
  featured: boolean;
  comments: PostComment[];
}
