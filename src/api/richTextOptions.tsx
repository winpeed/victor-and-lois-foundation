import React from 'react';
import {
  BLOCKS,
  INLINES,
  MARKS,
  Block,
  Inline,
  Text,
} from '@contentful/rich-text-types';
import type { Options } from '@contentful/rich-text-react-renderer';

type RichTextNode = Block | Inline | Text;

interface EmbeddedAssetData {
  target: {
    fields: {
      file: {
        url: string;
      };
      title: string;
    };
  };
}

const defaultOptions: Options = {
  renderMark: {
    [MARKS.BOLD as string]: (text: React.ReactNode): JSX.Element => (
      <strong style={{display: 'block'}}>{text}</strong>
    ),
    [MARKS.ITALIC as string]: (text: React.ReactNode): JSX.Element => (
      <em>{text}</em>
    ),
    [MARKS.UNDERLINE as string]: (text: React.ReactNode): JSX.Element => (
      <u>{text}</u>
    ),
    [MARKS.CODE as string]: (text: React.ReactNode): JSX.Element => (
      <code>{text}</code>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH as string]: (
      _node: RichTextNode,
      children: React.ReactNode
    ): JSX.Element => <p style={{lineHeight: 1.5, padding: '0.5em 0em'}}>{children}</p>,
    [BLOCKS.HEADING_1 as string]: (
      _node: RichTextNode,
      children: React.ReactNode
    ): JSX.Element => <h1 style={{fontSize: '2.2rem'}}>{children}</h1>,
    [BLOCKS.HEADING_2 as string]: (
      _node: RichTextNode,
      children: React.ReactNode
    ): JSX.Element => <h2 style={{fontSize: '2rem'}}>{children}</h2>,
    [BLOCKS.HEADING_3 as string]: (
      _node: RichTextNode,
      children: React.ReactNode
    ): JSX.Element => <h3 style={{fontSize: '1.9rem'}}>{children}</h3>,
    [BLOCKS.HEADING_4 as string]: (
      _node: RichTextNode,
      children: React.ReactNode
    ): JSX.Element => <h4 style={{fontSize: '1.8rem'}}>{children}</h4>,
    [BLOCKS.HEADING_5 as string]: (
      _node: RichTextNode,
      children: React.ReactNode
    ): JSX.Element => <h5 style={{fontSize: '1.6rem'}}>{children}</h5>,
    [BLOCKS.HEADING_6 as string]: (
      _node: RichTextNode,
      children: React.ReactNode
    ): JSX.Element => <h6 style={{fontSize: '1.3rem'}}>{children}</h6>,
    [BLOCKS.UL_LIST as string]: (
      _node: RichTextNode,
      children: React.ReactNode
    ): JSX.Element => <ul style={{listStyle: 'disc', paddingLeft: '1.5em' }}>{children}</ul>,
    [BLOCKS.OL_LIST as string]: (
      _node: RichTextNode,
      children: React.ReactNode
    ): JSX.Element => <ol style={{listStyle: 'auto', paddingLeft: '1.5em' }}>{children}</ol>,
    [BLOCKS.LIST_ITEM as string]: (
      _node: RichTextNode,
      children: React.ReactNode
    ): JSX.Element => <li>{children}</li>,
    [BLOCKS.QUOTE as string]: (
      _node: RichTextNode,
      children: React.ReactNode
    ): JSX.Element => <blockquote>{children}</blockquote>,
    [BLOCKS.HR as string]: (): JSX.Element => <hr />,
    [INLINES.HYPERLINK as string]: (
      node: RichTextNode,
      children: React.ReactNode
    ): JSX.Element => {
      // Cast to Inline since hyperlink nodes are inline nodes
      const inlineNode = node as Inline;
      const { uri } = inlineNode.data as { uri: string };
      return (
        <a href={uri} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    },
    [BLOCKS.EMBEDDED_ASSET as string]: (
      node: RichTextNode
    ): JSX.Element => {
      const { file, title } = (node.data as EmbeddedAssetData).target.fields;
      return <img src={file.url} alt={title} />;
    },
    [BLOCKS.EMBEDDED_ENTRY as string]: (
      _node: RichTextNode,
      children: React.ReactNode
    ): JSX.Element => <div className="embedded-entry">{children}</div>,
  },
};

export default defaultOptions;
