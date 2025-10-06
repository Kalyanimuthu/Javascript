export class Post {
  constructor({ id, user, content, likes = [], comments = [] }) {
    this.id = id;
    this.user = user;
    this.content = content;
    this.likes = likes;
    this.comments = comments;
  }

  like(user) {
    if (this.likes.includes(user)) this.likes = this.likes.filter(u => u !== user);
    else this.likes.push(user);
  }

  addComment(user, text) {
    if (text.trim()) this.comments.push({ user, text });
  }
}
