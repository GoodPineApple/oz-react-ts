interface ButtonProps {
  label: string;
  size: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "tertiary";
  onClick: () => void;
}

const Button = ({ label, size, color = "primary", onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`${size} ${color}`}>
      {label}
    </button>
  );
};

export default Button;
