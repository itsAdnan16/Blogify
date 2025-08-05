import React from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form'

export default function RTE({ control, name, label, defaultValue = '' }) {
    return (

        // <Editor
        //     initialValue='default value'
        //     init={
        //         {
        //             branding: false,
        //             height: 500,
        //             menubar: true,
        //             plugins: [
        //                 'advlist autolink lists link image charmap print preview anchor',
        //                 'searchreplace visualblocks code fullscreen',
        //                 'insertdatetime media table paste code help wordcount'
        //             ],
        //             toolbar: 'undo redo | styleselect | bold italic backcolor | \
        //                       alignleft aligncenter alignright alignjustify | \
        //                       bullist numlist outdent indent | link image | \
        //                       code fullscreen | help',
        //         }
        //     }
        // />

        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1'>
                {label}</label>}
            <Controller
                name={name || 'content'}
                control={control}
                render={({ field: { onChange } }) => (
                    <Editor
                        apiKey='5g8kips6u6ih45zk2fbpgzny6h7kczhhto6n5fpufd45svci'
                        initialValue={defaultValue}
                        init={{
                            branding: false,
                            height: 500,
                            menubar: true,
                            telemetry: false,
                            plugins: [
                                "image",
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
                                "code",
                                "help",
                                "wordcount",
                                "anchor",
                            ],
                            toolbar:
                                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                        }}
                        onEditorChange={onChange}
                    />
                )}
            />
        </div>
    )
}