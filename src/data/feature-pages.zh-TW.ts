import { WEB_APP_URL } from '~/utils/site'
import type { FeaturePageConfig, FeaturePageSlug } from './feature-pages'

/** Traditional Chinese copy for the product pages. Keys and paths mirror FEATURE_PAGES_EN. */
export const FEATURE_PAGES_ZH_TW: Record<FeaturePageSlug, FeaturePageConfig> = {
  account: {
    seo: {
      title: '帳戶',
      description: '你在 Kura 的核心餘額：存放資金、需要時隨時轉出，並以通行密鑰安全保護，一切由你掌控。',
      path: '/account',
      keywords: '金融帳戶, 餘額, 通行密鑰, Kura 帳戶',
    },
    hero: {
      eyebrow: '現金與轉帳',
      title: '你的核心餘額',
      description: 'Kura 的核心帳戶：你的錢存放在這裡，隨時可以依你的方式轉帳、消費或投入運用。',
      tags: ['通行密鑰安全', '你的餘額', '始終由你掌控'],
    },
    sections: [
      {
        label: '餘額',
        title: '隨時待命的資金',
        description: '清楚呈現你目前持有的資產，沒有傳統網銀 App 的雜亂。',
        columns: 2,
        features: [
          { title: '一個餘額，一目了然', description: '打開就看到你有多少錢，不必在選單和層層畫面裡翻找。' },
          { title: '需要時就能轉帳', description: '從日常使用的同一個餘額收款和付款，不用另外管理錢包。' },
          { title: '用你習慣的方式入金', description: '在支援地區透過受監管的合作夥伴，以銀行轉帳或刷卡入金。' },
          { title: '為日常使用而設計', description: '為房租、日用品和帳單而設計，而不只是交易畫面。' },
        ],
      },
      {
        label: '安全',
        title: '只有你能解鎖',
        description: '用生物辨識開啟帳戶，而不是存在伺服器上的密碼。',
        columns: 2,
        features: [
          { title: '通行密鑰保護', description: '用 Face ID 或 Touch ID 解鎖，你的憑證只存在你的裝置上。' },
          { title: '天生可攜', description: '依你的方式匯出和復原存取權，你的身分跟著你走。' },
        ],
      },
    ],
  },

  'financial-account': {
    seo: {
      title: '金融帳戶',
      description: '在同一個精心設計的帳戶裡儲蓄、消費、投資和賺取收益，陪你走過每個財務階段。',
      path: '/financial-account',
      keywords: '金融帳戶, 儲蓄 消費 投資 收益, 整合資金, Kura',
    },
    hero: {
      eyebrow: '產品',
      title: '一個帳戶，涵蓋你的整個財務生活',
      description: 'Kura 把現金、卡片、投資和資產追蹤整合在同一個體驗裡，需要什麼就用什麼。',
      tags: ['現金', '卡片', '投資', '資產組合'],
    },
    sections: [
      {
        label: '探索',
        title: '找到適合你生活的功能',
        description: '每個產品都能獨立使用。從哪裡開始都可以，一起用效果更好，但從不要求你全部使用。',
        columns: 3,
        features: [
          { title: '帳戶', description: '從一個核心餘額持有和轉移資金。', to: '/account' },
          { title: '全球轉帳', description: '跨境匯款，費用清楚透明。', to: '/global-transfers' },
          { title: '多幣別', description: 'USD、EUR、GBP、BRL 和 MXN 集中一處。', to: '/multi-currency' },
          { title: 'Kura Card', description: '在任何接受 Visa 的地方消費。', to: '/kura-card' },
          { title: '投資', description: '不必再裝一個 App 就能建立投資組合。', to: '/invest' },
          { title: '收益', description: '讓閒置資金選擇性地產生收益。', to: '/earn' },
          { title: '借貸', description: '透過 Morpho 市場取得流動性。', to: '/borrow' },
          { title: 'TrackFi', description: '在一個儀表板查看外部帳戶。', to: '/trackfi' },
          { title: '連結帳戶', description: '安全地連結銀行和券商。', to: '/connected-accounts' },
          { title: '淨資產', description: '觀察你的財富隨時間變化。', to: '/net-worth' },
          { title: '企業與團隊', description: '共用資金庫、核准、團隊和報表。', to: '/business' },
        ],
      },
    ],
  },

  'global-transfers': {
    seo: {
      title: '全球轉帳',
      description: '用銀行轉帳和數位美元在全球收付款，快速、透明，為日常使用而設計。',
      path: '/global-transfers',
      keywords: '全球轉帳, 匯款, 國際轉帳, 數位美元, Kura',
    },
    hero: {
      eyebrow: '現金與轉帳',
      title: '在全球收付款',
      description: '用銀行轉帳和數位美元跨境收款和付款，快速、透明，配合你的生活方式。',
      tags: ['銀行轉帳', '數位美元', '全球'],
    },
    sections: [
      {
        label: '轉帳',
        title: '匯款，不再麻煩',
        description: '無論是在海外付房租還是匯錢給家人，Kura 都讓轉帳簡單又清楚。',
        columns: 2,
        features: [
          { title: '銀行轉帳', description: '在支援地區透過受監管的出入金管道轉移資金，事先就能看到費用和到帳時間。' },
          { title: '數位美元', description: '持有和轉帳穩定的數位美元，結算速度跟得上日常生活。' },
          { title: '費用透明', description: '沒有隱藏價差或意外收費，確認前就知道要付多少。' },
          { title: '快速結算', description: '數位轉帳很快就能完成結算，需要用錢時資金已經到位。' },
        ],
      },
    ],
  },

  'multi-currency': {
    seo: {
      title: '多幣別',
      description: '在一個帳戶裡持有和管理 USD、EUR、GBP、BRL 和 MXN，需要時也能刷卡入金。',
      path: '/multi-currency',
      keywords: '多幣別, 美元 歐元 英鎊, 外匯, 全球帳戶, Kura',
    },
    hero: {
      eyebrow: '現金與轉帳',
      title: '多種貨幣，一個帳戶',
      description: '透過受監管的合作夥伴以 USD、EUR、GBP、BRL 和 MXN 入金，需要時也能刷卡入金。',
      tags: ['USD', 'EUR', 'GBP', 'BRL', 'MXN'],
    },
    sections: [
      {
        label: '貨幣',
        title: '全球的錢，在地的便利',
        description: '管理多種貨幣，不必在每個往來的國家開戶。',
        columns: 2,
        features: [
          { title: '支援的貨幣', description: '透過受監管的合作夥伴持有並兌換 USD、EUR、GBP、BRL 和 MXN。' },
          { title: '刷卡入金', description: '需要儲值時直接刷卡入金，不必離開 App。' },
          { title: '單一餘額檢視', description: '在一個清楚的儀表板看到所有幣別和總價值。' },
          { title: '全球消費', description: '在海外用 Kura Card 消費你的餘額，免收外匯手續費。' },
        ],
      },
    ],
  },

  'card-waitlist': {
    seo: {
      title: 'Kura Card 候補名單（已關閉）',
      description: 'Kura Card 候補名單已關閉。這張卡原本規劃提供 0.5% 現金回饋和 0% 外匯手續費，但從未推出。',
      path: '/card-waitlist',
      keywords: 'Kura Card 候補名單, 簽帳金融卡, Visa, 現金回饋, 全球消費',
    },
    hero: {
      eyebrow: '卡片與消費',
      title: 'Kura Card 候補名單已關閉',
      description: 'Kura 曾為一張從未推出的卡片開放候補名單。本頁保留作為當初規劃的紀錄。',
      tags: ['已終止', 'Visa', '0.5% 現金回饋'],
    },
    callout: {
      label: '已終止',
      title: '不會發行任何卡片',
      description: 'Kura 評估過多家卡片合作夥伴，但從未發行任何卡片。候補名單已不再接受登記。',
    },
    sections: [
      {
        label: '權益',
        title: 'Kura Card 原本規劃提供的權益',
        columns: 2,
        features: [
          { title: '0.5% 現金回饋', description: '符合資格的消費可獲得回饋，自動存入你的餘額。' },
          { title: '0% 外匯手續費', description: '在海外刷卡，不收外匯加價。' },
          { title: 'Visa 全球通用', description: '凡是接受 Visa 簽帳金融卡的地方都能使用，包括網路、實體店和海外。' },
          { title: '直接從餘額扣款', description: '卡片直接從你的 Kura 帳戶扣款，不需要另外儲值。' },
        ],
      },
    ],
  },

  invest: {
    seo: {
      title: '投資',
      description: '平靜的投資組合檢視，即時報價、一鍵操作，為長期持有者而非當沖交易者設計。',
      path: '/invest',
      keywords: '投資, 投資組合, 即時行情, Kura 投資',
    },
    hero: {
      eyebrow: '投資與收益',
      title: '看得懂的投資組合',
      description: '圖表、報價和部位集中在一個平靜的畫面裡，為投資的人設計，而不是整天盯著委託簿的人。',
      tags: ['即時報價', '單一畫面', '部位清楚'],
    },
    sections: [
      {
        label: '體驗',
        title: '沒有雜訊的投資',
        description: '沒有擁擠的交易終端，也沒有滿是術語的版面，只有你的持股和你在乎的市場。',
        columns: 2,
        features: [
          { title: '即時報價與圖表', description: '用即時資料和清楚的圖表追蹤你的持股。' },
          { title: '一鍵操作', description: '在日常理財的同一個 App 裡買賣，不必切換。' },
          { title: '部位比重清楚', description: '配置和績效一眼就能看到，不會藏在子選單裡。' },
          { title: '為長期持有而設計', description: '為長期投資組合最佳化，而不是閃爍的燈號和槓桿開關。' },
        ],
      },
    ],
  },

  'us-stocks': {
    seo: {
      title: '美股',
      description: '從你的 Kura 帳戶買賣美股，由 Dinari 提供服務，設計力求簡單。',
      path: '/us-stocks',
      keywords: '美股, 股票, Dinari, 投資股票, Kura',
    },
    hero: {
      eyebrow: '投資與收益',
      title: '從你的帳戶投資美股',
      description: '用日常理財的同一個餘額買賣美股，由 Dinari 提供服務。',
      tags: ['Dinari', '美國股票', '一鍵投資'],
    },
    sections: [
      {
        label: '美股',
        title: '華爾街，不再複雜',
        description: '從一個以清楚為設計重點的金融帳戶進入美國市場，沒有交易員術語。',
        columns: 2,
        features: [
          { title: '由 Dinari 提供服務', description: '透過值得信賴的基礎設施，以受監管的方式投資美股。' },
          { title: '同一個帳戶', description: '不需要另外登入券商，直接用你現有的餘額投資。' },
          { title: '即時報價與圖表', description: '用為一般投資人打造的介面即時追蹤市場。' },
          { title: '支援零股', description: '不必買下一整股，也能投資你看好的公司。' },
        ],
      },
    ],
  },

  earn: {
    seo: {
      title: '收益',
      description: '透過 Morpho 驅動的透明收益策略，讓閒置資金發揮作用。說明清楚，完全自願。',
      path: '/earn',
      keywords: '賺取收益, 閒置資金, Morpho, 儲蓄, Kura 收益',
    },
    hero: {
      eyebrow: '投資與收益',
      title: '讓閒置資金發揮作用',
      description: '透明的收益策略，讓你的錢在等待時也能成長。說明清楚，完全自願。',
      tags: ['Morpho', '透明收益', '不鎖倉'],
    },
    sections: [
      {
        label: '收益',
        title: '收益，不必猜',
        description: '投入任何一塊錢之前，就能看到利率和金庫細節。',
        columns: 3,
        features: [
          { title: '透明收益', description: '在投入任何一塊錢之前，就能看到清楚的利率和金庫細節，讓閒置資金發揮作用。' },
          { title: '由 Morpho 驅動', description: '透過值得信賴的收益策略賺取具競爭力的報酬，不必離開你的帳戶。' },
          { title: '隨時提領', description: '需要流動性時隨時把資金轉回餘額，不鎖倉，沒有意外。' },
        ],
      },
    ],
  },

  borrow: {
    seo: {
      title: '借貸',
      description: '透過 Morpho 驅動的透明借貸，從你的帳戶取得流動性，利率和抵押條件事先揭露。',
      path: '/borrow',
      keywords: '借貸, Morpho, 放貸, 流動性, 抵押品, Kura 借貸',
    },
    hero: {
      eyebrow: '投資與收益',
      title: '借款，清清楚楚',
      description: '需要流動性但不想賣掉部位？透過 Morpho 市場借款，利率、抵押要求和條款都清楚透明，完全自願，由你自主操作。',
      tags: ['Morpho', '利率透明', '自主操作'],
    },
    sections: [
      {
        label: '借貸',
        title: '需要時就有流動性',
        description: '借款前就能看到借款利率、抵押率和市場細節。',
        columns: 3,
        features: [
          { title: '由 Morpho 驅動', description: '透過 Morpho 基礎設施進入借貸市場，直接整合在你的 Kura 帳戶裡。' },
          { title: '利率事先揭露', description: '借款前先看到利率和抵押要求，沒有隱藏價差。' },
          { title: '掌控在你', description: '何時借、借多少、何時還，都由你在每天使用的同一個 App 裡決定。' },
        ],
      },
      {
        label: '風險',
        title: '借款前先了解',
        description: '借款涉及抵押品和市場風險。Kura 把條款攤開，決定權在你。',
        columns: 2,
        features: [
          { title: '抵押要求', description: '借款以抵押品擔保。如果抵押品價值跌破要求水準，可能會被清算。' },
          { title: '浮動利率', description: '利率會隨市場狀況變動，請在 App 裡留意你的部位和健康係數。' },
        ],
      },
    ],
  },

  'connected-accounts': {
    seo: {
      title: '連結帳戶',
      description: '以唯讀權限連結外部帳戶。你的資料在同步之前就已在裝置上加密。',
      path: '/connected-accounts',
      keywords: '連結帳戶, 連結銀行, 唯讀, 帳戶整合, Kura',
    },
    hero: {
      eyebrow: '資產組合',
      title: '幾分鐘就能連結帳戶',
      description: '以唯讀權限連結銀行、券商和平台，讓 Kura 為你保持最新的全貌，而掌控權始終在你手上。',
      tags: ['唯讀', '快速設定', '加密同步'],
    },
    sections: [
      {
        label: '運作方式',
        title: '三個步驟，看得更完整',
        description: '不以明文儲存憑證，也沒有動用你資金的權限，只有安全的唯讀連結。',
        columns: 3,
        features: [
          { title: '選擇你的機構', description: '直接在 App 裡從支援的銀行、券商和平台中挑選。' },
          { title: '安全驗證', description: '透過你的機構自己的流程登入，Kura 從不會看到或儲存你的網銀密碼。' },
          { title: '同步前先加密', description: '餘額和交易紀錄在離開你的裝置之前就已加密。' },
        ],
      },
      {
        label: '你會得到什麼',
        title: '永遠唯讀',
        columns: 2,
        features: [
          { title: '僅限檢視', description: '連結的帳戶永遠不能代你轉移資金。' },
          { title: '背景更新', description: '在你的工作階段期間，定時同步讓餘額保持最新。' },
        ],
      },
    ],
  },

  'net-worth': {
    seo: {
      title: '淨資產',
      description: '觀察你的總財富隨時間變化，歷史紀錄私密加密，一切依你的條件。',
      path: '/net-worth',
      keywords: '淨資產, 財富歷史, 財務時間軸, Kura',
    },
    hero: {
      eyebrow: '資產組合',
      title: '看見財富隨時間變化',
      description: '一條線說完整個故事：你所連結的每個帳戶加總後，淨資產如何上升、下降與變化。',
      tags: ['歷史', '趨勢', '私密'],
    },
    sections: [
      {
        label: '時間軸',
        title: '你的財富，畫成曲線',
        description: '不只是今天的一個數字，而是你走過的路和前進的方向。',
        columns: 2,
        features: [
          { title: '淨資產走勢', description: '瀏覽總資產的每日、每週和每月快照。' },
          { title: '類別細目', description: '看看現金、投資和其他資產各占多少。' },
          { title: '關鍵時刻', description: '找出轉折點：新工作、一筆大額消費、一次市場變動。' },
          { title: '加密的歷史紀錄', description: '你的時間軸在裝置上加密，我們儲存的是密文，不是可讀的紀錄。' },
        ],
      },
    ],
  },

  banking: {
    seo: {
      title: '銀行帳戶',
      description: '連結支票、儲蓄帳戶和信用卡，追蹤餘額和現金流，同步前先加密。',
      path: '/banking',
      keywords: '銀行, 支票帳戶, 儲蓄帳戶, 信用卡, 現金流, TrackFi',
    },
    hero: {
      eyebrow: 'TrackFi',
      title: '追蹤你的日常資金',
      description: '以唯讀權限連結支票、儲蓄帳戶和信用卡，了解現金流而不必交出掌控權。',
      tags: ['支票與儲蓄', '信用卡', '現金流'],
    },
    sections: [
      {
        label: '銀行帳戶',
        title: '日常資金，清楚呈現',
        columns: 2,
        features: [
          { title: '支票與儲蓄帳戶', description: '不必登入五個不同的 App，就能看到各帳戶的餘額。' },
          { title: '信用卡', description: '在同一個私密畫面裡，追蹤信用卡餘額和消費，以及你的現金。' },
          { title: '現金流一目了然', description: '不必匯出試算表，就能了解資金的流入和流出。' },
          { title: '在裝置上加密', description: '銀行資料在同步前先加密，Kura 無法讀取你的交易紀錄。' },
        ],
      },
    ],
  },

  investments: {
    seo: {
      title: '投資帳戶',
      description: '連結券商、ETF 和交易所帳戶，在一個地方看到完整的投資全貌。',
      path: '/investments',
      keywords: '投資, 券商, ETF, 交易所帳戶, 投資組合追蹤',
    },
    hero: {
      eyebrow: 'TrackFi',
      title: '跨平台的投資',
      description: '連結券商和交易所帳戶，把股票、ETF 和部位放在一起看，不必一個一個登入。',
      tags: ['券商', 'ETF', '交易所帳戶'],
    },
    sections: [
      {
        label: '投資',
        title: '所有券商，一個畫面',
        columns: 2,
        features: [
          { title: '券商帳戶', description: '連結主要券商，把持股和你的其他資產放在一起看。' },
          { title: '股票與 ETF', description: '追蹤股票和基金部位，配置比例清楚呈現。' },
          { title: '交易所平台', description: '匯入支援之交易所帳戶的部位，永遠唯讀。' },
          { title: '配置一目了然', description: '看看你的投資組合對總淨資產的貢獻。' },
        ],
      },
    ],
  },

  'digital-assets': {
    seo: {
      title: '數位資產',
      description: '追蹤你在支援網路上的數位資產，一鍵連結外部帳戶或你的 Kura 餘額。',
      path: '/digital-assets',
      keywords: '數位資產, 投資組合追蹤, 加密貨幣持倉, TrackFi',
    },
    hero: {
      eyebrow: 'TrackFi',
      title: '私密追蹤數位資產',
      description: '在一個儀表板查看各支援網路上的部位，或立即連結你的 Kura 帳戶，不需額外設定。',
      tags: ['多網路', '部位', '一鍵連結'],
    },
    sections: [
      {
        label: '數位資產',
        title: '不用試算表也能掌握持倉',
        columns: 2,
        features: [
          { title: '支援多個網路', description: '在單一加密畫面追蹤各支援網路上的部位。' },
          { title: '連結外部帳戶', description: '以唯讀權限連結支援的平台，隱私模式與銀行帳戶相同。' },
          { title: 'Kura 帳戶一鍵連結', description: '已經在用 Kura？立即連結你的帳戶餘額，不需要重新驗證。' },
          { title: '整體的一部分', description: '數位資產會和現金及傳統投資一起計入你的淨資產。' },
        ],
      },
    ],
  },

  business: {
    seo: {
      title: '企業與團隊',
      description: '用共用資金庫、核准流程、團隊角色和報表管理公司資金，透過 Pro 或 Ultimate 方案在 Kura 網頁儀表板上使用。',
      path: '/business',
      keywords: '企業資金庫, 團隊核准, 組織財務, 多位持有人, Kura 企業',
    },
    hero: {
      eyebrow: '企業與團隊',
      title: '公司資金，共同掌控',
      description: '為共用資金庫注資、提出付款請共同簽署人核准、管理團隊角色並匯出報表。為需要清楚掌握資金、又不想交出託管權的營運者而打造。',
      tags: ['資金庫', '核准', '團隊', '報表'],
    },
    heroActions: [{ label: 'Pro 儀表板', to: WEB_APP_URL, primary: true }],
    callout: {
      label: '網頁儀表板',
      title: '企業與團隊功能需要 Pro 或 Ultimate 方案',
      description: '完整的網頁體驗，包括資金庫、核准、團隊和報表，僅限 Pro 和 Ultimate 方案使用。行動 App 的日常個人使用則維持免費。',
      ctaLabel: '開啟 Pro 儀表板',
      ctaTo: WEB_APP_URL,
    },
    sections: [
      {
        label: '功能',
        title: '團隊一起管理資金所需的一切',
        description: '網頁儀表板上一組精簡的組織工具，不是另一個銀行產品，也不用再學一套 App。',
        columns: 2,
        features: [
          {
            title: '資金庫',
            subtitle: '公司共用資金',
            description: '建立或匯入多位持有人的 Treasury Safe。注資、追蹤持倉，把公司資金和個人餘額分開。',
          },
          {
            title: '核准',
            subtitle: '提案 → 簽署 → 執行',
            description: '把 USDC 付款和其他資金庫操作排入佇列，交給共同簽署人。看清楚哪些在等待、誰已簽署、還有哪些需要處理。',
          },
          {
            title: '團隊',
            subtitle: '角色與持有人',
            description: '邀請成員、指派角色並同步 Safe 持有人，讓提案權和簽署權符合公司實際的運作方式。',
          },
          {
            title: '報表',
            subtitle: '現金流一清二楚',
            description: '查看各期間的摘要，並匯出資金庫和連結來源的活動紀錄，讓營運和財務看到同一張全貌。',
          },
        ],
      },
    ],
  },
}
