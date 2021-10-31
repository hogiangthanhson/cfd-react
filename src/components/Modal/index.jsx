import React from "react";
import reactDOM from "react-dom";
export default function Modal({ children }) {
  return reactDOM.createPortal(children, document.body);
}
