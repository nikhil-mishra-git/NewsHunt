import React, { useState, useEffect } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { getAllNews } from '../API/AxiosInstance';
import NewsCard from './NewsCard'; // Import the NewsCard component

const InputSearch = () => {
    const [allNews, setAllNews] = useState([]);
    const [query, setQuery] = useState('');
    const [filteredArticles, setFilteredArticles] = useState([]);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getAllNewsData = async () => {
            setLoading(true);
            try {
                const res = await getAllNews('everything');
                setAllNews(res.data.articles || []);
            } catch (err) {
                console.error('Error fetching news:', err.response?.data || err.message);
            } finally {
                setLoading(false);
            }
        };

        getAllNewsData();
    }, []);

    useEffect(() => {
        if (query.trim() === '') {
            setFilteredArticles([]);
            return;
        }

        const results = allNews.filter(article =>
            article.title?.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredArticles(results);
        setIsSearchOpen(true);
    }, [query, allNews]);

    return (
        <div className=" w-full">
            {/* Search Input */}
            <div className="flex items-center bg-zinc-700 px-3 rounded focus-within:ring-1 focus-within:ring-red-500 w-full">
                <IoIosSearch className="text-white text-2xl mr-2" />
                <input
                    type="search"
                    placeholder="Search News"
                    className="bg-transparent text-white placeholder-white outline-none w-full p-2"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => query && setIsSearchOpen(true)}
                    onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}
                />
            </div>

            {/* Search Results Panel */}
            {isSearchOpen && (
                <div className="absolute z-50 bg-[#181818] left-0 w-full min-h-[90vh] overflow-y-auto mt-[3vh] p-10 rounded-lg shadow-lg">
                    {loading ? (
                        <p className="text-white">Loading news...</p>
                    ) : filteredArticles.length === 0 ? (
                        <p className="text-gray-400">No matching results</p>
                    ) : (
                        <div className="flex flex-wrap gap-6 justify-center">
                            {Array.isArray(filteredArticles) && filteredArticles.length > 0 ? (
                                filteredArticles.map((article, i) => (
                                    <NewsCard key={i} article={article} /> // Use the NewsCard component here
                                ))
                            ) : (
                                <p className="text-gray-400 w-full flex items-center">No matching results</p>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default InputSearch;
