const roues = "4";
let vehiculeType;

switch (roues) {
  case 2: {
    vehiculeType = "moto";
    break;
  }
  case "4":
  case 4: {
    vehiculeType = "voiture";
    break;
  }

  default: {
    vehiculeType = "camion";
    break;
  }
}

console.log(vehiculeType);
