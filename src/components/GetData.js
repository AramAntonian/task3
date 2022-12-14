import { Fragment, useState } from "react"
import {useEffect} from "react"
import "./style.css"
import MainHTML from "./MainHTML"
import Rechart from "./Rechart"

let states = ["ak","al","ar","as","az","ca"]
let idx = 0

function GetData(){
    let [stateInfo,setStateInfo] = useState({})
    let [state,setState] = useState(states[idx])
    let url = `https://api.covidtracking.com/v1/states/${state}/daily.json`
    useEffect(()=> {fetch(url).then(rep => rep.json()).then(res => setStateInfo(res))},[url])

    function handelSwitch(){
        idx = idx < states.length-1?idx+1: 0
        setTimeout(()=>{setState(states[idx])

        },0)
    }
    
    
   
    return (
        <>
            <MainHTML stateInfo={stateInfo} state = {idx === states.length-1?states[0]:states[idx+1]} handelSwitch = {handelSwitch}/>
            <Rechart data = {stateInfo} />
        </>
    )

}

export default GetData
