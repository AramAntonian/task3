function MainHTML({stateInfo,state,handelSwitch}){

 
    if(stateInfo.length)
     {   return (
        <>
            <table className = "table">
                <tr>
                    <td>State</td>
                    <td>Date</td>
                    <td>Positives</td>
                    <td>Negatives</td>
                </tr>
                <tr>
                    <td>{stateInfo[1]["state"]}</td>
                    <td>{stateInfo[1]["date"]}</td>
                    <td>{stateInfo[1]["positive"]}</td>
                    <td>{stateInfo[1]["negative"]??0}</td>
                </tr>
                <tr>
                    <td>{stateInfo[0]["state"]}</td>
                    <td>{stateInfo[0]["date"]}</td>
                    <td>{stateInfo[0]["positive"]}</td>
                    <td>{stateInfo[0]["negative"]??0}</td>
                </tr>
                <tr>
                    <td>{stateInfo[2]["state"]}</td>
                    <td>{stateInfo[2]["date"]}</td>
                    <td>{stateInfo[2]["positive"]}</td>
                    <td>{stateInfo[2]["negative"]??0}</td>
                </tr>
                <tr>
                    <td>{stateInfo[3]["state"]}</td>
                    <td>{stateInfo[3]["date"]}</td>
                    <td>{stateInfo[3]["positive"]}</td>
                    <td>{stateInfo[3]["negative"]??0}</td>
                </tr>
                <tr>
                    <td>{stateInfo[4]["state"]}</td>
                    <td>{stateInfo[4]["date"]}</td>
                    <td>{stateInfo[4]["positive"]}</td>
                    <td>{stateInfo[4]["negative"]??0}</td>
                </tr>
                <tr>
                    <td>{stateInfo[5]["state"]}</td>
                    <td>{stateInfo[5]["date"]}</td>
                    <td>{stateInfo[5]["positive"]}</td>
                    <td>{stateInfo[5]["negative"]??0}</td>
                </tr>
            </table>
            <button onClick = {handelSwitch}>Switch to {state}</button>
            </>
        )}
}

export default MainHTML