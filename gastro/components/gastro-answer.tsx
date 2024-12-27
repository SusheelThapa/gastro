import Markdown from "react-markdown";

export function GastroAnswer({ markdown }: { markdown: string }) {
  return (
    <div className="markdown-wrapper">
      <Markdown>{markdown}</Markdown>
    </div>
  );
}
