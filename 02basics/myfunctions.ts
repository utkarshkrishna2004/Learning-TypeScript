function addTwo(num: number): number {
   // return num + 2;

   return num + 77;
}

function getUpper(val: string) {
   return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

let myvalue = addTwo(5);

getUpper("adrian");

signUpUser("adrian", "adrian@dev", false);

loginUser("adrian", "adrian@dev");

// function getValue(myVal: number):boolean {
//    if (myVal > 5) {
//       return true;
//    }
//    return "200 ok";
// }

const getHello = (s: string): string => {
   return "";
};

const heroes = ["thor", "spiderman", "batman"];

heroes.map((hero): string => {
   return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
   console.log(errmsg);
   // return 2;
}
function handleError(errmsg: string): never {
   throw new Error(errmsg);
}

export {};
