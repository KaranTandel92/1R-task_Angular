import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentComponent implements OnInit {

  @Input() userName: any;
  @Input() object: any;

  constructor(private chnage: ChangeDetectorRef) { }


  ngOnInit(): void {

  }

}
