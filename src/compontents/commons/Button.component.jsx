import React from 'react'

function Button({ type = 'button', text = '', action, onClick, color = 'slate' }) {
    // Static mapping to avoid dynamic Tailwind class purging and ensure valid fallback
    const colorClasses = {
        slate: 'bg-slate-500',
        blue: 'bg-blue-500',
        red: 'bg-red-500',
        green: 'bg-green-500',
        yellow: 'bg-yellow-400',
        indigo: 'bg-indigo-500',
        purple: 'bg-purple-500',
        pink: 'bg-pink-500'
    }

    const bgColor = colorClasses[color] ?? colorClasses.slate;

    return (
        <>
            <button
                type={type}
                onClick={onClick ?? action}
                className={`cursor-pointer px-2 py-1 rounded-md ${bgColor} tracking-wider text-white transition-all duration-300 ease-in-out hover:shadow-md hover:text-white hover:scale-105`}
            >
                {text}
            </button>
        </>
    )

}

export default Button