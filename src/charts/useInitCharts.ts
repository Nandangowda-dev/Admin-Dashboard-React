import { useEffect } from 'react';
import * as echarts from 'echarts';

const useInitCharts = () => {
  useEffect(() => {
    const initChart = (id: string, options: any) => {
      const chartDom = document.getElementById(id);
      if (chartDom) {
        const myChart = echarts.init(chartDom);
        myChart.setOption(options);
        return myChart;
      }
    };

    const userActivityOptions = {
      animation: false,
      title: { left: 'center', textStyle: { fontSize: 16, fontWeight: 'normal' } },
      tooltip: { trigger: 'axis' },
      legend: { data: ['New Users', 'Active Users'], bottom: 10 },
      xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      yAxis: { type: 'value' },
      series: [
        { name: 'New Users', type: 'line', data: [120, 132, 101, 134, 90, 230, 210], smooth: true, itemStyle: { color: '#3b82f6' } },
        { name: 'Active Users', type: 'line', data: [220, 182, 191, 234, 290, 330, 310], smooth: true, itemStyle: { color: '#10b981' } }
      ]
    };
    const revenueOptions = {
      animation: false,
      title: {left: 'center', textStyle: { fontSize: 16, fontWeight: 'normal' } },
      // eslint-disable-next-line no-template-curly-in-string
      tooltip: { trigger: 'axis', formatter: '{b}: ${c}' },
      xAxis: { type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
      // eslint-disable-next-line no-template-curly-in-string
      yAxis: { type: 'value', axisLabel: { formatter: '${value}k' } },
      series: [
        { type: 'bar', data: [45, 52, 38, 65, 72, 84], itemStyle: { color: '#8b5cf6', borderRadius: [4, 4, 0, 0] } }
      ]
    };
 const salesOptions = {
  animation: false,
  title: { 
    left: 'center', 
    text: 'Sales',
    textStyle: { fontSize: 16, fontWeight: 'normal' } 
  },
  tooltip: { trigger: 'item', formatter: '{a} <br/>{b}: {c} ({d}%)' },
  legend: { 
    bottom: -7,           // <-- Adjust for more spacing under the chart
    left: 'center',
    data: ['Online Sales', 'Retail Sales', 'Partner Sales', 'Direct Sales'] 
  },
  series: [{
    name: 'Sales',
    type: 'pie',
    radius: '60%',
    data: [
      { value: 335, name: 'Online Sales' },
      { value: 310, name: 'Retail Sales' },
      { value: 234, name: 'Partner Sales' },
      { value: 135, name: 'Direct Sales' }
    ],
    itemStyle: { borderRadius: 8, borderColor: '#fff', borderWidth: 2 }
  }]
};

    const orderOptions = {
      animation: false,
      title: { left: 'center', textStyle: { fontSize: 16, fontWeight: 'normal' } },
      tooltip: { trigger: 'axis' },
      xAxis: { type: 'category', data: ['Week 1', 'Week 2', 'Week 3', 'Week 4'] },
      yAxis: { type: 'value' },
      series: [
        { name: 'Orders', type: 'bar', data: [320, 402, 301, 434], itemStyle: { color: '#6366f1', borderRadius: [4, 4, 0, 0] } }
      ]
    };
    setTimeout(() => {
      initChart('user-activity-chart', userActivityOptions);
      initChart('revenue-chart', revenueOptions);
      initChart('sales-distribution-chart', salesOptions);
      initChart('order-trends-chart', orderOptions);
    }, 100);
  }, []);
};
export default useInitCharts;
