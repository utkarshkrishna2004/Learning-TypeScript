let score: number | string = 33;

score = 55;

type User = {
   name: string;
   id: number;
};

type Admin = {
   username: string;
   id: number;
};

let Utkarsh: User | Admin = { name: "Utkarsh", id: 3756 };

Utkarsh = {
   username: "Utkarsh Krishna",
   id: 75667,
};

// function getDbId(id: number | string){
//     console.log(`DB id is: ${id}`);

// }

getDbId(3);

getDbId("3");

function getDbId(id: number | string) {
   if (typeof id === "string") {
      id.toLowerCase();
   }
}

// array

const data: number[] = [1, 2, 3, 4];
const data2: string[] = ["1", "2", "3", "4"];
const data3: (string | number | boolean)[] = ["1", 2, "3", "4", false];


let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"

// seatAllotment = "crew"




export{}
