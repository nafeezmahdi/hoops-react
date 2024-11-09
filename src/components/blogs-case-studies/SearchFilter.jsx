/* eslint-disable react/prop-types */
export default function SearchFilter({ searchText }) {
  return (
    <button className="bg-white text-[#5E6787] border rounded-md border-[#E3E3E3] px-4 py-1">
      {searchText}
    </button>
  );
}
