const notes = [
  { title: 'Промтинг: от базового до продвинутого', text: 'Few-shot, алгоритм анализа, критерии решения и работа с контекстом — с примерами задач АПК.', file: '/knowledge/prompting' },
  { title: 'ИИ-чаты и ИИ-агенты', text: 'Когда достаточно чата, когда нужен агент и как сохранить контроль над действиями и данными.', file: '/knowledge/chats-and-agents' },
  { title: 'Open-source модели', text: 'Что значит локальная модель, какие границы у такого контура и с чего начинать без лишней сложности.', file: '/knowledge/open-models' },
];

export default function KnowledgePage() {
  return <main><div className="field-stripe" /><div className="subpage">
    <a className="back-link" href="/">← На главную</a>
    <header><p className="kicker">Заметки для участников</p><h1>Понимать инструмент до запуска.</h1><p className="lead">Короткие материалы помогают выбрать способ работы с ИИ, задать задачу и не передать в сервис больше, чем необходимо.</p></header>
    <section className="article-grid">{notes.map((note) => <article className="article-card" key={note.title}><p className="kicker">Материал</p><h2>{note.title}</h2><p>{note.text}</p><a href={note.file}>Читать материал →</a></article>)}</section>
    <section className="section"><p className="kicker">Переход к практике</p><h2>Знание становится полезным в конкретной задаче.</h2><a className="button primary" href="/cases/">Открыть каталог кейсов</a></section>
  </div></main>;
}
