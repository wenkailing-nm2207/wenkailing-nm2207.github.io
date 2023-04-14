    
    
    
	const labelYear= ["2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015"];//fill the years here from the top row, but within quotes eg "2009","2010"...

   
    const dataObj1 = {
        labels: labelYear,           //we want the x axis to be the years
        datasets: [
            {
                label: "Moldova",
          
                backgroundColor: "rgb(255, 180, 128)",
                borderColor: "rgb(255, 180, 128)",
                fill: false,
                data: [0.692, 0.699, 0.704, 0.71, 0.706, 0.713, 0.719, 0.726, 0.735, 0.737, 0.736],
            },
            {
                label: "Singapore",
              
                backgroundColor: "rgb(10, 180, 128)",
                borderColor: "rgb(10, 180, 128)",
                fill: false,
                data: [0.874, 0.881, 0.882, 0.888, 0.888, 0.909, 0.913, 0.918, 0.921, 0.926, 0.931],
            },        
        ],
    }


  new Chart("hdi-chart",
    {
                type: 'bar',
                data: dataObj1,
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
                    },
                  }
              });

              const dataObj2 = {
                labels: labelYear,           //we want the x axis to be the years
                datasets: [
                    {
                        label: "Moldova",
                        backgroundColor: "rgb(255, 180, 128)",
                        borderColor: "rgb(255, 180, 128)",
                        fill: false,
                        data: [7.5, 6.73, 6.11, 6.59, 5.69, 6.14, 4.84, 4.98, 5.55, 4.19, 4.02],
                        
                    },
                    {
                        label: "Singapore",
                        backgroundColor: "rgb(10, 180, 128)",
                        borderColor: "rgb(10, 180, 128)",
                        fill: false,
                        data: [0.539, 0.282,	0.412,	0.508,	0.516,	0.355,	0.517,	0.269,	0.195,	0.229,	0.361],
                    },
                ],
            }

            new Chart("murder-chart",
            {
                        type: 'line',
                        data: dataObj2,
                        options: {
                            maintainAspectRatio: false,
                          responsive: true,
                            legend: {
                              position: 'top',
                              display: true,
                            },
                            title: {
                              display: true,
                              text: ["Murders per 100k people"],
                              fontSize: 24
                            }
                        
                        },
                      });

//const toggleBtn = document.querySelector(".btn-toggle-chart");
// const charts = document.querySelectorAll(".chart");

// toggleBtn.addEventListener("click", (event) => {
//   charts.forEach(chart => {
//     chart.classList.toggle("hide");
//   })
// })

const toggleBtn = document.querySelector(".btn-toggle-chart");
const chart1 = document.querySelector(".chart-1");
const chart2 = document.querySelector(".chart-2");

toggleBtn.addEventListener("click", 

  function toggleHide() {
    if (chart1.classList.contains("hide")) {
      chart1.classList.remove("hide");
      chart2.classList.add("hide");
 
    } else {
      chart1.classList.add("hide");
      chart2.classList.remove("hide");
    };
  }
)
