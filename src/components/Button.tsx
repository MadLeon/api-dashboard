"use client";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

// Custom button component
export default function Button({
  children,
  onClick,
  className = "",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex border py-1 px-2 hover:bg-white hover:text-black ${className}`}
    >
      {children}
    </button>
  );
}
