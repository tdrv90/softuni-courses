function metricConverter (arguments) {
    let value = Number(arguments.shift());
    let entryMetric = arguments.shift().toLowerCase();
    let exitMetric = arguments.shift().toLowerCase();
    
    if (entryMetric == "mm") {
        value /= 1000;
    } else if (entryMetric == "cm") {
        value /= 100;
    }

    if (exitMetric == "mm") {
        value *= 1000;
    } else if (exitMetric == "cm") {
        value *= 100;
    }

    console.log(value.toFixed(3));
}

metricConverter(["12", "mm", "m"])
metricConverter(["150", "m", "cm"])
metricConverter(["45", "cm", "mm"])