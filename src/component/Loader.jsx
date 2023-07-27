import React from 'react';

const Loader = () => {
  return (
    <button
      type="button"
      className="bg-indigo-500 text-white px-4 py-2 rounded-md flex items-center disabled:opacity-50"
      disabled
    >
      <svg
        className="animate-spin h-5 w-5 mr-3 border-t-2 border-white rounded-full"
        viewBox="0 0 24 24"
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042.553 5.918 1.555 8.529l2.046-1.086zM20 12c0-3.314-1.046-6.387-2.818-8.909l-1.988 1.003A9.895 9.895 0 0018 12h2zm-1.555-2.529A7.963 7.963 0 0020 12h4c0-6.627-5.373-12-12-12v4c3.042 0 5.918.553 8.529 1.555l-1.086 2.046zM9.373 4.529A7.963 7.963 0 0012 4V0C8.682 0 5.387 1.046 2.909 2.818l1.988 1.003zM4.529 14.627A7.963 7.963 0 004 12H0c0 3.318 1.046 6.387 2.818 8.909l1.988-1.003zm14.742.882A9.894 9.894 0 0024 12h-4c0 4.418-3.582 8-8 8v4c6.627 0 12-5.373 12-12h-4c0 1.36-.274 2.66-.764 3.86l1.035 1.648zM12 18c3.318 0 6.613-1.046 9.091-2.818l-1.988-1.003A7.96 7.96 0 0112 16H8c0 4.418 3.582 8 8 8v-4c-1.36 0-2.66-.274-3.86-.764l-1.648 1.035zM6.504 19.764A9.894 9.894 0 004 20v-4c-4.418 0-8 3.582-8 8h4c0-1.36.274-2.66.764-3.86l-1.035-1.648z"
        />
      </svg>
      Processing...
    </button>
  );
};

export default Loader;
