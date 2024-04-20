import "./Styles-Components/FormationsExperiences.css"
import dataFormation from "../datas/Formations"
import Formations from "./Formations"
import dataExperiences from "../datas/Experiences"
import Experiences from "./Experiences"

function FormationsExperiences() {
    return (
    <>
        <Formations data={dataFormation}/>
        <Experiences data={dataExperiences}/>
    </>
    )
}

export default FormationsExperiences