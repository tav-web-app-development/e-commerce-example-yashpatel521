"use client";

import { useState } from "react";

interface CommentProps {
  staticComments: string[];
}

const Comment = ({ staticComments }: CommentProps) => {
  const [comments, setComments] = useState<string[]>(staticComments);
  const [comment, setComment] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setComment(event.target.value);
    if (event.target.value.trim()) {
      setError("");
    }
  };

  const handleCommentSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!comment.trim()) {
      setError("Comment cannot be empty.");
      return;
    }
    setComments([...comments, comment]);
    setComment("");
  };

  return (
    <div className="comments mt-6 p-4 bg-black rounded-lg shadow-lg m-3 border-solid border-2 border-zinc-600">
      <h3 className="text-2xl font-bold text-white mb-4">Comments</h3>
      <form onSubmit={handleCommentSubmit} className="mb-4">
        <label htmlFor="comment" className="sr-only">
          Write a comment
        </label>
        <textarea
          id="comment"
          value={comment}
          onChange={handleCommentChange}
          className="w-full p-4 mb-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          placeholder="Write a comment..."
          aria-invalid={error ? "true" : "false"}
        />
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>
      </form>
      <div aria-live="polite">
        {comments.length === 0 ? (
          <p className="text-gray-400">
            No comments yet. Be the first to comment!
          </p>
        ) : (
          <ul className="space-y-4">
            {comments.map((comment, index) => (
              <li
                key={index}
                className="bg-gray-800 p-4 rounded shadow-md text-white transform transition duration-200 hover:scale-105"
              >
                {comment}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Comment;
