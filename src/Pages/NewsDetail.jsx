import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BackButton from '../Components/BackButton';
import { GoArrowUpRight } from "react-icons/go";
import dayjs from 'dayjs';


const NewsDetail = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const article = state?.article;

    if (!article) {
        return (
            <div className="text-center mt-20 text-lg text-white">
                <p>Article not found.</p>
                <button
                    onClick={() => navigate(-1)}
                    className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md"
                >
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <>
            <BackButton />

            <div className="max-w-5xl mx-auto px-4 py-10 text-white">

                {/* Title */}
                <h1 className="text-3xl font-bold mb-4">{article.title}</h1>

                {/* Author and Date */}
                <div className="text-md text-gray-400 my-6 flex items-center justify-between">
                    <p>By {article.source?.name || article.author || 'Unknown'}</p>
                    <p>Published - {dayjs(article.publishedAt).format('MMM DD, YYYY')}</p>
                </div>

                {/* Image */}
                <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="w-auto mx-auto h-96 object-cover rounded-lg my-12"
                />

                {/* Description */}
                <p className="text-xl font-semibold text-zinc-300 mb-8">
                    {article.description || "No description available."}
                </p>

                {/* Content */}
                {article.content && (
                    <div className="text-base text-zinc-400 leading-relaxed whitespace-pre-line">
                        {article.content}
                    </div>
                )}

                {/* Read Full Article Button */}
                {article.url && (
                    <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 px-6 py-3 w-1/5 bg-zinc-700 hover:bg-zinc-600 rounded-md text-white font-medium transition flex items-center gap-4"
                    >
                        <span>Read Full Article</span>
                        <GoArrowUpRight className='font-bold'/>
                    </a>
                )}
            </div>
        </>
    );
};

export default NewsDetail;
