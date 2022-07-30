import { LightningElement, wire, track  } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import sayHello from '@salesforce/apex/HelloWorld.sayHello'; 

export default class Hello extends LightningElement {
@wire(sayHello) greetings; 
name = "Bondi from js controller";
changeHandler(event) {
    this.name = event.target.value;
}
ShowToastMessage() {
    const toastEvnt = new  ShowToastEvent( {
          title: 'Welcome !!!' ,
          message: this.name ,
          variant: 'success' ,
    });
    this.dispatchEvent (toastEvnt);
}

}