import React from "react";
import FilterButton from "./FilterButton";
import { VisibilityFilter } from "./visibilityFilterSlice";
import { Radio } from "antd";

const Footer = (): JSX.Element => {
  return (
    <div>
      <span>Show:</span>
      <Radio.Group defaultValue={VisibilityFilter.ShowAll} buttonStyle="solid">
        <FilterButton
          visibilityFilter={VisibilityFilter.ShowAll}
          text={"All Todos"}
        />
        <FilterButton
          visibilityFilter={VisibilityFilter.ShowActive}
          text={"Active"}
        />
        <FilterButton
          visibilityFilter={VisibilityFilter.ShowCompleted}
          text="Completed"
        />
      </Radio.Group>
    </div>
  );
};

export default Footer;
