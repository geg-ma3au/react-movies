

function Movie(props){
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props;
    return (
        <div className="row movie">

                <div className="card">
                    <div className="card-image">
                        {
                          poster === 'N/A' ?  <img src='https://picsum.photos/300/400' />  :  <img src={poster} />
                        }


                            <span className="card-title">
                                {title}
                            </span>
                    </div>
                    <div className="card-content">
                        {type} <span className='right'>{year}</span>
                    </div>

                </div>

        </div>
    );
}

export {Movie}