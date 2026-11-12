<template>
  <div class="prose max-w-none space-y-8">
    <LegalTranslationNote />

    <section>
      <p class="text-kura-text-secondary leading-relaxed text-sm border border-kura-border rounded-xl p-4 bg-kura-background">
        本禁止行為清單已納入
        <NuxtLinkLocale to="/tos" class="text-kura-primary hover:text-kura-accent">服務條款</NuxtLinkLocale>。
        違反者可能遭暫停、終止、通報合作夥伴或主管機關，並喪失推薦或促銷權益。我們及我們的合作夥伴得施加額外限制。
        本清單適用於你對 Kura Finance LLC（下稱「營運方」）所提供之本服務的使用。你對已公開之 Kura 原始碼的使用，受其開源授權條款規範。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">1. 地理及制裁限制</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        如你位於全面制裁司法管轄區、依該等司法管轄區法律設立或通常居住於該等司法管轄區，或你是列名於適用制裁名單（包括 OFAC SDN 及類似名單）之個人或實體，你不得使用本服務。你不得利用本服務規避制裁，或與受制裁之個人、錢包或司法管轄區進行交易。依合作夥伴之資格要求（卡片、Bridge、Dinari、Morpho 等），可能另有國家或功能限制。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">2. 違法行為及金融犯罪</h2>
      <p class="text-kura-text-secondary leading-relaxed">你不得利用本服務：</p>
      <ul class="list-disc pl-6 mt-3 space-y-2 text-kura-text-secondary leading-relaxed">
        <li>從事洗錢、資恐、資助大規模毀滅性武器擴散或規避制裁。</li>
        <li>從事詐欺、身分盜用、網路釣魚、社交工程或未經授權之帳戶接管。</li>
        <li>資助、協助或隱匿犯罪所得。</li>
        <li>違反反賄賂、反貪腐、稅務、賭博或證券法規。</li>
        <li>不實陳述你的身分、資金來源或實質受益權。</li>
      </ul>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">3. 市場濫用及欺騙性交易</h2>
      <ul class="list-disc pl-6 mt-3 space-y-2 text-kura-text-secondary leading-relaxed">
        <li>操縱市場、從事虛假交易（wash trading）、幌騙（spoofing）、分層下單（layering），或以其他方式扭曲價格或交易量。</li>
        <li>利用本服務搶先交易、非法利用未公開資訊，或濫用合作夥伴之 API。</li>
        <li>規避 Kura 或合作夥伴所設之交易、消費、提領或頻率限制。</li>
      </ul>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">4. 平台完整性及安全</h2>
      <ul class="list-disc pl-6 mt-3 space-y-2 text-kura-text-secondary leading-relaxed">
        <li>試圖未經授權存取系統、錢包、金鑰或其他使用者之資料。</li>
        <li>探測、掃描、攻擊或干擾我們所營運之本服務。（依授權條款閱讀、fork 及執行已公開之原始碼則屬允許。）</li>
        <li>植入惡意軟體、濫用 API 之機器人，或發動阻斷服務攻擊。</li>
        <li>規避驗證、地理封鎖、KYC 或風險控管。</li>
        <li>建立多個帳戶以濫用促銷、推薦或候補名單。</li>
      </ul>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">5. 智慧財產權及內容</h2>
      <ul class="list-disc pl-6 mt-3 space-y-2 text-kura-text-secondary leading-relaxed">
        <li>侵害專利、著作權、商標或營業秘密。</li>
        <li>未經書面同意，濫用 Kura 品牌暗示背書或合作關係。</li>
        <li>透過我們營運之客服或社群管道上傳或傳送違法、誹謗或侵權之內容。</li>
      </ul>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">6. 數位資產及協定之不當使用</h2>
      <ul class="list-disc pl-6 mt-3 space-y-2 text-kura-text-secondary leading-relaxed">
        <li>利用智慧合約漏洞、操縱預言機或發動治理攻擊以謀取不法利益。</li>
        <li>違反法律，利用跨鏈橋、兌換或金庫洗錢或掩蓋稽核軌跡。</li>
        <li>以違反適用法律或合作夥伴規則之方式使用混幣或混淆服務。</li>
        <li>將卡片、出入金或經紀功能用於發卡機構或卡片網路規則所禁止之商家類別。</li>
      </ul>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">7. 需加強審查之高風險活動</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        可能觸發加強盡職調查或直接禁止之活動包括：買賣槍械或軍民兩用物品；合作夥伴禁止之成人內容事業；未經許可之匯兌或貨幣服務業務；老鼠會或欺騙性投資計畫；以及合作夥伴指定為禁止之任何業務。審查期間，我們得要求提供額外資訊並凍結本服務之存取。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">8. 更新</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        隨著法律、合作夥伴規則及風險態勢變動，我們得更新本清單。重大更新將依服務條款之通知方式辦理。如有疑問：
        <a href="mailto:legal@kura-finance.com" class="text-kura-primary hover:text-kura-accent">legal@kura-finance.com</a>。
      </p>
    </section>
  </div>
</template>
