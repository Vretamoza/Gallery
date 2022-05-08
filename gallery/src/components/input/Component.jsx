export default function Component ({ refy, type, id, className = "", placeholder = "", accept = "", onChange = () => {} }) {
    return (
        <input
            ref={ refy }
            type={ type }
            id={ id }
            className={`py-2 px-4 border-2 border-violet-400 focus:outline-none focus:border-violet-600 rounded-lg text-violet-500 font-medium placeholder:text-violet-400 ${className}` }
            placeholder={ placeholder }
            accept={ accept }
            onChange={ onChange }
        ></input>
    );
}
