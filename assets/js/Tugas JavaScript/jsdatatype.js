//Primitive 
        // Tipe Number
        let a = 20;
        console.log(a);

        console.log('Zelkova' + a);
        console.log('Moon Tree' + (10 * 10));
        console.log(NaN*3);

        //Tipe BIGINT
        const bigInt = 879964165496449461634189495465498746;
        console.log(bigInt);

        //Tipe String
        const nama1 = "Zelkova";
        const nama2 = 'Zelkova';
        const nama3 = `Zelkova`;

        console.log(nama1);
        console.log(nama2);
        console.log(nama3);

        //Tipe Boolean
        let c = true;
        let d = false;

        let isGreater = 10>5;
        let isLess = 5>10;

        console.log(isGreater);
        console.log(isLess);

        //Tipe Null
        let pacar = null;
        console.log(pacar);

        //Tipe Undefined
        let angka
        console.log(angka);

        //Tipe Symbol
        let nama = Symbol('Zelkova');  
        console.log(nama);
        console.log(nama.description);

    //Object
        //key-value pair

        let employee = {
            name : "Wandala",
            age : 20,
            job : "Mahasiswa",
            isMarried : false,
            hobies :["Games","Music"], 
        };

        console.log(`His name is ${employee.name} and he is ${employee.age} years old`);
