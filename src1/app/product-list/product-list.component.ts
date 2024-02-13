import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  listOfProducts: any = [
    {
      id: '0',
      name: "Iphone 15 with  Orignal Gold",
      brand: 'XYZ Fashion',
      gender: 'Men',
      category: 'Clothing',
      size: ['S', 'M', 'L', 'XL'],
      color: 'Black',
      price: 230.999,
      imageUrl:
        'https://leronza.com/wp-content/uploads/2022/05/gold-iphone-14-pro-max-2.png',
      is_in_inventory: true,
      discountPrice: 50
    },
    {
      id: '1',
      name: "Iphone 14 Pro-Max 1TB light black",
      brand: 'XYZ Fashion',
      gender: 'Men',
      category: 'Clothing',
      size: ['S', 'M', 'L', 'XL'],
      color: 'Black',
      price: 99.499,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5SxnJUxhw_Vfi8fboVI9lYRtsvlZ6elBmPw&usqp=CAU',
      is_in_inventory: true,
      discountPrice: 20
    },
    {
      id: '2',
      name: "Iphone 14 Pro 1TB- in White color",
      brand: 'ABC Couture',
      gender: 'Women',
      category: 'Clothing',
      size: ['XS', 'S', 'M', 'L'],
      color: 'Blue/White',
      price: 120.599,
      imageUrl:
        'https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile-skin/q/b/v/iphone-x-xsto13pro-yes-fivme-original-imagpf7afdggquzs.jpeg?q=90',
      is_in_inventory: true,
    },
    {
      id: '3',
      name: 'iphone 14 light Pink color',
      brand: 'SportyGear',
      gender: 'Unisex',
      category: 'Footwear',
      size: ['7', '8', '9', '10'],
      color: 'Red/Black',
      price: 79.499,
      imageUrl:
        'https://iqstoreindia.com/assets/images/iphone-15/iphone15-yellow.png',
      is_in_inventory: false,
      discountPrice: 15
    },
    {
      id: '4',
      name: "Iphone 14 pro-max in yellow color",
      brand: 'Elegance Couture',
      gender: 'Women',
      category: 'Clothing',
      size: ['S', 'M', 'L'],
      color: 'Navy Blue',
      price: 88.999,
      imageUrl:
        'https://mavrolert.com/cdn/shop/products/1.png?v=1678730807',
      is_in_inventory: true,
    },
    {
      id: '5',
      name: "Iphone 14 pro Green",
      brand: 'Denim Trends',
      gender: 'Men',
      category: 'Clothing',
      size: ['28', '30', '32', '34'],
      color: 'Blue',
      price: 59.959,
      imageUrl:
        'https://media.croma.com/image/upload/v1664009755/Croma%20Assets/Communication/Mobiles/Images/249847_0_at9nl9.png',
      is_in_inventory: true,
    },
    {
      id: '6',
      name: "14 Pro-max in  Purple color",
      brand: 'FootLux',
      gender: 'Women',
      category: 'Footwear',
      size: ['6', '7', '8', '9'],
      color: 'Brown',
      price: 89.999,
      imageUrl:
        'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg',
      is_in_inventory: true,
    },
    {
      id: '7',
      name: "Iphone 14 pro in blue color",
      brand: 'FormalElegance',
      gender: 'Men',
      category: 'Clothing',
      size: ['M', 'L', 'XL'],
      color: 'White',
      price: 65.499,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTjw7gW1wsBko4rohlOJxoVXlymCPrVgB9aw&usqp=CAU',
      is_in_inventory: true,
    },
    {
      id: '8',
      name: "14 Pro-max in  Dark Black color",
      brand: 'ActiveFit',
      gender: 'Women',
      category: 'Activeness',
      size: ['XS', 'S', 'M'],
      color: 'Black',
      price: 85.499,
      imageUrl:
        'https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-space-black-220907-geo_inline.jpg.large.jpg',
      is_in_inventory: true,
    },
    {
      id: '9',
      name: 'iPhone 14 in Dark Pink color',
      brand: 'ShadeMaster',
      gender: 'Unisex',
      category: 'Accessories',
      size: ['XS', 'S', 'M'],
      color: 'Black',
      price: 60.799,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7O-UuQ6rPzcX7Bbo4de6RCL7LYGe8O6OxYA&usqp=CAU',
      is_in_inventory: true,
    },
    {
      id: '10',
      name: "Iphone 14 Pro-Max in Orange color",
      brand: 'SportTime',
      gender: 'Men',
      category: 'Accessories',
      size: ['XS', 'S', 'M'],
      color: 'Orange',
      price: 75.999,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHvXTDntSnIH3NFXeP85CxY16BHy9su0oFKQ&usqp=CAU',
      is_in_inventory: true,
      discountPrice: 75
    },
  ];
  prod: any;
}