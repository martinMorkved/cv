type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export function Button({ children, className = "", type = "button" }: ButtonProps) {
  return (
    <button
      type={type}
      className={`rounded-lg bg-zinc-900 px-4 py-2 text-white transition-colors hover:bg-zinc-700 ${className}`}
    >
      {children}
    </button>
  );
}
