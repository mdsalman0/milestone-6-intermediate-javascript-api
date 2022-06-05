class teamMenber{
    name;
    designation = 'support web Dev';
    address = 'bd';
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
}

class Support extends teamMenber{
    groupsuppotTime;
    constructor(name,address,time){
        super(name,address)
        this.groupsuppotTime = time;
    }
    startsession (){
        console.log(this.name,'starat a support session');
    };
}

class setudentCare extends teamMenber {
    codeEditor;
    constructor(name,address,editor){
        super(name,address);
        this.codeEditor = editor;
    }
    buildARoutine(student){
        console.log(this.name,'Build A Routine', student);
    }
}

class neptuneDev extends teamMenber{
   
    releaseApp(vession){
        console.log(this.name,'release App version', vession);
    }
}

const amirKhan = new Support('amir khan', 'india', 11);
const sakib = new Support('sakib khan', 'BD', 4);
const sharuk = new Support('sharuk khan', 'india', 9);
const mamun = new Support('mamun khan', 'BD',7);

const kabila = new neptuneDev('kabila brat', 'dhaka', 'android studio')
const alia = new setudentCare('alia brat', 'mumbai')
console.log(kabila);
// console.log(amirKhan,sakib,sharuk,mamun);