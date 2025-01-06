"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Toolbar } from "./plugins/toolbar/toolbar";
import { cn } from "@/lib/utils";
import { FC } from "react";
import Underline from "@tiptap/extension-underline";
import "./styles/index.css";

type TiptapEditorProps = {
  className?: string;
  content?: string;
  onChange?: (content: string) => void;
};

const TiptapEditor: FC<TiptapEditorProps> = ({
  content = "",
  onChange,
  className,
}) => {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content,
    editorProps: {
      attributes: {
        class: cn(
          "prose prose-sm sm:prose-base dark:prose-invert focus:outline-none max-w-full p-4 h-full min-h-[200px] prose-pre:bg-muted/50 prose-pre:rounded-md tiptap-editor",
          className
        ),
      },
    },
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML());
    },
  });

  return (
    <div className="w-full">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export { TiptapEditor };
