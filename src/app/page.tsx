import Image from "next/image";
import styles from "./page.module.css";
import React from "react";

import PostOwnner from "@/components/PostOwnner";
import Comment from "@/components/Comment";
import Reply from "@/components/Reply";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner */}

        <PostOwnner userImagePath="/profileImages/Ratchaporn.jpg" username="Ratchaporn Buanut" studentId="660610790" likeNum={100} postText="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"/>
      
        {/* Comment  */}

        <Comment userImagePath="/profileImages/lisa.jpg" username="Lisa" commentText="v" likeNum={999} replies={""}/>

        <Reply userImagePath="/profileImages/puppy.jpg" username="หมาน้อย" replyText="จริงด้วยค้าบบบบบบบบ" likeNum={0}/>

        <Reply userImagePath="/profileImages/popcat.jpg" username="Cat Meme" replyText="ลิซ่าาาาาาา Rockstar" likeNum={2}/>

        <Comment userImagePath="/profileImages/charliebrown.jpg" username="Charlie Brown" commentText="บ้าไปแล้ว" likeNum={0} replies={""}/>

      

        {/* Reply Example */}



        {/* <div className="d-flex gap-2 my-2 ps-5">
          <img
            src="/profileImages/puppy.jpg"
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#E5E7EB" }}
          >
            <span className="fw-semibold">หมาน้อย</span>
            <br />
            <span>จริงค้าบบบบบบบบ</span>
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span className="text-muted">2 คน</span>
            </div>
          </div>
        </div> */}

        {/* map-loop render Comment component here */}
      </div>
    </div>
  );
}
