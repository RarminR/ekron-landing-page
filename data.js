/* Ekron landing — scripted-walkthrough data + copy (EN/RO).
 *
 * Everything the interactive modules (M0 hero chat, M1–M6 tabs) render comes
 * from this one file: sample customers, SKUs, prices, every conversation
 * script, and all new-section copy in both languages. No network, no model
 * calls — the page only plays back what is written here.
 *
 * Sample entities are reused from the live ERP demo (Magazin Aurora, Metro
 * Cluj, Borsec, Pepsi, …). Product names, SKUs and order numbers are the same
 * in both languages.
 *
 * [INCUMBENT_ERP]: `ERP_NAME` below stays "your ERP" / "ERP-ul tău" until a
 * real incumbent ERP name is confirmed.
 */
window.EKRON_DATA = (function () {
  'use strict';

  var ERP_EN = 'your ERP';
  var ERP_RO = 'ERP-ul tău';

  /* ------------------------------------------------------------------ EN */

  var en = {
    erp: ERP_EN,

    ui: {
      nav: { optimizer: 'Optimizer', erp: 'Ekron ERP', demo: 'Live demo', cta: 'Book a demo' },
      hero: {
        eyebrow: 'Ekron Optimizer, for the ERP you already run',
        h1a: 'Keep your ERP.',
        h1b: 'Let the work around it run itself.',
        sub: 'Ekron reads orders out of email and WhatsApp and writes them into your ERP. It chases customers before they stop ordering, prices RFQs, plans the day for reps and drivers, and tells you when something is wrong. It asks before it writes.',
        ctaDemo: 'Book a demo',
        ctaSee: 'See it work'
      },
      painClose: "Built with a distributor, on a distributor's data. It already knows what a route, a return and a rebate are.",
      see: {
        eyebrow: '◆ See it work',
        h2: 'One inbox, one chat, your ERP underneath.',
        lead: 'Every module below is a scripted walkthrough on sample data. Click into it.',
        tabs: ['Inbox → ERP', 'Churn and reorder', 'RFQ quotes', 'Reps in the field', 'Dispatch', 'Alerts']
      },
      works: {
        eyebrow: '◆ Works with the ERP you have',
        h2: 'Nothing to replace. Nothing to re-key.',
        cards: [
          { title: 'Cloud ERP', body: "Connects through the ERP's API.", note: '[Incumbent ERP names to be confirmed. Text only, no logos.]' },
          { title: 'On-premise ERP', body: 'A Docker connector runs on your own server, next to the ERP database. Only what a job needs leaves the building, encrypted.', note: '' },
          { title: 'No ERP yet', body: 'Run it on a spreadsheet. Same inbox, same agents, same rules. Move to an ERP when you outgrow it.', note: '' }
        ]
      },
      ways: {
        eyebrow: '◆ Two ways to run Ekron',
        h2: "Start on top. Replace when you're ready.",
        cols: ['CAPABILITY', 'Optimizer', 'Ekron ERP'],
        rows: [
          ['Your current ERP', 'stays', 'replaced, on the date you pick'],
          ['Orders from email, WhatsApp, PDF, voice', 'yes', 'yes'],
          ['Churn and reorder messages', 'yes', 'yes'],
          ['RFQ quotes', 'yes', 'yes'],
          ['Rep visit list and collections', 'yes', 'yes'],
          ['Driver routes', 'yes', 'yes'],
          ['Stock, pricing, invoicing, commissions', 'read from your ERP', 'native'],
          ['Reporting', 'on top of your data', '72 reports built in'],
          ['Migration', 'none', 'full history, verified by you first'],
          ['Time to first order written', '[to confirm]', '[to confirm]']
        ]
      },
      erpSec: {
        eyebrow: '◆ Ekron ERP',
        h2: 'Or replace the whole stack.',
        lead: 'When you want one system that is the record, not a layer on it, Ekron ERP is the same team and the same assistant running everything. One distributor already does, with the old ERP switched off.'
      },
      cta: {
        h2: 'See Ekron run on your numbers.',
        sub: "Forward us three real order emails. We'll show them written into your ERP, live, in a 30-minute call.",
        fine: 'Your data or ours. No slides, just the system.',
        book: 'Book a demo',
        live: 'Try the live demo'
      },
      footer: "Ekron Optimizer for the ERP you have, and Ekron ERP for when you're ready to switch. You can just ask it.",
      common: {
        you: 'You', ekron: 'Ekron',
        confirm: 'Confirm', cancel: 'Cancel', runAgain: 'Run again',
        send: 'Send', edit: 'Edit', skip: 'Skip', adjust: 'Adjust',
        doIt: 'Do it', ignore: 'Ignore',
        sample: 'Sample data · scripted walkthrough',
        waitNote: 'It shows you the exact change and waits for your yes.',
        liveOps: 'LIVE OPERATIONS',
        ask: 'Ask',
        askPlaceholder: 'Tell it what you need…',
        cancelled: 'Nothing written. Pick another prompt.'
      }
    },

    /* M0 — the chat front door (hero card). Chips rotate until clicked. */
    m0: {
      fallback: 'I don’t have that one wired into the demo — book a demo to ask it about your own numbers.',
      chips: [
        {
          id: 'order',
          label: 'Add the order Magazin Aurora just sent, it needs to ship today',
          short: 'Add Aurora\u2019s order',
          keywords: ['order', 'add', 'ship', 'aurora', 'email order'],
          says: 'Read it from their email at 08:52. 6 lines, all matched. 1 short: Borsec 0.5L ×12, they want 40 cases, 32 in stock. Draft: send 32 now, 8 on Thursday.',
          head: 'ORDER DRAFT · MAGAZIN AURORA · SHIP TODAY',
          rows: [
            { l: '32 × Borsec 0.5L ×12 · €7.20', v: '€230.40', note: '8 follow Thu' },
            { l: '20 × Pepsi 2L ×6 · €13.80', v: '€276.00' },
            { l: '10 × Lays Sare 140g ×20 · €24.00', v: '€240.00' },
            { l: '8 × Aqua Carpatica 2L ×6 · €10.20', v: '€81.60' },
            { l: '5 × Ursus Premium ×24 · €26.40', v: '€132.00' },
            { l: '2 × Margarină Unirea ×40 · €58.00', v: '€116.00' },
            { l: "Total · Aurora's tier", v: '€1,076.00', total: true }
          ],
          confirmLabel: 'Confirm and write to ' + ERP_EN,
          done: 'Written · SO-48213 · Dispatch has it on today’s Van 2.'
        },
        {
          id: 'churn',
          label: 'Who’s about to stop ordering?',
          short: 'Who\u2019s about to stop ordering?',
          keywords: ['stop', 'churn', 'quiet', 'risk', 'losing', 'stopped'],
          says: '3 customers below their usual pattern.',
          head: 'AT RISK · THIS WEEK',
          rows: [
            { l: 'Boutique HoReCa Someș · usual €1,240/wk, last 3 wks €410', v: '−67%', tone: 'neg' },
            { l: 'La Doi Pași Gheorgheni · ordering less each week', v: '−38%', tone: 'neg' },
            { l: 'Profi Mănăștur · usual reorder every 9 days', v: 'day 12', tone: 'neg' }
          ],
          confirmLabel: 'Send them their reorder offer',
          done: '3 sent · 2 WhatsApp, 1 email · replies show up here.'
        },
        {
          id: 'inbox',
          label: 'What did the inbox bring in this morning?',
          short: 'This morning\u2019s inbox',
          keywords: ['inbox', 'morning', 'email', 'whatsapp', 'brought', 'today'],
          says: '14 orders since 06:00. 9 email, 4 WhatsApp, 1 PDF. 13 written to ' + ERP_EN + '. 1 waiting on you: Metro Cluj asked for last month’s price on Margarină Unirea ×40, the current list is 4% higher.',
          head: 'WAITING ON YOU · METRO CLUJ',
          rows: [
            { l: '6 × Margarină Unirea ×40 · last month €55.80', v: 'now €58.00' }
          ],
          choice: [
            { label: 'Keep current price', done: 'Written · SO-48219 · at €58.00.' },
            { label: 'Give last month’s price', done: 'Written · SO-48219 · at €55.80.' }
          ]
        },
        {
          id: 'owed',
          label: 'Who owes us before Radu’s route today?',
          short: 'Who owes us today?',
          keywords: ['owe', 'owes', 'overdue', 'invoice', 'collect', 'collections', 'debt'],
          says: '4 customers on the route have open invoices.',
          head: 'OPEN BALANCES · RADU’S ROUTE',
          rows: [
            { l: 'Market Dorobanți · 2 invoices · 41 days', v: '€2,140', tone: 'neg' },
            { l: 'Profi Mănăștur · 1 invoice · 12 days', v: '€480' },
            { l: 'La Doi Pași Gheorgheni · 1 invoice · 8 days', v: '€310' },
            { l: 'Hostel Nord · 1 invoice · 5 days', v: '€190' }
          ],
          confirmLabel: 'Put it on his visit list',
          done: 'Added. He sees it before each stop.'
        },
        {
          id: 'routes',
          label: 'Plan today’s routes',
          short: 'Plan today\u2019s routes',
          keywords: ['route', 'routes', 'plan', 'driver', 'drivers', 'van', 'delivery'],
          says: '31 orders ready. 2 vans. Van 1: 23 stops, 142 km. Van 2: 8 stops, 61 km. Both back by 16:30.',
          head: 'ROUTES · TODAY',
          rows: [
            { l: 'Van 1', v: '23 stops · 142 km' },
            { l: 'Van 2', v: '8 stops · 61 km' }
          ],
          confirmLabel: 'Send to drivers',
          done: 'Sent · both drivers have the stop order and the collections notes.'
        }
      ]
    },

    /* M1 — Inbox → ERP. Three items, each end-to-end. */
    m1: {
      inboxTitle: 'Inbox',
      draftTitle: 'Draft order',
      readNote: 'Click an item. Ekron reads it and builds the order line by line.',
      items: [
        {
          id: 'email',
          kind: 'EMAIL',
          from: 'Magazin Aurora',
          title: 'Order for Thursday',
          time: '08:41',
          /* Message body as segments; hl segments become order lines in order. */
          segs: [
            { t: 'Hi, for Thursday please send ' },
            { t: '20 cases of Pepsi 2L', hl: 0 },
            { t: ', ' },
            { t: '10 Lays salted 140g', hl: 1 },
            { t: ' and ' },
            { t: '2 cases of water', hl: 2 },
            { t: '. Same address as always. Thanks, Andreea' }
          ],
          lines: [
            { sku: 'Pepsi 2L ×6', qty: 20, unit: '€13.80', total: '€276.00', stock: 'in stock' },
            { sku: 'Lays Sare 140g ×20', qty: 10, unit: '€24.00', total: '€240.00', stock: 'in stock' },
            {
              ambiguous: true,
              ask: 'Which water? Both ordered before.',
              options: [
                { label: 'Borsec 0.5L ×12', sku: 'Borsec 0.5L ×12', qty: 2, unit: '€7.20', total: '€14.40', stock: 'in stock' },
                { label: 'Aqua Carpatica 2L ×6', sku: 'Aqua Carpatica 2L ×6', qty: 2, unit: '€10.20', total: '€20.40', stock: 'in stock' }
              ]
            }
          ],
          so: 'SO-48221',
          sentNote: 'Confirmation sent to the customer · email · 08:53'
        },
        {
          id: 'wa',
          kind: 'WHATSAPP',
          from: 'Boutique HoReCa Someș',
          title: 'hey put me 20 pepsi 2l…',
          time: '08:57',
          segs: [
            { t: 'hey put me ' },
            { t: '20 pepsi 2l', hl: 0 },
            { t: ', ' },
            { t: '10 borsec 0.5', hl: 1 },
            { t: ' and ' },
            { t: 'the usual beer', hl: 2 },
            { t: ', thx' }
          ],
          lines: [
            { sku: 'Pepsi 2L ×6', qty: 20, unit: '€13.80', total: '€276.00', stock: 'in stock' },
            { sku: 'Borsec 0.5L ×12', qty: 10, unit: '€7.20', total: '€72.00', stock: 'in stock' },
            { sku: 'Ursus Premium ×24', qty: 3, unit: '€26.40', total: '€79.20', stock: 'in stock', tag: 'from last 6 orders' }
          ],
          so: 'SO-48222',
          sentNote: 'Confirmation sent to the customer · WhatsApp · 09:02'
        },
        {
          id: 'pdf',
          kind: 'PDF',
          from: 'Metro Cluj',
          title: 'PO-2291.pdf',
          time: '09:04',
          pdfNote: 'Purchase order table, read row by row:',
          segs: [],
          lines: [
            { sku: 'Borsec 0.5L ×12', qty: 24, unit: '€6.90', total: '€165.60', stock: 'in stock' },
            { sku: 'Aqua Carpatica 2L ×6', qty: 12, unit: '€9.80', total: '€117.60', stock: 'in stock' },
            { sku: 'Ursus Premium ×24', qty: 10, unit: '€25.20', total: '€252.00', stock: 'in stock' },
            { sku: 'Margarină Unirea ×40', qty: 6, unit: '€58.00', total: '€348.00', stock: 'in stock' }
          ],
          so: 'SO-48223',
          sentNote: 'Confirmation sent to the customer · email · 09:07'
        }
      ],
      confirmLabel: 'Confirm and write to ' + ERP_EN,
      written: 'Written to ' + ERP_EN + ' · '
    },

    /* M2 — churn and reorder. 7 rows, 2 flags. */
    m2: {
      cols: { name: 'Customer', usual: 'Usual/wk', trend: 'Last 8 wks', status: 'Status' },
      onPattern: 'on pattern',
      caption: 'You set the rule once: who, when, what offer. Ekron sends on the rule and shows you every message here.',
      hint: 'Click a flagged row to see the message Ekron drafted.',
      rows: [
        { name: 'Magazin Aurora', usual: '€1,310', spark: [1240, 1350, 1180, 1420, 1290, 1330, 1310, 1360] },
        { name: 'Metro Cluj', usual: '€2,480', spark: [2300, 2520, 2410, 2600, 2380, 2450, 2510, 2480] },
        { name: 'Market Dorobanți', usual: '€760', spark: [720, 780, 690, 810, 740, 770, 760, 750] },
        {
          name: 'La Doi Pași Gheorgheni', usual: '€520',
          spark: [540, 560, 510, 530, 490, 410, 360, 320],
          flag: '38% below usual',
          draft: {
            channel: 'whatsapp',
            text: 'You usually take 20 cases of Pepsi 2L around now. This week it’s €0.30 a case less, until Friday.',
            timeline: ['Sent 09:14', 'Opened 09:31', 'Replied “put me 20”', 'Order read', 'Written to ' + ERP_EN + ' · SO-48230']
          }
        },
        {
          name: 'Profi Mănăștur', usual: '€880',
          spark: [860, 910, 840, 890, 870, 900, 880, 120],
          flag: 'due to reorder, day 12 of 9',
          draft: {
            channel: 'email',
            text: 'It’s day 12 since your last order; you usually reorder every 9. Your usual basket is ready: 12 × Borsec 0.5L ×12, 6 × Lays Sare 140g ×20. Reply yes and it ships tomorrow.',
            timeline: ['Sent 09:16', 'Opened 09:40', 'Replied “yes, send it”', 'Order read', 'Written to ' + ERP_EN + ' · SO-48231']
          }
        },
        { name: 'Hostel Nord', usual: '€340', spark: [320, 350, 310, 360, 330, 340, 350, 330] },
        { name: 'Boutique HoReCa Someș', usual: '€1,240', spark: [1240, 1180, 1310, 980, 760, 520, 410, 380], status: 'offer sent · Mon' }
      ]
    },

    /* M3 — RFQs. */
    m3: {
      emailFrom: 'Metro Cluj',
      emailTitle: 'Request for quote',
      emailBody: 'Send me your best price for 40 cases Pepsi 2L and 60 cases Aqua Carpatica 2L, delivery next week.',
      note: 'List price, stock and margin floor come from ' + ERP_EN + '.',
      cols: ['Line', 'List', 'Stock', 'Quote', 'Margin'],
      lines: [
        { sku: 'Pepsi 2L ×6', qty: 40, list: '€13.20', stock: '210 ✓', price: 12.60, cost: 10.84, floor: 0.11, marginLabel: '14%' },
        { sku: 'Aqua Carpatica 2L ×6', qty: 60, list: '€9.80', stock: '340 ✓', price: 9.10, cost: 8.10, floor: 0.11, marginLabel: 'at floor, 11%', atFloor: true }
      ],
      belowFloor: 'below floor',
      adjustHint: 'Type a new price for the Aqua Carpatica line. The margin recomputes as you type.',
      sendQuote: 'Send quote',
      sent: 'Quote sent · if they accept, it becomes an order in ' + ERP_EN + ' without re-typing.'
    },

    /* M4 — reps in the field. */
    m4: {
      title: 'Today · Radu Ionescu · 9 stops',
      ranked: 'Ranked by what the visit is worth',
      bring: 'Bring up',
      collect: 'Collect',
      tapHint: 'Tap a stop to open it.',
      holdHint: 'Press and hold to speak the order. Simulated here.',
      micLabel: 'Hold to speak',
      back: 'Back to the list',
      stops: [
        {
          name: 'Market Dorobanți',
          reason: '2 invoices, 41 days overdue, €2,140',
          reasonTone: 'neg',
          collectNote: 'Collect: €2,140 · 2 invoices · 41 days',
          bring: [
            { sku: 'Margarină Unirea ×40', why: 'new price from Monday, they buy it monthly' },
            { sku: 'Lays Sare 140g ×20', why: 'sells well at stores this size' }
          ]
        },
        {
          name: 'La Doi Pași Gheorgheni',
          reason: '38% below usual',
          reasonTone: 'neg',
          collectNote: '',
          bring: [
            { sku: 'Pepsi 2L ×6', why: '€0.30 a case less until Friday' },
            { sku: 'Ursus Premium ×24', why: 'in their usual basket, missing from the last 2 orders' }
          ]
        },
        {
          name: 'Profi Mănăștur',
          reason: 'due to reorder, day 12 of 9',
          reasonTone: 'neg',
          collectNote: '',
          bring: [
            { sku: 'Borsec 0.5L ×12', why: 'their usual, 12 cases' },
            { sku: 'Aqua Carpatica 2L ×6', why: 'back in stock this week' }
          ]
        }
      ],
      transcript: 'twenty pepsi two liter, ten borsec small, and add the new energy drink, five',
      voiceLines: [
        { sku: 'Pepsi 2L ×6', qty: 20, unit: '€13.80', total: '€276.00' },
        { sku: 'Borsec 0.5L ×12', qty: 10, unit: '€7.20', total: '€72.00' },
        { sku: 'Energy drink 250ml ×24', qty: 5, unit: '€31.20', total: '€156.00', tag: 'new SKU' }
      ],
      confirmLabel: 'Confirm and write to ' + ERP_EN,
      done: 'Written to ' + ERP_EN + ' · SO-48234'
    },

    /* M5 — dispatch. */
    m5: {
      readyHead: '31 orders ready',
      readySub: 'this morning, from email, WhatsApp, PDF and reps',
      orders: ['Magazin Aurora · €1,076.00', 'Metro Cluj · €883.20', 'Boutique HoReCa Someș · €427.20', 'Profi Mănăștur · €214.80', 'La Doi Pași Gheorgheni · €276.00', '+ 26 more'],
      vans: [
        { name: 'Van 1', stops: '23 stops', km: '142 km', back: 'back 16:10' },
        { name: 'Van 2', stops: '8 stops', km: '61 km', back: 'back 16:30' }
      ],
      mapNote: 'Abstract map · sample stops',
      driverHead: 'Van 2 · driver view',
      driverStops: [
        { n: '01', name: 'Market Dorobanți', addr: 'Str. Dorobanților 18', unload: '4 cases', collect: 'collect €2,140' },
        { n: '02', name: 'Profi Mănăștur', addr: 'Str. Mănăștur 102', unload: '18 cases', collect: 'collect €480' },
        { n: '03', name: 'La Doi Pași Gheorgheni', addr: 'Str. Unirii 4', unload: '20 cases', collect: '' },
        { n: '04', name: 'Hostel Nord', addr: 'Str. Gării 22', unload: '6 cases', collect: '' }
      ],
      sendLabel: 'Send to drivers',
      done: 'Sent · both drivers have the stop order and the collections notes.'
    },

    /* M6 — alerts. */
    m6: {
      alertsHead: '#alerts',
      eodHead: '#end-of-day',
      caption: 'Agents don’t talk to each other. When something needs a person, the agent tells that person.',
      posts: [
        {
          agent: 'Margin agent',
          time: '07:20',
          text: 'Margarină Unirea ×40 sold below cost on 3 orders this week (Metro Cluj, manual price). Cost went up 6% on the 2nd, the price list didn’t.',
          suggest: 'Suggest: update tier 2 to €61.50.',
          did: 'Updated · tier 2 price list · €61.50 from tomorrow.',
          ignored: 'Ignored · won’t flag this SKU again this week.'
        },
        {
          agent: 'Stock agent',
          time: '07:35',
          text: 'Borsec 0.5L ×12 runs out Thursday at current route demand: 32 cases left, Magazin Aurora’s order takes all 32.',
          suggest: 'Suggest: purchase order for 120 cases, delivery Wednesday.',
          did: 'Draft PO-1180 created · waiting for your confirm.',
          ignored: 'Ignored · will flag again if Thursday’s orders grow.'
        },
        {
          agent: 'Collections agent',
          time: '08:05',
          text: 'Market Dorobanți placed a €480 order this morning while €2,140 is 41 days overdue.',
          suggest: 'Suggest: hold the order until a payment date is set, and add it to Radu’s visit today.',
          did: 'Held · on Radu’s visit list · the order releases on your yes.',
          ignored: 'Released · the order ships on today’s route.'
        }
      ],
      eod: [
        'Radu: 9 visits, 7 orders, €3,120 collected',
        'Elena: 7 visits, 5 orders, €1,980 collected',
        'Van 1: 23 stops delivered, 2 returns picked up',
        'Van 2: 8 stops delivered, back 16:20'
      ]
    }
  };

  /* ------------------------------------------------------------------ RO */

  var ro = {
    erp: ERP_RO,

    ui: {
      nav: { optimizer: 'Optimizer', erp: 'Ekron ERP', demo: 'Demo live', cta: 'Programăm un demo' },
      hero: {
        eyebrow: 'Ekron Optimizer, pentru ERP-ul pe care îl ai deja',
        h1a: 'Păstrezi ERP-ul.',
        h1b: 'Munca din jurul lui se face singură.',
        sub: 'Ekron citește comenzile din email și WhatsApp și le scrie în ERP-ul tău. Urmărește clienții înainte să se oprească din comandat, calculează oferte la cererile de preț, planifică ziua agenților și șoferilor și te anunță când ceva nu e în regulă. Întreabă înainte să scrie.',
        ctaDemo: 'Programăm un demo',
        ctaSee: 'Vezi cum lucrează'
      },
      painClose: 'Construit cu un distribuitor, pe datele unui distribuitor. Știe deja ce e o rută, un retur și un rabat.',
      see: {
        eyebrow: '◆ Vezi cum lucrează',
        h2: 'Un inbox, un chat, ERP-ul tău dedesubt.',
        lead: 'Fiecare modul de mai jos e o demonstrație pas cu pas, pe date de probă. Intră în ele.',
        tabs: ['Inbox → ERP', 'Clienți în risc', 'Cereri de preț', 'Agenții pe teren', 'Livrări', 'Alerte']
      },
      works: {
        eyebrow: '◆ Merge cu ERP-ul pe care îl ai',
        h2: 'Nimic de înlocuit. Nimic de retastat.',
        cards: [
          { title: 'ERP în cloud', body: 'Se conectează prin API-ul ERP-ului.', note: '[Numele ERP-urilor compatibile se confirmă. Doar text, fără logouri.]' },
          { title: 'ERP on-premise', body: 'Un conector Docker rulează pe serverul tău, lângă baza de date a ERP-ului. Pleacă din clădire doar ce e nevoie pentru fiecare sarcină, criptat.', note: '' },
          { title: 'Încă fără ERP', body: 'Rulează pe un spreadsheet. Același inbox, aceleași agente, aceleași reguli. Treci pe un ERP când îl depășești.', note: '' }
        ]
      },
      ways: {
        eyebrow: '◆ Două feluri de a folosi Ekron',
        h2: 'Începi deasupra. Înlocuiești când ești pregătit.',
        cols: ['CAPABILITATE', 'Optimizer', 'Ekron ERP'],
        rows: [
          ['ERP-ul tău actual', 'rămâne', 'înlocuit, la data aleasă de tine'],
          ['Comenzi din email, WhatsApp, PDF, voce', 'da', 'da'],
          ['Mesaje de reactivare și recomandă', 'da', 'da'],
          ['Oferte la cereri de preț', 'da', 'da'],
          ['Lista de vizite și încasări pentru agenți', 'da', 'da'],
          ['Rute pentru șoferi', 'da', 'da'],
          ['Stoc, prețuri, facturare, comisioane', 'citite din ERP-ul tău', 'native'],
          ['Raportare', 'peste datele tale', '72 de rapoarte incluse'],
          ['Migrare', 'niciuna', 'istoricul complet, verificat întâi de tine'],
          ['Timp până la prima comandă scrisă', '[de confirmat]', '[de confirmat]']
        ]
      },
      erpSec: {
        eyebrow: '◆ Ekron ERP',
        h2: 'Sau înlocuiești tot sistemul.',
        lead: 'Când vrei un singur sistem care e registrul, nu un strat peste el, Ekron ERP e aceeași echipă și același asistent, conducând totul. Un distribuitor face deja asta, cu vechiul ERP oprit.'
      },
      cta: {
        h2: 'Vezi Ekron pe cifrele tale.',
        sub: 'Trimite-ne trei emailuri reale cu comenzi. Ți le arătăm scrise în ERP-ul tău, live, într-un apel de 30 de minute.',
        fine: 'Datele tale sau ale noastre. Fără slide-uri, doar sistemul.',
        book: 'Programăm un demo',
        live: 'Încearcă demo-ul live'
      },
      footer: 'Ekron Optimizer pentru ERP-ul pe care îl ai și Ekron ERP pentru când ești gata să schimbi. Poți pur și simplu să-l întrebi.',
      common: {
        you: 'Tu', ekron: 'Ekron',
        confirm: 'Confirmă', cancel: 'Renunță', runAgain: 'Rulează din nou',
        send: 'Trimite', edit: 'Modifică', skip: 'Sari peste', adjust: 'Ajustează',
        doIt: 'Fă-o', ignore: 'Ignoră',
        sample: 'Date de probă · demonstrație scriptată',
        waitNote: 'Îți arată exact ce schimbă și așteaptă da-ul tău.',
        liveOps: 'OPERAȚIUNI LIVE',
        ask: 'Întreabă',
        askPlaceholder: 'Spune-i ce ai nevoie…',
        cancelled: 'Nimic scris. Alege alt exemplu.'
      }
    },

    m0: {
      fallback: 'Pe asta nu o am în demo. Programează un demo și întreab-o pe cifrele tale.',
      chips: [
        {
          id: 'order',
          label: 'Adaugă comanda trimisă de Magazin Aurora, trebuie livrată azi',
          short: 'Adaugă comanda Aurorei',
          keywords: ['comanda', 'adauga', 'livrat', 'aurora', 'order'],
          says: 'Am citit-o din emailul lor de la 08:52. 6 linii, toate potrivite. 1 lipsă: Borsec 0.5L ×12, cer 40 de baxuri, 32 pe stoc. Propunere: trimitem 32 acum, 8 joi.',
          head: 'COMANDĂ ÎN LUCRU · MAGAZIN AURORA · LIVRARE AZI',
          rows: [
            { l: '32 × Borsec 0.5L ×12 · €7.20', v: '€230.40', note: '8 vin joi' },
            { l: '20 × Pepsi 2L ×6 · €13.80', v: '€276.00' },
            { l: '10 × Lays Sare 140g ×20 · €24.00', v: '€240.00' },
            { l: '8 × Aqua Carpatica 2L ×6 · €10.20', v: '€81.60' },
            { l: '5 × Ursus Premium ×24 · €26.40', v: '€132.00' },
            { l: '2 × Margarină Unirea ×40 · €58.00', v: '€116.00' },
            { l: 'Total · prețurile Aurorei', v: '€1,076.00', total: true }
          ],
          confirmLabel: 'Confirmă și scrie în ' + ERP_RO,
          done: 'Scris · SO-48213 · Dispeceratul o are pe Duba 2 de azi.'
        },
        {
          id: 'churn',
          label: 'Cine e pe punctul să nu mai comande?',
          short: 'Cine e în risc?',
          keywords: ['opreste', 'risc', 'comande', 'clienti', 'pierdem'],
          says: '3 clienți sub ritmul lor obișnuit.',
          head: 'ÎN RISC · SĂPTĂMÂNA ASTA',
          rows: [
            { l: 'Boutique HoReCa Someș · de obicei €1,240/săpt., ultimele 3 săpt. €410', v: '−67%', tone: 'neg' },
            { l: 'La Doi Pași Gheorgheni · comandă tot mai puțin', v: '−38%', tone: 'neg' },
            { l: 'Profi Mănăștur · de obicei recomandă la 9 zile', v: 'ziua 12', tone: 'neg' }
          ],
          confirmLabel: 'Trimite-le oferta de recomandă',
          done: '3 trimise · 2 WhatsApp, 1 email · răspunsurile apar aici.'
        },
        {
          id: 'inbox',
          label: 'Ce a adus inboxul azi-dimineață?',
          short: 'Inboxul de dimineață',
          keywords: ['inbox', 'dimineata', 'email', 'whatsapp', 'azi'],
          says: '14 comenzi de la 06:00. 9 pe email, 4 pe WhatsApp, 1 PDF. 13 scrise în ' + ERP_RO + '. 1 așteaptă decizia ta: Metro Cluj a cerut prețul de luna trecută la Margarină Unirea ×40, lista curentă e cu 4% mai sus.',
          head: 'AȘTEAPTĂ DECIZIA TA · METRO CLUJ',
          rows: [
            { l: '6 × Margarină Unirea ×40 · luna trecută €55.80', v: 'acum €58.00' }
          ],
          choice: [
            { label: 'Păstrează prețul curent', done: 'Scris · SO-48219 · la €58.00.' },
            { label: 'Dă-le prețul de luna trecută', done: 'Scris · SO-48219 · la €55.80.' }
          ]
        },
        {
          id: 'owed',
          label: 'Cine ne datorează bani înainte de ruta lui Radu de azi?',
          short: 'Cine ne datorează azi?',
          keywords: ['datoreaza', 'restante', 'facturi', 'incasari', 'datorii'],
          says: '4 clienți de pe rută au facturi deschise.',
          head: 'SOLDURI DESCHISE · RUTA LUI RADU',
          rows: [
            { l: 'Market Dorobanți · 2 facturi · 41 de zile', v: '€2,140', tone: 'neg' },
            { l: 'Profi Mănăștur · 1 factură · 12 zile', v: '€480' },
            { l: 'La Doi Pași Gheorgheni · 1 factură · 8 zile', v: '€310' },
            { l: 'Hostel Nord · 1 factură · 5 zile', v: '€190' }
          ],
          confirmLabel: 'Pune-le pe lista lui de vizite',
          done: 'Adăugat. Le vede înainte de fiecare oprire.'
        },
        {
          id: 'routes',
          label: 'Planifică rutele de azi',
          short: 'Planifică rutele',
          keywords: ['rute', 'ruta', 'planifica', 'soferi', 'duba', 'livrari'],
          says: '31 de comenzi pregătite. 2 dube. Duba 1: 23 de opriri, 142 km. Duba 2: 8 opriri, 61 km. Amândouă înapoi până la 16:30.',
          head: 'RUTE · AZI',
          rows: [
            { l: 'Duba 1', v: '23 opriri · 142 km' },
            { l: 'Duba 2', v: '8 opriri · 61 km' }
          ],
          confirmLabel: 'Trimite șoferilor',
          done: 'Trimis · ambii șoferi au ordinea opririlor și notele de încasare.'
        }
      ]
    },

    m1: {
      inboxTitle: 'Inbox',
      draftTitle: 'Comandă în lucru',
      readNote: 'Alege un mesaj. Ekron îl citește și construiește comanda linie cu linie.',
      items: [
        {
          id: 'email',
          kind: 'EMAIL',
          from: 'Magazin Aurora',
          title: 'Comandă pentru joi',
          time: '08:41',
          segs: [
            { t: 'Bună, pentru joi trimiteți vă rog ' },
            { t: '20 de baxuri Pepsi 2L', hl: 0 },
            { t: ', ' },
            { t: '10 Lays sare 140g', hl: 1 },
            { t: ' și ' },
            { t: '2 baxuri de apă', hl: 2 },
            { t: '. Aceeași adresă. Mersi, Andreea' }
          ],
          lines: [
            { sku: 'Pepsi 2L ×6', qty: 20, unit: '€13.80', total: '€276.00', stock: 'pe stoc' },
            { sku: 'Lays Sare 140g ×20', qty: 10, unit: '€24.00', total: '€240.00', stock: 'pe stoc' },
            {
              ambiguous: true,
              ask: 'Care apă? Au comandat-o pe amândouă.',
              options: [
                { label: 'Borsec 0.5L ×12', sku: 'Borsec 0.5L ×12', qty: 2, unit: '€7.20', total: '€14.40', stock: 'pe stoc' },
                { label: 'Aqua Carpatica 2L ×6', sku: 'Aqua Carpatica 2L ×6', qty: 2, unit: '€10.20', total: '€20.40', stock: 'pe stoc' }
              ]
            }
          ],
          so: 'SO-48221',
          sentNote: 'Confirmare trimisă clientului · email · 08:53'
        },
        {
          id: 'wa',
          kind: 'WHATSAPP',
          from: 'Boutique HoReCa Someș',
          title: 'salut, pune-mi 20 pepsi 2l…',
          time: '08:57',
          segs: [
            { t: 'salut, pune-mi ' },
            { t: '20 pepsi 2l', hl: 0 },
            { t: ', ' },
            { t: '10 borsec 0.5', hl: 1 },
            { t: ' și ' },
            { t: 'berea obișnuită', hl: 2 },
            { t: ', mersi' }
          ],
          lines: [
            { sku: 'Pepsi 2L ×6', qty: 20, unit: '€13.80', total: '€276.00', stock: 'pe stoc' },
            { sku: 'Borsec 0.5L ×12', qty: 10, unit: '€7.20', total: '€72.00', stock: 'pe stoc' },
            { sku: 'Ursus Premium ×24', qty: 3, unit: '€26.40', total: '€79.20', stock: 'pe stoc', tag: 'din ultimele 6 comenzi' }
          ],
          so: 'SO-48222',
          sentNote: 'Confirmare trimisă clientului · WhatsApp · 09:02'
        },
        {
          id: 'pdf',
          kind: 'PDF',
          from: 'Metro Cluj',
          title: 'PO-2291.pdf',
          time: '09:04',
          pdfNote: 'Tabelul comenzii, citit rând cu rând:',
          segs: [],
          lines: [
            { sku: 'Borsec 0.5L ×12', qty: 24, unit: '€6.90', total: '€165.60', stock: 'pe stoc' },
            { sku: 'Aqua Carpatica 2L ×6', qty: 12, unit: '€9.80', total: '€117.60', stock: 'pe stoc' },
            { sku: 'Ursus Premium ×24', qty: 10, unit: '€25.20', total: '€252.00', stock: 'pe stoc' },
            { sku: 'Margarină Unirea ×40', qty: 6, unit: '€58.00', total: '€348.00', stock: 'pe stoc' }
          ],
          so: 'SO-48223',
          sentNote: 'Confirmare trimisă clientului · email · 09:07'
        }
      ],
      confirmLabel: 'Confirmă și scrie în ' + ERP_RO,
      written: 'Scris în ' + ERP_RO + ' · '
    },

    m2: {
      cols: { name: 'Client', usual: 'Obișnuit/săpt.', trend: 'Ultimele 8 săpt.', status: 'Stare' },
      onPattern: 'în ritm',
      caption: 'Setezi regula o dată: cui, când, ce ofertă. Ekron trimite după regulă și îți arată aici fiecare mesaj.',
      hint: 'Apasă pe un rând marcat ca să vezi mesajul pregătit de Ekron.',
      rows: [
        { name: 'Magazin Aurora', usual: '€1,310', spark: [1240, 1350, 1180, 1420, 1290, 1330, 1310, 1360] },
        { name: 'Metro Cluj', usual: '€2,480', spark: [2300, 2520, 2410, 2600, 2380, 2450, 2510, 2480] },
        { name: 'Market Dorobanți', usual: '€760', spark: [720, 780, 690, 810, 740, 770, 760, 750] },
        {
          name: 'La Doi Pași Gheorgheni', usual: '€520',
          spark: [540, 560, 510, 530, 490, 410, 360, 320],
          flag: '38% sub obișnuit',
          draft: {
            channel: 'whatsapp',
            text: 'De obicei luați 20 de baxuri de Pepsi 2L în perioada asta. Săptămâna asta e cu €0.30 pe bax mai puțin, până vineri.',
            timeline: ['Trimis 09:14', 'Deschis 09:31', 'Răspuns „pune-mi 20”', 'Comandă citită', 'Scris în ' + ERP_RO + ' · SO-48230']
          }
        },
        {
          name: 'Profi Mănăștur', usual: '€880',
          spark: [860, 910, 840, 890, 870, 900, 880, 120],
          flag: 'de recomandat, ziua 12 din 9',
          draft: {
            channel: 'email',
            text: 'E ziua 12 de la ultima comandă; de obicei recomandați la 9 zile. Coșul vostru obișnuit e pregătit: 12 × Borsec 0.5L ×12, 6 × Lays Sare 140g ×20. Răspundeți cu da și pleacă mâine.',
            timeline: ['Trimis 09:16', 'Deschis 09:40', 'Răspuns „da, trimiteți”', 'Comandă citită', 'Scris în ' + ERP_RO + ' · SO-48231']
          }
        },
        { name: 'Hostel Nord', usual: '€340', spark: [320, 350, 310, 360, 330, 340, 350, 330] },
        { name: 'Boutique HoReCa Someș', usual: '€1,240', spark: [1240, 1180, 1310, 980, 760, 520, 410, 380], status: 'ofertă trimisă · luni' }
      ]
    },

    m3: {
      emailFrom: 'Metro Cluj',
      emailTitle: 'Cerere de preț',
      emailBody: 'Trimiteți-mi cel mai bun preț pentru 40 de baxuri Pepsi 2L și 60 de baxuri Aqua Carpatica 2L, livrare săptămâna viitoare.',
      note: 'Prețul de listă, stocul și pragul de marjă vin din ' + ERP_RO + '.',
      cols: ['Linie', 'Listă', 'Stoc', 'Ofertă', 'Marjă'],
      lines: [
        { sku: 'Pepsi 2L ×6', qty: 40, list: '€13.20', stock: '210 ✓', price: 12.60, cost: 10.84, floor: 0.11, marginLabel: '14%' },
        { sku: 'Aqua Carpatica 2L ×6', qty: 60, list: '€9.80', stock: '340 ✓', price: 9.10, cost: 8.10, floor: 0.11, marginLabel: 'la prag, 11%', atFloor: true }
      ],
      belowFloor: 'sub prag',
      adjustHint: 'Scrie un preț nou pentru linia Aqua Carpatica. Marja se recalculează pe măsură ce scrii.',
      sendQuote: 'Trimite oferta',
      sent: 'Ofertă trimisă · dacă acceptă, devine comandă în ' + ERP_RO + ' fără retastare.'
    },

    m4: {
      title: 'Azi · Radu Ionescu · 9 opriri',
      ranked: 'Ordonate după cât valorează vizita',
      bring: 'De adus în discuție',
      collect: 'De încasat',
      tapHint: 'Apasă pe o oprire ca să o deschizi.',
      holdHint: 'Ține apăsat și dictează comanda. Simulat aici.',
      micLabel: 'Ține apăsat și vorbește',
      back: 'Înapoi la listă',
      stops: [
        {
          name: 'Market Dorobanți',
          reason: '2 facturi, 41 de zile restanță, €2,140',
          reasonTone: 'neg',
          collectNote: 'De încasat: €2,140 · 2 facturi · 41 de zile',
          bring: [
            { sku: 'Margarină Unirea ×40', why: 'preț nou de luni, cumpără lunar' },
            { sku: 'Lays Sare 140g ×20', why: 'se vinde bine în magazine de mărimea lor' }
          ]
        },
        {
          name: 'La Doi Pași Gheorgheni',
          reason: '38% sub obișnuit',
          reasonTone: 'neg',
          collectNote: '',
          bring: [
            { sku: 'Pepsi 2L ×6', why: 'cu €0.30 pe bax mai puțin până vineri' },
            { sku: 'Ursus Premium ×24', why: 'în coșul lor obișnuit, lipsește din ultimele 2 comenzi' }
          ]
        },
        {
          name: 'Profi Mănăștur',
          reason: 'de recomandat, ziua 12 din 9',
          reasonTone: 'neg',
          collectNote: '',
          bring: [
            { sku: 'Borsec 0.5L ×12', why: 'comanda lor obișnuită, 12 baxuri' },
            { sku: 'Aqua Carpatica 2L ×6', why: 'din nou pe stoc săptămâna asta' }
          ]
        }
      ],
      transcript: 'douăzeci pepsi doi litri, zece borsec mic, și adaugă energizantul nou, cinci',
      voiceLines: [
        { sku: 'Pepsi 2L ×6', qty: 20, unit: '€13.80', total: '€276.00' },
        { sku: 'Borsec 0.5L ×12', qty: 10, unit: '€7.20', total: '€72.00' },
        { sku: 'Energy drink 250ml ×24', qty: 5, unit: '€31.20', total: '€156.00', tag: 'SKU nou' }
      ],
      confirmLabel: 'Confirmă și scrie în ' + ERP_RO,
      done: 'Scris în ' + ERP_RO + ' · SO-48234'
    },

    m5: {
      readyHead: '31 de comenzi pregătite',
      readySub: 'de azi-dimineață, din email, WhatsApp, PDF și de la agenți',
      orders: ['Magazin Aurora · €1,076.00', 'Metro Cluj · €883.20', 'Boutique HoReCa Someș · €427.20', 'Profi Mănăștur · €214.80', 'La Doi Pași Gheorgheni · €276.00', '+ încă 26'],
      vans: [
        { name: 'Duba 1', stops: '23 opriri', km: '142 km', back: 'înapoi 16:10' },
        { name: 'Duba 2', stops: '8 opriri', km: '61 km', back: 'înapoi 16:30' }
      ],
      mapNote: 'Hartă abstractă · opriri de probă',
      driverHead: 'Duba 2 · ecranul șoferului',
      driverStops: [
        { n: '01', name: 'Market Dorobanți', addr: 'Str. Dorobanților 18', unload: '4 baxuri', collect: 'de încasat €2,140' },
        { n: '02', name: 'Profi Mănăștur', addr: 'Str. Mănăștur 102', unload: '18 baxuri', collect: 'de încasat €480' },
        { n: '03', name: 'La Doi Pași Gheorgheni', addr: 'Str. Unirii 4', unload: '20 baxuri', collect: '' },
        { n: '04', name: 'Hostel Nord', addr: 'Str. Gării 22', unload: '6 baxuri', collect: '' }
      ],
      sendLabel: 'Trimite șoferilor',
      done: 'Trimis · ambii șoferi au ordinea opririlor și notele de încasare.'
    },

    m6: {
      alertsHead: '#alerte',
      eodHead: '#sfârșit-de-zi',
      caption: 'Agentele nu vorbesc între ele. Când ceva are nevoie de un om, agentul îi spune acelui om.',
      posts: [
        {
          agent: 'Agentul de marjă',
          time: '07:20',
          text: 'Margarină Unirea ×40 s-a vândut sub cost pe 3 comenzi săptămâna asta (Metro Cluj, preț manual). Costul a crescut cu 6% pe data de 2, lista de prețuri nu.',
          suggest: 'Propunere: actualizează nivelul 2 la €61.50.',
          did: 'Actualizat · lista de prețuri nivel 2 · €61.50 de mâine.',
          ignored: 'Ignorat · nu mai semnalează acest SKU săptămâna asta.'
        },
        {
          agent: 'Agentul de stoc',
          time: '07:35',
          text: 'Borsec 0.5L ×12 se termină joi la cererea curentă de pe rute: 32 de baxuri rămase, comanda Magazin Aurora le ia pe toate 32.',
          suggest: 'Propunere: comandă de aprovizionare pentru 120 de baxuri, livrare miercuri.',
          did: 'Ciornă PO-1180 creată · așteaptă confirmarea ta.',
          ignored: 'Ignorat · semnalează din nou dacă mai cresc comenzile de joi.'
        },
        {
          agent: 'Agentul de încasări',
          time: '08:05',
          text: 'Market Dorobanți a plasat azi-dimineață o comandă de €480, în timp ce €2,140 sunt restante de 41 de zile.',
          suggest: 'Propunere: ține comanda până se stabilește o dată de plată și pune-o pe vizita lui Radu de azi.',
          did: 'Reținută · pe lista de vizite a lui Radu · comanda pleacă la da-ul tău.',
          ignored: 'Eliberată · comanda pleacă pe ruta de azi.'
        }
      ],
      eod: [
        'Radu: 9 vizite, 7 comenzi, €3,120 încasați',
        'Elena: 7 vizite, 5 comenzi, €1,980 încasați',
        'Duba 1: 23 de opriri livrate, 2 retururi ridicate',
        'Duba 2: 8 opriri livrate, înapoi la 16:20'
      ]
    }
  };

  return { en: en, ro: ro };
})();
