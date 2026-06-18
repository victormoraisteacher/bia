// ===== DADOS =====
const BIA_B64 = "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";
const BIA_SRC = "data:image/jpeg;base64," + BIA_B64;

const ABERTURA = "Vamos definir seu plano de estudos. \ud83d\udcda\n\nEscolha:\n\n1\ufe0f\u20e3 Estudo livre\nVoc\u00ea escolhe 1 situa\u00e7\u00e3o para praticar.\n\n2\ufe0f\u20e3 Plano guiado\nEu monto um plano de 5, 10 ou 25 dias.\n\n\ud83d\udc49 Responda:\n\"Op\u00e7\u00e3o 1\"\nou\n\"Op\u00e7\u00e3o 2, 10 dias\"\n\nDepois come\u00e7amos. \ud83d\ude80";

const SYSTEM = `Você é Bia Talks [DAY BY DAY], uma professora de inglês por IA para brasileiros.

Sua função é treinar conversação em inglês com brasileiros usando o método RCE: Repetição, Contexto e Emoção.

Você fala principalmente em português brasileiro para orientar o aluno, mas pratica diálogos em inglês dentro de situações reais do dia a dia.

Seu estilo: amigável, energético, prático, direto, interativo, falas curtas, pouca gramática, sempre conduzindo o aluno a responder.

ABERTURA OBRIGATÓRIA — na primeira troca, responda com o plano de estudos exato (igual à mensagem inicial que o app já mostrou).

FLUXO:
- Opção 1: peça tema da lista, depois setup em 3 mensagens SEPARADAS.
- Opção 2 + dias: crie plano completo, distribua temas, Dia 1 primeiro, depois setup 3 msgs.
- Opção 2 sem dias: pergunte apenas quantos dias (5, 10 ou 25).

LISTA DE TEMAS: Aeroporto, Imigração, Hotel, Transporte, Restaurante, Compras, Supermercado, Farmácia, Hospital, Banco, Trabalho, Entrevista, Reunião, Suporte técnico, Delivery, Vizinhos, Festas, Escola, Turismo, Voo atrasado, Bagagem perdida, Emergência, Pedir ajuda, Pedir informações, Reclamação, Devolução, Reserva, Situação inesperada, Aluguel de carro, Cafeteria, Segurança, Polícia, Alfândega, Academia, Salão de beleza, Correios, Lavanderia, Consulta médica, Dentista, Farmácia 24h, Entrevista de visto, Networking, Apresentação profissional, Ligação telefônica, Mensagem de WhatsApp, Check-in online, Troca de produto, Problema no cartão, Internet ruim, Pedido errado no restaurante.

SETUP (3 msgs SEPARADAS — espere resposta entre cada):
Msg1: nível Básico / Intermediário / Avançado
Msg2: Modo Simulação (natural) ou Correção (com dicas)
Msg3: Chat (digitando) ou Voz (falando)

REGRAS: nunca pergunte tudo de uma vez. Só Simulação ou Correção. Use "Repita em voz alta". Pronúncia amigável ex: Headache /ré-deik/ (nunca IPA).

MODO SIMULAÇÃO: aja como personagem real, sem corrigir.
MODO CORREÇÃO: corrija, sugira frases, dê dicas curtas.
BÁSICO: sempre inglês + tradução, aceite português.

DIÁLOGOS DE REFERÊNCIA (use como base para cada tema):
TEMA 1 - Aeroporto:\nPassenger: Excuse me, I’m trying to find my gate, but the screen says “gate changed.”
(Passageiro: Com licença, estou tentando encontrar meu portão, mas o telão diz "portão alterado.")

Airport Staff: Sure, let me help you. May I see your boarding pass?
(Agente de Aeroporto: Claro, deixe-me te ajudar. Posso ver seu cartão de embarque?)

Passenger: \n\nTEMA 2 - Imigração:\nImmigration Officer: Good afternoon. Passport, please.
(Agente de Imigracao: Boa tarde. Passaporte, por favor.)

Traveler: Good afternoon. Here you are.
(Viajante: Boa tarde. Aqui está.)

Immigration Officer: What is the purpose of your visit?
(Agente de Imigracao: Qual é o motivo da sua visita?)

Traveler: I’m here for tourism and to visit a frien\n\nTEMA 3 - Hotel:\nGuest: Good evening. I have a reservation under the name Victor Moraes.
(Hospede: Boa noite. Tenho uma reserva no nome de Victor Moraes.)

Receptionist: Good evening. Let me check. Could you spell your last name, please?
(Recepcionista: Boa noite. Deixe-me verificar. Poderia soletrar seu sobrenome, por favor?)

Guest: Sure. M-O-R-A-E-S.
(Hospede: C\n\nTEMA 4 - Transporte:\nPassenger: Excuse me. I think I’m on the wrong bus.
(Passageiro: Com licença. Acho que estou no ônibus errado.)

Bus Driver: Where are you trying to go?
(Motorista de Onibus: Para onde você está tentando ir?)

Passenger: I’m trying to get to Central Station.
(Passageiro: Estou tentando chegar à Estação Central.)

Bus Driver: This bus doesn’t go to \n\nTEMA 5 - Restaurante:\nCustomer: Good evening. I have a reservation for two people at 8 p.m.
(Cliente: Boa noite. Tenho uma reserva para duas pessoas às 20h.)

Host: Good evening. What name is the reservation under?
(Anfitriao: Boa noite. Em que nome está a reserva?)

Customer: It’s under Victor.
(Cliente: Está no nome de Victor.)

Host: Let me check. I’m sorry, I don’t \n\nTEMA 6 - Compras:\nCustomer: Excuse me. I bought this jacket yesterday, but there is a problem with it.
(Cliente: Com licença. Comprei esta jaqueta ontem, mas há um problema com ela.)

Store Clerk: I’m sorry to hear that. What seems to be the problem?
(Atendente da Loja: Sinto muito por isso. Qual parece ser o problema?)

Customer: The zipper doesn’t work properly.
(\n\nTEMA 7 - Supermercado:\nCustomer: Excuse me. I’m looking for rice, but I can’t find it.
(Cliente: Com licença. Estou procurando arroz, mas não consigo encontrar.)

Employee: Sure. The rice is in aisle seven.
(Funcionario: Claro. O arroz fica no corredor sete.)

Customer: Thank you. Also, do you have lactose-free milk?
(Cliente: Obrigado. Além disso, vocês têm leite sem la\n\nTEMA 8 - Farmácia:\nCustomer: Hello. I need something for a headache.
(Cliente: Olá. Preciso de algo para dor de cabeça.)

Pharmacist: Hello. How long have you had the headache?
(Farmaceutico: Olá. Há quanto tempo você está com dor de cabeça?)

Customer: Since this morning.
(Cliente: Desde esta manhã.)

Pharmacist: Do you have any other symptoms?
(Farmaceutico: Você t\n\n

FINAL DE CENA: 1) Resumo completo do diálogo. 2) Vocabulário com tradução e pronúncia amigável. 3) Sugestão de revisão no caderno.
Depois pergunte: "Gostaria de Treinar a Memorização com o Método RCE do Teacher Victor Morais?
1 - Sim
2 - Não"

RCE: R=3-5 palavras no caderno, C=frases simples + tradução, E=associe a marcas brasileiras.`;

