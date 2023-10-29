"use client";

import Image from "next/image";
import React, { useState } from "react";

interface Comment {
  id: number;
  userId: number;
  message: string;
  likes: number;
  createdAt: string;
  replys: Comment[] | undefined;
}

interface User {
  id: number;
  name: string;
}

function Reply({
  comment,
  currentUser,
  key,
  updateComments,
}: {
  comment: Comment;
  currentUser: User | null;
  key: number;
  updateComments: (updatedComment: Comment) => void;
}) {
  const handleLikePlus = () => {
    const updatedComment = { ...comment, likes: comment.likes + 1 };
    updateComments(updatedComment);
  };

  const handleLikeMunis = () => {
    const updatedComment = {
      ...comment,
      likes: comment.likes > 0 ? comment.likes - 1 : 0,
    };
    updateComments(updatedComment);
  };
  return (
    <>
      <div
        key={key}
        className="flex items-center ml-10 pl-10 border-l-gray-400 border"
      >
        <div className="bg-white p-4 mb-4 flex-1 flex items-center space-x-4 rounded-md">
          <div
            style={{ backgroundColor: "hsl(223, 19%, 93%)" }}
            className="mb-auto py-2 px-3 text-center flex flex-col gap-3 rounded-md text-gray-500 font-semibold"
          >
            <span className="cursor-pointer" onClick={handleLikePlus}>
              +
            </span>
            <span className="text-purple-950">{comment.likes}</span>
            <span className="cursor-pointer" onClick={handleLikeMunis}>
              -
            </span>
          </div>
          <div className="w-full">
            <div className="flex w-full justify-between">
              <div className="flex space-x-4 items-center">
                <Image
                  src="/challenges-resources/challenge-3_interactive_comments_section/images/avatars/image-juliusomo.png"
                  alt="avatar"
                  width={30}
                  height={30}
                  className=""
                />
                <h1 className="text-black font-bold text-sm">amrobson</h1>
                <span className="text-sm text-gray-400">
                  {comment.createdAt}
                </span>
              </div>
              <button
                style={{ color: "hsl(238, 40%, 52%)" }}
                className="flex items-center gap-2 space-x-2 text-sm font-semibold outline-none px-4 py-2 rounded-md"
              >
                <Image
                  src="/challenges-resources/challenge-3_interactive_comments_section/images/icon-reply.svg"
                  alt="avatar"
                  width={15}
                  height={15}
                />
                Reply
              </button>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{comment.message}</p>
          </div>
        </div>
      </div>
    </>
  );
}

function CommentComponent({
  comment,
  currentUser,
  key,
  updateComments,
}: {
  comment: Comment;
  currentUser: User | null;
  key: number;
  updateComments: (updatedComment: Comment) => void;
}) {
  const handleLikePlus = () => {
    const updatedComment = { ...comment, likes: comment.likes + 1 };
    updateComments(updatedComment);
  };

  const handleLikeMunis = () => {
    const updatedComment = {
      ...comment,
      likes: comment.likes > 0 ? comment.likes - 1 : 0,
    };
    updateComments(updatedComment);
  };

  return (
    <>
      <div
        key={key}
        className="bg-white p-4 mb-4 flex items-center space-x-4 rounded-md"
      >
        <div
          style={{ backgroundColor: "hsl(223, 19%, 93%)" }}
          className="mb-auto py-2 px-3 text-center flex flex-col gap-3 rounded-md text-gray-500 font-semibold"
        >
          <span className="cursor-pointer" onClick={handleLikePlus}>
            +
          </span>
          <span className="text-purple-950">{comment.likes}</span>
          <span className="cursor-pointer" onClick={handleLikeMunis}>
            -
          </span>
        </div>
        <div className="w-full">
          <div className="flex w-full justify-between">
            <div className="flex space-x-4 items-center">
              <Image
                src="/challenges-resources/challenge-3_interactive_comments_section/images/avatars/image-juliusomo.png"
                alt="avatar"
                width={30}
                height={30}
                className=""
              />
              <h1 className="text-black font-bold text-sm">amrobson</h1>
              <span className="text-sm text-gray-400">{comment.createdAt}</span>
            </div>
            <button
              style={{ color: "hsl(238, 40%, 52%)" }}
              className="flex items-center gap-2 space-x-2 text-sm font-semibold outline-none px-4 py-2 rounded-md"
            >
              <Image
                src="/challenges-resources/challenge-3_interactive_comments_section/images/icon-reply.svg"
                alt="avatar"
                width={15}
                height={15}
              />
              Reply
            </button>
          </div>
          <p className="mt-2 text-gray-400 text-sm">{comment.message}</p>
        </div>
      </div>
      {comment.replys ? (
        <div className="mb-4">
          {comment.replys.map((reply) => (
            <Reply
              key={reply.id}
              comment={reply}
              currentUser={currentUser}
              updateComments={updateComments}
            />
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
}

function Page() {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      userId: 1,
      message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
      nihil dolores quidem perferendis modi corporis corrupti cum
      assumenda, facilis sint nostrum. Quas repudiandae illo incidunt
      laborum maiores itaque, corrupti sit.`,
      likes: 0,
      createdAt: "1 mounth ago",
      replys: [
        {
          id: 2,
          userId: 2,
          message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
          nihil dolores quidem perferendis modi corporis corrupti cum
          assumenda, facilis sint nostrum. Quas repudiandae illo incidunt
          laborum maiores itaque, corrupti sit.`,
          likes: 2,
          createdAt: "yesterday",
          replys: [],
        },
        {
          id: 2,
          userId: 2,
          message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
          nihil dolores quidem perferendis modi corporis corrupti cum
          assumenda, facilis sint nostrum. Quas repudiandae illo incidunt
          laborum maiores itaque, corrupti sit.`,
          likes: 2,
          createdAt: "yesterday",
          replys: [],
        },
      ],
    },
  ]);

  const [user, setUser] = useState<User>({
    id: 1,
    name: "Mourad",
  });

  const updateComments = (updatedComment: Comment) => {
    const commentIndex = comments.findIndex((c) => c.id === updatedComment.id);

    if (commentIndex !== -1) {
      const updatedComments = [...comments];
      updatedComments[commentIndex] = updatedComment;
      setComments(updatedComments);
    }
  };

  return (
    <main className="bg-gray-200 flex w-full min-h-screen items-center justify-center">
      <div className="w-[600px] border p-6 rounded-lg">
        {comments.map((cmt) => (
          <CommentComponent
            key={cmt.id}
            comment={cmt}
            currentUser={user}
            updateComments={updateComments}
          />
        ))}

        <div className="bg-white p-4 flex items-center space-x-4 rounded-md">
          <Image
            src="/challenges-resources/challenge-3_interactive_comments_section/images/avatars/image-juliusomo.png"
            alt="avatar"
            width={30}
            height={30}
            className="mb-auto"
          />
          <textarea
            rows={2}
            className="flex-1 px-4 py-2 border outline-none rounded-md"
            placeholder="Add a comment..."
          ></textarea>
          <button
            style={{ backgroundColor: "hsl(238, 40%, 52%)" }}
            className="text-sm font-semibold outline-none px-4 py-2 text-white rounded-md mb-auto"
          >
            SEND
          </button>
        </div>
      </div>
    </main>
  );
}

export default Page;
