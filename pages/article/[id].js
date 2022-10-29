import Image from "next/legacy/image";
import Link from "next/link";

export default function Article({ article }) {
  return( 
    <>
    <div className="max-w-[700px] mx-auto">
      <div className="pb-3">
        <div>
          <Link href={`/author/${article.author}`} className="bg-slate-800 text-lg w-fit text-white px-3 py-1">{article.author}</Link>
        </div>
        <h1 className="pt-5 text-3xl font-bold">{article.title}</h1>
      </div>
      
      <Image
        src={article.poster}
        alt={`${article.title} poster`}
        width={16}
        height={9}
        layout='responsive'
        objectFit="cover"
        objectPosition='center'
        />
        
      <p className="pt-6 pb-14">{article.topic}</p>

      <Link href='/' className="float-right font-bold">
        More Articles {`-->`}
      </Link>
    </div>
    </>);
}

export async function getStaticPaths() {
  const result = await fetch('http://localhost:3000/api/article', { method: 'GET' }).then(res => res.json());
  const paths = result.docs && result.docs.map(article => ({
      params: { id: article._id }
  }));
  return {
      paths: paths,
      fallback: 'blocking'
  }
}
export async function getStaticProps(context) {
  const id = context.params.id;
  const result = await fetch(`http://localhost:3000/api/article/${id}`, { method: 'GET' }).then(res => res.json());
  return {
      props: { article: result.doc },
      revalidate: 10
  }
}