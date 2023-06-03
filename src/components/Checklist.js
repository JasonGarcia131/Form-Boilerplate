import { useState, useEffect } from "react";
import Radio from "./Radio";
import Input from "./Input";
import { FormData } from "../data";

const styles = {
    hide: "hide",
    show: "show"
}

const Checklist = () => {

    //State variable to control review component through a ternary
    const [isReview, setIsReviewed] = useState(false);

    //State variable for all inputs.
    const [checklist, setCheckList] = useState({
        input: [""],
        images: [""],
    });

    // One function to watch the changes for all inputs.
    const handleChange = (e, index) => {
        let newArray;
        const { name, value } = e.target;
        newArray = [...checklist.input];
        newArray[index] = value;
        setCheckList({ ...checklist, [name]: newArray });
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const { name } = e.target

        if (file && file.type.substring(0, 5) === 'image') {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                // setIsLoading(false);
                // setUploadBtn(true);
                //Sets the name of the key based on the string that was passed in the props.
                //This is for the userControllers to know which field to update in the Users db collection. 
                setCheckList((prevData) => ({ ...prevData, images: [...checklist.images, reader.result] }));
            }
        }
    }

    //Displays review component.
    const review = (e) => {
        e.preventDefault();
        setIsReviewed(!isReview);
    }

    // Maps through the array and creates an input component with the array element.
    const mappedInputs = FormData.map((data, index) => {
        return data.type === 'radio' ? (
            <div key={index}>
                <Radio
                    radioQuestion={data.question}
                    index={index}
                    handleChange={handleChange}
                />
                <input
                    type="file"
                    name="images"
                    accept="/image/*"
                    onChange={(e) => handleImageChange(e, index)}
                />
                <br />
            </div>
        ) : (
            <div key={index}>
                <Input
                    labelName={data.question}
                    index={index}
                    value={checklist.input[index] ? checklist.input[index] : ""}
                    type={data.type}
                    forName="data"
                    name="input"
                    handleChange={handleChange}
                />
                <br />
            </div>
        )
    }
    );

    return (
        <div className="flex center column form">
            <form onSubmit={(e) => review(e)} className={isReview ? styles.hide : styles.show}>
                <h1>Inputs</h1>
                {mappedInputs}
                <button>Review</button>
            </form>
            {/* {isReview ? <ReviewForm checklist={checklist} setChecklist={setCheckList} review={review} /> : ""} */}
        </div>
    );
}

export default Checklist;