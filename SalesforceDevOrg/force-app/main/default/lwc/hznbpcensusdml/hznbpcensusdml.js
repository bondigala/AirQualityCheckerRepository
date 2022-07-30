import { LightningElement,track,wire } from 'lwc';
export default class hznbpcensusdml extends LightningElement {
    @track newEmployeeFormObject = [];
    dateUpdated(event) {
        var clsDOB = this.template.querySelector('.clsDOB');    
        var clsHireDate = this.template.querySelector('.clsHireDate');    
        clsDOB.setCustomValidity('');    
        clsHireDate.setCustomValidity('');    
        let today = new Date();      
        if(new Date()<new Date(clsDOB.value)) {    
          clsDOB.setCustomValidity('DOB should be past date.');    
        } else {    
          let hirDate = clsHireDate.value;     
          if(new Date(clsDOB.value) > new Date(clsHireDate.value) && hirDate!= '' && hirDate!=null && hirDate) {
            clsHireDate.setCustomValidity('Hire date should not be lesser than DOB.');
            clsDOB.setCustomValidity('DOB should less than Hire Date.');
          }    
        }   
        clsHireDate.reportValidity();  
        clsDOB.reportValidity();    
      }
}