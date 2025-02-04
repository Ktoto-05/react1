import React, { useEffect, useState } from 'react';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  const PostsAll = showAll ? posts : posts.slice(0, 5);

  return (
    <div>
      <ul>
        {PostsAll.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={() => setShowAll(!showAll)}>
        {showAll ? 'Скрыть' : 'Показать все'}
      </button>
    </div>
  );
}

export default PostList;