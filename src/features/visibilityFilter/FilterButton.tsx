import React from "react";
import { VisibilityFilter, setVisibilityFilter } from "./visibilityFilterSlice";
import { useDispatch } from "react-redux";

interface FilterButtonProps {
  visibilityFilter: VisibilityFilter;
  text: string;
}

const FilterButton = ({
  visibilityFilter,
  text,
}: FilterButtonProps): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <button
      className="px-4 py-2 bg-blue-500 mr-2 text-white rounded hover:bg-blue-700 font-bold"
      value={visibilityFilter}
      onClick={() => dispatch(setVisibilityFilter(visibilityFilter))}
    >
      {text}
    </button>
  );
};

export default FilterButton;
