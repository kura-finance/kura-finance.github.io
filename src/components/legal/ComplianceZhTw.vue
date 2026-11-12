<template>
  <div class="prose max-w-none space-y-8">
    <LegalTranslationNote />

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">營運方與所有權</h2>
      <div class="space-y-3">
        <p class="text-kura-text-secondary">
          <span class="font-semibold text-kura-text">法律實體：</span>Kura Finance LLC，懷俄明州有限責任公司（已解散；已停止營運）
        </p>
        <p class="text-kura-text-secondary">
          <span class="font-semibold text-kura-text">原始碼與著作權：</span>Kura Finance LLC，公開於
          <a href="https://github.com/Kura-Finance" target="_blank" rel="noopener noreferrer" class="text-kura-primary hover:text-kura-accent">GitHub</a>
        </p>
        <p class="text-kura-text-secondary">
          <span class="font-semibold text-kura-text">郵寄地址：</span>1007 N Orange St. 4th Floor 5629
          <br />
          Wilmington, DE 19801
        </p>
        <p class="text-kura-text-secondary">
          <span class="font-semibold text-kura-text">D-U-N-S® 編號：</span>14-499-3126
        </p>
        <p class="text-kura-text-secondary">
          <span class="font-semibold text-kura-text">聯絡方式：</span>
          <a href="mailto:legal@kura-finance.com" class="text-kura-primary hover:text-kura-accent">legal@kura-finance.com</a>
        </p>
      </div>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">服務狀態</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        Kura Finance LLC 已解散並停止營運。Kura 目前僅以不再維護、亦無客服團隊之開源錢包形式存在。銀行轉帳與法幣出入金、美股、卡片、KYC、TrackFi、訂閱及推薦計畫均已永久終止，我們亦不再接受註冊或入金。本服務依「現狀」提供，使用風險由你自行承擔；請參閱
        <NuxtLinkLocale to="/tos" class="text-kura-primary hover:text-kura-accent">服務條款</NuxtLinkLocale>
        及
        <NuxtLinkLocale to="/disclaimer" class="text-kura-primary hover:text-kura-accent">風險揭露</NuxtLinkLocale>。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">加密隱私與基礎設施</h2>
      <div class="space-y-4">
        <div>
          <h3 class="text-lg font-semibold text-kura-text mb-2">設計上即為非託管：</h3>
          <p class="text-kura-text-secondary leading-relaxed">
            我們是軟體提供者，而非保管機構。Kura 透過我們驗證合作夥伴之多方計算保護，因此沒有任何單一方持有你的完整金鑰。我們的系統無法移轉你的資金，僅你本人得授權交易。
          </p>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-kura-text mb-2">Zero-Access 架構：</h3>
          <p class="text-kura-text-secondary leading-relaxed">
            你在 TrackFi 連結之財務資料採用 zero-access 加密，並以你裝置上之通行密鑰解鎖之金鑰保護。我們的伺服器僅儲存密文，因此我們刻意限制營運方對敏感財務內容之可見度。生物辨識解鎖資料保留在你的裝置上。
          </p>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-kura-text mb-2">資料運算原則：</h3>
          <p class="text-kura-text-secondary leading-relaxed">
            傳輸中之資料以 TLS 1.2／1.3 加密，敏感資料之處理遵循嚴格之存取最小化原則及明確之運算邊界。我們未建置可廣泛以明文存取使用者財務紀錄之資料管線。
          </p>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-kura-text mb-2">設計上之揭露範圍：</h3>
          <p class="text-kura-text-secondary leading-relaxed">
            由於我們未保有讀取敏感使用者資料明文之全面能力，對於超出我們架構實際以可存取形式儲存之範圍的可讀資料，我們在技術上可能無法提供，包括系統遭入侵或依合法政府請求程序時。我們不販售使用者資料。
          </p>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">第三方提供者</h2>
      <p class="text-kura-text-secondary leading-relaxed mb-4">
        Kura 仰賴獨立之第三方提供者，各自依其自身之牌照、合規計畫及條款營運。標示「已終止」之提供者已不再與 Kura 整合：
      </p>
      <ul class="list-disc pl-6 space-y-2 text-kura-text-secondary leading-relaxed">
        <li><span class="font-semibold text-kura-text">Privy</span>：錢包驗證、OAuth 登入、MPC 金鑰管理及私鑰匯出。</li>
        <li><span class="font-semibold text-kura-text">Bridge</span>：法幣出入金及虛擬帳戶（已終止）。</li>
        <li><span class="font-semibold text-kura-text">MoonPay</span>：以卡片購買加密貨幣（已終止）。</li>
        <li><span class="font-semibold text-kura-text">Li.Fi</span>：加密貨幣兌換及跨鏈橋接。</li>
        <li><span class="font-semibold text-kura-text">Morpho</span>：Base 上之 DeFi 收益金庫及借貸市場。</li>
        <li><span class="font-semibold text-kura-text">Dinari</span>：代幣化現實世界資產及美國股票（已終止）。</li>
        <li><span class="font-semibold text-kura-text">Sumsub</span>：卡片合作夥伴開戶之身分驗證（已終止）。</li>
        <li><span class="font-semibold text-kura-text">卡片合作夥伴</span>：非託管簽帳金融卡之發卡及交易處理（已終止）。</li>
        <li><span class="font-semibold text-kura-text">Stripe</span>：訂閱計費（已終止）。</li>
        <li><span class="font-semibold text-kura-text">Plaid</span>：唯讀之銀行及投資帳戶連結（已終止）。</li>
        <li><span class="font-semibold text-kura-text">中心化交易所合作夥伴</span>：供 TrackFi 追蹤餘額之唯讀交易所 API 連線（已終止）。</li>
        <li><span class="font-semibold text-kura-text">DeBank</span>：鏈上代幣及 DeFi 部位資料。</li>
        <li><span class="font-semibold text-kura-text">CoinGecko</span>：加密貨幣市場資料。</li>
        <li><span class="font-semibold text-kura-text">Pimlico</span>：Base 上之智慧帳戶交易基礎設施。</li>
        <li><span class="font-semibold text-kura-text">WalletConnect（Reown）</span>：錢包與 dApp 之間的安全連線。</li>
      </ul>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">監管框架與合規立場</h2>
      <div class="space-y-4">
        <div>
          <h3 class="text-lg font-semibold text-kura-text mb-2">身分驗證（KYC／AML）：</h3>
          <p class="text-kura-text-secondary leading-relaxed">
            Kura 已不再提供任何需要身分驗證之功能。於該等功能提供期間，身分驗證係由受監管之合作夥伴而非 Kura 執行：法幣出入金由 Bridge 執行（於支援時包括企業 KYB），卡片合作夥伴開戶由 Sumsub 執行，美國證券管道由 Dinari 執行。KYC 資料係由該等合作夥伴為履行其洗錢防制義務而處理，Kura 並未以可讀形式持有，且該等合作夥伴可能依其自身義務保存。
          </p>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-kura-text mb-2">訂閱與推薦計畫：</h3>
          <p class="text-kura-text-secondary leading-relaxed">
            付費方案（Basic、Pro、Ultimate）及推薦計畫均已永久終止。過去之參與仍受
            <NuxtLinkLocale to="/referral-terms" class="text-kura-primary hover:text-kura-accent">推薦計畫條款</NuxtLinkLocale>規範。
          </p>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-kura-text mb-2">全球制裁（OFAC）合規：</h3>
          <p class="text-kura-text-secondary leading-relaxed">
            我們致力於在美國法律框架內營運。我們及我們的合作夥伴遵守國際制裁規定，並以篩查機制阻止與非法活動或全面制裁司法管轄區（OFAC）相關之地址或使用者存取相關服務。
          </p>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-kura-text mb-2">地區可用性：</h3>
          <p class="text-kura-text-secondary leading-relaxed">
            Kura Card、法幣出入金及 Dinari 證券均已終止。剩餘功能（包括 Morpho Earn 及 Morpho Borrow）可能於部分地區無法使用，並仰賴第三方協定及提供者。
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
