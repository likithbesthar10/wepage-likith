import React from 'react'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill }
    from 'react-icons/bs'
// import { BarChart, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Sector }
//     from 'recharts';
import { Bar, Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js';

import { Pie } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown  } from '@fortawesome/free-solid-svg-icons';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

function Home() {

    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const BarChartData = {
        labels: labels,
        datasets: [{
            label: 'Overview',
            data: [65, 59, 60, 71, 56, 55, 40, 85, 59, 76, 78, 56],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }]
    };

     const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green'],
        datasets: [
          {
            label: 'Customers',
            data: [12, 19, 3, 5],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',              
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',

            ],
            borderWidth: 1,
          },
        ],
      };
      

    return (
        <main className='main-container'>
            <div className='main-title'>
                <h3>Hello Likith👋,</h3>
            </div>

            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Earnings</h3>
                        <BsFillArchiveFill className='card_icon' />
                    </div>
                    <h1>$198k</h1>
                    <h3> <FontAwesomeIcon icon={faArrowUp} /> 37.8% this month</h3>
                    
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Others</h3>
                        <BsFillGrid3X3GapFill className='card_icon' />
                    </div>
                    <h1>$2.4k</h1>

                    <h3> <FontAwesomeIcon icon={faArrowDown} /> 2% this month</h3>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Balance</h3>
                        <BsPeopleFill className='card_icon' />
                    </div>
                    <h1>$2.4K</h1>
                    <h3><FontAwesomeIcon icon={faArrowDown} /> 2% this month</h3>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Total Sales</h3>
                        <BsFillBellFill className='card_icon' />
                    </div>
                    <h1>$89k</h1>
                    <h3><FontAwesomeIcon icon={faArrowUp} /> 11% this week</h3>
                </div>
            </div>

            <div className='charts'>
                <Bar                  
                    data={BarChartData}
                />

                <Doughnut
                    data={data} 
                 />
                
            </div>

        </main>
    )
}

export default Home