  //makes: string[] = ["Acura","Alfa Romeo","Aston Martin","Audi","Bentley","BMW","Chevrolet","Chrysler","Dodge","Ferrari","Fiat","Ford","Honda","Hyundai","Jaguar","Jeep","Kia","Lamborghini","Land Rover"
export let carData: CarMake[] = [
  {
      name:"Acura",
      models:[       
          {name:"Ultima", years:[2010,2012,2013,2014,2015,2016]},
      ]
  },
  {
      name:"Alfa Romeo",
      models:[       
          {name:"7", years:[2008]},
      ]
  },
  {
      name:"Aston Martin",
      models:[       
          {name:"Gardo", years:[2011]},
      ]
  },
  {
      name:"Audi",
      models:[
          {name:"TT", years:[2010,2012,2015,2016]},
      ]
  },
  {
      name:"Bentley",
      models:[
          {name:"768", years:[2010,2012,2015,2016]},
      ]
  },
  {
      name:"BMW",
      models:[
          {name:"51", years:[2010,2012,2015,2016]},
      ]
  },
  {
      name:"Chevrolet",
      models:[
          {name:"Optra", years:[2010,2012,2015,2016]},
      ]
  },
  {
      name:"Chrysler",
      models:[
          {name:"Towncar", years:[2010,2012,2015,2016]},
      ]
  },
  {
      name:"Dodge",
      models:[
          {name:"Viper", years:[2010,2012,2015,2016]},
      ]
  },
  {
      name:"Ferrari",
      models:[
          {name:"LaFerrari", years:[2010,2012,2015,2016]},
      ]
  },
  {
      name:"Fiat",
      models:[
          {name:"Uno", years:[2010,2012,2015,2016]},
      ]
  },
  {
      name:"Ford",
      models:[
          {name:"Explorer", years:[2010,2012,2015,2016]},
          {name:"Fusion", years:[2010,2012,2015,2016]},
      ]
  },
  {
      name:"Honda",
      models:[
          {name:"Civic", years:[2010,2012,2015,2016]},
      ]
  },
  {
      name:"Hyundai",
      models:[
          {name:"Elantra", years:[2010,2012,2015,2016]},
      ]
  },
  {
      name:"Jaguar",
      models:[
          {name:"S", years:[2010,2012,2015,2016]},
      ]
  },
  {
      name:"Jeep",
      models:[
          {name:"Wrangler", years:[2010,2012,2015,2016]},
      ]
  },
  {
      name:"Kia",
      models:[
          {name:"Sorento", years:[2010,2012,2015,2016]},
      ]
  },
  {
      name:"Lamborghini",
      models:[
          {name:"Murcielago", years:[2010,2012,2015,2016]},
      ]
  },
  {
      name:"Land Rover",
      models:[
          {name:"Discovery", years:[2010,2012,2015,2016]},
      ]
  }
]

interface CarMake {
    name:string;
    models: CarModel[]
}
interface CarModel {
    name:string;
    years:number[]
}
