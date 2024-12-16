export interface ButtonProps {
  color?: "light-blue" | "dark-blue" | "light-orange" | "dark-orange" | "white";
  label: string;
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
  isOutline?: boolean;
  onClick?: () => void;
}

export const Button = ({
  color = "dark-blue",
  label,
  type = "button",
  size = "md",
  isOutline = false,
  ...props
}: ButtonProps) => {
  const buttonStyles = isOutline ? `idc-button--outline` : `idc-button--solid`;

  return (
    <button
      type={type}
      className={`idc-button idc-button--${color} ${buttonStyles} idc-button--${size}`}
      {...props}
    >
      {label}
    </button>
  );
};
