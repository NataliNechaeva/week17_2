const data = [
    {
      id: 1,
      type: 'car',
      brand: 'Audi',
      doors: 4,
      price: 4300000,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
      id: 2,
      type: 'car',
      brand: 'Mercedes-Benz',
      doors: 4,
      price: 2800000,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
    },
      {
      id: 3,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 210,
      price: 1300000,
      image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
      id: 4,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 220,
      price: 1400000,
      image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
  ];

const html = document.getElementById('class');
class Transport {
    constructor(type, price, brand) {
      this.type = type;
      this.price = price;
      this.brand = brand;
    }
    getInfo() {
      return `<div>Тип: ${this.type}, марка: ${this.brand}</div>`
    }
    getPrice() {
        return `<div>Цена: ${this.price} рублей</div>`
    }
}

class Car extends Transport {
    constructor(type, price, brand,doors) {
    super(type, price, brand);
    this.doors = doors;
  }
  getDoorsCount(){
       return `<div>Количество дверей: ${this.doors} шт</div>`
  };
} 

class Bike extends Transport {
    constructor(type, price, brand, maxSpeed) {
    super(type, price, brand);
    this.maxSpeed = maxSpeed;
  }
  getMaxSpeed(){
       return `<div>Скорость: ${this.maxSpeed} км/ч </div>`
  };
} 
let transportHTML = '';
data.forEach((transport) => {
switch (transport.type) {
    case "car":
        const car = new Car(transport.type, transport.price, transport.brand, transport.doors);
        transportHTML+= car.getInfo()+ '<br/>'+ car.getPrice() + '<br/>' + car.getDoorsCount()+ '<br/>';
        break;
    case "bike":
        const bike = new Bike(transport.type, transport.price, transport.brand, transport.maxSpeed);
        transportHTML+= bike.getInfo()+ '<br/>'+ bike.getPrice() + '<br/>' + bike.getMaxSpeed();
        break;
}
})

html.innerHTML = transportHTML;