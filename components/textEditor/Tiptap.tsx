import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function tiptap() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p> hola munda </p>",
  });

  return (
    <div>
      <EditorContent editor={editor} />
    </div>
  );
}
