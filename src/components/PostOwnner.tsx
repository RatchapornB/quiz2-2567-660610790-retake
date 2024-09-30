"use client";
import React from "react";
import { useState, useEffect } from "react";
import { PostOwnnerProps } from "@/libs/types";

export default function PostOwnner({
  username, 
  studentId, 
  likeNum,
  userImagePath,
} : PostOwnnerProps) {

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
      <div className="vstack gap-3">
        <div className="d-flex align-items-center gap-3">
          <img
            src={userImagePath}
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <span className="fw-semibold fs-5">{username} {studentId}</span>
        </div>

        <span>Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207</span>

        <div className="d-flex align-items-center gap-1">
          <img src="/like.svg" width={20}></img>
          <span className="text-muted">{likeNum}</span>
        </div>

        <hr className="m-0 border" />
      
      </div>
    </div>
  );
}
