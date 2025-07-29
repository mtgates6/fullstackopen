import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good+1)
  const handleNeutral = () =>setNeutral(neutral+1)
  const handleBad = () => setBad(bad+1)

  return (
    <div>
      <Header section="give feedback"/>
      <Button onClick={handleGood} text="good"/>
      <Button onClick={handleNeutral} text="neutral"/>
      <Button onClick={handleBad} text="bad"/>
      <Header section="statistics"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}


const Header = (props) =>{
  return (
  <div>
    <h1>{props.section}</h1>

  </div>
  )  
}

const Button = (props) =>{
  return (
      <button onClick={props.onClick}>{props.text}</button> 
  )
}

const Statistics = (props) => {
  const total = props.good + props.bad + props.neutral
  const average = (props.good-props.bad)/total
  if (total==0){
    return <p>No feedback given</p>
  }
  return(
    <table>
      <tbody>
        <tr><StatisticsLine text="good" value={props.good}/></tr>
        <tr><StatisticsLine text="neutral" value={props.neutral}/></tr>
        <tr><StatisticsLine text="bad" value={props.bad}/></tr>
        <tr><StatisticsLine text="all" value={total}/></tr>
        <tr><StatisticsLine text="good" value={average}/></tr>
        <tr><StatisticsLine text="positive" value={props.good/total*100+'%'}/></tr>
      </tbody>
    </table>

  )
}

const StatisticsLine = (props) => {
  return(
    <>
      <td>{props.text}:</td>
      <td>{props.value}</td>
    </>
  )
}
export default App