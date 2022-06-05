class Support {
    name;
    address = 'bd';
    degingnation = 'support web developer';
    constructor(name,address){
        this.name = name;
        this.address = address;
    }
    staratSesion(){
     console.log(this.name,'starat a support sesion');
    }
}

const amir = new Support('amir khan', 'india');
const salman = new Support('slaman khan','india');
const sakib = new Support('sakib khan','BD');
amir.staratSesion();
salman.staratSesion();
console.log(salman,amir,sakib);

