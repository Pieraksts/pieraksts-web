/**
 * Renders the small Markdown subset used by our legal docs (see
 * src/lib/legal-content.ts): `## ` / `### ` headings, "- " bullet lists, and
 * plain paragraphs. Intentionally tiny — no Markdown dependency.
 */
export function LegalDocument({ markdown }: { markdown: string }) {
  const blocks = parse(markdown);

  return (
    <div className="flex flex-col gap-5">
      {blocks.map((block, i) => {
        if (block.type === "h2") {
          return (
            <h2
              key={i}
              className="mt-4 font-display text-xl font-extrabold tracking-tight text-foreground"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "h3") {
          return (
            <h3
              key={i}
              className="mt-2 font-display text-base font-bold text-foreground"
            >
              {block.text}
            </h3>
          );
        }
        if (block.type === "ul") {
          return (
            <ul
              key={i}
              className="flex list-disc flex-col gap-1.5 pl-5 text-[0.95rem] leading-relaxed text-ink-muted marker:text-ink-soft"
            >
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="text-[0.95rem] leading-relaxed text-ink-muted">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}

type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "p"; text: string };

function parse(markdown: string): Block[] {
  const blocks: Block[] = [];
  // Blank lines separate blocks; within a block, "- " lines form a list.
  for (const raw of markdown.trim().split(/\n{2,}/)) {
    const chunk = raw.trim();
    if (!chunk) continue;

    if (chunk.startsWith("### ")) {
      blocks.push({ type: "h3", text: chunk.slice(4).trim() });
      continue;
    }
    if (chunk.startsWith("## ")) {
      blocks.push({ type: "h2", text: chunk.slice(3).trim() });
      continue;
    }
    if (chunk.startsWith("- ")) {
      const items = chunk
        .split("\n")
        .map((l) => l.replace(/^-\s+/, "").trim())
        .filter(Boolean);
      blocks.push({ type: "ul", items });
      continue;
    }
    // Collapse soft line breaks inside a paragraph into spaces.
    blocks.push({ type: "p", text: chunk.replace(/\s*\n\s*/g, " ") });
  }
  return blocks;
}
