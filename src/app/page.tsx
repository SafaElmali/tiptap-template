"use client";
import { TiptapEditor } from "@/components/features/tiptap-editor/tiptap-editor";

const Page = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <TiptapEditor
        content={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        <img src="https://picsum.photos/200/300" />`}
        onChange={(content) => console.log(content)}
      />
    </div>
  );
};

export default Page;
