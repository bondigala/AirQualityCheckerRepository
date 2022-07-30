import { LightningElement, api,track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import sendEmail from '@salesforce/apex/PAT_SendEmail.sendEmail';


export default class PatSendEmaillwc extends LightningElement {
    @track selectedOption;
    @track emailBody;
    @track emailSubject;
    @track selectedApplication = 'PAT';
    @track selectedTemplate = 'Line Leaders';

    changeHandler(event) {
    const field = event.target.name;
    if (field === 'optionSelect') {
        this.selectedOption = event.target.value;
            alert("you have selected : " + this.selectedOption);
        } 
    }

get options() {
    return [
             { label: 'PAT', value: 'PAT' },
             { label: 'EC', value: 'EC' },
             { label: 'CRM', value: 'CRM' },
             { label: 'ORG', value: 'ORG' },
             { label: 'Public Group', value: 'Public Group' },
             { label: 'Users', value: 'Users' },
             { label: 'Employees', value: 'Employees' },
             { label: 'ART', value: 'ART' }
           ];
}

changeApplication(event) {
        this.selectedApplication = event.detail.value;
        this.isOther = false;
        
     }


@track isOther = false;
get optionsTemplate() {
        // alert('selected app@@@'+this.selectedApplication);
         if(this.selectedApplication == 'PAT'){
            return [
                { label: 'Line Leaders', value: 'Line Leaders' },
                { label: 'Calibrators', value: 'Calibrators' },
                { label: 'Sign-Off', value: 'Sign-Off' },
                { label: 'Other', value: 'Other' }
              ];
         } 
         if(this.selectedApplication == 'ORG')
         {
            return [
                { label: 'ORG Templete', value: 'ORG Templete' },
                { label: 'Other', value: 'Other' }
               
              ];
         }
         if(this.selectedApplication == 'CRM')
         {
            return [
                { label: 'CRM Templete', value: 'CRM Templete' },
                { label: 'Other', value: 'Other' }
               
              ];
         }
         if(this.selectedApplication == 'EC')
         {
            return [
                { label: 'EC Templete', value: 'EC Templete' },
                { label: 'Other', value: 'Other' }
               
              ];
         }
         if(this.selectedApplication == 'ART')
         {
            return [
                { label: 'ART Templete', value: 'ART Templete' },
                { label: 'Other', value: 'Other' }
               
              ];
         }else {
          return [
            { label: 'Other', value: 'Other' }
           
          ];
         }
         
     }
     
     handleChangeTemplate(event) {
             this.selectedTemplate = event.detail.value;
             if(this.selectedTemplate == 'Other') {              
                this.isOther = true;               
             } else {
                this.isOther = false; 
                this.emailBody = '';  
             }
          }

          handleInputChange(event) {
           // alert('event.detail.value'+event.detail.value);
            this.emailBody = event.detail.value;
          }

          handleSubject(event) {            
             this.emailSubject = event.detail.value;
             //alert(' this.emailSubject '+ this.emailSubject );
           }

          sendEmailClick() {       
             // alert('@@@@emailBody  '+this.emailBody);
            sendEmail({application : this.selectedApplication, templeteName :  this.selectedTemplate, bodyData : this.emailBody })
            .then(result => {
                this.handleToastEvent('success', result);
                })
                .catch(error => {
                    this.handleToastEvent('error', error.body.message);
                    //alert(error);
                   // console.log(error);
                   // this.error = error;
                });           
          }
          handleToastEvent(toastType, message){
            const toastMsg = new ShowToastEvent({
                message,
                variant: toastType
            });
    
            this.dispatchEvent(toastMsg);
        }          
}