import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


export default function DonutChart({userLoveLanguages}) {


    const data = {
        labels: ['Touch', 'Gifts', 'Acts of service', 'Words of affirmation', 'Quality time'],
        datasets: [
          {
            label: '# of Votes',
            data: [userLoveLanguages.Percentage_Physical_Touch, userLoveLanguages.Percentage_Receiving_Gifts, userLoveLanguages.Percentage_Acts_of_Service, userLoveLanguages.Percentage_Words_of_Affirmation, userLoveLanguages.Percentage_Quality_Time],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

      const options = {
        maintainAspectRatio: true,
        responsive: true,
        plugins: {
          legend: {
            display: true,
          },
          title: {
            display: false,
          },
        },
      }


    return <Doughnut data={data} options= {options}/>;
}