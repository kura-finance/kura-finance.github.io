<template>
  <div class="prose max-w-none space-y-8">
    <LegalTranslationNote />

    <section>
      <p class="text-kura-text-secondary leading-relaxed text-sm border border-kura-border rounded-xl p-4 bg-kura-background">
        本風險揭露已納入
        <NuxtLinkLocale to="/tos" class="text-kura-primary hover:text-kura-accent">服務條款</NuxtLinkLocale>。
        Kura Finance LLC 已解散並停止營運。Kura 目前僅以不再維護的開源錢包形式存在，使用風險完全由你自行承擔。
        數位資產及 DeFi 可能導致資金全部損失，請僅使用你能承受損失的資金。本文件並非財務、法律或稅務建議。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">1. 開源軟體，而非銀行</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        Kura 是由 Kura Finance LLC（一家已解散並停止營運之懷俄明州有限責任公司，下稱「營運方」）發布之開源軟體，其原始碼著作權屬於 Kura Finance LLC。營運方不是銀行、證券經紀自營商、匯款業者、交易所、保管機構或投資顧問。加密資產及代幣化證券價格波動劇烈，且不受 FDIC、SIPC、FSCS 或任何政府機關之保險保障。
      </p>
      <p class="text-kura-text-secondary leading-relaxed mt-3">
        <span class="font-semibold text-kura-text">不再維護及已終止之服務。</span>
        該錢包不再維護，亦無客服團隊。銀行轉帳與法幣出入金、美股、卡片、KYC、TrackFi、訂閱及推薦計畫均已永久終止。任何剩餘之功能、伺服器或整合均可能隨時停止運作或關閉，恕不另行通知，且錯誤或漏洞可能永遠不會修復。如與我們的驗證合作夥伴（Privy）之整合停止，你可能無法再透過 Kura 存取；請趁仍可操作時匯出你的私鑰並妥善保管。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">2. 非財務、法律或稅務建議</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        本服務中之一切資訊、圖表、市場資料、分析及資產細節，僅供參考及作為軟體工具之用，均不構成財務、投資、法律或稅務建議。做出決定前，請自行獨立查證並諮詢持有執照之專業人士。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">3. 非託管性質及不可撤回之交易</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        Kura 為非託管服務：你透過 Base 上之 Safe 智慧帳戶控制金鑰。Kura 不持有、控制或保管你的法幣或數位資產，亦無法代你移轉資金。一切交易、兌換、跨鏈橋接、收益存入、借款交易、轉帳、資產購買及刷卡消費，均由你自主操作。區塊鏈及智慧合約交易一般不可撤回，我們無法撤回、凍結或追回。遺失通行密鑰、裝置或已匯出之金鑰，可能導致永久喪失存取權。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">4. 市場及波動風險</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        加密資產、穩定幣、代幣化證券及相關工具之價格可能劇烈波動，甚至歸零。流動性可能消失。即使市場看似平穩，價差、滑價及交易失敗仍可能造成損失。過去績效不代表未來結果。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">5. 智慧合約、預言機及協定風險</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        Morpho Earn、Morpho Borrow、跨鏈橋、兌換、帳戶抽象及相關功能，均仰賴第三方智慧合約及預言機。程式錯誤、漏洞遭利用、治理變更、升級、市場暫停或預言機失效，可能導致存入資產或抵押資產部分或全部損失。稽核可降低但無法消除風險。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">6. DeFi 收益及借貸風險</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        所顯示之收益率係扣除適用費用（包括最高 10% 之 Kura 績效費及 Morpho 金庫費用）後之預估淨報酬，可能與協定之「總」收益率或實際報酬不同。收益率為浮動且不保證。借款涉及浮動利率、抵押要求及清算風險。如抵押品價值跌破所需門檻，抵押品可能在幾乎或完全未通知的情況下被自動清算。收益存款及借款部位均非銀行存款。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">7. 跨鏈橋、兌換及跨鏈風險</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        跨鏈橋及 DEX 聚合器（包括 Li.Fi 路由）涉及智慧合約、中繼者、流動性及目的鏈之風險。轉帳可能延遲、卡住、部分成交或失敗。費用及成交價格可能與報價不同。僅有狀態為 DONE／已成功結算之轉帳，才是可靠的完成紀錄。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">8. 代幣化證券及 RWA 風險</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        透過 Kura（包括透過 Dinari）取得代幣化現實世界資產及美國股票之管道已經終止。你仍持有之任何代幣化資產，仍受發行人及合作夥伴自身條款之規範。取得該等資產須受合作夥伴之 KYC、適合度及司法管轄區限制。代幣化證券可能貶值、次級市場流動性可能有限，且在法律上並非在各方面均等同於持有傳統券商資產。合作夥伴之服務中斷或限制可能導致無法交易或贖回。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">9. 卡片及法幣出入金風險</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        透過 Kura 提供之卡片及法幣出入金服務已永久終止，且不會發行任何卡片。過去之任何卡片或出入金交易，仍受相關發卡機構、銀行或合作夥伴自身條款之規範。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">10. 第三方及資料正確性風險</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        各項功能仰賴獨立提供者（包括 Privy、Bridge、MoonPay、Li.Fi、Morpho、Dinari、Sumsub、Stripe、Plaid、DeBank、CoinGecko、Pimlico 及 WalletConnect）。TrackFi 之交易所連結為唯讀。我們無法控制合作夥伴之服務，對其服務中斷、延遲或決定不負責任。所顯示之餘額及價格仰賴第三方 API 及 RPC 節點，可能不完整、延遲或不正確。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">11. 監管及可用性風險</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        規範數位資產、DeFi、卡片及證券之法律會變動。功能可能在你所在地區無法使用、被撤除，或為遵守法律或合作夥伴要求而修改。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">12. Zero-Access 揭露限制</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        TrackFi 採用 zero-access 加密。我們未保有讀取 TrackFi 敏感內容明文之全面能力。揭露範圍以我們系統中技術上可存取之資料為限。我們不販售使用者之財務資料。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">13. 無受託義務</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        你使用 Kura 並不因此與營運方（Kura Finance LLC）或 Kura 開源專案之任何貢獻者產生受託、顧問或本人與代理人之關係。任何工具、資產或資訊之利弊與風險，均由你自行評估。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">14. 確認</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        使用本服務，即表示你確認已閱讀本風險揭露（包括第 1 條所述之開源及服務終止風險），並完全自行承擔使用本服務之風險。責任限制及爭議解決，請參閱服務條款。
      </p>
    </section>
  </div>
</template>
