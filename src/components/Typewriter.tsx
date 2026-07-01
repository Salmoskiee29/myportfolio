"use client";
import { useEffect, useState } from "react";

const phrases = [
  "Full Stack Developer",
  "Software Engineer",
  "AI Integration Specialist",
  "Business Automation Expert",
];

export default function Typewriter() {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[idx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1800);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setIdx((i) => (i + 1) % phrases.length);
        }
      }
    }, deleting ? 45 : 90);
    return () => clearTimeout(timeout);
  }, [text, deleting, idx]);

  return (
    <span>
      {text}
      <span className="cursor-blink ml-0.5 inline-block w-0.5 h-5 bg-[#111] align-middle" />
    </span>
  );
}
