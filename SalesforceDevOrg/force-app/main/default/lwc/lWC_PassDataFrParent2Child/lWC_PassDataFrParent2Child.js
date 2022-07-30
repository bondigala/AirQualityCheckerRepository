import { LightningElement } from 'lwc';
import {handleaddEmployee} from 'c/lwcchildgetdatafrompant'
export default class LWC_PassDataFrParent2Child extends LightningElement {
    contacts =[
        {
            id : 1,
            name : 'bondi',
            email : 'bondicloud@gmail.com',
            phone : '9535506252'
        },
        {
            id : 2,
            name : 'Sravs',
            email : 'bondicloud@gmail.com',
            phone : '9535506252'
        },
        {
            id : 3,
            name : 'subhiksha',
            email : 'bondicloud@gmail.com',
            phone : '9535506252'
        },
        {
            id : 4,
            name : 'Brinda',
            email : 'bondicloud@gmail.com',
            phone : '9535506252'
        }
    ];
    bubbleEvtFire(event) {
        alert('bubble event fire from lwcchildgetdatafrompant'+event.target.phone);

    }
    censusDMLStatus(event) {
        alert('censusDMLStatus'+event.detail.message);

    }
    handleEvent(event) {
        alert('BF call Censal DML comp');
      //  handleaddEmployee();
    }
}