// ===== ESTADO =====
let history = [];
let loading = false;
let voiceOn = false;
let rec = null;

// ===== ELEMENTOS =====
function el(id) { return document.getElementById(id); }

// ===== INIT =====
function initPhotos() {
  el("h-photo").src = BIA_SRC;
  el("c-photo").src = BIA_SRC;
  el("t-photo").src = BIA_SRC;
}

function goChat() {
  el("home").style.display = "none";
  const c = el("chat");
  c.style.display = "flex";
  if (history.length === 0) {
    addMsg("bia", ABERTURA);
    history.push({ role: "assistant", content: ABERTURA });
  }
  setTimeout(function () { el("txt").focus(); }, 250);
}

function goHome() {
  el("chat").style.display = "none";
  el("home").style.display = "flex";
}

function md(t) {
  return t
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n/g, "<br>");
}

function addMsg(role, text) {
  const msgs = el("msgs");
  const typing = el("typing");
  const wrapper = document.createElement("div");
  wrapper.className = "msg " + role;

  const bub = document.createElement("div");
  bub.className = "bub";
  bub.innerHTML = md(text);

  if (role === "bia") {
    const img = document.createElement("img");
    img.className = "msg-av";
    img.src = BIA_SRC;
    img.alt = "Bia";
    wrapper.appendChild(img);
    wrapper.appendChild(bub);
  } else {
    wrapper.appendChild(bub);
  }

  msgs.insertBefore(wrapper, typing);
  msgs.scrollTop = msgs.scrollHeight;
}

