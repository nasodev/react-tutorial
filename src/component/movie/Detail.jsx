import { useEffect, useState } from "react";
import {useParams,Link} from "react-router-dom";

export default function MovieDetail() {
    const {id} = useParams();
    const [loading,setLoading] = useState(true);
    const [detail,setDetail] = useState([]);
    
    async function getMovieDetail() {
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        const json = await response.json();
        setDetail(json.data.movie);
        setLoading(false);
    }

    useEffect(()=>{
        getMovieDetail();
    },[]);

    function printDetail() {
        return (
            <div>
                <img 
                    src={detail.large_cover_image}
                />
                    <h2>{detail.title}</h2> 
                    <p>{detail.description_full}</p>
                    <a href={detail.url} target="_blank" rel="noopener noreferrer">{detail.url}</a>
            </div>
        );
    }

    return (
        <div>
            <h2>Detail</h2>
            {loading ? 'loading...' : printDetail()}
        </div>
    );
}