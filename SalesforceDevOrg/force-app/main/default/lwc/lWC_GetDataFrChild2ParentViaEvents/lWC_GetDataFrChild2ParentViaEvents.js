import { LightningElement } from 'lwc';

export default class LWC_GetDataFrChild2ParentViaEvents extends LightningElement {
    handilinParentJsMethod(event) {
      const childevtData = event.detail;
      alert('display child data in parent via events is'+childevtData);
    }
}