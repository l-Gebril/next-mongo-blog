import Image from "next/legacy/image";
import Link from "next/link";
import axios from 'axios';
import { useRouter } from "next/router";

export default function Article({ article }) {
  let router = useRouter();

  const handleDeletion = async () => {
    const result = await axios.delete(`/article/${router.query.id}`).then(res => res.data);
    if(!result.errors) router.replace('/')
  }

  return article && (<>
    <Link href='/' className="float-right font-bold mr-5">
      More Articles {`-->`}
    </Link>

    <div className="max-w-[700px] mx-auto">
      <div className="pb-3">
        <h1 className="bg-slate-800 text-lg w-fit text-white px-3 py-1">
          {article.author}
        </h1>
        <h1 className="pt-5 text-3xl sm:text-4xl font-bold">{article.title}</h1>
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
      <button onClick={handleDeletion} className="cursor-pointer bg-red-700 hover:bg-red-800 text-white px-5 py-2">Delete</button>
    </div>
    </>);
}

export async function getStaticPaths() {
  const result = await axios.get('/article').then(res => res.data);
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
  const result = await axios.get(`/article/${id}`).then(res => res.data);

  return {
      props: { article: result.doc },
      revalidate: 10
  }
}