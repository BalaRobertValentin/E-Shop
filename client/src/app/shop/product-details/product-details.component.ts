import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/models/products';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: IProduct;


  constructor(private shopService: ShopService, private activateRouter: ActivatedRoute, 
    private bcService: BreadcrumbService){}

  ngOnInit() {
    this.loadProduct();
  }
  
  loadProduct(){
    this.shopService.getProduct(+this.activateRouter.snapshot.paramMap.get('id')).subscribe(product =>{
      this.product = product;
      this.bcService.set('@productDetails', product.name);
    },error => {
      console.log(error);
    })
  }

}
