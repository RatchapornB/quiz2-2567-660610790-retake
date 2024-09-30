"use client";

import { ReplyProps } from "@/libs/types";
import { useState, useEffect } from "react";

export default function Reply({ userImagePath, username, replyText, likeNum }: ReplyProps) {
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
      <div className="d-flex gap-2 my-2 ps-5">
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
            <span>{replyText}</span>
            {isOk &&
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span className="text-muted">{likeNum} คน</span>
            </div>
            }
          </div>
        </div>
    </div>
  )
}