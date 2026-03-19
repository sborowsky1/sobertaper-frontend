type SectionIntroProps = {
  title: string;
  body: string;
};

export default function SectionIntro({ title, body }: SectionIntroProps) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl font-bold text-white">{title}</h2>
      <p className="mt-3 text-slate-400">{body}</p>
    </div>
  );
}