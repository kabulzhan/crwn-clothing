import React from "react";
import { useSelector } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

const Directory = (/*{ sections }*/) => {
  const sections = useSelector(selectDirectorySections);
  console.log("Directory component has been called");
  return (
    <div className="directory-menu">
      {sections.map((item) => (
        <MenuItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Directory;
