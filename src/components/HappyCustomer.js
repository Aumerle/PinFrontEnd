import Marquee from "react-marquee-slider";
import styled from "styled-components";
import img1 from "../assets/img/people-1.jpg";
import img2 from "../assets/img/people-2.jpg";
import img3 from "../assets/img/people-3.jpg";
import img4 from "../assets/img/people-4.jpg";
import img5 from "../assets/img/people-5.jpg";
import img6 from "../assets/img/people-6.jpg";
import img7 from "../assets/img/people-7.jpg";
import img8 from "../assets/img/people-8.jpg";
import img9 from "../assets/img/people-9.jpg";
import img10 from "../assets/img/people-10.jpg";

export default function HappyCustomer() {
  const BoxClient = styled.div`
    width: 400px;
    height: 180px;
    border: 3px solid #C68230 ;
    margin-right: 2rem;
    padding: .8rem;
    div > img {
      padding: 12px;
    }

  `;

  const Item = [
    {
      id: 1,
      photo: img1,
      name: "Jeremias Batista",
      jobTitle: "Director de marketing",
      text: "Soy cliente de Qiubusiness y son muy fiables.",
    },
    {
      id: 2,
      photo: img2,
      name: "Catherine Trebol",
      jobTitle: "Administrador de proyectos",
      text: "Excelentes productos y seriedad en los envios.",
    },
    {
      id: 3,
      photo: img3,
      name: "Martina Zambrano",
      jobTitle: "Cajero de restaurante",
      text: "Los anillos de matrimonios me los hicieron personalizados, excelente.",
    },
    {
      id: 4,
      photo: img4,
      name: "Elvis Loaiza",
      jobTitle: "Diseñador gráfico",
      text: "Me diseñaron un dije espectacular, suoer recomendado.",
    },

    {
      id: 5,
      photo: img5,
      name: "Kenyon Barbosa",
      jobTitle: "Cantante",
      text: "Con Qiubussines hago todas mis prendas para los conciertos y videos, muy confiable, oro real.",
    },
  ];

  const Item2 = [
    {
      id: 1,
      photo: img6,
      name: "Javier Zapata",
      jobTitle: "Director de ventas",
      text: "El anillo que compré esta muy bacano, Gracias.",
    },
    {
      id: 2,
      photo: img7,
      name: "Nilson Bettin",
      jobTitle: "Contador",
      text: "Quiero diseñar una cadenita para mi sobrino. Escribí a su correo, espero su respuesta. Gracias",
    },
    {
      id: 3,
      photo: img8,
      name: "Gloria Gutierrez",
      jobTitle: "Arquitecta",
      text: "NMuy buenos diseños.",
    },
    {
      id: 4,
      photo: img9,
      name: "Walter Venecia",
      jobTitle: "Ebanista",
      text: "Tengo dos cadenas de oro que me vendieron y ufff me encantan. Recomendados.",
      
    },

    {
      id: 5,
      photo: img10,
      name: "Natalia Quintero",
      jobTitle: "Especialista en gerencia de proyectos",
      text: "Compré y el envío me llego en 3 dias, super rapido y confiable. Muy bella mi pulsera",

    },
  ];

  return (
    <>
      <h1 className="font-primary color-secondary text-center my-2">
        En las redes hablan de <br/> !QIUBUSINESS!
      </h1>
      <div style={{ height: "220px" }}>
        <Marquee velocity={10}>
          {Item.map((item) => (
            <BoxClient className="d-flex align-items-center justify-contents-center">
              <div class="d-flex align-items-start justify-content-between">
                <img src={item.photo} fluid alt={item.name}/>
                <div>
                  <h5 className="font-primary color-secondary">{item.name}</h5>
                  <p className="font-secondary color-primary fs-12">
                    <u>
                      <b>{item.jobTitle}</b>
                    </u>
                    <br />
                    {item.text}
                  </p>
                </div>
              </div>
            </BoxClient>
          ))}
        </Marquee>
      </div>

      <div style={{ height: "220px" }}>
        <Marquee direction="ltr" velocity={10}>
          {Item2.map((item) => (
            <BoxClient className="d-flex align-items-center justify-contents-center">
              <div class="d-flex align-items-start justify-content-between">
                <img src={item.photo} fluid alt={item.name}/>
                <div>
                  <h5 className="font-primary color-secondary">{item.name}</h5>
                  <p className="font-secondary color-primary fs-12">
                    <u>
                      <b>{item.jobTitle}</b>
                    </u>
                    <br />
                    {item.text}
                  </p>
                </div>
              </div>
            </BoxClient>
          ))}
        </Marquee>
      </div>
    </>
  );
}
