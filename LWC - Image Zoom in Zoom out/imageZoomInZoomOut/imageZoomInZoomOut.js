import { LightningElement, api, track, wire } from 'lwc';
import IMAGE from '@salesforce/resourceUrl/SalesforceTower';

export default class ImageZoomInZoomOut extends LightningElement {
    @api heightInRem;
    isImagePresent=true;
    imageURL = IMAGE;

    // ------------------------------------ Zoom in Zoom out Section ---------------------------------------------------- 
    count = 0;
    zoomIn(){
        var divblock = this.template.querySelector('[data-id="divblock"]');
        this.count++;
        if(this.count == 1) {
            if(divblock){
                this.template.querySelector('[data-id="divblock"]').className='image_zoomin1';
            } 
        } else if(this.count == 2) {
            if(divblock){
                this.template.querySelector('[data-id="divblock"]').className='image_zoomin2';
            } 
        } else if(this.count == 3) {
            if(divblock){
                this.template.querySelector('[data-id="divblock"]').className='image_zoomin3';
            } 
        } else {
            this.count = 4;
        }
    }

    zoomOut(){
        var divblock = this.template.querySelector('[data-id="divblock"]');
        this.count--;
        if(this.count == 3) {
            if(divblock){
                this.template.querySelector('[data-id="divblock"]').className='image_zoomout3';
            }   
        } else if(this.count == 2) {
            if(divblock){
                this.template.querySelector('[data-id="divblock"]').className='image_zoomout2';
            }  
        } else if(this.count == 1) {
            if(divblock){
                this.template.querySelector('[data-id="divblock"]').className='image_zoomout1';
            }   
        }
    }
}