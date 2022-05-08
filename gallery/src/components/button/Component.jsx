export default function Component ({ children, onClick, className = "", refy = null }) {
    return (
        <button
            ref={ refy }
            className={ `py-3 px-5 bg-violet-200 rounded-xl hover:bg-violet-300 text-base text-violet-700 font-medium dark:text-white/90 dark:bg-violet-800 dark:hover:bg-violet-900 ${className}` }
            onClick={ onClick }
        >
            { children }
        </button>
    );
}
