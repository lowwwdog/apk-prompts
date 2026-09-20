const notes = [
  { title: 'Промтинг: от базового до продвинутого', text: 'Few-shot, алгоритм анализа, критерии решения и работа с контекстом — с примерами задач АПК.', file: '/notes/промтинг%20%5Bспособы%20промтить%20от%20базового%20до%20продвину%203e0453debaad80568b54cf89a9afc853.md' },
  { title: 'ИИ-чаты и ИИ-агенты', text: 'Когда достаточно чата, когда нужен агент и как сохранить контроль над действиями и данными.', file: '/notes/ии-чаты%20vs%20ии-агенты%203e0453debaad80528bc0f62cb75289f7.md' },
  { title: 'Open-source модели', text: 'Что значит локальная модель, какие границы у такого контура и с чего начинать без лишней сложности.', file: '/notes/opensource%20ИИ-модели%20что%20это%20и%20как%20работать%203e0453debaad808baa16c8e8f335b56d.md' },
];

export default function KnowledgePage() {
  return <main><div className="field-stripe" /><div className="subpage">
    <a className="back-link" href="/">← На главную</a>
    <header><p className="kicker">Заметки для участников</p><h1>Понимать инструмент до запуска.</h1><p className="lead">Короткие материалы помогают выбрать способ работы с ИИ, задать задачу и не передать в сервис больше, чем необходимо.</p></header>
    <section className="article-grid">{notes.map((note) => <article className="article-card" key={note.title}><p className="kicker">Материал</p><h2>{note.title}</h2><p>{note.text}</p><a href={note.file} target="_blank" rel="noreferrer">Открыть заметку →</a></article>)}</section>
    <section className="section"><p className="kicker">Переход к практике</p><h2>Знание становится полезным в конкретной задаче.</h2><a className="button primary" href="/cases/">Открыть каталог кейсов</a></section>
  </div></main>;
}
