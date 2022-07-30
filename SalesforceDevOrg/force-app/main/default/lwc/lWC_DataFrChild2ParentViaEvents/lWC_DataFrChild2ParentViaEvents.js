import { LightningElement } from 'lwc';

export default class LWC_DataFrChild2ParentViaEvents extends LightningElement {
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
    
    handilinParentJsMethod(event) {
       // const childevtData = event.detail;
        alert('display child data in parent via events is'+event.detail.phone);
        alert('display child data in parent via events is'+event.detail.message);
        alert('display child data in parent via events is'+event.detail.pageno);
      }
}