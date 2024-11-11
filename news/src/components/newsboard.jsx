import {useEffect,useState} from "react";
import Newsitem from "./newsitem";
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
        <div>
            <h2 className="text-center">Latest <span className="badge bg-danger" >News </span></h2>
            {error && <p className="text-danger text-center">{error}</p>}
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
                !error && <p className="text-center">No articles available</p>
            )}
        </div>
    )
}

export default Newsboard