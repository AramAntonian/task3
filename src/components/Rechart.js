import  { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis,Legend } from "recharts";

function Rechart({data}){
    console.log(data)
    return(
        <LineChart width={730} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis dataKey="positive"/>
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="positive" stroke="#8884d8" />
            <Line type="monotone" dataKey="date" stroke="#82ca9d" />
      </LineChart>
      
    )
}

export default Rechart