import { LightningElement, wire, api, track } from 'lwc';
import getMoneyMgtInfoLWC from '@salesforce/apex/B_MoneyMgtControllerClass.getMoneyMgtInfoLWC';
/* eslint-disable no-console */
/* eslint-disable no-alert */
const columns = [ 
{ label: 'Name', fieldName: 'Name' }, 
{ label: 'Principle', fieldName: 'Principal__c' }, 
{ label: 'Total', fieldName: 'Total_Principal_Interest__c' }
];

export default class LWCDatatableMGT extends LightningElement {
@track MGTDataList;
@track error; 
@track columns = columns;          
wiredsObjectData;
@wire(getMoneyMgtInfoLWC, {accRecordId: '0019000001nfSreAAE' , sourceFrom: 'LWC'})
wiredSobjects(result) {
            this.wiredsObjectData = result;
    if (result.data) {
        // alert('result.data'+result.data.value.MoneyMgtHistoryList);
                    this.MGTDataList = result.data.value.MoneyMgtHistoryList;
                    }
}

}