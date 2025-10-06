import React from "react";
export function Card({ className="", children }) {
  return <div className={"border border-border rounded-2xl shadow-sm bg-white " + className}>{children}</div>;
}
export function CardHeader({ children }) { return <div className="p-4 border-b border-border">{children}</div>; }
export function CardTitle({ children, className="" }) { return <h3 className={"font-semibold " + className}>{children}</h3>; }
export function CardDescription({ children }) { return <p className="text-sm text-muted-foreground">{children}</p>; }
export function CardContent({ children, className="" }) { return <div className={"p-4 " + className}>{children}</div>; }
