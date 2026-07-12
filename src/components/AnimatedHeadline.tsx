import { useEffect, useState } from "react";

const WORDS = ["Mekuanint Tewende", "Web Designer", "Full-Stack Developer"];

export default function AnimatedHeadline() {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(index);
      setIndex((i) => (i + 1) % WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <span className="cd-words-wrapper" style={{ minWidth: "320px" }}>
      {WORDS.map((word, i) => (
        <b
          key={word}
          className={
            i === index ? "is-visible" : i === prevIndex ? "is-hidden" : ""
          }
        >
          {word}
        </b>
      ))}
    </span>
  );
}
