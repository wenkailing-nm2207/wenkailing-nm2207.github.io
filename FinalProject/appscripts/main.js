var data, series, chart; 
  
// Load CSV data and convert to JSON 
JSC.fetch( 
  'https://data.cdc.gov/resource/fvae-a8ai.csv'
) 
  .then(function(response) { 
    return response.text(); 
  }) 
  .then(function(text) { 
    data = JSC.csv2Json(text); 
    renderCharts(); 
  }); 
  
function renderCharts() { 
  chart = JSC.chart('chartDiv', { 
    debug: true, 
    title_label_text: 
      'Births to Unmarried Women by Age Group', 
    animation: false, 
    legend_template: '%icon %name', 
    defaultPoint_marker_type: 'none', 
    yAxis: { label_text: 'Number of births' }, 
    xAxis: { 
      formatString: 'd', 
      label_text: 'Year', 
      scale_minInterval: 1 
    }, 
    series: getSeries(), 
    toolbar_items_label: { 
      type: 'label', 
      label_text: 
        '<chart scale width=500 min=1940 max=2015 interval=15>', 
      boxVisible: false, 
      position: 'bottom', 
      itemsBox: { 
        visible: true, 
        boxVisible: false
      }, 
      items_slider: { 
        type: 'range', 
        width: 500, 
        value: [1940, 2015], 
        min: 1940, 
        max: 2015, 
        events_change: applyZoom 
      } 
    } 
  }); 
} 
  
function getSeries() { 
  /* 
   * Group entries by age_group, map year and birth_numbers to point x,y values. 
   * */
  return JSC.nest() 
    .key('age_group') 
    .key('year') 
    .rollup('birth_number') 
    .series(data); 
} 
  
function toDateNum(d) { 
  return new Date(d).getTime(); 
} 
  
function applyZoom(range) { 
  chart.axes('x').zoom(range); 
} 


