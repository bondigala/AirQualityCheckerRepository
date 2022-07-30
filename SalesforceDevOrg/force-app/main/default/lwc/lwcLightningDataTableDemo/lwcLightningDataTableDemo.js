import { LightningElement,track } from 'lwc';
import getContacts from '@salesforce/apex/LWCDataTableExample.getContacts';
/* eslint-disable no-console */
 /* eslint-disable no-alert */
const columns = [ 
    { label: 'Id', fieldName: 'Id' }, 
    { label: 'First Name', fieldName: 'FirstName' }, 
    { label: 'Last Name', fieldName: 'LastName' }
];

export default class LwcLightningDataTableDemo extends LightningElement {
    @track contacts;
    @track error; 
    @track columns = columns;
   
    handleKeyChange( event ) { 
        const strLastName = event.target.value; 
        if ( strLastName ) { 
           // window.alert('strLastName'+strLastName);
            getContacts( { strLastName } )   
            .then(result => { 
              //  window.alert('result'+result);
                this.contacts = result; 
               
   
            }) 
            .catch(error => { 
                this.error = error; 
            }); 
        } else 
        this.contacts = undefined; 
    }
}