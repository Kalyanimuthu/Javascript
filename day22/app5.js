import { Feed } from "./feed.js";
import { loginUser, getLoggedInUser } from "./auth.js";

const feedContainer = document.getElementById("feed");
const sentinel = document.getElementById("sentinel");
const usernameInput = document.getElementById("username");
const loginBtn = document.getElementById("loginBtn");
const loggedInUserDisplay = document.getElementById("loggedInUser");

const feed = new Feed();
let user = getLoggedInUser();

function updateLoggedInUser() {
  loggedInUserDisplay.textContent = user ? `Logged in as: ${user}` : "";
}

loginBtn.addEventListener("click", () => {
  const input = usernameInput.value.trim();
  user = loginUser(input);
  updateLoggedInUser();
});

function renderPosts(posts) {
  posts.forEach(post => {
    const { id, user: postUser, content, likes, comments } = post;
    const div = document.createElement("div");
    div.style.border = "1px solid #ccc";
    div.style.padding = "10px";
    div.style.marginBottom = "10px";
    div.style.borderRadius = "5px";

    div.innerHTML = `
      <p><strong>${postUser}</strong>: ${content}</p>
      <button class="likeBtn" style="margin-bottom: 5px;">${likes.length} Likes</button>
      <div style="margin-bottom: 5px;">
        <input type="text" placeholder="Add comment" class="commentInput" style="width:70%; padding:4px;"/>
        <button class="commentBtn">Comment</button>
      </div>
      <div class="comments" style="margin-left:10px; color:#333;">
        ${comments.map(c => `<p style="margin:2px 0;"><strong>${c.user}:</strong> ${c.text}</p>`).join("")}
      </div>
    `;

    const likeBtn = div.querySelector(".likeBtn");
    likeBtn.addEventListener("click", () => {
      if (!user) return alert("Login first!");
      post.like(user);
      feed.save();
      likeBtn.textContent = `${post.likes.length} Likes`;
    });

    const commentBtn = div.querySelector(".commentBtn");
    const commentInput = div.querySelector(".commentInput");
    const commentsDiv = div.querySelector(".comments");

    commentBtn.addEventListener("click", () => {
      if (!user) return alert("Login first!");
      const text = commentInput.value;
      if (text.trim()) {
        post.addComment(user, text);
        feed.save();
        commentsDiv.innerHTML += `<p style="margin:2px 0;"><strong>${user}:</strong> ${text}</p>`;
        commentInput.value = "";
      }
    });

    feedContainer.appendChild(div);
  });
}

const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    const posts = feed.getNextPosts();
    if (posts.length > 0) renderPosts(posts);
  }
});

async function init() {
  updateLoggedInUser();
  await feed.fetchPosts();
  renderPosts(feed.getNextPosts());
  observer.observe(sentinel);
}

init();
