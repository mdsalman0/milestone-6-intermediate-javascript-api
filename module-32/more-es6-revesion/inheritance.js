class TemMember{
    name;
    address = 'bd';
    constructor(name,address){
        this.name = name;
        this.address = address;
    }
}

class Support extends TemMember{
    groupSupportTime;
    degingnation = 'support web developer';
    constructor(name,address, time){
        super(name,address);
        this.groupSupportTime = time;
    }
    staratSesion(){
     console.log(this.name,'starat a support sesion');
    }
}

class studentCare extends TemMember{
    degingnation = 'care web developer';
    builARoutine(student){
        console.log(this.name,'starat a support sesion', student);
    }
}

class neptuneDev extends TemMember{
   codeEditor = 'Andoid Editor';
   degingnation = 'neptuneDev App developer';
   constructor(name,address,editor){
       super(name,address);
       this.codeEditor = editor;
   }
    releaseApp(version){
        console.log(this.name,'release App version', version);
    }
}

const amir = new Support('amir khan', 'india', 11);
const salman = new Support('salman khan', 'india', 12);
const alia = new studentCare('alia bat', 'mumbai',5);

const sakib = new neptuneDev('sakib','russia');
// sakib.releaseApp('1.4.5');
console.log(sakib);