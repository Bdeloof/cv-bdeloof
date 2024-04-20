import "./Styles-Components/FormationsExperiences.css"

function Experiences({data}) {
    console.log(data)
    return <div className='cursus'>
        <h2 className="experiences">Expériences professionnelles</h2>
        {data.map(item => (
            <div className="container experience" key={item.id}>
                <div>
                    <b><p>{item.date}</p></b>
                </div>
                <div>
                    <h3>{item.title}</h3>
                    <i><p>{item.location}</p></i>
                    <p>{item.text}</p>
                    <ul>
                        <u><p>Missions effectuées :</p></u>
                        {item.missions.map(mission => (
                            <li key={mission.id}>{mission.title}</li>
                        ))}
                    </ul>
                </div>
            </div>
        ))}
        
    </div>
}

export default Experiences