import { VERSION_TYPES } from "../../storage/VersionTypes";
import ActionButton from "../UI/ActionButton/ActionButton";
import Image from "next/image";
import PromoButton from "../UI/PromoButton/PromoButton";
import blockImage from '../../assets/images/versions/block-versions.png'

const Versions = () => {
  return (
    <section id="versions" className="versions">
      <div className="container">
        <h2>Ключевые различия версий</h2>
        <div className="versions__blocks">
          {VERSION_TYPES.map((item)=>{
            return(
              <div className={`block ${item.class}`} key={item.id}>
              <p className="version_name">{item.title}</p>
              <p className="version_price">По запросу</p>
              <a
                href="https://t.me/SoftVsupport_bot"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              <ActionButton text="Оформить версию" />
  
              <div className="version__options">
                {item.options.map((option)=>{
                  return(
                    <div className="version_option" key={option.id}>
                    <Image src={option.icon} alt={option.text} />
                    <p>
                      {option.text}
                    </p>
                  </div>
                  )
                })}
              </div>
            </div>
            )
          })}
        
          <div className="economy_panel">
            <p className="economy_panel-big"> &gt; 10 раз </p>
            <p className="economy_panel-little">
              экономия возрастает на 1 рабочее место
            </p>
          </div>
          <div className="license-banner">
            <div className="license-banner-left">
              <p>Выберите лицензию, подходящую вам!</p>
              <a
                href="https://t.me/SoftVsupport_bot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PromoButton text="DEMO (Telegram)"/>
              </a>
            </div>
            <div className="license-banner-right">
              <Image src={blockImage} alt="arrow icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Versions;
