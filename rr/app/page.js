"use client";

import { useEffect } from "react";
import markup from "./markup";
import initMenuApp from "../lib/menu-app";

export default function Page() {
  useEffect(() => {
    initMenuApp();
  }, []);

  // display: contents keeps the wrapper from becoming a zero-height box, which
  // would collapse the full-screen language page (it uses height: 100%).
  return (
    <div
      style={{ display: "contents" }}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}
