import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { NgModule } from '@angular/core'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

const MaterialComponents = [
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule
];

@NgModule({
  imports: [MatButtonModule,MatTableModule,MatPaginatorModule,MatSortModule],
  exports: [MatButtonModule,MatTableModule,MatPaginatorModule,MatSortModule]
})
export class MaterialModule { }
