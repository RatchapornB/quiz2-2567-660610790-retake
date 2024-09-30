"use client";

"use client";
import React from "react";
import { useState, useEffect } from "react";
import { CommentProps } from "@/libs/types";

export default function Comment({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,
} : CommentProps) {
  const [isOk, setIsOk] = useState(false);

  useEffect(() => {
    if (likeNum > 0) {
      setIsOk(true);
    } else {
      setIsOk(false);
    }
  })

  return (
    <div>
      <div className="d-flex gap-2 my-2">
          <img
            src={userImagePath}
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#E5E7EB" }}
          >
            <span className="fw-semibold">{username}</span>
            <br />
            <span>{commentText}</span>
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span className="text-muted">{likeNum}</span>
            </div>

            {/* You can use map-loop to render Reply component here */}
            
          </div>
        </div>

    </div>
  );
}
