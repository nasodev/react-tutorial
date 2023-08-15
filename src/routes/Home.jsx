import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

export default function Home() {
    return (
        <div>
             <h1>
                <Link to="/tictactoe">Tic-tac-toe</Link>
            </h1>
            <h1>
                <Link to="/counter">counter</Link>
            </h1>
            <h1>
                <Link to="/converter">converter</Link>
            </h1>
            <h1>
                <Link to="/todo">todo</Link>
            </h1>
            <h1>
                <Link to="/propTest">propTest</Link>
            </h1>
            <h1>
                <Link to="/coin">coin</Link>
            </h1>
            <h1>
                <Link to="/movie">Movie</Link>
            </h1>
        </div>  
    );
}