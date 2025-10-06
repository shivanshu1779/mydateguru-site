import React from "react";
export function Textarea(props) {
  return <textarea {...props} className={"w-full rounded-xl border border-border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40 " + (props.className || "")} />;
}
