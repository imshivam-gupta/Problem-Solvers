import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

function Forum() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    author: "",
  });
  const [replyContent, setReplyContent] = useState("");
  const [replyAuthor, setReplyAuthor] = useState("");

  useEffect(() => {
    axios.get("http://localhost:4000/api/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  const addPost = () => {
    axios.post("http://localhost:4000/api/posts", newPost).then((response) => {
      setPosts([...posts, response.data]);
      setNewPost({ title: "", content: "", author: "" });
    });
  };

  const addReply = (postId) => {
    axios
      .post(`http://localhost:4000/api/posts/${postId}/replies`, {
        content: replyContent,
        author: replyAuthor,
      })
      .then((response) => {
        const updatedPosts = posts.map((post) =>
          post._id === postId ? response.data : post
        );
        setPosts(updatedPosts);
        setReplyContent("");
        setReplyAuthor("");
      });
  };

  return (
    <div className="App">
      <div className="posts">
        {posts.map((post) => (
          <div key={post._id} className="post">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>
              <span>Author: {post.author}</span>
              <span>Date: {new Date(post.date).toLocaleDateString()}</span>
            </p>
            <ul>
              {post.replies.map((reply, index) => (
                <li key={index}>
                  {reply.content} - {reply.author} (
                  {new Date(reply.date).toLocaleDateString()})
                </li>
              ))}
            </ul>
            <div className="reply-form">
              <input
                type="text"
                placeholder="Your reply"
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
              />
              <input
                type="text"
                placeholder="Your name"
                value={replyAuthor}
                onChange={(e) => setReplyAuthor(e.target.value)}
              />
              <button onClick={() => addReply(post._id)}>Reply</button>
            </div>
          </div>
        ))}
      </div>
      <div className="new-post-form">
        <h2>New Post</h2>
        <input
          type="text"
          placeholder="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <textarea
          placeholder="Content"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        ></textarea>
        <input
          type="text"
          placeholder="Your name"
          value={newPost.author}
          onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
        />
        <button onClick={addPost}>Submit</button>
      </div>
    </div>
  );
}

export default Forum;
