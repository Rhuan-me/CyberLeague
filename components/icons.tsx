import React from 'react';

export const CyberLeagueLogo: React.FC<{ className?: string }> = ({ className = "h-8 w-8" }) => (
  <img 
    src="/images/brand.png" 
    alt="Cyber League Logo" 
    className={className} 
  />
);

export const TwitterIcon: React.FC<{ className?: string }> = ({ className = "h-6 w-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.76 2.81 1.91 3.58-.71 0-1.37-.22-1.95-.54v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.94.07c.54 1.7 2.1 2.94 3.97 2.97-1.47 1.15-3.32 1.83-5.33 1.83-.34 0-.68-.02-1.02-.06 1.9 1.21 4.16 1.92 6.56 1.92 7.88 0 12.2-6.54 12.2-12.2 0-.18 0-.37-.01-.55.84-.6 1.56-1.36 2.14-2.22z"></path>
    </svg>
);

export const DiscordIcon: React.FC<{ className?: string }> = ({ className = "h-6 w-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 16 16">
        <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051.007c2.619 1.921 5.578 1.921 8.197 0a.05.05 0 0 1 .051-.007c.08.066.164.132.248.195a.051.051 0 0 1 .015.019.05.05 0 0 1-.02.066 8.875 8.875 0 0 1-1.248.595.05.05 0 0 0-.01.059c.236.466.51.909.818 1.329a.05.05 0 0 0 .056.019 13.276 13.276 0 0 0 3.995-2.02.051.051 0 0 0 .021-.037c.279-2.985-.093-6.008-.698-9.125a.041.041 0 0 0-.021-.018Z M5.5 10.5c-.828 0-1.5-.784-1.5-1.75s.672-1.75 1.5-1.75 1.5.784 1.5 1.75-.672 1.75-1.5 1.75Zm5 0c-.828 0-1.5-.784-1.5-1.75s.672-1.75 1.5-1.75 1.5.784 1.5 1.75-.672 1.75-1.5 1.75Z"/>
    </svg>
);

export const TelegramIcon: React.FC<{ className?: string }> = ({ className = "h-6 w-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.226.63.42.996.635.669.377.92.33.945.289.023-.041.05-.149.078-.286.073-.346.384-1.433.615-2.618.204-1.041.34-1.857.382-2.323s-.026-.746-.23-1.023c-.206-.277-.552-.442-1.1-.494a8.91 8.91 0 0 0-1.218-.093z"/>
    </svg>
);


export const PlusIcon: React.FC<{ className?: string }> = ({ className = "h-6 w-6" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
    </svg>
);

export const MinusIcon: React.FC<{ className?: string }> = ({ className = "h-6 w-6" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
    </svg>
);

export const CloseIcon: React.FC<{ className?: string }> = ({ className = "h-6 w-6" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export const StarIcon: React.FC<{ className?: string, variant?: 'filled' | 'half' | 'empty' }> = ({ className = "w-5 h-5", variant = 'empty' }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="half-fill">
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="transparent" stopOpacity="0.2"/>
            </linearGradient>
        </defs>
        <path
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"
            fill={variant === 'filled' ? 'currentColor' : variant === 'half' ? 'url(#half-fill)' : 'transparent'}
            stroke="currentColor"
            strokeWidth="1.5"
        />
    </svg>
);