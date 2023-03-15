        //Arithmethic
        function Arithmethic(){
            let a = 10;
            let b = 8;

            console.log(a + b);
            console.log(a - b);
            console.log(a * b);
            console.log(a / b);
            console.log(a % b);
            console.log(a ** b);
        }
        
        Arithmethic();

        //Assignment
        function Assignment(){
            let a = 10
            console.log(a);

            a+=5;
            console.log(a);

            a-=5;
            console.log(a);

            a*=5;
            console.log(a);

            a/=5;
            console.log(a);

            a**=5;
            console.log(a);

            a%=5;
            console.log(a);
            
        }
        Assignment();

        //Comparison 
        function Comparison(){
            let a = 5;
            let b = 8;

            console.log(a == b);
            console.log(a === b);
            console.log(a < b);
            console.log(a > b);
            console.log(a != b);
            console.log(a !== b);
            console.log(a >= b);
            console.log(a <= b);
        }
        Comparison();

        //Logical
        function Logical(){
            let a = true;
            let b = false;

            console.log(a && b);
            console.log(a || b);
            console.log(!a);
        }
        Logical();

        //Bitwise
        function Bitwise(){
            let a = 00111100;
            let b = 00001101;

            console.log(a & b);
            console.log(a | b);
            console.log(a ^ b);
            console.log(~a);
        }
        Bitwise();

        //Ternary
        function Ternary(){
            let a = 1;
            let b = 1;

            console.log(a == b ? "yes" : "no");
        }
        Ternary()