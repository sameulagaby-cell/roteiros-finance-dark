import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 antialiased">
      {/* HERO */}
      <section className="px-6 pt-24 pb-20 max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-red-500 mb-6">
          Roteiros TikTok · Reels · YouTube Shorts
        </p>
        <h1 className="text-5xl md:text-6xl font-light leading-tight tracking-tight mb-8">
          Você é manipulado por um número.
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-12 max-w-2xl">
          Roteiros virais de 30 segundos sobre finanças pessoais em tom dark
          cinema. Geramos hook + núcleo + CTA + notas de gravação em 60
          segundos. R$ 5 cada. Sem assinatura.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="#comprar"
            className="inline-flex items-center justify-center bg-zinc-100 text-black px-8 py-4 font-medium hover:bg-white transition-colors"
          >
            Comprar roteiro · R$ 5
          </Link>
          <Link
            href="#exemplo"
            className="inline-flex items-center justify-center border border-zinc-700 text-zinc-100 px-8 py-4 font-medium hover:border-zinc-500 transition-colors"
          >
            Ver exemplo grátis
          </Link>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="px-6 py-20 max-w-3xl mx-auto border-t border-zinc-900">
        <h2 className="text-xs uppercase tracking-widest text-zinc-500 mb-12">
          Como funciona
        </h2>
        <div className="space-y-12">
          <div>
            <p className="text-zinc-600 text-sm mb-2">01</p>
            <h3 className="text-2xl font-light mb-3">Você escolhe um tema</h3>
            <p className="text-zinc-400 leading-relaxed">
              Ancoragem em preços. Inflação escondida. Como bancos lucram com
              dinheiro parado. Psicologia do consumo. Padrões dos super-ricos.
              Qualquer ângulo dark de finanças pessoais.
            </p>
          </div>
          <div>
            <p className="text-zinc-600 text-sm mb-2">02</p>
            <h3 className="text-2xl font-light mb-3">Paga R$ 5</h3>
            <p className="text-zinc-400 leading-relaxed">
              Cartão, PIX ou PayPal — processamento via Lemon Squeezy. Sem
              assinatura, sem retenção de dados. Pago uma vez, recebe pra
              sempre.
            </p>
          </div>
          <div>
            <p className="text-zinc-600 text-sm mb-2">03</p>
            <h3 className="text-2xl font-light mb-3">Recebe em 60 segundos</h3>
            <p className="text-zinc-400 leading-relaxed">
              Roteiro completo no email: gancho 1-2s, núcleo 25-55s, CTA
              provocativa, lista de pausas estratégicas, música sugerida,
              hashtags. Pronto pra gravar.
            </p>
          </div>
        </div>
      </section>

      {/* EXEMPLO */}
      <section id="exemplo" className="px-6 py-20 max-w-3xl mx-auto border-t border-zinc-900">
        <h2 className="text-xs uppercase tracking-widest text-zinc-500 mb-8">
          Exemplo · Roteiro 30s
        </h2>
        <div className="bg-zinc-950 border border-zinc-900 p-8 mb-6">
          <p className="text-xs uppercase tracking-widest text-red-500 mb-4">
            HOOK · 2s
          </p>
          <p className="text-2xl font-light mb-8 leading-relaxed">
            Você é manipulado por um número.
          </p>

          <p className="text-xs uppercase tracking-widest text-red-500 mb-4">
            NÚCLEO · 25s
          </p>
          <p className="text-base text-zinc-300 leading-relaxed mb-8">
            Eu te mostro cinco mil reais. Depois mostro oitocentos. O segundo
            parece barato. Agora inverte. Mostro oitenta reais primeiro.
            Depois oitocentos. Oitocentos vira um roubo. O preço não mudou.
            Seu cérebro mudou. Chama-se ancoragem. Tversky e Kahneman provaram
            em 1974. Lojas, médicos, advogados, restaurantes usam isso todo
            dia. Em você. Sem você ver.
          </p>

          <p className="text-xs uppercase tracking-widest text-red-500 mb-4">
            CTA · 2s
          </p>
          <p className="text-xl font-light italic text-zinc-100">
            Quem ancora você?
          </p>
        </div>
        <p className="text-sm text-zinc-500">
          Framework: Schwartz pattern interrupt · Tom: Mr Robot · Música
          sugerida: drone cello em A menor
        </p>
      </section>

      {/* PRICING */}
      <section id="comprar" className="px-6 py-20 max-w-3xl mx-auto border-t border-zinc-900">
        <h2 className="text-xs uppercase tracking-widest text-zinc-500 mb-12">
          Comprar
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-zinc-900 p-8 hover:border-zinc-700 transition-colors">
            <p className="text-xs uppercase tracking-widest text-zinc-500 mb-3">
              Single
            </p>
            <p className="text-4xl font-light mb-2">R$ 5</p>
            <p className="text-zinc-500 text-sm mb-8">1 roteiro · 30s</p>
            <button
              className="w-full bg-zinc-100 text-black py-3 font-medium hover:bg-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              disabled
            >
              Em breve
            </button>
          </div>
          <div className="border-2 border-red-500 p-8 relative">
            <p className="absolute -top-3 left-8 bg-black text-red-500 px-2 text-xs uppercase tracking-widest">
              Mais escolhido
            </p>
            <p className="text-xs uppercase tracking-widest text-zinc-500 mb-3">
              Pack 5
            </p>
            <p className="text-4xl font-light mb-2">R$ 20</p>
            <p className="text-zinc-500 text-sm mb-8">5 roteiros · mesmo nicho</p>
            <button
              className="w-full bg-red-500 text-white py-3 font-medium hover:bg-red-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              disabled
            >
              Em breve
            </button>
          </div>
          <div className="border border-zinc-900 p-8 hover:border-zinc-700 transition-colors">
            <p className="text-xs uppercase tracking-widest text-zinc-500 mb-3">
              Pack 15
            </p>
            <p className="text-4xl font-light mb-2">R$ 50</p>
            <p className="text-zinc-500 text-sm mb-8">15 roteiros · 3 nichos</p>
            <button
              className="w-full bg-zinc-100 text-black py-3 font-medium hover:bg-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              disabled
            >
              Em breve
            </button>
          </div>
        </div>
        <p className="text-zinc-600 text-xs mt-8">
          Pagamento via Lemon Squeezy · Roteiro chega no email · Sem
          assinatura · Reembolso 7 dias
        </p>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-12 max-w-3xl mx-auto border-t border-zinc-900 text-zinc-600 text-sm flex flex-col sm:flex-row sm:justify-between gap-4">
        <p>© 2026 Roteiros Finance Dark</p>
        <p>Powered by Claude · Hosted on Vercel</p>
      </footer>
    </main>
  );
}
