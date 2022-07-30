import { LightningElement, track } from 'lwc';
import findAccounts from '@salesforce/apex/LWC_GlobalClass.findAccounts';
/* eslint-disable no-console */
 /* eslint-disable no-alert */
/** The delay used when debouncing event handlers before invoking Apex. */
const DELAY = 350;

export default class SearchAccountRecord extends LightningElement {
    @track accounts;
    @track error;
    async connectedCallback() {
        window.alert('onload');
        window.clearTimeout(this.delayTimeout);
        const searchKey ='bondi';
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        this.delayTimeout = setTimeout(() => {
            findAccounts({ searchKey })
                .then(result => {
                    this.accounts = JSON.parse(result);
                    this.error = undefined;
                })
                .catch(error => {
                    this.error = error;
                    this.accounts = undefined;
                });
        }, DELAY);
    }
    handleKeyChange(event) {
        // Debouncing this method: Do not actually invoke the Apex call as long as this function is
        // being called within a delay of DELAY. This is to avoid a very large number of Apex method calls.
        window.clearTimeout(this.delayTimeout);
        const searchKey = event.target.value;
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        this.delayTimeout = setTimeout(() => {
            findAccounts({ searchKey })
                .then(result => {
                    this.accounts = result;
                    this.error = undefined;
                })
                .catch(error => {
                    this.error = error;
                    this.accounts = undefined;
                });
        }, DELAY);
    }
}