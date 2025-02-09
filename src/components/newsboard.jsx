import {useEffect,useState} from "react";
import Newsitem from "./newsitem";
import './newsboard.css'
const Newsboard =({category})=>{
    const [articles,setArticles]= useState([]);
    const [error, setError] = useState(null);
    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=c8ce13f96e4d4bb7b2f5ea193ab17eb0`;
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setArticles(data.articles || []);
            })
            .catch(err => setError(err.message));

    },[category])
    return(
        <div className="newsboard-container">
        <h2 className="news-title">
            Latest <span className="news-badge">News</span>
        </h2>
        
        {error && <p className="error-message">{error}</p>}

        <div className="news-list">
            {articles.length > 0 ? (
                articles.map((news, index) => (
                    <Newsitem 
                        key={index} 
                        title={news.title} 
                        description={news.description} 
                        src={news.urlToImage} 
                        url={news.url} 
                    />
                ))
            ) : (
                !error && <p className="no-news">No News Article Available.</p>
            )}
        </div>
    </div>
);
    
}

export default Newsboard