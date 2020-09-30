import { IMovie } from './../interface/imovie';
import { MovieService } from './movie.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
itemMovies:IMovie[]=[];

@ViewChild('txtname') txtname:ElementRef;
@ViewChild('txtSubject') txtSubject:ElementRef;
@ViewChild('txtDate') txtDate:ElementRef;




  constructor(private MovieService:MovieService) { }

  ngOnInit() {
    this.itemMovies=this.MovieService.getAll();
  }

  btnSearch(){
      
    this.itemMovies=this.MovieService.getAll();
    
    if(this.txtname.nativeElement.value !=='')
    this.itemMovies = this.itemMovies.filter(item => item.name == this.txtname.nativeElement.value);
    if(this.txtDate.nativeElement.value !=='')
    this.itemMovies = this.itemMovies.filter(item => item.date == this.txtDate.nativeElement.value);
    if(this.txtSubject.nativeElement.value !=='')
    this.itemMovies = this.itemMovies.filter(item => item.subject == this.txtSubject.nativeElement.value);



    /* this.itemMovies=this.MovieService.SearchItem(this.txtname.nativeElement.value,
                    this.txtSubject.nativeElement.value,this.txtDate.nativeElement.value); */
  }

 



}
