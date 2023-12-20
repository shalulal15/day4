import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})
export class SingleComponent {

  districts = [
    {
      id:1,
      title:"Trivandrum",
      image:"https://www.abhibus.com/blog/wp-content/uploads/2023/08/Best-Places-to-Visit-in-Trivandrum-in-2-Days.jpg",
      paragraph:"Thiruvananthapuram (or Trivandrum) is the capital of the southern Indian state of Kerala. It's distinguished by its British colonial architecture and many art galleries. It’s also home to Kuthira Malika (or Puthen Malika) Palace, adorned with carved horses and displaying collections related to the Travancore royal family, whose regional capital was here from the 18th–20th centuries.",
      content:"Being India's largest city in the deep south, it is strategically prominent and hosts the Southern Air Command headquarters of the Indian Air Force, the Thumba Equatorial Rocket Launching Station and the upcoming Vizhinjam International Seaport."
    },
    {
      id:2,
      title:"kollam",
      paragraph:"Kollam is a city in the state of Kerala, on India's Malabar Coast. It’s known as a trade hub and for its beaches, like lively Kollam and secluded Thirumullavaram.",
      image:"https://kollamcity.keralapolice.gov.in/storage-kollamcity_keralapolice_gov_in/pages/custom/ckFiles/img/ArIw6mmgGFkx1J4eSh9qTEPO9ETtSKis9wnHS6Db.jpg",
      content:"The Kollam sea port was founded by Mar Abo in 825 AD, sanctioned via the Tamil king of Venad (otherwise called the Ay kingdom), Udayamarthandavarma. The trade and business culture of Quilon is as old as Kollam Port. Kollam was the most famous port city in India, serving as a business hub for merchants from China, Middle East, Dutch, Portugal, Brazil and other Eastern Mediterranean countries",
    },
    {
      id:3,
      title:"pathanamthitta",
      paragraph:"Pathanamthitta (IPA: [pɐt̪ːɐnɐn̪d̪iʈːɐ]), is a municipality situated in the Southern Kerala, India, spread over an area of 23.50 km2. It is the administrative capital of Pathanamthitta district.",
      image:"https://assets-news.housing.com/news/wp-content/uploads/2022/09/07010326/Pathanamthitta-FEATURE-compressed.jpg",
      content:"Pathanamthitta District, the thirteenth revenue district of the State of Kerala, was formed with effect from 1 November 1982, with headquarters at Pathanamthitta.",
    },
    {
      id:4,
      title:"alapuzha",
      paragraph:"Alappuzha (or Alleppey) is a city on the Laccadive Sea in the southern Indian state of Kerala. It's best known for houseboat cruises along the rustic",
      image:"https://upload.wikimedia.org/wikipedia/commons/e/e4/Alappuzha_Boat_Beauty_W.jpg",
      content:"The city's Mullakkal Temple features a traditional design. Punnamada Lake's snake boat races are a well-known annual event."
    }


  ];

  constructor(public route:ActivatedRoute){}

  ngOnInit(){
    this.getDetails();
  }
  id:any;
  data:any;

  getDetails(){
    this.id=this.route.snapshot.params["id"];
    this.data=this.districts.filter((d:any) => d.id == this.id)
  }

}
