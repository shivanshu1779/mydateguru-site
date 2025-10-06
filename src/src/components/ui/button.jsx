import React from "react";
export function Button({ asChild, children, variant="default", size="md", className="", ...props }) {
  const base = "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition";
  const variants = {
    default: "bg-primary text-white hover:opacity-90",
    outline: "border border-border hover:bg-muted",
    secondary: "bg-muted hover:opacity-90",
  };
  const sizes = { sm: "px-3 py-1.5 text-sm", md: "px-4 py-2", lg: "px-5 py-2.5" };
  const cls = [base, variants[variant], sizes[size], className].join(" ");
  if (asChild) {
    const child = React.Children.only(children);
    return React.cloneElement(child, { className: [child.props.className, cls].join(" "), ...props });
  }
  return <button className={cls} {...props}>{children}</button>;
}
