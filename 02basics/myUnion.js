"use strict";
exports.__esModule = true;
var score = 33;
score = 55;
var Utkarsh = { name: "Utkarsh", id: 3756 };
Utkarsh = {
    username: "Utkarsh Krishna",
    id: 75667
};
// function getDbId(id: number | string){
//     console.log(`DB id is: ${id}`);
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
// array
var data = [1, 2, 3, 4];
var data2 = ["1", "2", "3", "4"];
var data3 = ["1", 2, "3", "4", false];
var seatAllotment;
seatAllotment = "aisle";
