import { LightningElement, api,track } from 'lwc';
//import getFields from '@salesforce/apex/wk_FilterComponent.getFields';
export default class LWC_PicklistDemo extends LightningElement {
    @track selectedOption;
    changeHandler(event) {
    const field = event.target.name;
    if (field === 'optionSelect') {
        this.selectedOption = event.target.value;
            alert("you have selected : " + this.selectedOption);
        } 
    }

@track value = 'inProgress';

get options() {
    return [
             { label: 'New', value: 'new' },
             { label: 'In Progress', value: 'inProgress' },
             { label: 'Finished', value: 'finished' },
           ];
}

handleChange(event) {
        this.value = event.detail.value;
     }
    
}