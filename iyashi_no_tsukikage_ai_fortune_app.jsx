export default function IyashiFortuneApp() {
  const fortunes = [
    "あなたは今、少し心が疲れているようです。無理に頑張らなくても大丈夫。静かな夜は、あなたに優しい運気を運んできます。",
    "焦らなくても、運命はゆっくり動いています。月が満ちるように、あなたの未来も少しずつ整っていくでしょう。",
    "今日は、自分を責めないことが大切です。あなたの優しさは、ちゃんと誰かに届いています。",
    "今夜は、心を休める時間を作ってください。温かい飲み物と静かな音楽が、運気を整えてくれます。",
    "新しい流れが近づいています。不安よりも、小さな楽しみを大切にすると、幸運が引き寄せられるでしょう。"
  ];

  const getFortune = () => {
    const random = fortunes[Math.floor(Math.random() * fortunes.length)];
    const result = document.getElementById('result');
    result.innerText = random;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">🌙</div>
          <h1 className="text-3xl font-bold mb-2">今夜の癒し占い</h1>
          <p className="text-slate-300 text-sm leading-relaxed">
            月灯りのように、あなたの心をやさしく照らします。
          </p>
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <label className="block mb-2 text-sm text-slate-300">お名前</label>
            <input
              type="text"
              placeholder="お名前を入力"
              className="w-full rounded-2xl bg-white/20 border border-white/20 p-3 outline-none placeholder:text-slate-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-slate-300">生年月日</label>
            <input
              type="date"
              className="w-full rounded-2xl bg-white/20 border border-white/20 p-3 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-slate-300">今の気持ちや悩み</label>
            <textarea
              placeholder="心の中を書いてみてください"
              rows={4}
              className="w-full rounded-2xl bg-white/20 border border-white/20 p-3 outline-none placeholder:text-slate-400"
            />
          </div>
        </div>

        <button
          onClick={getFortune}
          className="w-full bg-yellow-400 text-slate-900 font-semibold py-3 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg"
        >
          月灯りを受け取る
        </button>

        <div className="mt-8 bg-white/10 rounded-2xl p-5 border border-white/10 min-h-[140px] flex items-center">
          <p id="result" className="text-slate-100 leading-relaxed text-center w-full">
            あなたへのメッセージがここに表示されます。
          </p>
        </div>

        <div className="text-center mt-6 text-xs text-slate-400">
          また疲れた夜に、月灯りを見に来てください。
        </div>
      </div>
    </div>
  );
}