function addErr(msg) {
  const msgs = el("msgs");
  const div = document.createElement("div");
  div.className = "err-bar";
  div.textContent = "\u26a0\ufe0f " + msg;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function showTyping(v) {
  el("typing").style.display = v ? "flex" : "none";
  if (v) el("msgs").scrollTop = 999999;
}

async function send(textOverride) {
  const inp = el("txt");
  const text = (textOverride || inp.value).trim();
  if (!text || loading) return;

  inp.value = "";
  inp.style.height = "auto";
  el("sbtn").disabled = true;

  history.push({ role: "user", content: text });
  addMsg("user", text);
  loading = true;
  showTyping(true);

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: history.map(function (m) {
          return { role: m.role, content: m.content };
        }),
        system: SYSTEM
      })
    });

    if (!res.ok) {
      const errData = await res.json().catch(function () { return {}; });
      throw new Error(errData.error || ("HTTP " + res.status));
    }

    const data = await res.json();
    const reply = data.content
      .filter(function (b) { return b.type === "text"; })
      .map(function (b) { return b.text; })
      .join("\n");

    showTyping(false);
    history.push({ role: "assistant", content: reply });
    addMsg("bia", reply);
  } catch (e) {
    showTyping(false);
    history.pop();
    addErr("Erro: " + e.message);
  } finally {
    loading = false;
    el("sbtn").disabled = !el("txt").value.trim();
  }
}

function toggleVoice() {
  openVoiceMode();
}

// ===== MODO DE VOZ CONTÍNUO (estilo ligação) =====
let vmActive = false;
let vmMuted = false;
let vmRec = null;
let vmVoice = null;
let vmState = "idle"; // idle | listening | thinking | speaking

function getSynth() {
  return window.speechSynthesis || null;
}

function pickEnglishVoice() {
  const synth = getSynth();
  if (!synth) return;
  const voices = synth.getVoices();
  // Prioriza vozes femininas em inglês americano/britânico
  const preferred = voices.find(v => /en-(US|GB)/.test(v.lang) && /female|woman|samantha|victoria|zira|susan/i.test(v.name));
  const anyEnglish = voices.find(v => /^en-/.test(v.lang));
  vmVoice = preferred || anyEnglish || voices[0] || null;
}

function cleanTextForSpeech(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/[#_~`>]/g, "")
    .replace(/\([^)]*\)/g, "") // remove traduções entre parênteses ao falar
    .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu, "") // remove emojis
    .replace(/^-{2,}$/gm, "")
    .replace(/\n{2,}/g, ". ")
    .replace(/\n/g, ". ")
    .trim();
}

function setVmStatus(state, label) {
  vmState = state;
  const statusEl = el("vm-status");
  statusEl.className = "vm-status " + state;
  statusEl.innerHTML = label;

  const rings = document.querySelectorAll(".vm-ring");
  rings.forEach(function (ring) {
    ring.classList.remove("listening", "speaking");
    if (state === "listening" || state === "speaking") ring.classList.add(state);
  });
}

function openVoiceMode() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const synth = getSynth();

  if (!SR) {
    addErr("Voz não suportada neste navegador. Use Chrome ou Edge.");
    return;
  }
  if (!synth) {
    addErr("Síntese de voz não suportada neste navegador.");
    return;
  }

  el("vm-photo").src = BIA_SRC;
  el("voice-modal").style.display = "flex";
  vmActive = true;
  vmMuted = false;
  el("vm-mute-btn").classList.remove("muted");
  el("vm-transcript").textContent = "";

  if (synth.getVoices().length) {
    pickEnglishVoice();
  } else {
    synth.onvoiceschanged = pickEnglishVoice;
  }

  setVmStatus("thinking", "Conectando" + "<span class='vm-status-dot'></span>");
  requestMicAndStart();
}

