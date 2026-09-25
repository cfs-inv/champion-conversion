"use client";

import { useEffect } from "react";

export default function OpenAIPixel() {
  useEffect(() => {
    if (window.oaiq) return;

    const q = (...args: any[]) => {
    q.q.push(args);
    };

    q.q = [] as any[];

    window.oaiq = q;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://bzrcdn.openai.com/sdk/oaiq.min.js";

    const firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode?.insertBefore(script, firstScript);
    
    window.oaiq("init", {
      pixelId: "REcoysE6Po2fPcjdsTvWJp",
      debug: true,
    });
  }, []);

  return null;
}