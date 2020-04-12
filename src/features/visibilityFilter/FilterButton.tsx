import React from "react";
import { VisibilityFilter, setVisibilityFilter } from "./visibilityFilterSlice";
import { useDispatch } from "react-redux";

import { Radio } from "antd";

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
    <Radio.Button
      value={visibilityFilter}
      onClick={() => dispatch(setVisibilityFilter(visibilityFilter))}
    >
      {text}
    </Radio.Button>
  );
};

export default FilterButton;
