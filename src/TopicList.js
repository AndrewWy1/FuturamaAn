import React, { useState } from 'react';
import img1 from "./images/fifth.png";
import img2 from "./images/second.png";
import img3 from "./images/third.png";
import img4 from "./images/fourth.png";
import img5 from "./images/fifth.png";
import './TopicList.css';


const TopicList = () => {
  const [topics, setTopics] = useState([
    {id: 1, title: 'Центр Підтримки', content:
    <ul>
      <li>Обслуговування клієнтів
        <span>Наша компанія надає широкий спектр послуг з 
          обслуговування клієнтів на пошті, 
          включаючи швидку та надійну відправку та отримання 
          поштових відправлень.</span>
      </li>
      <li>Авторизація/Реєстрація
        <span>Зареєструватися ви можете <a href='#'>тут</a></span>
      </li>
    </ul> },
    { id: 2, title: 'Бізнес', content: <ul>
    <li>Обслуговування бізнес-клієнтів
      <span>Наша компанія спеціалізується на наданні індивідуальних 
        рішень для бізнесу у сфері поштових послуг.</span>
    </li>
    <li>Сервісний гайд
      <ol>
        <li>Підготовка посилок</li>
        <li>Відстеження відправлень</li>
        <li>Комунікація</li>
        <li>Забезпечення безпеки</li>
        <li>Зворотний зв'язок</li>
      </ol>
    </li>
  </ul> },
    { id: 3, title: 'Відправлення Онлайн Зараз', content: <ul>
    <li><a href='#'>Відправлення</a> 
      <span>Ласкаво просимо на нашу сторінку відправлення! Тут ви 
        знайдете все необхідне для швидкої та надійної доставки 
        ваших посилок усіма можливими способами. </span>
    </li>
    <li><a href='#'>Відстеження</a>
      <span>Вітаємо вас на нашій інноваційній сторінці відстеження 
        посилок.</span>
    </li>
  </ul>},
    { id: 4, title: 'Компанія', content:<ul>
    <li>Про нас
      <span>"Futurama" - ваша поштова компанія для майбутнього! Ми 
        пропонуємо передові технології доставки, що відкривають 
        нові горизонти у світі поштових послуг.</span>
    </li>
    <li><a href='#'>Вакансії</a></li>
  </ul>},
    { id: 5, title: 'Новини', content:<ul>
    <li><a href='#'>Новини для клієнтів</a></li>
    <li><a href='#'>Події</a></li>
  </ul> },
  ]);

    const images = [
    { id: 1, src: img1, alt: 'Image 1' },
    { id: 2, src: img2, alt: 'Image 2' },
    { id: 3, src: img3, alt: 'Image 3' },
    { id: 4, src: img4, alt: 'Image 4' },
    { id: 5, src: img5, alt: 'Image 5' }
  ];

  const toggleAccordion = (id) => { 
    setTopics((prevTopics) => (
      prevTopics.map((topic) => ({
        ...topic,
        isOpen: topic.id === id ? !topic.isOpen : topic.isOpen,
      }))
    ));
  };

  return (
    <div className='block'>
      {topics.map((topic) => (
        <div key={topic.id} className='block-container'>
          <button className='btn' onClick={() => toggleAccordion(topic.id)}>
            {images.map((image) => (
              image.id === topic.id && <img src={image.src} alt={image.alt} />
            ))}
            <span>{topic.title}</span>
          </button>
          {topic.isOpen && <span>{topic.content}</span>}
        </div>
      ))}
    </div>
  );
};

export default TopicList;