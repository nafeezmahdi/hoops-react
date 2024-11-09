export default function SearchInput() {
  return (
    <form className="grid grid-cols-[1fr,auto] gap-4">
      <div className="search-bnc">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M11 20a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM18.93 20.69c.53 1.6 1.74 1.76 2.67.36.85-1.28.29-2.33-1.25-2.33-1.14-.01-1.78.88-1.42 1.97Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        <input
          type="search"
          placeholder="Search Blogs"
          name="search"
          className="px-3 py-1"
        />
      </div>
      <button
        data-aos="fade-up"
        type="submit"
        className="search-bnc-btn aos-init aos-animate"
      >
        Search
      </button>
    </form>
  );
}
