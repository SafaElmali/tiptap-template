"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Toolbar } from "./plugins/toolbar/toolbar";
import { cn } from "@/lib/utils";
import { FC } from "react";
import Underline from "@tiptap/extension-underline";
import "./styles/index.css";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableHeader from "@tiptap/extension-table-header";
import TableCell from "@tiptap/extension-table-cell";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import Link from "@tiptap/extension-link";
import { LinkMenu } from "./plugins/link/_components/link-menu/link-menu";

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
    extensions: [
      StarterKit,
      Table,
      TableRow,
      TableHeader,
      TableCell,
      Underline,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
        protocols: ["http", "https"],
        HTMLAttributes: {
          class: "text-primary underline hover:text-primary/80",
        },
      }),
    ],
    content,
    editorProps: {
      attributes: {
        class: cn(className),
      },
    },
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML());
    },
  });

  return (
    <div className="w-full rounded-md border bg-card text-card-foreground shadow-sm">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
      {editor && <LinkMenu editor={editor} />}
    </div>
  );
};

export { TiptapEditor };
