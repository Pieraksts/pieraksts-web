---
name: handoff
description: Create or update a repository-local handoff document so another agent can continue the work. Use when the user asks for a handoff, session summary, continuation note, or next-agent context.
---

# Create a repository-local handoff

## Choose the repository

Resolve the repository that owns the next session's work with
`git rev-parse --show-toplevel`.

- In a workspace containing multiple repositories, use the repository that owns
  the next task.
- If the handoff mentions other repositories, link to them from the primary
  handoff rather than scattering duplicate documents.
- Ask one concise question only when the owning repository is genuinely
  ambiguous.

Save the document at:

`<repository-root>/handoffs/<focus-slug>-YYYY-MM-DD.md`

Ensure the repository's root `.gitignore` contains `/handoffs/`. Create the
directory when needed. Handoffs are local coordination artifacts and must not
enter normal product history.

## Name the file

Use a short, descriptive, lowercase kebab-case focus slug followed by the local
date:

`salon-profile-brand-logo-ui-2026-07-27.md`

Do not use generic names such as `handoff.md` or timestamp-first names. If the
same topic already has a same-day handoff, update that file. For a distinct
topic, choose a more specific slug instead of overwriting an unrelated handoff.

## Write the handoff

Tailor the document to the next session. Include:

1. Next-session goal and scope boundary.
2. Repository, branch, HEAD, and relevant working-tree state.
3. Work completed, including any live mutations or intentionally unapplied work.
4. Decisions, user preferences, rejected approaches, and important pitfalls.
5. Relevant files, durable artifacts, commands, URLs, and data flow.
6. Validation already completed and known warnings or blockers.
7. Concrete recommended next steps.
8. `## Suggested skills` with exact available skill names and a one-line reason
   for each. Do not invent skill names. If none apply, state that explicitly.
9. `## Tiny prompt for the next agent` containing a concise copy-paste prompt
   that includes the handoff's absolute path and the immediate next action.

Treat user-provided arguments as the next session's focus.

Do not duplicate durable content already captured in specs, plans, ADRs, issues,
commits, or diffs. Reference those artifacts by path or URL. Redact secrets,
tokens, credentials, private environment values, and unnecessary personal data.
Identify unrelated dirty work so the next agent preserves it.

Do not commit or push the handoff unless the user explicitly requests it.

## Finish

Verify that the file exists, is inside the intended repository's `handoffs/`
directory, and is ignored by Git.

In the final response:

- link to the handoff with its absolute path;
- return the tiny copy-paste prompt in a blockquote;
- keep the prompt to one or two sentences and include the absolute handoff path.
