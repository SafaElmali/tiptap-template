import { BubbleMenu, type Editor } from "@tiptap/react";
import { FC } from "react";
import { Bold, Italic, Underline, Code, Strikethrough, Quote } from "lucide-react";
import { LinkDialog } from "../link/_components/link-menu/link-dialog";
import { useState } from "react";
import { ToggleButton } from "../../_components/toggle-button";

type BubbleMenuBarProps = {
  editor: Editor;
};

export const BubbleMenuBar: FC<BubbleMenuBarProps> = ({ editor }) => {
  const [isLinkDialogOpen, setIsLinkDialogOpen] = useState(false);

  return (
    <>
      <BubbleMenu
        className="flex items-center gap-1 rounded-md border bg-white p-2 shadow-md dark:bg-card"
        tippyOptions={{ duration: 100 }}
        editor={editor}
      >
        <ToggleButton
          icon={<Bold className="h-4 w-4" />}
          label="Bold"
          isActive={editor.isActive("bold")}
          command={() => editor.chain().focus().toggleBold().run()}
          disabledTooltip
        />
        <ToggleButton
          icon={<Italic className="h-4 w-4" />}
          label="Italic"
          isActive={editor.isActive("italic")}
          command={() => editor.chain().focus().toggleItalic().run()}
          disabledTooltip
        />
        <ToggleButton
          icon={<Underline className="h-4 w-4" />}
          label="Underline"
          isActive={editor.isActive("underline")}
          command={() => editor.chain().focus().toggleUnderline().run()}
          disabledTooltip
        />
        <ToggleButton
          icon={<Strikethrough className="h-4 w-4" />}
          label="StrikeThrough"
          isActive={editor.isActive("strike")}
          command={() => editor.chain().focus().toggleStrike().run()}
          disabledTooltip
        />
        <ToggleButton
          icon={<Code className="h-4 w-4" />}
          label="Code"
          isActive={editor.isActive("code")}
          command={() => editor.chain().focus().toggleCode().run()}
          disabledTooltip
        />
        <ToggleButton
          icon={<Quote className="h-4 w-4" />}
          label="Blockquote"
          isActive={editor.isActive("blockquote")}
          command={() => editor.chain().focus().toggleBlockquote().run()}
          disabledTooltip
        />
      </BubbleMenu>
      <LinkDialog
        isOpen={isLinkDialogOpen}
        onClose={() => setIsLinkDialogOpen(false)}
        onSetLink={(url, openInNewTab) => {
          if (url === "") {
            editor.chain().focus().extendMarkRange("link").unsetLink().run();
          } else {
            editor
              .chain()
              .focus()
              .extendMarkRange("link")
              .setLink({ href: url, target: openInNewTab ? "_blank" : "" })
              .run();
          }
          setIsLinkDialogOpen(false);
        }}
        initialUrl={editor.getAttributes("link").href}
        initialOpenInNewTab={editor.getAttributes("link").target === "_blank"}
        isEditing={editor.isActive("link")}
      />
    </>
  );
};
