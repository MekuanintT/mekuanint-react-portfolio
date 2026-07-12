import { useEffect, useState } from "react";

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[999] flex items-center justify-center bg-ink transition-opacity duration-500 ${
        hidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-hidden={hidden}
    >
      <div className="gooey">
        <span className="dot" />
        <div className="dots">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}
