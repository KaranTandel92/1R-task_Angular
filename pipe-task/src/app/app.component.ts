import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipe-task';

  public headingData = [
    { 'ID': 100, 'NAME': 'DairyMilk', 'DESCRIPTION': 'Dairymilk jvbj djvdjvn jvbjb jvj', 'QTY': 500, 'AVAILIBILITY': 'Available' },
    { 'ID': 101, 'NAME': 'Eclairs', 'DESCRIPTION': 'Eclairs jvbj djvdjvn jvbjb jvj', 'QTY': 450, 'AVAILIBILITY': 'Not-available' },
    { 'ID': 102, 'NAME': 'mentos', 'DESCRIPTION': 'Mentos jvbj djvdjvn jvbjb jvj', 'QTY': 750, 'AVAILIBILITY': 'Available' },
    { 'ID': 103, 'NAME': 'Gems', 'DESCRIPTION': 'Gems jvbj djvdjvn jvbjb jvj', 'QTY': 1240, 'AVAILIBILITY': 'Available' },
    { 'ID': 104, 'NAME': 'Gems12', 'DESCRIPTION': 'Gems jvbj djvdjvn jvbjb jvj', 'QTY': 1240, 'AVAILIBILITY': 'Not-Available' },
    { 'ID': 105, 'NAME': 'DairyMilk123', 'DESCRIPTION': 'Dairymilk jvbj djvdjvn jvbjb jvj', 'QTY': 5500, 'AVAILIBILITY': 'Not-Available' },
    { 'ID': 106, 'NAME': 'DairyMilk', 'DESCRIPTION': 'Dairymilk jvbj djvdjvn jvbjb jvj', 'QTY': 50, 'AVAILIBILITY': 'Available' },
    { 'ID': 107, 'NAME': 'DairyMilk', 'DESCRIPTION': 'Dairymilk jvbj djvdjvn jvbjb jvj', 'QTY': 100, 'AVAILIBILITY': 'Available' },
  ];

  public key: any = Object.keys(this.headingData[0]);

  public searchProduct: string = "";

}
