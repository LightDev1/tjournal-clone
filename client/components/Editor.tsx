import React, { useEffect } from 'react';
import EditorJS from '@editorjs/editorjs';

const Editor: React.FC = () => {
    useEffect(() => {
        const editor = new EditorJS({
            holder: 'editor',
            placeholder: 'Введите текст вашей статьи'
        });

        return () => {
            editor.isReady.then(() => {
                editor.destroy();
            })
                .catch((err) => {
                    console.error('Ошибка подключения редактора', err);
                });
        };
    }, []);

    return (
        <div id="editor" />
    );
};

export default Editor;
