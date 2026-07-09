import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from "rxjs";
import { IProduct } from "./data-access/model";
import { ProductService } from "./data-access/product.service";
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NzDividerModule, NzTableModule, CommonModule, RouterModule],
  template: `
  <nz-table
  #basicTable
  [nzData]="(user$ | async) ?? []">

  <thead>
    <tr>
      <th>ID</th>
      <th>Title</th>
      <th>Body</th>
    </tr>
  </thead>

  <tbody>
   <tr *ngFor="let data of basicTable.data" 
    (click)="goToDetail(data.id)"
    style="cursor: pointer">
  <td>{{ data.id }}</td>
  <td>{{ data.title }}</td>
  <td>{{ data.body }}</td>
</tr>
  </tbody>

</nz-table>
  `,
})
export class ProductComponent {
  user$!: Observable<IProduct[]>;
  router = inject(Router);
  dataService = inject(ProductService);

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.user$ = this.dataService.getPosts();
  }
  goToDetail(id: number) {
    this.router.navigate(['/product', id]);
  }

}
