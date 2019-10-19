import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daftar-komentar',
  templateUrl: './daftar-komentar.page.html',
  styleUrls: ['./daftar-komentar.page.scss'],
})
export class DaftarKomentarPage implements OnInit {

  constructor(private route:Router,private http:HttpClient) { }

  ngOnInit() :void
  {
    this.http.get(' https://jsonplaceholder.typicode.com/comments/')
    .subscribe(
      res=>{
        document.getElementById("nama1").innerHTML = res[0]['name'];
        document.getElementById("konten1").innerHTML= res[0]['body'];
        document.getElementById("nama2").innerHTML = res[1]['name'];
        document.getElementById("konten2").innerHTML= res[1]['body'];
        document.getElementById("nama3").innerHTML = res[2]['name'];
        document.getElementById("konten3").innerHTML= res[2]['body'];
      },
      err=>{
        console.log("Error occured");
      }
    );
  }
  goTokonten1()
  {
    this.route.navigate(['/detil-komentar']);
  }
  goTokonten2()
  {
    this.route.navigate(['/detil-komentar']);
  }
  goTokonten3()
  {
    this.route.navigate(['/detil-komentar']);
  }
}

