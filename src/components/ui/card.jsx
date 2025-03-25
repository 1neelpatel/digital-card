
export function Card({ children, className }) {
  return (
    <div className={`bg-white rounded-xl shadow-md ${className || ""}`}>
      {children}
    </div>
  );
}
