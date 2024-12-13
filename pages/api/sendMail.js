import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    const SMTP_HOST = 'smtp.beget.com'; // SMTP сервер Beget
    const SMTP_PORT = 2525; // Порт
    const SMTP_SECURE = false; // Использовать TLS (SSL=false)
    const SMTP_USER = 'test_work@kplatforma.ru'; // Почта отправителя
    const SMTP_PASS = 'niyaz102938ZcBm!'; // Пароль почты
    const TARGET_EMAIL = 'k1z1n@k1z1n.ru'; // Email получателя

    if (req.method === 'POST') {
        const {name, email, subject, message} = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({error: 'Все поля обязательны'});
        }

        try {
            // Настройка SMTP-сервера
            const transporter = nodemailer.createTransport({
                host: SMTP_HOST,
                port: SMTP_PORT,
                secure: SMTP_SECURE,
                auth: {
                    user: SMTP_USER,
                    pass: SMTP_PASS,
                },
            });


            const info = await transporter.sendMail({
                from: `${name}`,
                to: TARGET_EMAIL,
                subject: subject,
                text: `Имя: ${name}\nEmail: ${email}\nСообщение: ${message}`, // Основной текст письма
            });

            console.log('Письмо успешно отправлено:', info.messageId);

            res.status(200).json({message: 'Письмо успешно отправлено!'});
        } catch (error) {
            console.error('Ошибка отправки письма:', error);
            res.status(500).json({error: 'Ошибка при отправке письма'});
        }
    } else {
        res.status(405).json({error: 'Метод не разрешен'});
    }
}