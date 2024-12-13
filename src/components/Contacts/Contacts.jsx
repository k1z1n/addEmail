import { useState } from 'react';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Отправка...');

    try {
      const response = await fetch('http://localhost:3000/api/sendMail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Сообщение успешно отправлено!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const { error } = await response.json();
        setStatus(`Ошибка: ${error}`);
      }
    } catch (error) {
      console.error('Ошибка отправки:', error);
      setStatus('Ошибка отправки.');
    }
  };

  return (
      <section id="forms" className="forms">
        <div className="container">
          <h2 className="form-title">Оставьте нам заявку</h2>
          <p className="form-subtitle">
            Свяжемся с вами в течение рабочего дня
          </p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={handleChange}
                  required
              />
              <input
                  type="email"
                  name="email"
                  placeholder="Ваш эл. адрес"
                  value={formData.email}
                  onChange={handleChange}
                  required
              />
              <input
                  type="text"
                  name="subject"
                  placeholder="Тема сообщения"
                  value={formData.subject}
                  onChange={handleChange}
                  required
              />
            </div>
            <div className="form-group">
            <textarea
                name="message"
                placeholder="Ваше сообщение"
                value={formData.message}
                onChange={handleChange}
                required
            ></textarea>
            </div>
            <div className="form-footer">
              <p>
                Нажимая на кнопку, я соглашаюсь на обработку{' '}
                <a href="#">персональных данных</a> и с{' '}
                <a href="#">правилами пользования Платформой</a>
              </p>
              <button type="submit">Отправить</button>
            </div>
          </form>
          <p>{status}</p>
        </div>
      </section>
  );
};

export default Contacts;