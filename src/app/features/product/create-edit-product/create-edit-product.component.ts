import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../data-access/product.service';
import { IProduct } from '../data-access/model';

@Component({
  selector: 'app-create-edit-product',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="product$ | async as product; else loading">
    <h1>    {{ product.id }}</h1>  
      <h2>{{ product.title }}</h2>
      <p>{{ product.body }}</p>
    </div>
    <ng-template #loading>Loading...</ng-template>
  `,
})
export class CreateEditProductComponent {
  product$!: Observable<IProduct>;
  private route = inject(ActivatedRoute);
  private service = inject(ProductService);

  ngOnInit() {
    this.product$ = this.route.paramMap.pipe(
      map(params => Number(params.get('id'))),
      switchMap(id => this.service.getPost(id))
    );
  }

}
