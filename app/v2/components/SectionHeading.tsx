export function SectionHeading({
  id,
  index,
  title,
  note,
}: {
  id: string;
  index: string;
  title: string;
  note?: string;
}) {
  return (
    <header className="section-head">
      <span className="section-head__index mono">{index}</span>
      <div className="section-head__main">
        <h2 id={id}>{title}</h2>
        {note ? <p>{note}</p> : null}
      </div>
    </header>
  );
}
