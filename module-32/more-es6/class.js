class Support {
    name;
    designation = 'support web Dev';
    address = 'bd';
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    startsession (){
        console.log(this.name,'starat a support session');
    };
}

const amirKhan = new Support('amir khan', 'india');
const sakib = new Support('sakib khan', 'BD');
const sharuk = new Support('sharuk khan', 'india');
const mamun = new Support('mamun khan', 'BD');
amirKhan.startsession();
sakib.startsession();
console.log(amirKhan,sakib,sharuk,mamun);