import React from "react";
import ReactMarkdown from "react-markdown";
import { MarkdownProps } from './Markdown.props'

export function Markdown({ content }: MarkdownProps) {
  return <ReactMarkdown>{content}</ReactMarkdown>;
}