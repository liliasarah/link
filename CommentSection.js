// CommentSection.js

import React, { useState } from 'react';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const addComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  const deleteComment = (index) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
  };

  return (
    <div className='commentaires'>
      <h3>Commentaires</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            {comment}
            <button id='ss' onClick={() => deleteComment(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Ajouter un commentaire..."
      />
      <button className='add-comment' onClick={addComment}>
        Ajouter le commentaire
      </button>
    </div>
  );
};

export default CommentSection;
