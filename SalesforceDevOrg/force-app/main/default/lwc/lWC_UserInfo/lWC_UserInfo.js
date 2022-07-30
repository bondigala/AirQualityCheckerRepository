import { LightningElement,wire,track} from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

import getUserDetails from '@salesforce/apex/LWC_LeavesPlanClass.getUserDetails';
import Id from '@salesforce/user/Id';
import USER_ID from '@salesforce/user/Id';

import NAME_FIELD from '@salesforce/schema/User.Name';
import EMAIL_FIELD from '@salesforce/schema/User.Email';


export default class Userinfoexample extends LightningElement {
    @track error ;
    @track email ; 
    @track name;
    @wire(getRecord, {
        recordId: USER_ID,
        fields: [NAME_FIELD, EMAIL_FIELD]
    }) wireuser({
        error,
        data
    }) {
        if (error) {
           this.error = error ; 
        } else if (data) {
            this.email = data.fields.Email.value;
            this.name = data.fields.Name.value;
        }
    }
//from apex
    userId = Id;
    @track user;
    @track error;
    @wire(getUserDetails, {
        recId: '$userId'
    })
    wiredUser({
        error,
        data
    }) {
        if (data) {
            this.user = data; 
        } else if (error) { 
            this.error = error; 
        }
    }

}