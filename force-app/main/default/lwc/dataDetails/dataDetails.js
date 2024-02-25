// reqButton.js

import { LightningElement, track } from 'lwc';
import salesimage from '@salesforce/resourceUrl/DatasetDetails';

export default class datadetails extends LightningElement {
    @track showFormFlag = false;
    @track firstName = '';
    @track lastName = '';
    @track email = '';
    @track phone = '';
    @track country = '';
    @track city = '';
    @track message = '';
     imageUrl = salesimage;
   

    showForm() {
        this.showFormFlag = true;
    }

    hideForm() {
        this.showFormFlag = false;
    }

    handleSubmit() {
        // Handle form submission logic here
        console.log('Form submitted');
        //this.hideForm();
    }

    handleFirstNameChange(event) {
        this.firstName = event.target.value;
    }

    handleLastNameChange(event) {
        this.lastName = event.target.value;
    }

    handleEmailChange(event) {
        this.email = event.target.value;
    }

    handlePhoneChange(event) {
        this.phone = event.target.value;
    }

    handleCountryChange(event) {
        this.country = event.target.value;
    }

    handleCityChange(event) {
        this.city = event.target.value;
    }

    handleMessageChange(event) {
        this.message = event.target.value;
    }
}
