import { Link } from "react-router-dom"
import { 
  LineChart, Line, 
  // XAxis, YAxis, 
  // CartesianGrid, 
  Tooltip, 
  // Legend, 
  ResponsiveContainer 
} from 'recharts';
import './ChartBox.scss';

type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};

const ChartBox = (props: Props) => {
  return (
    <div className='chart-box'>
      <div className="box-info">
        <div className="title">
          <img src={ props.icon } alt="" />
          <span>{ props.title }</span>
        </div>
        <h1>{ props.number }</h1>
        <Link to='/' style={{ color: props.color }} >
          View all
        </Link>
      </div>
      <div className="chart-info">
        <div className="chart">

          <ResponsiveContainer width="99%" height="100%" >

              {/* margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }} */}

            <LineChart data={props.chartData} >

              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              {/* <XAxis dataKey="name" /> */}
              {/* <YAxis /> */}
              <Tooltip
                contentStyle={{ background: 'transparent', border: 'none'}}
                labelStyle={{ display: 'none'}}
                position={{ x: 10, y: 60 }}
                />
              {/* <Legend /> */}

              {/* activeDot={{ r: 8 }} */}

              <Line 
                type="monotone" 
                dataKey={ props.dataKey } 
                stroke={ props.color } 
                strokeWidth={2} 
                dot={false} />

              {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}

            </LineChart>

          </ResponsiveContainer>

        </div>
        <div className="texts">
          <span className="percentage" style={{ color: props.percentage < 0 ? 'tomato' : 'limegreen' }}>
            { props.percentage }%
          </span>
          <span className="duration">this month</span>
        </div>
      </div>
    </div>
  )
}

export default ChartBox