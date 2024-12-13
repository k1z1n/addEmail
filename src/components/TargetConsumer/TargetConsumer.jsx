import Image from 'next/image';
import targetImage from '../../assets/images/targetConsumer/target.png';

import LikeIcon from '../../assets/icons/LikeIcon';
import SchoolIcon from '../../assets/icons/SchoolIcon';
import GroupIcon from '../../assets/icons/GroupIcon';

const TargetConsumer = () => {
  return(
    <section id="target-consumer" className="target-consumer">
        <div className="container">
          <h2>Для кого подходит?</h2>
        <div className="target-consumer__content">
          <div className="target-consumer__block main-block">
            <div className="icon">
              <LikeIcon/>
            </div>
            <Image className="target-picture" src={targetImage} alt="target image"/>
            <div className="target-consumer__info">
            <h3 className="target-text3">Школьники</h3>
            <p className="target-text">Благодаря подробному методическому комплексу сделать первые шаги в робототехнике проще простого!</p>
            </div>
          </div>
          <div className="target__content-2col">
            <div className="target-consumer__block">
            <div className="icon">
              <SchoolIcon/>
            </div>
            <h3 className=" target-text3">Студенты СУЗов и ВУЗов</h3>
            <p className="target-text">Благодаря большому количеству поддерживаемых языков программирования студенты различных направлений смогут погрузиться в изучение мобильной робототехники!</p>
          </div>
          <div className="target-consumer__block">
          <div className="icon">
              <GroupIcon/>
            </div>
            <h3 className=" target-text3">Слушатели курсов квалификации</h3>
            <p className="target-text">Для проведения курсов преподавателям достаточно обычного кабинета с ноутбуками или стационарными компьютерами, что позволит в том числе проводить онлайн уроки по всему миру!</p>
          </div>
          </div>
        </div>
        </div>
      </section>
  )
}

export default TargetConsumer;