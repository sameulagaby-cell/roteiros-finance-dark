import Link from "next/link";

const ACCENT = "text-[#DC1E1E]";

export default function Home() {
  return (
    <>
      {/* TOP RULE — editorial marker */}
      <header className="border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-[0.2em]">
          <p className="text-zinc-500">Roteiros Finance Dark</p>
          <p className={`${ACCENT}`}>Status · Pré-lançamento</p>
        </div>
      </header>

      <main className="flex-1">
        {/* HERO — asymmetric, editorial */}
        <section className="border-b border-zinc-900">
          <div className="max-w-6xl mx-auto px-6 pt-24 pb-32 grid grid-cols-12 gap-x-6">
            <div className="col-span-12 md:col-span-1 md:order-2 md:text-right">
              <p className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-[0.2em] text-zinc-600">
                Ed. 001
              </p>
            </div>
            <div className="col-span-12 md:col-span-11 md:order-1">
              <p className={`text-[11px] font-[family-name:var(--font-mono)] uppercase tracking-[0.25em] mb-10 ${ACCENT}`}>
                Roteiros TikTok · Reels · YouTube Shorts
              </p>
              <h1 className="font-[family-name:var(--font-serif)] italic text-[clamp(2.75rem,8vw,7rem)] leading-[0.95] tracking-tight text-zinc-100 mb-12 max-w-5xl">
                Você é manipulado
                <br />
                por um número.
              </h1>
              <div className="grid grid-cols-12 gap-x-6">
                <div className="hidden md:block md:col-span-3" />
                <p className="col-span-12 md:col-span-7 text-lg leading-relaxed text-zinc-400 mb-12 max-w-[55ch]">
                  Roteiros virais de 30 segundos sobre dinheiro, psicologia
                  financeira e padrões dos super-ricos. Tom Mr Robot.
                  Entrega em 60 segundos. R$ 5 cada.
                </p>
              </div>
              <div className="grid grid-cols-12 gap-x-6">
                <div className="hidden md:block md:col-span-3" />
                <div className="col-span-12 md:col-span-9 flex flex-col sm:flex-row gap-px bg-zinc-900">
                  <Link
                    href="#comprar"
                    className="inline-flex items-center justify-between bg-zinc-100 text-black px-8 py-5 font-[family-name:var(--font-mono)] uppercase text-[11px] tracking-[0.2em] hover:bg-white transition-colors flex-1"
                  >
                    <span>Comprar roteiro</span>
                    <span className="ml-8">R$ 5 →</span>
                  </Link>
                  <Link
                    href="#exemplo"
                    className="inline-flex items-center justify-between bg-black border border-zinc-800 text-zinc-200 px-8 py-5 font-[family-name:var(--font-mono)] uppercase text-[11px] tracking-[0.2em] hover:border-zinc-500 hover:text-white transition-colors flex-1"
                  >
                    <span>Exemplo grátis</span>
                    <span className="ml-8">↓</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* METODOLOGIA — fórmula editorial */}
        <section className="border-b border-zinc-900">
          <div className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-12 gap-x-6">
            <div className="col-span-12 md:col-span-3 mb-10 md:mb-0">
              <p className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-[0.25em] text-zinc-500">
                § Metodologia
              </p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="font-[family-name:var(--font-serif)] italic text-4xl md:text-5xl leading-tight text-zinc-100 mb-12 max-w-3xl">
                Cada roteiro carrega três cargas.
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900">
                <div className="bg-black p-8">
                  <p className={`text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-[0.25em] mb-6 ${ACCENT}`}>
                    Carga 01
                  </p>
                  <p className="font-[family-name:var(--font-serif)] italic text-2xl mb-4 text-zinc-100">
                    Número
                  </p>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    Estatística que para o scroll. 80%. R$ 5 mil. 3 segundos.
                  </p>
                </div>
                <div className="bg-black p-8">
                  <p className={`text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-[0.25em] mb-6 ${ACCENT}`}>
                    Carga 02
                  </p>
                  <p className="font-[family-name:var(--font-serif)] italic text-2xl mb-4 text-zinc-100">
                    Lei · Ano · Autoridade
                  </p>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    Tversky 1974. Lei de Miller. Goldman Sachs 2024. O
                    verificável.
                  </p>
                </div>
                <div className="bg-black p-8">
                  <p className={`text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-[0.25em] mb-6 ${ACCENT}`}>
                    Carga 03
                  </p>
                  <p className="font-[family-name:var(--font-serif)] italic text-2xl mb-4 text-zinc-100">
                    Cotidiano
                  </p>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    Loja. Médico. Supermercado. Cartão. O viewer no
                    espelho.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXEMPLO — leitura editorial */}
        <section id="exemplo" className="border-b border-zinc-900">
          <div className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-12 gap-x-6">
            <div className="col-span-12 md:col-span-3 mb-10 md:mb-0">
              <p className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-[0.25em] text-zinc-500">
                § Amostra · 30s
              </p>
            </div>
            <article className="col-span-12 md:col-span-9 border-l border-zinc-900 pl-8">
              <div className="space-y-12 max-w-2xl">
                <div>
                  <p className={`text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-[0.25em] mb-4 ${ACCENT}`}>
                    Hook · 2s · 6 palavras
                  </p>
                  <p className="font-[family-name:var(--font-serif)] italic text-3xl md:text-4xl leading-tight text-zinc-100">
                    Você é manipulado por um número.
                  </p>
                </div>

                <div>
                  <p className={`text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-[0.25em] mb-4 ${ACCENT}`}>
                    Núcleo · 25s · 56 palavras
                  </p>
                  <p className="text-base md:text-lg leading-[1.75] text-zinc-300">
                    Eu te mostro cinco mil reais. Depois mostro oitocentos.
                    O segundo parece barato. Agora inverte. Mostro oitenta
                    reais primeiro. Depois oitocentos. Oitocentos vira um
                    roubo. O preço não mudou. Seu cérebro mudou. Chama-se
                    ancoragem. Tversky e Kahneman provaram em 1974. Lojas,
                    médicos, advogados, restaurantes usam isso todo dia. Em
                    você. Sem você ver.
                  </p>
                </div>

                <div>
                  <p className={`text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-[0.25em] mb-4 ${ACCENT}`}>
                    CTA · 2s · 4 palavras
                  </p>
                  <p className="font-[family-name:var(--font-serif)] italic text-2xl md:text-3xl text-zinc-100">
                    Quem ancora você?
                  </p>
                </div>

                <dl className="border-t border-zinc-900 pt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                  <div className="flex justify-between border-b border-zinc-900 pb-2">
                    <dt className="text-zinc-600 uppercase text-[10px] font-[family-name:var(--font-mono)] tracking-widest">
                      Framework
                    </dt>
                    <dd className="text-zinc-300">Schwartz · Pattern interrupt</dd>
                  </div>
                  <div className="flex justify-between border-b border-zinc-900 pb-2">
                    <dt className="text-zinc-600 uppercase text-[10px] font-[family-name:var(--font-mono)] tracking-widest">
                      Voz
                    </dt>
                    <dd className="text-zinc-300">Mr Robot · Tom baixo</dd>
                  </div>
                  <div className="flex justify-between border-b border-zinc-900 pb-2">
                    <dt className="text-zinc-600 uppercase text-[10px] font-[family-name:var(--font-mono)] tracking-widest">
                      Música sugerida
                    </dt>
                    <dd className="text-zinc-300">Drone cello · A menor</dd>
                  </div>
                  <div className="flex justify-between border-b border-zinc-900 pb-2">
                    <dt className="text-zinc-600 uppercase text-[10px] font-[family-name:var(--font-mono)] tracking-widest">
                      Pausa estratégica
                    </dt>
                    <dd className="text-zinc-300">14s · após "ancoragem"</dd>
                  </div>
                </dl>
              </div>
            </article>
          </div>
        </section>

        {/* FLUXO — 3 passos editoriais */}
        <section className="border-b border-zinc-900">
          <div className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-12 gap-x-6">
            <div className="col-span-12 md:col-span-3 mb-10 md:mb-0">
              <p className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-[0.25em] text-zinc-500">
                § Fluxo
              </p>
            </div>
            <div className="col-span-12 md:col-span-9 space-y-px bg-zinc-900">
              {[
                {
                  num: "01",
                  title: "Você escolhe um tema",
                  body: "Ancoragem em preços. Inflação escondida. Como bancos lucram com dinheiro parado. Psicologia do consumo. Padrões dos super-ricos.",
                },
                {
                  num: "02",
                  title: "Paga R$ 5",
                  body: "Cartão, PIX ou PayPal via Lemon Squeezy. Sem assinatura. Sem retenção de dados. Pago uma vez, roteiro seu.",
                },
                {
                  num: "03",
                  title: "Recebe em 60 segundos",
                  body: "Hook 1-2s. Núcleo 25-55s. CTA provocativa. Notas de gravação. Música sugerida. Hashtags. Pronto pra gravar.",
                },
              ].map((step) => (
                <div
                  key={step.num}
                  className="bg-black grid grid-cols-12 gap-x-6 py-8 hover:bg-zinc-950 transition-colors"
                >
                  <p className="col-span-2 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.25em] text-zinc-600 pt-1">
                    {step.num}
                  </p>
                  <h3 className="col-span-10 md:col-span-3 font-[family-name:var(--font-serif)] italic text-xl text-zinc-100">
                    {step.title}
                  </h3>
                  <p className="col-span-12 md:col-span-7 text-sm text-zinc-400 leading-relaxed mt-3 md:mt-0">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING — tabela editorial */}
        <section id="comprar" className="border-b border-zinc-900">
          <div className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-12 gap-x-6">
            <div className="col-span-12 md:col-span-3 mb-10 md:mb-0">
              <p className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-[0.25em] text-zinc-500">
                § Comprar
              </p>
              <p className="text-xs text-zinc-600 mt-3 max-w-[20ch]">
                Reembolso 7 dias · Roteiro chega no email
              </p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-y border-zinc-900">
                    <th className="text-left py-4 font-[family-name:var(--font-mono)] uppercase text-[10px] tracking-[0.25em] text-zinc-600 w-1/3">
                      Edição
                    </th>
                    <th className="text-left py-4 font-[family-name:var(--font-mono)] uppercase text-[10px] tracking-[0.25em] text-zinc-600">
                      Conteúdo
                    </th>
                    <th className="text-right py-4 font-[family-name:var(--font-mono)] uppercase text-[10px] tracking-[0.25em] text-zinc-600 w-24">
                      Preço
                    </th>
                    <th className="text-right py-4 font-[family-name:var(--font-mono)] uppercase text-[10px] tracking-[0.25em] text-zinc-600 w-32">
                      Ação
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      title: "Single",
                      desc: "1 roteiro · 30s",
                      price: "R$ 5",
                      featured: false,
                    },
                    {
                      title: "Pack 5",
                      desc: "5 roteiros · mesmo nicho",
                      price: "R$ 20",
                      featured: true,
                    },
                    {
                      title: "Pack 15",
                      desc: "15 roteiros · 3 nichos",
                      price: "R$ 50",
                      featured: false,
                    },
                  ].map((row) => (
                    <tr
                      key={row.title}
                      className="border-b border-zinc-900"
                    >
                      <td className="py-8 align-top">
                        <p className="font-[family-name:var(--font-serif)] italic text-2xl text-zinc-100">
                          {row.title}
                        </p>
                        {row.featured && (
                          <p className={`text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-[0.25em] mt-1 ${ACCENT}`}>
                            Mais escolhido
                          </p>
                        )}
                      </td>
                      <td className="py-8 align-top text-zinc-400 text-sm">
                        {row.desc}
                      </td>
                      <td className="py-8 align-top text-right font-[family-name:var(--font-serif)] italic text-2xl text-zinc-100">
                        {row.price}
                      </td>
                      <td className="py-8 align-top text-right">
                        <button
                          disabled
                          className="font-[family-name:var(--font-mono)] uppercase text-[10px] tracking-[0.25em] border border-zinc-800 px-4 py-2 text-zinc-500 cursor-not-allowed"
                        >
                          Em breve
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="font-[family-name:var(--font-mono)] uppercase text-[10px] tracking-[0.25em] text-zinc-600 mt-8">
                Pagamento via Lemon Squeezy · USD/BRL · Sem assinatura
              </p>
            </div>
          </div>
        </section>

        {/* MANIFESTO — claim final */}
        <section className="border-b border-zinc-900">
          <div className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-12 gap-x-6">
            <div className="col-span-12 md:col-start-4 md:col-span-9">
              <p className="font-[family-name:var(--font-serif)] italic text-3xl md:text-4xl leading-tight text-zinc-200 max-w-3xl">
                Você não precisa de um curso de R$ 1.997 sobre como
                &ldquo;virar criador&rdquo;. Precisa de uma palavra certa
                no segundo zero. R$ 5 por hook. O resto você grava.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER — colofón editorial */}
      <footer className="border-t border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-12 gap-x-6 text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-[0.2em] text-zinc-600">
          <div className="col-span-12 md:col-span-4 mb-4 md:mb-0">
            <p>© MMXXVI · Roteiros Finance Dark</p>
          </div>
          <div className="col-span-6 md:col-span-4">
            <p>Powered by Claude</p>
            <p>Hosted on Vercel</p>
          </div>
          <div className="col-span-6 md:col-span-4 md:text-right">
            <p>Versão 0.1.0</p>
            <p>Pré-lançamento · Brasil</p>
          </div>
        </div>
      </footer>
    </>
  );
}
