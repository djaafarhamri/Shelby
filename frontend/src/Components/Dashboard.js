import { useState, useEffect } from 'react'
import axios from 'axios'
import './Dashboard.css'

const ENDPOINT = 'http://localhost:4000'

const Dashboard = () => {
    const [dateStart, setDateStart] = useState()
    const [dateEnd, setDateEnd] = useState()
    const [yearlyProfit, setYearlyProfit] = useState(0)
    const [monthlyProfit, setMonthlyProfit] = useState(0)
    const [dailyProfit, setDailyProfit] = useState(0)
    const getProfit = () => {
        axios.post(`${ENDPOINT}/api/getProfitByDate`, {
            dateStart,
            dateEnd
        })
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }
    useEffect(() => {
        axios.post(`${ENDPOINT}/api/getProfitByDate`, {
            dateStart: new Date(new Date().getFullYear() - 1, new Date().getMonth(), new Date().getDate() ),
            dateEnd: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())
        })
        .then(res => setYearlyProfit(res.data))
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.post(`${ENDPOINT}/api/getProfitByDate`, {
            dateStart: new Date(new Date().getFullYear(), new Date().getMonth() - 1, new Date().getDate() ),
            dateEnd: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())
        })
        .then(res => setMonthlyProfit(res.data))
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.post(`${ENDPOINT}/api/getProfitByDate`, {
            dateStart: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 1 ),
            dateEnd: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())
        })
        .then(res => setDailyProfit(res.data))
        .catch(err => console.log(err))
    }, [])
    return ( 
        <div className="dashboard">
            <p>Date Start</p>
            <input type="date" onChange={e => {setDateStart(e.target.value)}} />
            <p>Date End</p>
            <input type="date" onChange={e => {setDateEnd(e.target.value)}} />
            <button onClick={getProfit}>Get</button>
        </div>
     );
}
 
export default Dashboard;