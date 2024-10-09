import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-zodiaco',
  templateUrl: './zodiaco.component.html',
  styleUrls: ['./zodiaco.component.css']
})
export class ZodiacoComponent {
  zodiacoFormulario: FormGroup;
  nombre: string | null = null;
  edad: number | null = null;
  signo: string | null = null;
  imagenSigno: string | null = null;

  signosChinos = [
    { signo: 'Rata', imagen: 'https://elcomercio.pe/resizer/ouhyJzBv_HxkbRRx1UP56uCyLsg=/1200x900/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/VUKSU3CECFA6RILNQZYIO35ZHY.jpg', anio: 2020 },
    { signo: 'Buey', imagen: 'https://elcomercio.pe/resizer/I6S4veHqPRlfE2JdXxUQZr0ON7A=/620x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/EVN4EJTCC5ANXK2LY26MJHREM4.jpg', anio: 2021 },
    { signo: 'Tigre', imagen: 'https://www.clarin.com/2023/09/21/K8Y2WDIQW_360x240__1.jpg', anio: 2022 },
    { signo: 'Conejo', imagen: 'https://elcomercio.pe/resizer/9C93oSaF5IVP53-53hKK3I1fGpY=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/SFCOR7PPI5HOFFNGQNJQTCIQVE.jpg', anio: 2023 },
    { signo: 'Dragón', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsCj-odKGVT3LSn8pKrKeW7BX0aZfGbTndbQ&s', anio: 2024 },
    { signo: 'Serpiente', imagen: 'https://peopleenespanol.com/thmb/Who-b06dJwjtqnuJ406zgMaq4kg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165965553-2000-e4700b87c9fd404681a502f7095c2ac5.jpg', anio: 2025 },
    { signo: 'Caballo', imagen: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Caballo.jpg', anio: 2026 },
    { signo: 'Cabra', imagen: 'https://peopleenespanol.com/thmb/Fwy99mIonHJYbhmA9AOTeWCpkdU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165967741-2000-12afb4d370f14afe856f05ba36fe1693.jpg', anio: 2027 },
    { signo: 'Mono', imagen: 'https://peopleenespanol.com/thmb/Wpxezb6zTd3sJ4sB90GtyUfFPpo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165967347-2000-141e78d49c344d73a216c09df52f7fcb.jpg', anio: 2028 },
    { signo: 'Gallo', imagen: 'https://peopleenespanol.com/thmb/Th2wLXhS9Tzh3VR7DtVB9CwgUFE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165926089-2000-25a52aba2d0942679de98ba836f1ab9f.jpg', anio: 2029 },
    { signo: 'Perro', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2-0PDXeDGlp71cxA05l6kWjub7Pv33focWQ&s', anio: 2030 },
    { signo: 'Cerdo', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsqyqOjMPfUtmYKoCOEHDQn-mnq-jByyVh6g&s', anio: 2031 }
  ];

  constructor() {
    this.zodiacoFormulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      dia: new FormControl('', [Validators.required]),
      mes: new FormControl('', [Validators.required]),
      anio: new FormControl('', [Validators.required]),
      sexo: new FormControl('masculino', [Validators.required])
    });
  }

  calcularSigno() {
    const { nombre, dia, mes, anio } = this.zodiacoFormulario.value;

    const fechaNacimiento = new Date(anio, mes - 1, dia);
    const hoy = new Date();
    this.edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();
    if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
      this.edad--;
    }

    const cicloChino = (anio - 1924) % 12;
    const signoZodiaco = this.signosChinos[cicloChino];

    if (signoZodiaco) {
      this.signo = signoZodiaco.signo;
      this.imagenSigno = signoZodiaco.imagen;
      this.nombre = nombre;
    } else {
      this.signo = null;
      this.imagenSigno = null;
      this.nombre = null;
    }
  }
}
