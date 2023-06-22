import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /* name = 'Giuseppe';
  age = 18;
  img = 'https://www.w3schools.com/howto/img_avatar.png'
  btnDisabled = true;
  person = {
    name : 'Giuseppe',
    age : 18,
    img : 'https://www.w3schools.com/howto/img_avatar.png'
  }

  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }
  increaseAge(){
    this.person.age += 1;
  }
  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  names:string[] =  ['Giuseppe','Renzo','Yessenia','Viviana','Antonio'];
  newName = '';

  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all'
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index:number){
    this.names.splice(index,1);
  }*/
register={
  name:'',
  password:'',
  email:''

}
onRegister(){
  console.log(this.register)
}

  box ={
    width:100,
    height:100,
    background:'gray'
  }
  person={
    name:'Giuseppe',
    age:25,
    image:'./assets/images/morty.jpg'
  }
  
  btnDisabled = true;

  ageUp(){
    this.person.age +=1;
  }
  ageDown(){
    this.person.age -=1;
  }

  /*changeName(event:Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }*/
  toggleBtn(){
    this.btnDisabled = !this.btnDisabled;
  }

  products:Product[] =[
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all'
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }

  ]

  widthImg:number = 10;


}
