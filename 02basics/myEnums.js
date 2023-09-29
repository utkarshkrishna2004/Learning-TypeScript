var seatChoice;
(function (seatChoice) {
    seatChoice["aisle"] = "AISLE";
    seatChoice[seatChoice["middle"] = 3] = "middle";
    seatChoice[seatChoice["window"] = 4] = "window";
    seatChoice[seatChoice["crew"] = 5] = "crew";
})(seatChoice || (seatChoice = {}));
var ukseat = seatChoice.aisle;
