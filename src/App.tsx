import {
  AxisModel, Category, ChartComponent, ColumnSeries, Inject, SeriesCollectionDirective, SeriesDirective
} from '@syncfusion/ej2-react-charts';
import { DataManager } from '@syncfusion/ej2-data';
import './App.css';

function App() {
  const primaryxAxis: AxisModel = { valueType: 'Category' };
  const dataManager = new DataManager({
    url: 'https://services.syncfusion.com/js/production/api/orders'
  });
  return (
    <ChartComponent primaryXAxis={primaryxAxis}>
      <Inject services={[ColumnSeries, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective type='Column' dataSource={dataManager} xName='OrderID' yName='Freight' />
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}
export default App;