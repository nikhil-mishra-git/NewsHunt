import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const NewsCard = ({ article }) => {

    return (
        <div className='border-2 min-h-[450px] border-zinc-700 rounded-md w-full max-w-[425px] p-4'>

            {/* Top of Card */}
            <div className='flex items-center gap-3'>
                <div className='h-8 w-8 rounded-full bg-zinc-600 flex items-center justify-center'>
                    <FaUser />
                </div>
                <h1>{article.author || article.source?.name || 'Unknown Author'}</h1>
            </div>

            {/* Poster Section */}
            {article.urlToImage ? (
                <div className='my-4 w-full overflow-hidden h-60 rounded-md'>
                    <img
                        src={article.urlToImage}
                        alt='news'
                        className='w-full h-full object-cover bg-zinc-700'
                    />
                </div>
            ) : (
                <div className='my-4 w-full overflow-hidden h-60 rounded-md bg-zinc-800 flex items-center justify-center text-zinc-500'>
                    No image available
                </div>
            )}

            {/* Detail Brief */}
            <div className='flex flex-col gap-3'>
                <p className='text-zinc-400'>{dayjs(article.publishedAt).format('MMM DD, YYYY')}</p>
                <h2 className='text-[1.3rem] font-semibold'>
                    {article.title?.length > 60 ? `${article.title.substring(0, 60)}...` : article.title}
                </h2>
                <p className='text-zinc-300 text-sm'>By: {article.source?.name || article.author || 'Unknown'}</p>
            </div>

            {/* Buttons */}
            <div className='mt-6 flex items-center justify-center gap-4'>
                <button className=' bg-zinc-700 p-3 rounded-md hover:bg-zinc-600 transition'>
                    <CiBookmark />
                </button>
                <button className='w-full bg-zinc-600 p-3 rounded-md cursor-pointer hover:bg-zinc-700 transition'>
                    <Link to={`/news/${article.title}`} state={{ article }}>
                        Read the news...
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default NewsCard;
