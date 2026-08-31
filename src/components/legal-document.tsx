import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";

/**
 * Renders the small Markdown subset used by our legal docs (see
 * src/lib/legal-content.ts): `## ` / `### ` headings, "- " bullet lists, plain
 * paragraphs, and inline `[text](/path)` links. Intentionally tiny — no
 * Markdown dependency.
 *
 * Internal links (those starting with "/") go through the locale-aware <Link>
 * so a reader on /en stays on /en; anything else renders as an external anchor.
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
                <li key={j}>{renderInline(item)}</li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="text-[0.95rem] leading-relaxed text-ink-muted">
            {renderInline(block.text)}
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

const LINK_RE = /\[([^\]]+)\]\(([^)\s]+)\)/g;
const LINK_CLASS =
  "font-medium text-foreground underline underline-offset-2 transition-colors hover:text-ink-muted";

/** Splits a line into text and `[label](href)` links. */
function renderInline(text: string): ReactNode {
  const parts: ReactNode[] = [];
  let last = 0;

  for (const match of text.matchAll(LINK_RE)) {
    const [full, label, href] = match;
    const start = match.index;

    if (start > last) parts.push(text.slice(last, start));

    parts.push(
      href.startsWith("/") ? (
        <Link key={start} href={href} className={LINK_CLASS}>
          {label}
        </Link>
      ) : (
        <a
          key={start}
          href={href}
          className={LINK_CLASS}
          rel="noopener noreferrer"
        >
          {label}
        </a>
      )
    );

    last = start + full.length;
  }

  if (parts.length === 0) return text;
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}
