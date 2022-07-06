import HeaderImg from "./HeaderImg"
import Button from "./Button"

function Top() {
  return (
    <div className="top">
      <HeaderImg />
        <h1>Arinze Cyril</h1>
        <h3>FrontEnd Developer</h3>
        <a href="https://arinzecyril.github.io/page/">
          <button className="goto"> 
            Go to my Website
          </button>
        </a>
        <Button />
    </div>
  )
}

export default Top