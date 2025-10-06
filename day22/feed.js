import { Post } from "./post.js";

export class Feed {
  constructor() {
    this.posts = JSON.parse(localStorage.getItem("posts")) || [];
    this.perPage = 5;
    this.loaded = 0;
  }

  async fetchPosts() {
    if (this.posts.length === 0) {
      this.posts = [
        new Post({ id: 1, user: "Alice", content: "Hello world!" }),
        new Post({ id: 2, user: "Bob", content: "Mini Twitter feed." }),
        new Post({ id: 3, user: "Charlie", content: "Testing likes & comments." }),
        new Post({ id: 4, user: "Dana", content: "Keep scrolling for more posts." }),
        new Post({ id: 5, user: "Eve", content: "This is a demo post." }),
        new Post({ id: 6, user: "Frank", content: "Infinite scroll test." }),
        new Post({ id: 7, user: "Grace", content: "Another post." })
      ];
    }
    this.save();
  }

  getNextPosts() {
    const next = this.posts.slice(this.loaded, this.loaded + this.perPage);
    this.loaded += next.length;
    return next;
  }

  save() {
    localStorage.setItem("posts", JSON.stringify(this.posts));
  }
}
