import { ArticlePage } from "../../components/templates/ArticlePage";

export default function Article ({ content, title, date }) {
  return (
    <ArticlePage title={title} date={date}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </ArticlePage>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Testing in Front End",
      date: "2020-01-01",
      content: "In progress"
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          slug: "testing-in-front-end",
        },
      },
    ],
    fallback: false,
  };
}