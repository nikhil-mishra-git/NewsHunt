import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BackButton from '../Components/BackButton';

const NewsDetail = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const article = state?.article;

    if (!article) {
        return (
            <div className="text-center mt-20 text-lg">
                <p>Article not found.</p>
                <button
                    onClick={() => navigate(-1)}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
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

                <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="w-full h-96 object-cover rounded-lg my-6"
                />

                <h1 className="text-3xl font-bold mb-4">{article.title}</h1>

                <p className="text-lg text-zinc-300 mb-8">{article.description || "No description available."}</p>

                {article.content && (
                    <div className="text-base text-zinc-400 leading-relaxed whitespace-pre-line">
                        {article.content}
                    </div>
                )}

                {article.url && (
                    <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium"
                    >
                        Read Whole Article ↗
                    </a>
                )}
            </div>
        </>
    );
};

export default NewsDetail;
