
export function Button({ children, className, variant = "default", ...props }) {
  const styles = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 text-gray-800 hover:bg-gray-100",
  };

  return (
    <button
      className={`py-2 px-4 rounded-lg font-semibold ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
