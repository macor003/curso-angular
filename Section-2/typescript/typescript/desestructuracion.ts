(() => {

    const avenger = {
        nombre: 'Steve',
        clave: 'Capitán América',
        poder: 'Super fuerza'
    }

    const { nombre, clave, poder } = avenger;

    // console.log(`${nombre}, ${clave}, ${poder}`);

    const avengers: string[] = ['Thor', 'Ironman', 'Spiderman'];

    const [thor, ironman, spiderman] = avengers;

    console.log(thor);
    console.log(ironman);
    console.log(spiderman);
    
})();


