import '../cardProd/cardP.css'

function CardP({ img, nombre, precio }) {
    return (
        <>
            <div className='cardcontenedor'>
                <div className="card">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 class="card-title">{nombre}</h5>
                        <p class="card-text"> <strong>{precio} </strong></p>

                        
                    </div>
                </div>
            </div>

        </>
    )
}

export default CardP