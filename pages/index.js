import Link from "next/link";
import Image from "next/legacy/image";
import axios from "axios";

export default function Home({ articles }) {
  return(
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {
          articles.length? (articles.map((article, i) => (
            <article key={i} className="relative bg-white text-black shadow-md rounded overflow-hidden">
              <Link href={`/article/${article._id}`}>
                  <Image
                  src={article.poster}
                  alt={`${article.title} poster`}
                  width={16}
                  height={9}
                  layout='responsive'
                  objectFit="cover"
                  objectPosition='center'
                  />
                <main className="container pt-3 text-sm">
                  <h1 className="text-base font-bold hover:underline hover:text-main transition-all duration-300 line-clamp-2 mb-2">{article.title}</h1>
                  <p className="line-clamp-4">{article.topic}</p>
                  <button></button>
                </main>
              </Link>
            </article>
          ))): <h1>No Posts Yet</h1>
        }
      </div>
    );
}

export async function getStaticProps() {
  const result = await axios.get('/article').then(res => res.data);
  
  return {
    props: { articles: result.docs? result.docs : [] },
    revalidate: 10
  }
}