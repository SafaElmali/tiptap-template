import { type Editor } from "@tiptap/react";
import { Bold, Italic, Quote, Redo, Underline, Undo, Minus } from "lucide-react";
import { FC } from "react";
import { ToolbarButton } from "./_components/toolbar-button";
import { HeadingDropdown } from "./_components/heading-dropdown";
import { FormattingDropdown } from "./_components/formatting-dropdown";
import { ListDropdown } from "./_components/list-dropdown";

type ToolbarProps = {
  editor: Editor | null;
};

const Toolbar: FC<ToolbarProps> = ({ editor }) => {
  if (!editor) return null;

  return (
    <div className="bg-transparent rounded-t-md overflow-x-auto">
      <div className="flex items-center gap-1 p-1 min-w-max border-b border-input">
        <HeadingDropdown editor={editor} />
        <ToolbarButton
          icon={<Bold className="h-4 w-4" />}
          label="Toggle bold"
          command={() => editor.chain().focus().toggleBold().run()}
          isActive={editor.isActive("bold")}
        />
        <ToolbarButton
          icon={<Italic className="h-4 w-4" />}
          label="Toggle italic"
          command={() => editor.chain().focus().toggleItalic().run()}
          isActive={editor.isActive("italic")}
        />
        <ToolbarButton
          icon={<Underline className="h-4 w-4" />}
          label="Toggle underline"
          command={() => editor.chain().focus().toggleUnderline().run()}
          isActive={editor.isActive("underline")}
        />
        <ToolbarButton
          icon={<Quote className="h-4 w-4" />}
          label="Toggle quote"
          command={() => editor.chain().focus().toggleBlockquote().run()}
          isActive={editor.isActive("blockquote")}
        />
        <ToolbarButton
          icon={<Undo className="h-4 w-4" />}
          label="Undo"
          command={() => editor.chain().focus().undo().run()}
          isActive={false}
          disabled={!editor.can().undo()}
        />
        <ToolbarButton
          icon={<Redo className="h-4 w-4" />}
          label="Redo"
          command={() => editor.chain().focus().redo().run()}
          isActive={false}
          disabled={!editor.can().redo()}
        />
        <ToolbarButton
          icon={<Minus className="h-4 w-4" />}
          label="Horizontal Rule"
          command={() => editor.chain().focus().setHorizontalRule().run()}
          isActive={false}
        />
        <ListDropdown editor={editor} />
        <FormattingDropdown editor={editor} />
      </div>
    </div>
  );
};

export { Toolbar };
