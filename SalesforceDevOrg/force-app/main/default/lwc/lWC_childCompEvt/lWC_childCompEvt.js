import { LightningElement, track, api } from 'lwc';
export default class LWC_childCompEvt extends LightningElement {
    @track Message;
    @api
    changeMessage(strString) {
         this.Message = strString.toUpperCase();
    }
}