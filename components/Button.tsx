type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export function Button({ children, className = "", type = "button" }: ButtonProps) {
  return (
    <button
      type={type}
      className={`rounded-lg bg-foreground px-4 py-2 text-surface transition-colors hover:bg-foreground/90 ${className}`}
    >
      {children}
    </button>
  );
}
