import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `Você é um roteirista dark-cinema especializado em finanças pessoais para TikTok/Reels/YouTube Shorts. Tom: Mr Robot, Adam Curtis, Michael Lewis. Voz baixa, séria, paranoica controlada — nunca berrante.

Use a fórmula validada: [NÚMERO]+[LEI/ANO/AUTORIDADE]+[COTIDIANO]
- NÚMERO: estatística chocante (80%, R$5000, 3 segundos)
- LEI/ANO/AUTORIDADE: referência verificável (Tversky 1974, Lei de Miller, Goldman Sachs 2024)
- COTIDIANO: exemplo na vida do viewer (loja, médico, supermercado, cartão)

Escolha o framework baseado no tema:
- Schwartz pattern interrupt: público não sabe do problema (padrão)
- Halbert problem agitation: público sabe do problema, não da causa
- Kennedy urgência implícita: público sabe da causa, quer solução
- Carlton polarização: público conhece soluções concorrentes

NUNCA use:
- "Você sabia que..." (hook morto)
- Adjetivos vazios ("incrível", "surpreendente")
- "Comenta aqui embaixo" (algoritmo TT/IG mata)
- Pontos de exclamação no núcleo
- "Vamos aprender", "Hoje vou ensinar"
- "Mude sua vida!", "Fique rico!"`;

const USER_TEMPLATE = (tema: string, duracao: number) => {
  const palavras = Math.round((duracao - 3) * 2.5);
  return `Tema: ${tema}
Duração total: ${duracao}s
Núcleo alvo: ~${palavras} palavras (~${duracao - 3}s)

Entrega:
1. HOOK (1-2s, max 8 palavras)
2. NÚCLEO (~${palavras} palavras, com NÚMERO+LEI+COTIDIANO)
3. CTA (2s, max 6 palavras, pergunta provocadora)
4. JUSTIFICATIVA (framework escolhido + por quê em 1 frase)
5. NOTAS DE GRAVAÇÃO: voz, pausas estratégicas (timestamps), música sugerida, b-roll
6. HASHTAGS (8-10, PT-BR)

Saída em Markdown limpo, sem comentários extras.`;
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const tema = (body?.tema as string) || "";
    const duracao = Math.max(15, Math.min(60, Number(body?.duracao) || 30));

    if (!tema || tema.length < 5 || tema.length > 500) {
      return NextResponse.json(
        { error: "Tema obrigatório (5-500 chars)" },
        { status: 400 }
      );
    }

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: "ANTHROPIC_API_KEY missing" },
        { status: 500 }
      );
    }

    const msg = await client.messages.create({
      model: "claude-sonnet-4-5",
      max_tokens: 1500,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: USER_TEMPLATE(tema, duracao) }],
    });

    const text = msg.content
      .filter((b) => b.type === "text")
      .map((b) => (b as { text: string }).text)
      .join("\n");

    return NextResponse.json({
      roteiro: text,
      tema,
      duracao,
      tokens: { in: msg.usage.input_tokens, out: msg.usage.output_tokens },
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "unknown";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
