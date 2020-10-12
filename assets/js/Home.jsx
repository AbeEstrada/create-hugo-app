/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";

const Home = () => {
    const [name, setName] = useState("world");
    return (
        <div>
            <p>Hello {name}!</p>
            <p>
                <input type="text" value={name} onInput={(e) => setName(e.target.value)} />
            </p>
        </div>
    );
};

export default Home;
