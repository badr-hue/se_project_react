import '../SideBar/SideBar.css';
import avatar from "../../assets/avatar.svg";


export default function SideBar() {
    return (
        <aside className="sidebar">
         <div className="sidebar__profile">
                <img className="sidebar__avatar" src={avatar} alt="User Avatar" />
                <p className="sidebar__username">Terrence Tegegne</p>
              </div>
        </aside>
    );
}