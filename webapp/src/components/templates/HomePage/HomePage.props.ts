export interface HomeProps {
  articles: Array<{
    slug: string;
    title: string;
    createdAt: string;
  }>;
}
