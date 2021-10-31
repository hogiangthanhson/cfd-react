import React from "react";
import { Redirect } from "react-router";
import { useAuth } from "../../../hooks/useAuth";

export function ProfileAvatar() {
  let { user } = useAuth()
  
  return (
    <div className="top-info">
      <div className="avatar">
        {/* <span class="text">H</span> */}
        <img src="/img/avatar-lg.png" alt="" />
        <div className="camera" />
      </div>
      <div className="name">{user.name}</div>
      <p className="des">Thành viên của team CFD1-OFFLINE</p>
    </div>
  );
}
