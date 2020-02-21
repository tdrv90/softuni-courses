function attachEventsListeners() {
    const inputDistance = document.getElementById('inputDistance');
    const inputUnits = document.getElementById("inputUnits");
    const outputDistance = document.getElementById('outputDistance');
    const outputUnits = document.getElementById('outputUnits');
    const btn = document.getElementById('convert');

    const fromConvertToMeters = {
        'km': (x) => x * 1000,
        'm': (x) => x,
        'cm': (x) => x / 100,
        'mm': (x) => x / 1000,
        'mi': (x) => x / 0.00062137,
        'yrd': (x) => x * 1.0936,
        'ft': (x) => x / 3.2808,
        'in': (x) => x * 0.0254
    }

    const toConvertFromMeters = {
        'km': (x) => x / 1000,
        'm': (x) => x,
        'cm': (x) => x * 100,
        'mm': (x) => x * 1000,
        'mi': (x) => x * 0.00062137,
        'yrd': (x) => x / 1.0936,
        'ft': (x) => x * 3.2808,
        'in': (x) => x / 0.0254

    }

    btn.addEventListener('click', function () {
        let firstCalculation = fromConvertToMeters[inputUnits.value](inputDistance.value);
        let secondCalculation = toConvertFromMeters[outputUnits.value](firstCalculation);

        outputDistance.value = secondCalculation;
    });
}
