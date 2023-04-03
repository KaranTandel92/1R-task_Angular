import { Component, OnInit } from '@angular/core';
import { concatAll, concatMap, from, map, mergeAll, mergeMap, of, switchAll, switchMap } from 'rxjs';
import { ListService } from './list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'rxjs_task';

  constructor(private dataListService: ListService) { }

  public array = ["karan", "Viren", "Raj"];
  public data = from(this.array)

  ngOnInit(): void {

    // map
    // debugger
    this.data.pipe
      (map((data) => this.getData(data)))
      .subscribe(data => data
        .subscribe((data: any) => this.dataListService.print(data, 'dataListContainer')));

    // map + mergeAll
    this.data.pipe(map((data) => this.getData(data)), mergeAll()).subscribe(data => this.dataListService.print(data, 'dataListContainer2')
      // console.log(data)
    );

    // mergeMap
    this.data.pipe(mergeMap(data => this.getData(data))).subscribe(data => this.dataListService.print(data, 'dataListContainer3')
      // console.log(data)
    );

    // map + concatAll
    this.data.pipe(map((data) => this.getData(data)), concatAll()).subscribe(data => console.log(data)
    );

    // concatMap
    this.data.pipe(concatMap(data => this.getData(data))).subscribe(data => console.log(data)
    );

    // map + switchAll
    this.data.pipe(map((data) => this.getData(data)), switchAll()).subscribe(data => console.log(data)
    );

    // switchmap
    this.data.pipe(switchMap(data => this.getData(data))).subscribe(data => console.log(data)
    );
  }


  // to make observable of data
  getData(data: any) {
    return of(data);
  }

}

