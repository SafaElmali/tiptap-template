import { type Editor } from "@tiptap/react";
import { Bold, Italic, Quote, Underline } from "lucide-react";
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
    <div className="border border-input bg-transparent rounded-t-md overflow-x-auto">
      <div className="flex items-center gap-1 p-1 min-w-max">
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
        <ListDropdown editor={editor} />
        <FormattingDropdown editor={editor} />
      </div>
    </div>
  );
};

export { Toolbar };
