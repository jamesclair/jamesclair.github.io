import React, { useState, useEffect } from 'react';
import { MDXProvider } from '@mdx-js/react';

interface CustomComponentProps {
    children?: React.ReactNode;
}

const CustomHeader: React.FC<CustomComponentProps> = ({ children }) => <h1>{children}</h1>;

interface CustomMDXRendererProps {
    mdx: string;
}

const CustomMDXRenderer: React.FC<CustomMDXRendererProps> = ({ mdx }) => {
    // Split the content into lines
    const lines = mdx.split('\n');

    // Extract header and first paragraph
    const header = lines.find(line => line.startsWith('# '))?.slice(2) || '';

    // MDX components to use
    const components = {
        h1: () => <CustomHeader>{header}</CustomHeader>,
    };

    return (
        <MDXProvider components={components}>
            {header && <h5>{header}</h5>}
        </MDXProvider>
    );
};

interface MarkdownComponentProps {
    mdxContent: string;
}

const MarkdownHeaderComponent: React.FC<MarkdownComponentProps> = ({ mdxContent }) => {
    return <CustomMDXRenderer mdx={mdxContent} />;
};

export default MarkdownHeaderComponent;
