import React from "react";
import FilterButton from "./FilterButton";
import { VisibilityFilter } from "./visibilityFilterSlice";

const Footer = (): JSX.Element => {
  return (
    <div>
      <span>Show:</span>
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
    </div>
  );
};

export default Footer;
