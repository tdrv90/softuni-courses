function personalBMI() {
    const patient = {};
    const [name, age, weight, height] = arguments;

    fillPatientDetails(name, age, weight, height);
    calculatePatientBMI(weight, height);
    checkStatus(patient.BMI);
    addRecomendation(patient.status);

    function fillPatientDetails(name, age, weight, height) {
        patient.name = name;
        patient.personalInfo = {};
        patient.personalInfo.age = age;
        patient.personalInfo.weight = weight;
        patient.personalInfo.height = height;
    }

    function calculatePatientBMI(weight, height) {
        let w = weight;
        let h = height / 100;
        let bmi = Math.round(w / (h * h));

        return patient.BMI = bmi;
    }

    function checkStatus(patientBMI) {
        let result = "";

        if (patientBMI < 18.50) {
            result = "underweight";
        } else if (patientBMI < 25) {
            result = "normal";
        } else if (patientBMI < 30) {
            result = "overweight";
        } else if (patientBMI >= 30) {
            result = "obese";
        }

        return patient.status = result;
    }

    function addRecomendation(bmiStatus) {
        if (bmiStatus === "obese") {
            return patient.recommendation = "admission required";
        }
    }

    return patient;
}


console.log(personalBMI("Peter", 29, 75, 182));
console.log(personalBMI("Honey Boo Boo", 9, 57, 137));