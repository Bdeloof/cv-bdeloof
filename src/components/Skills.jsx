import "./Styles-Components/Skills.css"
import Skill from "./Skill"
import Interests from "./Interests"

function Skills() {
    return <>
        <div className="skilss">
            <h2>Compétences</h2>
            <Skill title="HTML" rating="5"/>
            <Skill title="CSS" rating="5"/>
            <Skill title="JAVASCRIPT" rating="3"/>
            <Skill title="PHP" rating="3"/>
            <Skill title="REACT" rating="3"/>
        </div>
        <div className="skilss">
            <h2>Langues</h2>
            <Skill title="Anglais" rating="4"/>
            <Skill title="Espagnol" rating="2"/>
        </div>
        <Interests />
    </>
}

export default Skills