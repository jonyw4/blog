import { ArticleMetadata } from './ArticleMetadata'

export interface Article extends ArticleMetadata {
  content: string;
}