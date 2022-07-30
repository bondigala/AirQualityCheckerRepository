// publisherComponent.js
import { LightningElement, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import BondilwcMessageChannel from '@salesforce/messageChannel/BondilwcMessageChannel__c';

export default class PublisherComponent extends LightningElement {
    @wire(MessageContext)   messageContext;
          
    handleClick() {
        const message = {
            recordId: '00190000029bKbFAAU',
            message : "This is simple message from LWC BondilwcMessageChannel",
            source: "LWC",
            recordData: {accountName: 'Sudiksha Bondigala',Phone: '9535506252'}
        };
        publish(this.messageContext, BondilwcMessageChannel, message);
    }
}