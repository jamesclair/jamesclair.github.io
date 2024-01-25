import React, { useState, useEffect } from 'react';
import { MDXProvider } from '@mdx-js/react';

interface CustomComponentProps {
    children?: React.ReactNode;
}

const CustomParagraph: React.FC<CustomComponentProps> = ({ children }) => <p>{children}</p>;

interface CustomMDXRendererProps {
    mdx: string;
}

const CustomMDXRenderer: React.FC<CustomMDXRendererProps> = ({ mdx }) => {
    // Split the content into lines
    const lines = mdx.split('\n');
    const firstParagraphIndex = lines.findIndex(line => line === '');
    const firstParagraph = lines[firstParagraphIndex + 1] || '';

    // MDX components to use
    const components = {
        p: () => <CustomParagraph>{firstParagraph}</CustomParagraph>,
    };

    return (
        <MDXProvider components={components}>
            {firstParagraph && <p>{firstParagraph}</p>}
        </MDXProvider>
    );
};

interface MarkdownComponentProps {
    mdxContent: string;
}

const MarkdownFirstParagraphComponent: React.FC<MarkdownComponentProps> = ({ mdxContent }) => {
    return <CustomMDXRenderer mdx={mdxContent} />;
};

export default MarkdownFirstParagraphComponent;
