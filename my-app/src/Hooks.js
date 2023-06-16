import React from "react";
import { ReactDOM } from "react-dom/client";

function FavouriteColor(){
    const [color, setColor] = useState("red");

return(
    <div>
    <h1>My Favourite Color is {color}</h1>
    <button type="button" onClick={() => setColor("blue")}>Blue</button>
    <button type="button" onClick={() => setColor("blue")}>Green</button>
    <button type="button" onClick={() => setColor("blue")}>Yellow</button>
    </div>
);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);