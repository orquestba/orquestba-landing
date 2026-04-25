import React from "react";

export type ButtonVariant = "filled" | "outline" | "ghost" | "link";
export type ButtonSize = "md" | "lg";
export type ButtonColor = "copper" | "navy";

interface Props {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: React.MouseEventHandler;
  type?: "button" | "submit" | "reset";
  target?: string;
  rel?: string;
}

function resolveClass(
  variant: ButtonVariant,
  size: ButtonSize,
  color: ButtonColor,
): string {
  if (variant === "ghost") return "btn-ghost-light";
  if (variant === "link") return "path-cta";
  if (variant === "outline") return "btn-outline";
  if (color === "navy") return "btn-navy";
  return size === "lg" ? "btn-primary-large" : "btn-primary";
}

export default function Button({
  variant = "filled",
  size = "md",
  color = "copper",
  icon,
  children,
  className,
  href,
  onClick,
  type = "button",
  target,
  rel,
}: Props) {
  const cls = [resolveClass(variant, size, color), className]
    .filter(Boolean)
    .join(" ");

  if (href !== undefined) {
    return (
      <a href={href} className={cls} target={target} rel={rel}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick}>
      {children}
      {icon}
    </button>
  );
}
