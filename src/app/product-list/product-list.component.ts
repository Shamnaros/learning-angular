import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  Products = [
    { id: 1, src: "https://www.eichertrucksandbuses.com/front/images/buses_img01.png", name: "AC Air Bus A", description: "Sleep with comfort..", price: 20, item: 0 },
    { id: 2, src: "https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/blue-bus?qlt=82&wid=1024&ts=1660212095501&dpr=off&fit=constrain", name: "AC Air Bus B", description: "Sleep with comfort..", price: 10, item: 0 },
    { id: 3, src: "https://www.tatamotors.com/wp-content/uploads/2019/10/04141358/press-04oct19b-03.jpg", name: "AC Air Bus C", description: "Sleep with comfort..", price: 30, item: 0 },
    { id: 4, src: "https://cms.eichertrucksandbuses.com/uploads/truck/sub-category/d2939914208dbb03c2a9d3534e7b967f.png", name: "AC Air Bus D", description: "Sleep with comfort..", price: 40, item: 0 },
    { id: 5, src: "https://www.eichertrucksandbuses.com/front/images/buses_img01.png", name: "AC Air Bus E", description: "Sleep with comfort..", price: 50, item: 0 },
    { id: 6, src: "https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/blue-bus?qlt=82&wid=1024&ts=1660212095501&dpr=off&fit=constrain", name: "AC Air Bus F", description: "Sleep with comfort..", price: 60, item: 0 },
    { id: 7, src: "https://www.tatamotors.com/wp-content/uploads/2019/10/04141358/press-04oct19b-03.jpg", name: "AC Air Bus G", description: "Sleep with comfort..", price: 70, item: 0 },
    { id: 8, src: "https://cms.eichertrucksandbuses.com/uploads/truck/sub-category/d2939914208dbb03c2a9d3534e7b967f.png", name: "AC Air Bus H", description: "Sleep with comfort..", price: 80, item: 0 },
  ];
  
  item: number = 0;
  total: number = 0;
  selectedditem: number | undefined;
  selecteditem: any[] = [];
  selectedproduct: any[] = [];
  index: number | undefined;
  tt : number = 0;
  

  public selectitem(ida: number) {
    this.selectedditem = ida;
    this.tt = this.tt + 1;
    // this.selecteditem.push(ida);
    // this.index = this.Products.indexOf(this.Products[ida]); 
    this.selectedproduct.push(this.Products[ida - 1])
    this.selecteditem.push({ itemid: this.item, itemsrc: this.Products[ida - 1].src, itemname: this.Products[ida - 1].name, itemprice: this.Products[ida - 1].price });
    // this.selecteditem[this.selecteditem.length].id = this.item;
    this.item++;
    var t = this.Products[ida - 1].price;
    this.total = this.total + t;
    // console.log(this.total);
    this.total = this.total;
    console.log(this.selecteditem[this.item-1]);

  }

  

    public deleteitem(idb: number) {

      this.tt = this.tt - 1;

      const index = this.selecteditem.findIndex(item => item.itemid === idb);
    
      if (index !== -1) {
        const removedItem = this.selecteditem.splice(index, 1)[0];
    
        // Update 
        this.total -= removedItem.itemprice;
    
        // Recalculate the total price 
        this.total = this.selecteditem.reduce((total, item) => total + item.itemprice, 0);
      } else {
        console.log('Item not found in selecteditem array.');
      }
    }
      

    
    
  }

