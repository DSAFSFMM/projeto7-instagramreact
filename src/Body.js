import SideBar from "./SideBar";
import Stories from "./Stories";
import Posts from "./Posts";

export default function Body() {
    return (
        <div class="corpo">
            <div class="esquerda">
                <Stories/>
                <Posts/>
            </div>
            <SideBar/>
        </div>
    );
}