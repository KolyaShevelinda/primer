import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {

    title = 'My Card Title';
    text = 'This is my card information from myself';

    textColor = 'black';

    imgUrl: string = 'https://angular.io/assets/images/logos/angular/angular.png';

    ngOnInit() {
        // function countImg1() {
        //     let count1:number;
        //     if (count1) {
        //         setTimeout(()=>{
        //             this.imgUrl = 'https://www.dotcom-monitor.com/blog/wp-content/uploads/sites/3/2020/05/Vue-logo-1.png'
        //         }, 3000) 
        //     }
        // }

        // function countImg2(count2:number) {
        //     if (count2) {
        //         setTimeout(()=>{
        //             this.imgUrl = 'https://angular.io/assets/images/logos/angular/angular.png'
        //         }, 6000)
        //     }
        // }

        setTimeout(()=>{
            this.imgUrl = 'https://www.dotcom-monitor.com/blog/wp-content/uploads/sites/3/2020/05/Vue-logo-1.png'
        }, 3000)
        setTimeout(()=>{
            this.imgUrl = 'https://angular.io/assets/images/logos/angular/angular.png'
        }, 6000)
    }

    changeTitle() {
        this.title = 'This is change title';
    }

    inputHandler(value: any) {
        this.title = value;
    }

    changeHandler() {
        console.log(this.title);
    }
 }