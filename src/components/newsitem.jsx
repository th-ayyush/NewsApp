import image from '../assets/ai-generated-8785462.jpg'
const Newsitem =({title,description,src,url})=>{
    return(
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
        <img src={src?src:image} style={{height:"200px" ,width:"325px"}} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">{description?description.slice(0,90):"YouTube's New Monetization Policies Aim to Support Emerging Creators and Boost Revenue Opportunities."}</p>
        <a href={url} className="btn btn-primary">Read more</a>
        </div>
        </div>
    )
}

export default Newsitem