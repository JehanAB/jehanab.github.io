export function CustomCursor({ dotRef, ringRef }) {
  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}

export function ScrollProgress({ progress }) {
  return <div className="scroll-progress" style={{ width: `${progress}%` }} />;
}

export function BackToTop({ show }) {
  function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <button
      id="backToTop"
      className={show ? 'show' : ''}
      aria-label="Back to top"
      onClick={scrollTop}
    >
      ↑
    </button>
  );
}
