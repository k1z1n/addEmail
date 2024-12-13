import Image from "next/image";
import icon1 from "../../assets/images/facilities/eye.svg";
import icon2 from "../../assets/images/facilities/processor.svg";
import icon3 from "../../assets/images/facilities/verify.svg";

import img1 from "../../assets/images/facilities/languages.svg";
import img2 from "../../assets/images/facilities/constructors.svg";
import img3 from "../../assets/images/facilities/IDE.svg";

const Facilities = () => {
  return (
    <section className="facilities">
      <div className="container">
        <h2>Возможности</h2>
        <p className="facilities-text">
          Все типы лицензий поддерживают следующий функционал:
        </p>
        <div className="facilities__inner">
          <div className="facilities__item">
            <div className="item__title">
              <Image src={icon1} alt="icon 1" />
              <h4>Собственная система мониторинга и контроля роботов</h4>
            </div>
            <div className="item__text">
              <p className="text">
                Собственные прошивки позволяют использовать востребованные
                языкипрограммирования, такие как{" "}
                <span>
                  Python, Java, C#, C++, LabView, блочный код и другие.
                </span>
              </p>
              <p className="text">
                Методическое пособие, рассчитаное на 3 возрастные категорий{" "}
                <span>по 48 часов</span> <br />
                (144 суммарно), для школ, колледжей и ВУЗов. Уроки и упражнения
                на всех заявленных языках программирования.
              </p>
            </div>
            <Image src={img1} alt="programming languages" />
          </div>

          <div className="facilities__item">
            <div className="item__title">
              <Image src={icon2} alt="icon 2" />
              <h4>Цифровой двойник программно-аппаратной части </h4>
            </div>
            <div className="item__text">
            <p className="text">
              Включает поддержку самых популярных в России конструкторов, таких
              как <span>Studica, VEX, Tetrix и другие.</span>
            </p>
            <p className="text">
              Создание и редактирование испытательных полигонов осуществляется
              при помощи редактора логики, библиотеки шаблонов сцен и объектов..
            </p>
            </div>
            
            <Image src={img2} alt="constructors" />
          </div>

          <div className="facilities__item">
            <div className="item__title">
              <Image src={icon3} alt="icon 3" />
              <h4>Контроль процесса обучения</h4>
            </div>

            <div className="item__text">
            <p className="text">
              <span>Поддержка внешних IDE,</span> выбирайте любимый язык и
              программируйте на том, что вам наиболее удобно!
            </p>
            <p className="text">
              Собственный загрузчик обеспечит онлайн-обновления, легкий старт и
              настройку всего необходимого — от установки IDE и первого
              включения, до перепрошивки контроллера и практического пуска.
            </p>
            </div>
            
            <Image src={img3} alt="ide" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Facilities;
