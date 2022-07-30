// subscribeComponent.js
import { LightningElement, wire } from "lwc";
import {
  subscribe,
  unsubscribe,
  APPLICATION_SCOPE,
  MessageContext,
  releaseMessageContext
} from "lightning/messageService";

import BondilwcMessageChannel from "@salesforce/messageChannel/BondilwcMessageChannel__c";

export default class SubscribeComponent extends LightningElement {
  @wire(MessageContext)  messageContext;

  subscription = null;
  receivedMessage;
  isDisabled = false;
  isDisabledUnsb = true;
  subscribeMC() {
    this.isDisabled = true;
    this.isDisabledUnsb = false;
    if (this.subscription) {
      return;
    }
    this.subscription = subscribe(this.messageContext, BondilwcMessageChannel,
      (message) => { 
        this.handleMessage(message);
      },
      { scope: APPLICATION_SCOPE }
    );
  }

  unsubscribeMC() {
    unsubscribe(this.subscription);
    this.subscription = undefined;
    this.isDisabled = false;
    this.isDisabledUnsb = true;
  }

  handleMessage(message) {
    this.receivedMessage = message
      ? JSON.stringify(message, null, "\t")
      : "no message payload";
  }
  disconnectedCallback() {
      releaseMessageContext(this.messageContext);//to release all subscriptions
  }
}