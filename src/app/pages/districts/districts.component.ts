import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-districts',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './districts.component.html',
  styleUrl: './districts.component.css'
})
export class DistrictsComponent {
  districts: any = [
    {
      id:1,
      title: "Trivandrum" ,
      image: "https://deih43ym53wif.cloudfront.net/thiruvananthapuram-india-shutterstock_498424870_54ec620099.jpeg"
    },
    {
      id:2,
      title: "kollam",
      image:"https://img.traveltriangle.com/blog/wp-content/uploads/2018/04/Jatayu%E2%80%99s-Earth-Centre-kollam-kb6592.jpg"
    },
    {
      id:3,
      title:"pathanamtitta",
      image:"https://upload.wikimedia.org/wikipedia/commons/a/a7/Pathanamthitta_town.jpg"
    },
    {
      id:4,
      title: "alapuzha",
      image:"https://www.explorebees.com/uploads/Alappuzha.jpg"
    }

];




}
