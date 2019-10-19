import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daftar-artikel',
  templateUrl: './daftar-artikel.page.html',
  styleUrls: ['./daftar-artikel.page.scss'],
})
export class DaftarArtikelPage implements OnInit {

  constructor(private route:Router,private http:HttpClient) { }

  ngOnInit() :void
  {
    this.http.get(' https://jsonplaceholder.typicode.com/posts')
    .subscribe(
      res=>{
        document.getElementById("judul1").innerHTML = res[0]['title'];
        document.getElementById("judul2").innerHTML = res[1]['title'];
        document.getElementById("judul3").innerHTML = res[2]['title'];
      },
      err=>{
        console.log("Error occured");
      }
    );
  }
  goToJudul1()
  {
    this.route.navigate(['/detil-artikel']);
  }
  goToJudul2()
  {
    this.route.navigate(['/detil-artikel']);
  }
  goToJudul3()
  {
    this.route.navigate(['/detil-artikel']);
  }
}
