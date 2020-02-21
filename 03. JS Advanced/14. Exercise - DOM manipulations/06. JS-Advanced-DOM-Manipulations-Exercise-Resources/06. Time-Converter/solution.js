function attachEventsListeners() {
    const convertFrom = {
        'days': (days) => {
            const hours = days * 24;
            const minutes = hours * 60;
            const seconds = minutes * 60;

            return [hours, minutes, seconds];
        },
        'hours': (hours) => {
            const days = hours / 24;
            const minutes = hours * 60;
            const seconds = minutes * 60;

            return [days, minutes, seconds];
        },
        'minutes': (minutes) => {
            const hours = minutes / 60;
            const days = hours / 24;
            const seconds = minutes * 60;

            return [days, hours, seconds];
        },
        'seconds': (seconds) => {
            const minutes = seconds / 60;
            const hours = minutes / 60;
            const days = hours / 24;

            return [days, hours, minutes];
        }
    }

    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');

    function inputHandler(currentInput, unit, firstI, secondI, thirdI) {
        const value = Number(currentInput.value);

        let [firstUnit, secondUnit, thirdUnit] = convertFrom[unit](value);
        firstI.value = firstUnit;
        secondI.value = secondUnit;
        thirdI.value = thirdUnit;
    }

    // --- Solution with bind ---
    document.getElementById('daysBtn').addEventListener('click', inputHandler
        .bind(undefined, daysInput, 'days', hoursInput, minutesInput, secondsInput));
    document.getElementById('hoursBtn').addEventListener('click', inputHandler
        .bind(undefined, hoursInput, 'hours', daysInput, minutesInput, secondsInput));
    document.getElementById('minutesBtn').addEventListener('click', inputHandler
        .bind(undefined, minutesInput, 'minutes', daysInput, hoursInput, secondsInput));
    document.getElementById('secondsBtn').addEventListener('click', inputHandler
        .bind(undefined, secondsInput, 'seconds', daysInput, hoursInput, minutesInput));

    // --- Solution with arrow function ---
    // document.getElementById('daysBtn').addEventListener('click', () =>
    //     inputHandler(daysInput, 'days', hoursInput, minutesInput, secondsInput));
    // document.getElementById('hoursBtn').addEventListener('click', () =>
    //     inputHandler(hoursInput, 'hours', daysInput, minutesInput, secondsInput));
    // document.getElementById('minutesBtn').addEventListener('click', () =>
    //     inputHandler(minutesInput, 'minutes', daysInput, hoursInput, secondsInput));
    // document.getElementById('secondsBtn').addEventListener('click', () =>
    //     inputHandler(secondsInput, 'seconds', daysInput, hoursInput, minutesInput));
}


// function attachEventsListeners() {
//     const convertFrom = {
//         'days': (days) => {
//             const hours = days * 24;
//             const minutes = hours * 60;
//             const seconds = minutes * 60;

//             return [hours, minutes, seconds];
//         },
//         'hours': (hours) => {
//             const days = hours / 24;
//             const minutes = hours * 60;
//             const seconds = minutes * 60;

//             return [days, minutes, seconds];
//         },
//         'minutes': (minutes) => {
//             const hours = minutes / 60;
//             const days = hours / 24;
//             const seconds = minutes * 60;

//             return [days, hours, seconds];
//         },
//         'seconds': (seconds) => {
//             const minutes = seconds / 60;
//             const hours = minutes / 60;
//             const days = hours / 24;

//             return [days, hours, minutes];
//         }
//     }

//     const daysInput = document.getElementById('days');
//     const hoursInput = document.getElementById('hours');
//     const minutesInput = document.getElementById('minutes');
//     const secondsInput = document.getElementById('seconds');

//     function daysHandler(e) {
//         const value = Number(daysInput.value);

//         let [hours, minutes, seconds] = convertFrom['days'](value);
//         hoursInput.value = hours;
//         minutesInput.value = minutes;
//         secondsInput.value = seconds;
//     }
//     function hoursHandler(e) {
//         const value = Number(hoursInput.value);

//         let [days, minutes, seconds] = convertFrom['hours'](value);
//         daysInput.value = days;
//         minutesInput.value = minutes;
//         secondsInput.value = seconds;
//     }
//     function minutesHandler(e) {
//         const value = Number(minutesInput.value);

//         let [days, hours, seconds] = convertFrom['minutes'](value);
//         daysInput.value = days;
//         hoursInput.value = hours;
//         secondsInput.value = seconds;
//     }
//     function secondsHandler(e) {
//         const value = Number(secondsInput.value);

//         let [days, hours, minutes] = convertFrom['seconds'](value);
//         daysInput.value = days;
//         hoursInput.value = hours;
//         minutesInput.value = minutes;
//     }

//     document.getElementById('daysBtn').addEventListener('click', daysHandler);
//     document.getElementById('hoursBtn').addEventListener('click', hoursHandler);
//     document.getElementById('minutesBtn').addEventListener('click', minutesHandler);
//     document.getElementById('secondsBtn').addEventListener('click', secondsHandler);
// }

// function attachEventsListeners() {
//     const convertFrom = {
//         'days': (days) => {
//             const hours = days * 24;
//             const minutes = hours * 60;
//             const seconds = minutes * 60;

//             return [hours, minutes, seconds];
//         },
//         'hours': (hours) => {
//             const days = hours / 24;
//             const minutes = hours * 60;
//             const seconds = minutes * 60;

//             return [days, minutes, seconds];
//         },
//         'minutes': (minutes) => {
//             const hours = minutes / 60;
//             const days = hours / 24;
//             const seconds = minutes * 60;

//             return [days, hours, seconds];
//         },
//         'seconds': (seconds) => {
//             const minutes = seconds / 60;
//             const hours = minutes / 60;
//             const days = hours / 24;

//             return [days, hours, minutes];
//         }
//     }

//     const daysInput = document.getElementById('days');
//     const hoursInput = document.getElementById('hours');
//     const minutesInput = document.getElementById('minutes');
//     const secondsInput = document.getElementById('seconds');

//     function inputHandler(currentInput, unit, firstI, secondI, thirdI) {
//         const value = Number(currentInput.value);

//         let [firstUnit, secondUnit, thirdUnit] = convertFrom[unit](value);
//         firstI.value = firstUnit;
//         secondI.value = secondUnit;
//         thirdI.value = thirdUnit;
//     }

// document.getElementById('daysBtn').addEventListener('click', () =>
//     inputHandler(daysInput, 'days', hoursInput, minutesInput, secondsInput));
// document.getElementById('hoursBtn').addEventListener('click', () =>
//     inputHandler(hoursInput, 'hours', daysInput, minutesInput, secondsInput));
// document.getElementById('minutesBtn').addEventListener('click', () =>
//     inputHandler(minutesInput, 'minutes', daysInput, hoursInput, secondsInput));
// document.getElementById('secondsBtn').addEventListener('click', () =>
//     inputHandler(secondsInput, 'seconds', daysInput, hoursInput, minutesInput));
// }