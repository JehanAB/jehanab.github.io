export default function Preloader({ visible, done, fillWidth }) {
  if (!visible) return null;

  return (
    <div id="preloader" className={done ? 'done' : ''}>
      <div className="preloader-logo">Jehan<span>★</span></div>
      <div className="preloader-bar">
        <div className="preloader-bar-fill" style={{ width: fillWidth }} />
      </div>
    </div>
  );
}
