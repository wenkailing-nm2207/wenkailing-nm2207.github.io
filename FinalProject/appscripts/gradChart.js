    
    
    
	const labelYear= ["2005", "2006", "2007", "2008", "2009", "2010"];//fill the years here from the top row, but within quotes eg "2009","2010"...

   
    const dataObj = {
        labels: labelYear,           //we want the x axis to be the years
        datasets: [
            {
                label: "Accountacy",
                data: [495, 468, 575, 536, 596, 554],
                borderWidth: 2,
                backgroundColor: "rgb(255, 105, 97)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgb(255, 105, 97)"//put black rgb(0,0,0) or the same color as above
            },
            {
                label: "Business & Administration",
                data: [799, 819, 894, 960, 857, 859],
                borderWidth: 2,
                backgroundColor: "rgb(255, 180, 128)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgb(255, 180, 128)"//put black rgb(0,0,0) or the same color as above
            },
            {
                label: "Dentistry",
                data: [12, 14, 15, 17, 19, 25],
                borderWidth: 2,
                backgroundColor: "rgb(248, 243, 141)",
                borderColor: "rgb(248, 243, 141)"
            },
            {
                label: "Health Sciences",
                data: [69, 57, 67, 77, 107, 196],
                borderWidth: 2,
                backgroundColor: "rgb(66, 214, 164)",
                borderColor: "rgb(66, 214, 164)"
            },
            {
                label: "Information Technology",
                data: [199, 130, 190, 210, 162, 154],
                borderWidth: 2,
                backgroundColor: "rgb(8, 202, 209)",
                borderColor: "rgb(8, 202, 209)"
            },
            {
                label: "Law",
                data: [125, 134, 123, 115, 118, 90],
                borderWidth: 2,
                backgroundColor: "rgb(89, 173, 246)",
                borderColor: "rgb(89, 173, 246)"
            },
            {
                label: "Medicine",
                data: [86, 94, 83, 96, 97, 94],
                borderWidth: 2,
                backgroundColor: "rgb(157, 148, 255)",
                borderColor: "rgb(157, 148, 255)"
            },
            {
                label: "Natural, Physical & Mathematical Sciences",
                data: [674, 880, 827, 796, 946, 1091],
                borderWidth: 2,
                backgroundColor: "rgb(199, 128, 232)",
                borderColor: "rgb(199, 128, 232)"
            },
        ],
    }
    new Chart("grad-bar-chart",
            {
                type: "bar",
                data: dataObj,
                options: { 
                reponsive: false,
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: ["Number of female graduates", "per Course"],//set this to 'Number of female graduates','per Course'
                        fontFamily: "TrebuchetMS",
                        fontSize: 24,
                        fontColor: 'rgb(0,120,0)',
                    }
                }
            });
