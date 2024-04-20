import "./Styles-Components/FormationsExperiences.css"

function Formations({data}) {
    console.log(data)
    return <div className='cursus'>
        <h2>Formations</h2>
        {data.map(item => (
            <div className="container" key={item.id}>
                <div>
                    <b><p>{item.date}</p></b>
                </div>
                <div className="diplome">
                    <h3>{item.title}</h3>
                    <p>{item.location}</p>
                </div>
            </div>
        ))}
        
    </div>
}

export default Formations