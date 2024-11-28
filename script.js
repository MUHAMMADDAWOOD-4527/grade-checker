function calculatePercentage() {
    let obtainedMarks = document.getElementById('obtainmarks').value;
    let totalMarks = document.getElementById('totalmarks').value;



    obtainedMarks = +(obtainedMarks);
    totalMarks = +(totalMarks);


    if (isNaN(obtainedMarks) || isNaN(totalMarks) || totalMarks === 0) {
        document.getElementById('result').innerHTML = 'Please enter valid number! '

        return;

    }

    let percentage = (obtainedMarks / totalMarks) * 100;
    let resultMessage;
    switch (true) {
        //     case (percentage >= 90):

        //         resultMessage = "Excellent! You've got A1! Grade, with " + Math.round(percentage) + "%.";

        //         break;

        case (percentage > 100):
            resultMessage = "Enter valid number";
            break;
        case (percentage >= 80):

            resultMessage = "Excellent! You've got A1! Grade, with " + Math.round(percentage) + "%.";

            break;


        case (percentage >= 70):

            resultMessage = "Excellent! You've got A! Grade, with " + Math.round(percentage) + "%.";

            break;
        case (percentage >= 60):

            resultMessage = "Good job! You've got B Grade, with " + Math.round(percentage) + "%.";

            break;
        case (percentage >= 50):

            resultMessage = "Good! You've got C Grade, with " + Math.round(percentage) + "%.";

            break;
        case (percentage < 50):

            resultMessage = "Ooops! You are fail !! with  " + Math.round(percentage) + "%.";

            break;



        default:
            resultMessage = "Please check your input.";

            break;
    }

    document.getElementById('result').innerHTML = resultMessage;


}





