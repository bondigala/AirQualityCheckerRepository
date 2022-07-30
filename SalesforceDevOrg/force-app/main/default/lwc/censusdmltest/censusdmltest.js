import { LightningElement,wire } from 'lwc';
//import addEmployeeDML from '@salesforce/apex/HznbpGroupEnrollmentCensusController.censusDML';
//import { publish, MessageContext } from 'lightning/messageService';
//import hznbpEnrollmentCensusLMS from '@salesforce/messageChannel/hznbpEnrollmentCensusLMS__c';
/**
export function handleaddEmployee(enrollmentRecordId,employeeData,selectedPlansByLOB) {
    let status = false;
    addEmployeeDML({
        enrollmentId: enrollmentRecordId, censusList: employeeData,
        selectedPlansByLOB: JSON.stringify(selectedPlansByLOB)
    })
        .then(result => {
            console.log('bondi save census13'+result);
			status = true;
            console.log('AF: responce'+status);
         
        }) 
        .catch(error => {
            console.log('bondi error is:'+error);
			status = false;
            
        })
        setTimeout(() => {
        console.log('status'+status);
       return status;
		} , 1500);
	}
	**/
/** export default class hznbpcensusDML extends LightningElement {
	@wire(MessageContext)
    messageContext;   
	
	handleaddEmployee(enrollmentRecordId,employeeData,selectedPlansByLOB) {
        console.log('bondi enrollmentRecordId '+enrollmentRecordId);
    addEmployeeDML({
        enrollmentId: enrollmentRecordId, censusList: employeeData,
        selectedPlansByLOB: JSON.stringify(selectedPlansByLOB)
    })
        .then(result => {
            console.log('bondi save census13'+result);
			const message = {	censusStatus: result     };
			publish(this.messageContext, hznbpEnrollmentCensusLMS, message);
         
        }) 
        .catch(error => {
            console.log('bondi error is:'+error);
			
            
        })
        
	}
	
} **/

const handleaddEmployee = (message)=>{
    const evtTestParams = new CustomEvent('censusdmlevt', {
        detail : { message : message}
      });  
      this.dispatchEvent(evtTestParams);
	}
export default {
    handleaddEmployee 
}