import Image from "next/image";
import feature1 from '../../assets/images/features/adv1.svg';
import feature2 from '../../assets/images/features/adv2.svg';
import feature3 from '../../assets/images/features/adv3.svg';

const Features = () => {
  return(
    <section id="services" className="advantages">
    <div className="container">
      <h2 >Преимущества Robocad V</h2>
      <div className="advantages__blocks">
        <Image src={feature1} alt="Уникальность"/>
        <Image src={feature2} alt="Стоимость"/>
        <Image src={feature3} alt="Качество"/>
      </div>
        </div>
      </section>
  )
}

export default Features;