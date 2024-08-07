import React from "react";

function UnityIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            opacity='0.8'
            className="mr-4"
        >
            <defs>
                <linearGradient id="gradient" gradientTransform="rotate(25)">
                    <stop offset="25%" stopColor="#3BD97A" />
                    <stop offset="100%" stopColor="#D93B9A" />
                </linearGradient>
            </defs>
            <path fill="url(#gradient)" d="M26.531 25.599L20.803 16l5.728-9.599L29.334 16zm-12.667-.932l-7.197-7.068h11.469l5.728 9.599zm0-17.47l10-2.531-5.728 9.599H6.531c0 .136 7.333-7.068 7.333-7.068zM28.531 0L15.47 3.333l-2 3.333H9.599L0 15.999l9.599 9.333h3.871l1.864 3.333 13.068 3.333 3.463-12.667-1.864-3.333 2-3.333z"></path>
        </svg>
    );
}

export default UnityIcon;