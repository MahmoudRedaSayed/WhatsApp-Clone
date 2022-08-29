import { CircularProgress } from "@material-ui/core";
import { CancelOutlined, SearchOutlined } from "@material-ui/icons";
import "./SidebarList.css";
import SidebarListItem from "../components/SidebarListItem";

export default function SidebarList({title,data}) {
  if(!data)
  {
    return (
      <div className="loader__container sidebar__loader">
        <CircularProgress></CircularProgress>
      </div>
    )
  }
  if(!data.length&&title==="Search Results")
  {
    return(
      <div className="no-result">
        <div>
          <SearchOutlined></SearchOutlined>
          <div className="cancel-root">
            <CancelOutlined></CancelOutlined>
          </div>
          </div>
          <h2>no {title}</h2>
      </div>
    )
  }
  return <div className="sidebar__chat--container">
    <h2>{title}</h2>
    {data.map(element=>(
      <SidebarListItem key={element.id} title={title} item={element}></SidebarListItem>
    ))}
  </div>;
}
