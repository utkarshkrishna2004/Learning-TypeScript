// const User = {
//    name: "Utkarsh",
//    email: "utkarshdev@gmail.com",
//    isActive: true,
// };

// function createUser({ name: string, isPaid: boolean }) {}

// let newUser = { name: "Hitesh", isPaid: false, email: "hiteshdev@email" };

// createUser(newUser);

// function createCourse(): { name: string; price: number } {
//    return { name: "react.js", price: 9999 };
// }

// type User = {
//    name: string;
//    email: string;
//    isActive: boolean;
// };

// function createUser(user: User): User {
//    return { name: "", email: "", isActive: true };
// }

// createUser({ name: "", email: "", isActive: true });

type User = {
   readonly _id: string;
   name: string;
   email: string;
   isActive: boolean;
   creditCardDetails?: number;
};

let myUser: User = {
   _id: "12234",
   name: "h",
   email: "h@h.com",
   isActive: false,
};

type cardNumber = {
   cardNumber: string;
};

type cardDate = {
   cardDate: string;
};

type cardDetails = cardNumber &
   cardDate & {
      cvv: number;
   };

myUser.email = "h@gmail.com";

export {};
