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
    setModalHeader(segmentLabel)
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
    console.log(message)
  }
};



    const data = {
        labels: ['Physical Touch', 'Gifts', 'Acts of Service', 'Words of Affirmation', 'Quality Time'],
        datasets: [
          {
            label: 'Proportion (%)',
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
      }

      const handleClose = (status) => {
        setShowModal(status); // Hide the modal
    };


    return (
    <>
    <div style={{width:"50%", height:"50%"}}>
    <Doughnut data={data} options= {options}/>;
    </div>
   {showModal && <Modal header={modalHeader} showModal={showModal} message={message} handleClose={(status)=> handleClose(status)} />}
    </>
)

}