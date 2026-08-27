import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import "./TextEditor.css";

import "tinymce/tinymce";
import "tinymce/models/dom";
import "tinymce/icons/default";
import "tinymce/themes/silver";

import "tinymce/plugins/advlist";
import "tinymce/plugins/anchor";
import "tinymce/plugins/autolink";
import "tinymce/plugins/charmap";
import "tinymce/plugins/code";
import "tinymce/plugins/fullscreen";
import "tinymce/plugins/image";
import "tinymce/plugins/insertdatetime";
import "tinymce/plugins/link";
import "tinymce/plugins/lists";
import "tinymce/plugins/media";
import "tinymce/plugins/preview";
import "tinymce/plugins/searchreplace";
import "tinymce/plugins/table";
import "tinymce/plugins/visualblocks";
import "tinymce/plugins/wordcount";

import "tinymce/skins/ui/oxide/skin.min.css";
import "tinymce/skins/ui/oxide/content.min.css";

export default function TextEditor({ initialValue, value, onChange }) {
  const editorRef = useRef(null);

  return (
    <>
      <Editor
        licenseKey="gpl"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={initialValue}
        value={value}
        onEditorChange={onChange}
        init={{
          height: 500,
          menubar: "insert view format table tools",
          menu: {
            insert: {
              title: "Insert",
              items: "link image table charmap insertdatetime",
            },
            view: {
              title: "View",
              items: "preview fullscreen visualblocks",
            },
            format: {
              title: "Format",
              items:
                "bold italic underline strikethrough superscript subscript | blocks fontfamily fontsize | align lineheight | forecolor backcolor | removeformat",
            },
            table: {
              title: "Table",
              items: "inserttable | cell row column | tableprops deletetable",
            },
            tools: {
              title: "Tools",
              items: "code wordcount",
            },
          },
          skin: false,
          content_css: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | fontfamily fontsize | " +
            "bold italic underline forecolor backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "link image table | removeformat code preview fullscreen",
          font_family_formats:
            "Lexend=Lexend,sans-serif; Slibinas=Slibinas,serif; Arial=arial,helvetica,sans-serif; Courier New=courier new,courier,monospace; Georgia=georgia,palatino,serif; Times New Roman=times new roman,times,serif; Verdana=verdana,geneva,sans-serif",
          image_advtab: true,
          image_class_list: [
            { title: "None", value: "" },
            { title: "Left", value: "image-left" },
            { title: "Center", value: "image-center" },
            { title: "Right", value: "image-right" },
          ],
          content_style:
            "body { font-family: Lexend, Helvetica, Arial, sans-serif; font-size:14px; margin: 0; } " +
            ".image-left { float: left; margin: 0 16px 16px 0; } " +
            ".image-center { display: block; margin: 16px auto; } " +
            ".image-right { float: right; margin: 0 0 16px 16px; }",
        }}
      />
    </>
  );
}
