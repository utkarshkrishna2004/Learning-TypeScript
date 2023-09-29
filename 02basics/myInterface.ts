interface User {
   readonly dbId: number;
   email: string;
   userId: number;
   googleId?: string;

   //startTrial: () => string
   startTrial(): string;
   getCoupon(couponname: string, value: number): number;
}

interface User {
   githubToken: string;
}

interface Admin extends User {
   role: "admin" | "learner" | "ta";
}

const utkarsh: User = {
   dbId: 565698,
   email: "Utkarsh@uk.com",
   userId: 2023,

   githubToken: "githubuser7878",
   startTrial: () => {
      return "welcome to the demo version";
   },
   getCoupon: (couponname: "Welcome10", off: 10) => {
      return 10;
   },
};

utkarsh.email = "krishna@dev.com";
// utkarsh.dbId = 7979
