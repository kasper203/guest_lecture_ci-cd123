const entities: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

/** Escape text so it can be put into HTML. */
export function escape(text: string): string {
  return text.replace(/[&<>"']/g, (c) => entities[c]);
}
