import React from "react";

export default function Reply(props) {
  return (
    <div className="d-flex gap-2 my-2 ps-5">
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
      </div>
    </div>
  );
}
