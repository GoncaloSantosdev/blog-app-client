interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
  className?: string;
}

const Button = ({
  children,
  onClick,
  variant = "primary",
  icon,
  className = "",
}: ButtonProps) => {
  const baseStyles =
    "px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 flex items-center gap-2";
  const variantStyles = {
    primary: "text-white bg-primary-blue hover:bg-blue-600",
    secondary: "text-gray-700 bg-gray-100 hover:bg-gray-200",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
