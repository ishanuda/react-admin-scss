// rfce

import './Home.scss';
import TopBox from '../../components/TopBox/TopBox';
import ChartBox from '../../components/ChartBox/ChartBox';
import BarChartBox from '../../components/BarChartBox/BarChartBox';
import PieChartBox from '../../components/PieChartBox/PieChartBox';
import BigChartBox from '../../components/BigChartBox/BigChartBox';

import { 
  chartBoxUser,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxConversion,
  barChartBoxVisit,
  barChartBoxRevenue,

} from '../../data';


function Home() {
  return (
    <div className='home'>
      <div className='box box-1'>
        <TopBox />
      </div>
      <div className='box box-2'>
        <ChartBox { ...chartBoxUser } />
      </div>
      <div className='box box-3'>
        <ChartBox { ...chartBoxProduct } />
      </div>
      <div className='box box-4'>
        <PieChartBox />
      </div>
      <div className='box box-5'>
        <ChartBox { ...chartBoxConversion } />
      </div>
      <div className='box box-6'>
        <ChartBox { ...chartBoxRevenue } />
      </div>
      <div className='box box-7'>
        <BigChartBox />
      </div>
      <div className='box box-8'>
        <BarChartBox { ...barChartBoxVisit } />
      </div>
      <div className='box box-9'>
        <BarChartBox { ...barChartBoxRevenue } />
      </div>
    </div>
  )
}

export default Home