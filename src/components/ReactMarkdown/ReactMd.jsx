import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

function ReactMd({input}) {
    return <ReactMarkdown rehypePlugins={[rehypeRaw]}>{input}</ReactMarkdown>;
}

export default ReactMd;
