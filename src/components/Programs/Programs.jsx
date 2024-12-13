import Image from "next/image";
import programsImage from '../../assets/images/programs/programs.png';
import PromoButton from "../UI/PromoButton/PromoButton";

const Programs = () => {
  return(
    <section id="projects" className="programs">
    <div className="container">
      <h2>Программы</h2>
      <div className="programs__block">
        <div className="programs__picture">
          <Image src={programsImage} alt="programs image"/>
        </div>
        <div className="programs__content">
          <h3 >Все гениальное — Просто</h3>
          <p className="text programs__content-text">Наш фирменный «Установщик» — сам загрузит и установит выбранный вами программный продукт. Автоматически установит нужные библиотеки и все настроит.</p>
          <a href="https://softv.su/resources/Apps/SoftHub/installers/win/softhub_x64.exe" download>
          <PromoButton text="Скачать SoftHub" section={''} />
        </a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Programs;