function requestMicAndStart() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    // Navegador muito antigo sem suporte a getUserMedia: tenta direto via SpeechRecognition
    startVmFlow();
    return;
  }

  let settled = false;

  // Timeout de seguranca: se o pop-up de permissao nunca aparecer/responder
  // (ex: permissao de Reconhecimento de Fala bloqueada nas configuracoes do
  // macOS, que nao dispara nenhum evento do getUserMedia), nao deixamos o
  // usuario preso na tela "Conectando..." para sempre.
  const safetyTimer = setTimeout(function () {
    if (settled || !vmActive) return;
    settled = true;
    setVmStatus("idle", "");
    addErr("Não conseguimos acessar o microfone. No Mac, verifique em Ajustes do Sistema → Privacidade e Segurança → Microfone (e também → Reconhecimento de Fala) se o seu navegador está autorizado. Depois recarregue a página e tente de novo.");
    closeVoiceMode();
  }, 6000);

  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(function (stream) {
      if (settled) { stream.getTracks().forEach(function (t) { t.stop(); }); return; }
      settled = true;
      clearTimeout(safetyTimer);
      // Permissão concedida. Não precisamos manter o stream (o SpeechRecognition
      // abre seu próprio canal de áudio internamente); só usamos isto para
      // forçar o pop-up de permissão e confirmar que foi aceito.
      stream.getTracks().forEach(function (t) { t.stop(); });
      startVmFlow();
    })
    .catch(function (err) {
      if (settled) return;
      settled = true;
      clearTimeout(safetyTimer);
      if (!vmActive) return;
      let msg = "Não foi possível acessar o microfone.";
      if (err && (err.name === "NotAllowedError" || err.name === "PermissionDeniedError")) {
        msg = "Permissão de microfone negada. Clique no ícone de cadeado/site na barra de endereço, permita o microfone, depois recarregue a página.";
      } else if (err && err.name === "NotFoundError") {
        msg = "Nenhum microfone encontrado neste dispositivo.";
      }
      setVmStatus("idle", "");
      addErr(msg);
      closeVoiceMode();
    });
}

function startVmFlow() {
  if (!vmActive) return;
  const lastBiaMsg = history.length ? history[history.length - 1] : null;
  if (lastBiaMsg && lastBiaMsg.role === "assistant") {
    speakThenListen(lastBiaMsg.content);
  } else {
    vmListen();
  }
}

function closeVoiceMode() {
  vmActive = false;
  if (vmRec) { try { vmRec.stop(); } catch (e) {} }
  const synth = getSynth();
  if (synth) synth.cancel();
  el("voice-modal").style.display = "none";
  setVmStatus("idle", "");
}

function vmListen() {
  if (!vmActive || vmMuted) return;
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  vmRec = new SR();
  vmRec.lang = "en-US";
  vmRec.interimResults = true;
  vmRec.continuous = false;

  setVmStatus("listening", "Ouvindo" + "<span class='vm-status-dot'></span>");
  el("vm-transcript").textContent = "";

  // Watchdog: no macOS existe uma permissão separada de "Reconhecimento de
  // Fala" (Ajustes do Sistema → Privacidade e Segurança) que, se bloqueada,
  // faz vmRec.start() não disparar NENHUM evento (nem onstart, nem onerror).
  // Sem este timer o usuário ficaria preso em "Ouvindo" para sempre.
  let watchdogFired = false;
  const watchdog = setTimeout(function () {
    if (!vmActive || watchdogFired) return;
    watchdogFired = true;
    try { vmRec.abort ? vmRec.abort() : vmRec.stop(); } catch (e) {}
    setVmStatus("idle", "");
    addErr("O microfone não respondeu. No Mac, abra Ajustes do Sistema → Privacidade e Segurança → Reconhecimento de Fala e Microfone, autorize seu navegador, depois recarregue a página.");
    closeVoiceMode();
  }, 7000);

  function clearWatchdog() { clearTimeout(watchdog); }

  vmRec.onstart = function () {
    clearWatchdog();
  };

  vmRec.onresult = function (e) {
    clearWatchdog();
    let interim = "";
    let final = "";
    for (let i = 0; i < e.results.length; i++) {
      if (e.results[i].isFinal) final += e.results[i][0].transcript;
      else interim += e.results[i][0].transcript;
    }
    el("vm-transcript").textContent = final || interim;
    if (final.trim()) {
      vmRec.stop();
      vmSendMessage(final.trim());
    }
  };

  vmRec.onerror = function (e) {
    clearWatchdog();
    if (watchdogFired) return;
    if (!vmActive) return;
    if (e.error === "no-speech" || e.error === "aborted") {
      // silêncio: apenas tenta escutar de novo
      if (vmActive && !vmMuted) setTimeout(vmListen, 400);
      return;
    }
    if (e.error === "not-allowed" || e.error === "service-not-allowed") {
      setVmStatus("idle", "");
      addErr("Permissão de microfone ou de Reconhecimento de Fala bloqueada. No Mac, verifique Ajustes do Sistema → Privacidade e Segurança → Microfone e → Reconhecimento de Fala. No navegador, clique no ícone de cadeado na barra de endereço e permita o microfone. Depois recarregue a página.");
      closeVoiceMode();
      return;
    }
    setVmStatus("idle", "Erro ao ouvir. Toque para tentar de novo.");
  };

  vmRec.onend = function () {
    if (watchdogFired) return;
    clearWatchdog();
    if (vmActive && vmState === "listening" && !vmMuted) {
      // recognition terminou sem resultado final (ex: timeout) -> reescuta
      setTimeout(function () { if (vmActive && vmState === "listening") vmListen(); }, 300);
    }
  };

  try { vmRec.start(); } catch (e) {
    clearWatchdog();
    setVmStatus("idle", "");
    addErr("Não foi possível iniciar o microfone: " + e.message);
    closeVoiceMode();
  }
}

