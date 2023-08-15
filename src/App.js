import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from "./routes/Home"
import Movie from "./routes/Movie";
import Tictactoe from "./routes/Tictactoe";
import Counter from "./routes/Counter";
import Converter from "./routes/Converter";
import Coin from "./routes/Coin";
import Todo from "./routes/Todo";
import PropTest from "./routes/PropTest";
import MovieDetail from "./component/movie/Detail";
import NotFound from "./routes/NotFound";


export default function App() {
    return (
        <Router>
            <div className="container">
                <div className="sidebar">
                    <h1>메뉴</h1>
                    <ul>
                        <li><Link to="/tictactoe">Tic-tac-toe</Link></li>
                        <li><Link to="/counter">counter</Link></li>
                        <li><Link to="/converter">converter</Link></li>
                        <li><Link to="/todo">todo</Link></li>
                        <li><Link to="/propTest">propTest</Link></li>
                        <li><Link to="/coin">coin</Link></li>
                        <li><Link to="/movie">Movie</Link></li>
                    </ul>
                </div>
                <div className="content">
                    <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie" element={<Movie />} />
                    <Route path="/movie/detail" element={<MovieDetail />} />
                    <Route path="/tictactoe" element={<Tictactoe />} />
                    <Route path="/counter" element={<Counter />} />
                    <Route path="/converter" element={<Converter />} />
                    <Route path="/coin" element={<Coin />} />
                    <Route path="/todo" element={<Todo />} />
                    <Route path="/propTest" element={<PropTest />} />
                    <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}