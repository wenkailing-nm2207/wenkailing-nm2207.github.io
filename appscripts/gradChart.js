    
    
    
	const labelYear= ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"];//fill the years here from the top row, but within quotes eg "2009","2010"...

   
    const dataObj = {
        labels: labelYear,           //we want the x axis to be the years
        datasets: [
            {
                label: "Moldova",
                backgroundColor: "rgb(255, 180, 128)",
                borderColor: "rgb(255, 180, 128)",
                fill: false,
                data: [0.699, 0.704, 0.71, 0.706, 0.713, 0.719, 0.726, 0.735, 0.737, 0.736, 0.738],
                
            },
            {
                label: "Singapore",
                backgroundColor: "rgb(10, 180, 128)",
                borderColor: "rgb(10, 180, 128)",
                fill: false,
                data: [0.881, 0.882, 0.888, 0.888, 0.909, 0.913, 0.918, 0.921, 0.926, 0.931, 0.935],
            },
        ],
    }


  new Chart("grad-bar-chart",
    {
                type: 'line',
                data: dataObj,
                options: {
                    maintainAspectRatio: false,
                  responsive: true,
                    legend: {
                      position: 'top',
                      display: true,
                    },
                    title: {
                      display: true,
                      text: ["HDI"],
                      fontSize: 24
                    }
                
                },
              });


              