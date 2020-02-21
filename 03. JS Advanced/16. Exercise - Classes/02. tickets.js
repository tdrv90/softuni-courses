function ticketsDatabase(arr, criteria) {
    let db = [];

    const sortingMap = {
        'destination': (a, b) => a.destination.localeCompare(b.destination),
        'price': (a, b) => a.price - b.price,
        'status': (a, b) => a.status.localeCompare(b.status)
    }

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    arr.forEach(line => {
        let [destination, price, status] = line.split("|");
        price = +price;
        db.push(new Ticket(destination, price, status));
    });


    let sortedTickets = db.sort(sortingMap[criteria]);

    return sortedTickets;
}


console.log(ticketsDatabase(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'
));