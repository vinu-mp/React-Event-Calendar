import ChartBar from './ChartBar';
import './Chart.css'

const Chart = props => {
  const valueArray = props.dataPoints.map((item) => item.value);
  const max = Math.max(...valueArray);
  return (
    <div className="chart">
      { props.dataPoints.map((datapoint) => <ChartBar key={datapoint.label} value={datapoint.value} label={datapoint.label} max={max}/>) }
    </div>
  )
}

export default Chart;
