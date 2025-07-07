import './PieChartBox.scss';
import { 
  Tooltip, PieChart, Pie, Cell, 
  ResponsiveContainer 
} from 'recharts';

const data = [
  { name: 'Mobile', value: 400, color: '#0088fe' },
  { name: 'Desktop', value: 300, color: '#00c49f' },
  { name: 'Laptop', value: 300, color: '#ffbb28' },
  { name: 'Tablet', value: 200, color: '#ff8042' },
];

const PieChartBox = () => {
  return (
    <div className='pie-chart-box'>
      <h1>Leads by Source</h1>
      <div className="chart">
        
        <ResponsiveContainer width='99%' height={300} >
          <PieChart >
            <Tooltip 
              contentStyle={{ background: 'white', borderRadius: '5px' }} />
            <Pie
              data={data}
              innerRadius={'70%'}
              outerRadius={'90%'}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={`cell-${ item.name }`} fill={ item.color } />
              ))}
            </Pie>
       
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="options">
        { data.map((item) => (
          <div key={ item.name } className="option">
            <div className="title">
              <div className="dot" style={{ backgroundColor: item.color }}></div>
              <span>{ item.name }</span>
            </div>
            <span>{ item.value }</span>
          </div>
        ))}
      </div>

    </div>
  )
}

export default PieChartBox;