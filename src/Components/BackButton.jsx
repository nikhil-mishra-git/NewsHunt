import { useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-6 py-4 mt-10 ml-15 cursor-pointer rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
        >
            <FaArrowLeftLong className="w-5 h-5" />
            <span className="text-sm font-medium">Back</span>
        </button>
    );
};

export default BackButton;
