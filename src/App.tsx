
import Card from "./Components/Card"
import Button from "./Components/Button"
import { BsCloudUpload } from "react-icons/bs"

import './App.css'
function App() {

  const cardProps = {
    onClick: () => console.log("Card clicked"),
    header_text: "Easy Deployment",
    className : "",
    icon : <BsCloudUpload className="card_icon"/>,
  }

  const buttonProps = {
    type: "square",
    color: "green"
  }


  return (
    <div className="container">
    <Card {...cardProps} >
      Ac tincidunt sapien vehicula erat
      auctor pellentesque rhoncus.
      Et magna sit morbi lobortis.

    </Card>
    <Button {...buttonProps}>Badge</Button>
    </div>
  )
}

export default App
