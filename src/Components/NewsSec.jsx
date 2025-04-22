import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'
import { NavLink, useParams } from 'react-router-dom'
import { getNewsByCategory } from '../API/AxiosInstance'

const NewsSec = () => {

    const { type } = useParams() || { type: 'general' };
    const [news, setNews] = useState([]);
    const [visibleCount, setVisibleCount] = useState(12);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        if (!type) return;
        setIsLoading(true)

        const fetchNews = async () => {
            try {
                const res = await getNewsByCategory(type)
                console.log(res.data.articles);
                setNews(res.data.articles || []);
                setVisibleCount(10)
            } catch (err) {
                if (err.response) {
                    console.error('API Response Error:', err.response.data);
                } else {
                    console.error('Error fetching news:', err.message);
                }
            } finally {
                setIsLoading(false)
            }
        }

        fetchNews()

    }, [type])


    return (
        <div className='w-full max-w-[1350px] mx-auto'>

            {/* Nav Menu For Links */}
            <div className='sticky top-0 w-full bg-[#151515]'>
                <ul className='w-full flex items-center justify-evenly text-lg py-6 border-b-2 border-zinc-700 uppercase font-semibold text-zinc-500'>

                    {['general', 'entertainment', 'technology', 'business', 'sports', 'science', 'health'].map((cat, i) => (
                        <li key={i}>
                            <NavLink
                                to={`/category/${cat}`}
                                className={({ isActive }) =>
                                    isActive ? "text-white" : "text-zinc-500"
                                }
                            >
                                {cat}
                            </NavLink>
                        </li>
                    ))}


                </ul>
            </div>

            {/* Card Implement Functions */}
            {isLoading ? (
                <div className='text-white text-center py-10 text-xl'>
                    Loading news...
                </div>
            ) : (
                <>
                    <div className='px-2 mx-auto md:px-0 py-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {news
                            .filter(article => article.urlToImage !== null)
                            .slice(0, visibleCount)
                            .map((article, idx) => (
                                <NewsCard key={idx} article={article} />
                            ))}
                    </div>

                    {visibleCount < news.filter(article => article.urlToImage !== null).length && (
                        <div className='text-center mt-6'>
                            <button
                                onClick={() => setVisibleCount(prev => prev + 12)}
                                className='px-6 py-2 bg-zinc-800 text-white rounded hover:bg-zinc-700 transition'
                            >
                                Load More
                            </button>
                        </div>
                    )}
                </>
            )}


        </div>
    )
}

export default NewsSec