async function vmSendMessage(text) {
  if (!vmActive) return;
  setVmStatus("thinking", "Pensando" + "<span class='vm-status-dot'></span>");
  el("vm-transcript").textContent = "\u201c" + text + "\u201d";

  history.push({ role: "user", content: text });
  addMsg("user", text); // mantém o histórico visível no chat por texto também

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: history.map(function (m) { return { role: m.role, content: m.content }; }),
        system: SYSTEM
      })
    });

    if (!res.ok) {
      const errData = await res.json().catch(function () { return {}; });
      throw new Error(errData.error || ("HTTP " + res.status));
    }

    const data = await res.json();
    const reply = data.content
      .filter(function (b) { return b.type === "text"; })
      .map(function (b) { return b.text; })
      .join("\n");

    history.push({ role: "assistant", content: reply });
    addMsg("bia", reply);

    if (vmActive) speakThenListen(reply);

  } catch (e) {
    history.pop();
    if (vmActive) {
      setVmStatus("idle", "Erro: " + e.message);
      setTimeout(function () { if (vmActive) vmListen(); }, 2500);
    }
  }
}

function speakThenListen(rawText) {
  if (!vmActive) return;
  const synth = getSynth();
  if (!synth) { vmListen(); return; }

  const spoken = cleanTextForSpeech(rawText);
  el("vm-transcript").textContent = spoken.slice(0, 220);

  if (!spoken) { vmListen(); return; }

  synth.cancel();
  const utter = new SpeechSynthesisUtterance(spoken);
  utter.lang = "en-US";
  if (vmVoice) utter.voice = vmVoice;
  utter.rate = 0.98;
  utter.pitch = 1.05;

  setVmStatus("speaking", "Falando" + "<span class='vm-status-dot'></span>");

  utter.onend = function () {
    if (vmActive) vmListen();
  };
  utter.onerror = function () {
    if (vmActive) vmListen();
  };

  synth.speak(utter);
}

function toggleMute() {
  vmMuted = !vmMuted;
  const btn = el("vm-mute-btn");
  btn.classList.toggle("muted", vmMuted);
  if (vmMuted) {
    if (vmRec) { try { vmRec.stop(); } catch (e) {} }
    setVmStatus("idle", "Microfone mutado");
  } else {
    vmListen();
  }
}

// ===== EVENT LISTENERS =====
function initListeners() {
  const txt = el("txt");
  const sbtn = el("sbtn");

  txt.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  });

  txt.addEventListener("input", function () {
    this.style.height = "auto";
    this.style.height = Math.min(this.scrollHeight, 100) + "px";
    sbtn.disabled = !this.value.trim();
  });

  el("start-btn").addEventListener("click", goChat);
  el("back-btn").addEventListener("click", goHome);
  el("vbtn").addEventListener("click", toggleVoice);
  el("sbtn").addEventListener("click", function () { send(); });
  el("vm-hangup-btn").addEventListener("click", closeVoiceMode);
  el("vm-mute-btn").addEventListener("click", toggleMute);
}

// ===== BOOTSTRAP =====
document.addEventListener("DOMContentLoaded", function () {
  initPhotos();
  initListeners();
});
