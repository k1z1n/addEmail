import Image from 'next/image';
import bunnerImage from '../../assets/images/intro/intro.png';
import PromoButton from '../UI/PromoButton/PromoButton';

const Intro = () => {
  return(
    <section id="info" className="info">
        <div className="container">
            <div className="info-content">
                <div className='info-content__inner'>
                    <h1>Robocad V</h1>
                    <p className="info-text">
                      Позволяет обучаться, практиковаться и повышать свои навыки в робототехнике
                      <br></br>
                      По доступной цене</p>
                   <PromoButton text="Выбрать программу" section="#versions"  />
                </div>
                <div className="info-picture">
                    <Image src={bunnerImage} alt="bunner image"/>
                </div>
            </div>
        </div>
      </section>
  )
}
export default Intro;