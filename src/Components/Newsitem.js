import React  from "react";

 const Newsitem=(props)=>{
  
    let { title, description,imageUrl,newsUrl,author,publishedAt,source } = props
    return (
       
      <>
      <div className="my-3">
        <div className="card">
          <div style={{
            display:'flex',
            justifyContent:'flex-end',
            position:'absolute',
            right:0

          }}>
        <span className="badge rounded-pill bg-danger" style={{left:'85%',zIndex:'1'}}>{source}</span>
        </div>
          <img src={imageUrl}className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} On {new Date(publishedAt).toGMTString()}</small></p>
            <a href={newsUrl} className="btn btn-sm btn-primary">
              Read More
            </a>

          </div>
        </div>
        </div>
      </>
    );
  }
export default Newsitem;
