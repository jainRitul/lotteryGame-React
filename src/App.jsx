import Lottery from './Lottery'
import './App.css'
import TicketNum from './TicketNum'
import Ticket from './TIcket'

import {sum} from "./helper"
function App() {
  let winCondition = (ticket)=>{
      return sum(ticket) === 15;
  }
  return (
    <>
     <Lottery n={3} winCondition={winCondition}/>
    </>
  )
}

export default App
