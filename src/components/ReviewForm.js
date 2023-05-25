// import { } from "../data";
// import { useState } from "react";
// // import emailjs from '@emailjs/browser';

// let templateParams = {}

// const ReviewForm = (props) => {

//     const { checklist, review } = props;
//     const [success, setSuccess] = useState("");

//     // Creates an object from state nested arrays for email.js templateParams
//     const arrayToObject = (array, stateArray) => {
//         for (let i = 0; i < array.length; i++) {
//             templateParams[array[i].split(" ").join("_")] = stateArray[i] ? String(stateArray[i]) : ""
//         }
//     }

//     //Converts 24 hour time to 12 hour time
//     const format = (H, M) => {
//         if (H % 12 == 0) return `12:${(M < 10 ? '0' : '') + M} ${H < 12 ? 'AM' : 'PM'}`;
//         else return `${(H % 12 < 10 ? '0' : '') + H % 12}:${(M < 10 ? '0' : '') + M} ${H < 12 ? 'AM' : 'PM'}`;
//     }
//     // Creating key pair values for object to send to emailjs
//     arrayToObject(INPUTFIELDS, checklist.input);
//     arrayToObject(RADIOQUESTIONS, checklist.radio);

//     //Sends templateParams values as an object to be used as an email.
//     // const sendEmail = (e) => {
//     //     e.preventDefault();
//     //     emailjs.send('service_t81sqia', 'template_cb7usop', templateParams, "3wqMebJTzeXwpCO5-")
//     //         .then((result) => {
//     //             if (result.text === "OK") setSuccess("Sent!");
//     //         }, (error) => {
//     //             setSuccess("Form was not sent! Please try again.");
//     //         });
//     // };

//     const mappedInputFieldNames = INPUTFIELDS.map((inputNames, index) =>
//         <div>
//             <h3>{inputNames}</h3>
//             <p>{checklist.input[index]}</p>
//         </div>
//     );

//     const mappedSafetyQuestions = RADIOQUESTIONS.map((questions, index) =>
//         <ul>
//             <li>{index + 1}. {questions}</li>
//             <li>{checklist.radio[index]}</li>
//         </ul>
//     );

//     return (
//         <div className="form">
//             <h1>Review Safety Form</h1>
//             <br />
//             {mappedInputFieldNames}
//             {mappedSafetyQuestions}
//             <br />
//             {/* <button onClick={(e) => sendEmail(e)}>Send Form</button> */}
//             <button onClick={(e) => review(e)}>Edit</button>
//             <p className="error">{success}</p>
//         </div>
//     )
// }

// export default ReviewForm;