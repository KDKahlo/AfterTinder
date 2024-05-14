import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Modal from "./Modal";
import { useState, useEffect } from "react"; 


ChartJS.register(ArcElement, Tooltip, Legend);


export default function DonutChart({userLoveLanguages, results}) {
 // State to display messages
 const [message, setMessage] = useState("");

 // State to control modal visibility
 const [showModal, setShowModal] = useState(false);
 const[modalHeader, setModalHeader] = useState("")


 useEffect(() => {
 
  }, []);
//on click native function of the chart, gets the event and an array of elements.
 const handleSegmentClick = (event, elements) => {
  console.log("****result prop", results)
  if (elements.length) {
    //get the index of the clicked element
    const clickedSegmentIndex = elements[0].index;
    //store the label of the clicked element.
    const segmentLabel = data.labels[clickedSegmentIndex];
    //Store the label, so that we can send it to the modal
    const segmentValue = data.datasets[0].data[clickedSegmentIndex]
    setModalHeader(`${segmentLabel} ${segmentValue}%`)
    //make sure results is not empty
    if (results) {
    for (let result in results) {
      //compare the label with the keys in the results object.
      //if they match, setMessage with the value of that key.
      //we will send this message to the modal.
      if (result === segmentLabel){
        setMessage(results[result])
      }
    }}
    setShowModal(true); // Show the modal
    console.log(segmentValue)
  }
};



    const data = {
        labels: ['Physical Touch', 'Gifts', 'Acts of Service', 'Words of Affirmation', 'Quality Time'],
        datasets: [
          {
            label: 'Proportion (%)',
            data: [userLoveLanguages.Percentage_Physical_Touch, userLoveLanguages.Percentage_Receiving_Gifts, userLoveLanguages.Percentage_Acts_of_Service, userLoveLanguages.Percentage_Words_of_Affirmation, userLoveLanguages.Percentage_Quality_Time],
            backgroundColor: [
                'rgba(199, 170, 205)',
                'rgba(165, 80, 183)',
                'rgba(112, 86, 111)',
                'rgba(189, 156, 115)',
                'rgba(215, 196, 146)'
            ],

          },
        ],
      };

      const options = {
        maintainAspectRatio: true,
        responsive: true,
        plugins: {
          legend: {
            display: true,
            labels: {
              font: {
                size: 14,
                family: 'Poppins', // Tamaño y tipo de fuente de la leyenda
              },
            },
          },
          title: {
            display: true,
            text: 'My Quiz Results', // Texto del título del gráfico
            font: {
              size: 18,
              family: 'Poppins', 
              weight: 'bold', // Peso de la fuente del título
            },
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                let label = context.raw.toFixed(0) + '%';
                return label;
              }
            }
          },
        },
        onClick: handleSegmentClick
      };
        
      

      const handleClose = (status) => {
        setShowModal(status); // Hide the modal
    };


    return (
    <>
    {userLoveLanguages && (<div style={{width:"20%", height:"20%"}}>
    <Doughnut data={data} options= {options}/>;
    </div>)}
   {showModal && <Modal header={modalHeader} showModal={showModal} message={message} handleClose={(status)=> handleClose(status)} />}
    </>
)

}