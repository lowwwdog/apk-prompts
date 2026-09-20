const contacts = [
  { name: 'Дамир Байжуминов', phone: '+7 966 36 888 68', tel: '+79663688868', tg: 'Damir_bai', email: 'Damir.baizhuminov@yandex.ru', photo: '1.jpg', max: false },
  { name: 'Азиз Султанов', phone: '+7 902 817 00 83', tel: '+79028170083', tg: 'aziweb', email: 'bwwwoy@gmail.com', photo: '2.png', max: false },
  { name: 'Ильхом Султанов', phone: '+7 909 712 14 56', tel: '+79097121456', tg: 'ilhom_upgrade', email: '', photo: '3.jpg', max: false },
  { name: '@itsvoytin', phone: '+7 919 861 76 16', tel: '+79198617616', tg: 'itsvoytin', email: '', photo: '4.jpg', max: true },
  { name: '@drobovikaa', phone: '+7 916 615 10 18', tel: '+79166151018', tg: 'drobovikaa', email: 'vikalevshina@yandex.ru', photo: '5.jpg', max: false },
];

const routes = [
  { number: '01', title: 'Разобраться с задачей', description: 'Найдите готовый кейс, адаптируйте промпт и получите проверяемый черновик.', href: '/cases/', action: 'Открыть библиотеку кейсов' },
  { number: '02', title: 'Собрать рабочий способ', description: 'Используйте тетрадь: как сформулировать запрос, защитить данные и закрепить результат.', href: '/workbook.html', action: 'Открыть рабочую тетрадь' },
  { number: '03', title: 'Запустить пилот в организации', description: 'Определите владельца, данные, границы доступа, метрику эффекта и стоп-критерий.', href: '/implementation', action: 'Спланировать пилот' },
];

const clusters = [
  ['Документы и знания', 'Протоколы, письма, RAG, NotebookLM, проверка правил'],
  ['Данные и аналитика', 'Excel, 1С, ERP, финансовые модели, дашборды'],
  ['Коммуникации и контент', 'Презентации, визуал, ассистенты, обучение'],
  ['Процессы и интеграции', 'Skills, агенты, безопасные пилоты, Git'],
  ['Специальные решения АПК', 'Компьютерное зрение, производство, генетические данные'],
];

export default function Home() {
  return <main>
    <div className="field-stripe" aria-hidden="true" />
    <div className="shell">
      <nav className="top-nav" aria-label="Разделы портала">
        <a className="brand" href="/">ИИ × АПК</a>
        <div className="nav-links"><a href="/cases/">Кейсы</a><a href="/knowledge">Знания</a><a href="#contacts">Контакты</a><a href="/implementation">Внедрение</a><a href="/downloads/Методичка_Внедрение_ИИ_на_производстве_финальная.docx" download>Методичка</a></div>
      </nav>
      <header className="hero">
        <div>
          <p className="kicker">Единый портал для участников и команд АПК</p>
          <h1>От первого запроса<br />к работающему пилоту.</h1>
          <p className="hero-copy">Кейсы, рабочая тетрадь и методические материалы собраны в одном маршруте. Начните с понятной задачи, а не с выбора технологии.</p>
          <div className="hero-actions"><a className="button primary" href="/cases/">Найти свой кейс</a><a className="button quiet" href="/implementation">Спланировать внедрение</a></div>
        </div>
        <aside className="safety-card"><p className="kicker">Перед началом</p><ol><li><b>Данные:</b> их разрешено передавать в выбранный сервис?</li><li><b>Проверка:</b> кто подтвердит важный результат?</li><li><b>Граница:</b> что ИИ не должен делать самостоятельно?</li></ol></aside>
      </header>
      <section className="section" aria-labelledby="route-title">
        <div className="section-head"><p className="kicker">Три пути</p><h2 id="route-title">Выберите формат работы</h2></div>
        <div className="route-grid">{routes.map((route) => <article className="route-card" key={route.number}><span className="route-number">{route.number}</span><h3>{route.title}</h3><p>{route.description}</p><a href={route.href}>{route.action} <span aria-hidden="true">→</span></a></article>)}</div>
      </section>
      <section className="section split-section" aria-labelledby="cases-title">
        <div><p className="kicker">Библиотека решений</p><h2 id="cases-title">40 кейсов — не 40 разрозненных промптов</h2><p className="section-copy">Каталог помогает выбрать тему, сервис и формат результата: сделать самостоятельно, внедрить в организации или собрать MVP через вайбкодинг.</p><a className="text-link" href="/cases/">Перейти к фильтрам и кейсам →</a></div>
        <div className="cluster-list" aria-label="Кластеры кейсов">{clusters.map(([title, description]) => <div className="cluster" key={title}><h3>{title}</h3><p>{description}</p></div>)}</div>
      </section>
      <section className="section resource-band" aria-labelledby="resources-title">
        <div className="section-head"><p className="kicker">Материалы</p><h2 id="resources-title">Развивайте практику, а не только промпт</h2></div>
        <div className="resource-grid">
          <a className="resource-card" href="/workbook.html"><span>Рабочая тетрадь</span><strong>Запрос, данные, контур, привычки</strong><small>Практическая страница для ежедневной работы</small></a>
          <a className="resource-card" href="/knowledge"><span>Заметки участникам</span><strong>Промтинг, агенты и open-source модели</strong><small>Короткие объяснения и примеры для АПК</small></a>
          <a className="resource-card" href="/downloads/Методичка_Внедрение_ИИ_на_производстве_финальная.docx" download><span>Методичка</span><strong>Внедрение ИИ на производстве</strong><small>Скачать DOCX</small></a>
        </div>
      </section>
      <section className="next-step" aria-labelledby="next-title"><div><p className="kicker">Следующий шаг</p><h2 id="next-title">Одна задача. Один владелец. Один измеримый результат.</h2></div><a className="button primary" href="/implementation">Собрать паспорт пилота</a></section>
      <section className="section contacts-section" id="contacts" aria-labelledby="contacts-title">
        <div className="section-head"><p className="kicker">На связи</p><h2 id="contacts-title">Контакты</h2></div>
        <div className="contacts-grid">{contacts.map((person) => <article className="contact-card" key={person.tg}>
          <img className="contact-photo" src={'/contacts/' + person.photo} alt={person.name} loading="lazy" width="480" height="540" />
          <div className="contact-info"><h3>{person.name}</h3><a href={'tel:' + person.tel}>{person.phone}</a><a href={'https://t.me/' + person.tg} target="_blank" rel="noopener noreferrer">Telegram · @{person.tg}</a>{person.email && <a href={'mailto:' + person.email}>{person.email}</a>}{person.max && <span className="contact-max">MAX · {person.phone}</span>}</div>
        </article>)}</div>
      </section>
      <footer className="footer"><span>Портал ИИ × АПК</span><span>Прототип для согласования</span></footer>
    </div>
  </main>;
}
