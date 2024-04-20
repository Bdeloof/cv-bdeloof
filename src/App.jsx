  import "./App.css"
  import User from "./components/User"
  import Skills from "./components/Skills"
  import Profil from "./components/Profil"
  import FormationsExperiences from "./components/FormationsExperiences"
  
  function App() {

  return (
    <>
      <div className="App">
        <div className="row">
          <div className="sidebar col-3">
            <User />
            <Skills />
          </div>
          <div className="main col-9">
            <Profil />
            <FormationsExperiences />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
