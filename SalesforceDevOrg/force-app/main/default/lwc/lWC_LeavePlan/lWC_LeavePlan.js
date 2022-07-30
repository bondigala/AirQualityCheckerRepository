import { LightningElement, wire, track } from 'lwc';
import invokeLeavesInfoMethod from '@salesforce/apex/Shell_LeavesPlanController.invokeLeavesInfoMethod';
export default class LWC_LeavePlan extends LightningElement {
    @track leavsDataList;
    @track error;
    @wire(invokeLeavesInfoMethod)
    wiredleavsDataList ({error, data}) {
        if (error) {
            // TODO: Error handling
           // this.leavsDataList = 'undefined;
            this.error = error;
        } else if (data) {
          
            // TODO: Data handling
            this.leavsDataList = data;
            //this.error = undefined;
        }
    }
    submitLeave() {
        
    }
}