"use client"
import { useEffect } from "react";

const UseDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export default UseDocumentTitle;
