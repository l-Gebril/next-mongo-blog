import { useRouter } from "next/router";
import { useRef, useState } from "react";
import axios from 'axios';

export default function CreateArticle() {
    const router = useRouter();
    const posterBox = useRef();
    const [article, setArticle] = useState({});
    const handleChange = (e) => setArticle(pre => ({ ...pre, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        posterBox.current.textContent = '';
        
        if(article.poster.startsWith("https://images.unsplash.com/")) {
            const result = await axios.post('/article', {
                author: article.author,
                title: article.title,
                poster: article.poster,
                topic: article.topic
            });
            if(!result.error) router.push('/');
        } else posterBox.current.innerHTML = 'Only Links From Unsplash Supported.';
    }
    return (
        <div className="max-w-[600px] mx-auto bg-green-200 px-6 pt-16 pb-6 rounded shadow-md overflow-hidden">
            <h1 className="text-2xl sm:text-3xl font-bold mb-10 text-center">Create A New Article</h1>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="mb-2" htmlFor="author">Author</label>
                    <input className="md:min-w-[300px] outline-0 p-1 w-full text-[12px] sm:text-sm" type="text" name="author" id="author" required onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label className="mb-2" htmlFor="title">Title</label>
                    <input className="md:min-w-[300px] outline-0 p-1 w-full text-[12px] sm:text-sm" type="text" name="title" id="title" required onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label className="mb-2" htmlFor="poster">Poster</label>
                    <input className="md:min-w-[300px] outline-0 p-1 w-full text-[12px] sm:text-sm" type="text" name="poster" id="poster" required onChange={handleChange} />
                    <div ref={posterBox} className="text-[12px] sm:text-sm text-red-500 mb-3"></div>
                </div>

                <div className="mb-3">
                    <label className="mb-2" htmlFor="topic">Topic</label>
                    <textarea className="min-h-[150px] outline-0 p-1 w-full text-[12px] sm:text-sm" type="text" name="topic" id="topic" required onChange={handleChange}></textarea>
                </div>

                <input className="bg-main text-white mt-5 py-1 px-3 rounded border hover:border-main hover:bg-white hover:text-slate-800 outline-0 tranistion-all duration-300 cursor-pointer" type="submit" value="Publish" />
            </form>
        </div>
    );
}
