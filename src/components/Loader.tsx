export default function Loader() {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-white">
      <div className="loader-row flex items-center gap-3">
        <span className="loader-dot" />
        <span className="loader-dot" />
        <span className="loader-dot" />
        <span className="loader-dot" />
      </div>
    </div>
  );
}