function solve() {
    const departButton = document.querySelector("#depart");
    const arriveButton = document.querySelector("#arrive");
    const busInfoBox = document.querySelector("#info .info");
    let busStopInfo = {
        name: '',
        next: 'depot',
    };
    function depart() {
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${busStopInfo.next}`)
        .then((res) => res.json())
        .then((busStop) => {
        departButton.disabled = true;
        arriveButton.disabled = false;
        busStopInfo = busStop;
        busInfoBox.textContent = `Next stop ${busStop.name}`;
        })
        .catch(() => {
            departButton.disabled = false;
            arriveButton.disabled = false;
            busInfoBox.textContent = "Error";
        });
    }

    async function arrive() {
        departButton.disabled = false;
        arriveButton.disabled = true;
        busInfoBox.textContent = `Arriving at ${busStopInfo.name}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();