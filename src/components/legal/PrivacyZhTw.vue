<template>
  <div class="prose max-w-none space-y-8">
    <LegalTranslationNote />

    <section>
      <p class="text-kura-text-secondary leading-relaxed text-sm border border-kura-border rounded-xl p-4 bg-kura-background">
        本隱私權政策說明 Kura Finance LLC（一家已解散並停止營運之懷俄明州有限責任公司，下稱「營運方」、「我們」或「我們的」）於你使用 Kura 網站、應用程式及相關服務（下稱「本服務」）時，如何處理個人資料。本政策應與我們的
        <NuxtLinkLocale to="/tos" class="text-kura-primary hover:text-kura-accent">服務條款</NuxtLinkLocale>
        及
        <NuxtLinkLocale to="/compliance" class="text-kura-primary hover:text-kura-accent">信任與安全中心</NuxtLinkLocale>一併閱讀。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">1. 我們是誰</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        資料控制者：Kura Finance LLC，懷俄明州有限責任公司（已解散；已停止營運）。郵寄地址：1007 N Orange St. 4th Floor 5629, Wilmington, DE 19801。隱私聯絡窗口：
        <a href="mailto:privacy@kura-finance.com" class="text-kura-primary hover:text-kura-accent">privacy@kura-finance.com</a>。
      </p>
      <p class="text-kura-text-secondary leading-relaxed mt-3">
        Kura 現為開源專案，其原始碼著作權屬於 Kura Finance LLC，並公開於 GitHub。如你自行執行該程式碼之副本，你應對其所處理之任何個人資料負責；本政策僅涵蓋由我們營運之本服務。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">2. 我們蒐集的資訊</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        Kura Finance LLC 已解散並停止營運，剩餘之開源錢包不再維護。由於卡片、法幣出入金、證券、TrackFi、訂閱及推薦功能均已終止，我們不再蒐集新的驗證、卡片顯示、連結帳戶、計費或推薦資料。以下類別包括上述功能提供期間所蒐集之資料，該等資料可能仍依第 8 條所述保存。
      </p>
      <p class="text-kura-text-secondary leading-relaxed mt-3">
        我們採取資料最小化優先之政策，僅蒐集營運本服務所需之資料：
      </p>
      <ul class="list-disc pl-6 mt-3 space-y-2 text-kura-text-secondary leading-relaxed">
        <li><span class="font-semibold text-kura-text">帳戶資料</span>：來自我們登入合作夥伴之驗證識別碼（例如電子郵件），以及你的公開錢包地址。</li>
        <li><span class="font-semibold text-kura-text">你所連結之財務資料</span>：你在 TrackFi 中連結之銀行、券商、唯讀交易所 API 連線及鏈上錢包的餘額、交易及持倉。TrackFi 敏感內容採用 zero-access 加密，於我們的伺服器上僅以密文形式儲存。</li>
        <li><span class="font-semibold text-kura-text">驗證資料</span>：你使用卡片、法幣出入金或證券功能時，身分（KYC）資訊係由受監管之合作夥伴（例如 Bridge、Sumsub 或 Dinari）蒐集及處理，Kura 並未以可讀形式持有。</li>
        <li><span class="font-semibold text-kura-text">訂閱及計費資料</span>：由 Stripe 或應用程式商店處理商處理之方案等級、付款狀態及計費識別碼。</li>
        <li><span class="font-semibold text-kura-text">推薦資料</span>：營運推薦計畫所需之推薦碼、被推薦使用者之關係、獎勵發放狀態及相關識別碼。</li>
        <li><span class="font-semibold text-kura-text">卡片顯示資料</span>：如應用程式內顯示虛擬卡，我們可能暫時自卡片合作夥伴取得遮蔽或完整之卡片資料，僅用於向你顯示。除顯示當次所需外，我們不儲存完整卡號，亦不將卡號用於行銷。</li>
        <li><span class="font-semibold text-kura-text">技術資料</span>：為確保可靠性及防制詐欺所需之裝置、應用程式版本、診斷資訊、IP 位址、依 IP 推估之約略位置、當機紀錄及安全訊號。</li>
        <li><span class="font-semibold text-kura-text">通訊</span>：你寄送至我們隱私或法務信箱之訊息及相關中繼資料。</li>
      </ul>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">3. 我們如何使用資訊</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        我們使用資訊以：提供並保護本服務；建立錢包；支援仍可使用之功能（例如轉帳、兌換及 Morpho 收益／借貸）；依法保存已終止功能之紀錄；防制詐欺及濫用；遵守法律；提升可靠性；以及發送服務通知。我們不販售你的個人或財務資料，亦不將 TrackFi 財務紀錄用於廣告、廣告投放或行為剖析。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">4. 法律依據（歐洲經濟區／英國）</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        如適用 GDPR 或英國 GDPR，我們依下列適用之依據處理個人資料：(a) 履行契約（提供你所請求之本服務）；(b) 正當利益（安全、防制詐欺、產品改善及有限之分析），並與你的權利相權衡；(c) 法律義務（稅務、會計及合法請求）；及 (d) 於必要時取得之同意（例如特定 Cookie 或可選擇之通訊）。你得撤回同意，但不影響撤回前已合法進行之處理。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">5. 第三方處理者及合作夥伴</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        你使用某項功能時，相關合作夥伴依其自身之隱私權政策處理資料。下列合作夥伴包括現已終止之功能所使用者；於該等功能提供期間你提供給他們的資料，他們可能仍有保存：
      </p>
      <ul class="list-disc pl-6 mt-3 space-y-2 text-kura-text-secondary leading-relaxed">
        <li><span class="font-semibold text-kura-text">Privy</span>：驗證、OAuth、嵌入式錢包 MPC 金鑰管理。</li>
        <li><span class="font-semibold text-kura-text">Bridge／MoonPay</span>：法幣出入金及相關 KYC。</li>
        <li><span class="font-semibold text-kura-text">Li.Fi</span>：兌換及跨鏈橋接。</li>
        <li><span class="font-semibold text-kura-text">Morpho</span>：DeFi 金庫及借貸市場（鏈上）。</li>
        <li><span class="font-semibold text-kura-text">Dinari</span>：代幣化資產／股票之 KYC 及經紀流程。</li>
        <li><span class="font-semibold text-kura-text">Sumsub／卡片合作夥伴</span>：卡片 KYC、發卡及交易處理。</li>
        <li><span class="font-semibold text-kura-text">Stripe／應用程式商店</span>：訂閱計費。</li>
        <li><span class="font-semibold text-kura-text">Plaid／中心化交易所 API</span>：TrackFi 之唯讀帳戶連結。</li>
        <li><span class="font-semibold text-kura-text">DeBank／CoinGecko／Pimlico／WalletConnect（Reown）</span>：市場資料、鏈上資料、帳戶抽象基礎設施及錢包連線。</li>
        <li><span class="font-semibold text-kura-text">基礎設施／分析</span>：營運本服務所需之主機代管、CDN、錯誤監控及資安工具。</li>
      </ul>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">6. Zero-Access 安全模型</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        你的錢包金鑰由你控制。TrackFi 敏感內容係以你的通行密鑰所解鎖之金鑰在裝置上加密，我們的伺服器僅持有密文。生物辨識解鎖資料保留在你的裝置上。傳輸中之資料使用 TLS 加密。由於我們未保有對 TrackFi 密文之廣泛明文存取能力，我們能產出之可讀財務內容在結構上受到限制，包括於資料外洩後或回應第三方請求時。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">7. 法律請求及揭露</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        如我們善意認為法律、法規、法律程序或政府請求要求揭露，或為執行我們的條款，或為保護我們、使用者或公眾，我們得揭露資訊。我們能揭露之內容取決於技術上可存取之範圍，通常可能包括帳戶識別碼、錢包地址、裝置／IP 紀錄、計費及推薦紀錄以及客服往來紀錄，但不包括 TrackFi 密文之明文。持有 KYC 資料之合作夥伴可能依其自身義務另行回應。鏈上交易為公開資訊。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">8. 保存</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        我們僅於蒐集目的所需期間內保存個人資料，包括為提供本服務、解決爭議、執行協議，以及符合法律、稅務及會計要求。一般保存期間如下（如有較長之法律保存要求，從其規定）：
      </p>
      <ul class="list-disc pl-6 mt-3 space-y-2 text-kura-text-secondary leading-relaxed">
        <li>帳戶及驗證紀錄：於帳戶存續期間保存，其後保存一段合理之結束期間。</li>
        <li>計費及訂閱紀錄：如稅務／會計規則要求，一般保存最長七（7）年。</li>
        <li>推薦及獎勵發放紀錄：於計畫存續期間加上合理之稽核期間保存。</li>
        <li>安全及存取紀錄：一般保存 12 至 24 個月，除非調查需要保存更久。</li>
        <li>客服案件：一般於結案後保存最長三（3）年。</li>
        <li>TrackFi 密文：保存至你刪除或關閉帳戶為止，並受備份輪替影響。</li>
      </ul>
      <p class="text-kura-text-secondary leading-relaxed mt-3">
        合作夥伴所持有之 KYC 資料，可能由該等合作夥伴依洗錢防制規定保存，非 Kura 所能控制。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">9. 國際傳輸</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        我們及我們的提供者可能於美國及我們的提供者營運所在之其他國家處理資料。於必要時，我們使用適當之傳輸機制，例如標準契約條款或提供者之認證。你自美國境外使用本服務，即表示你了解你的資訊可能被傳輸至資料保護法律不同之司法管轄區。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">10. 你的權利及選擇</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        依你所在地區，你可能享有查閱、更正、刪除、攜出或限制處理個人資料，或反對特定處理之權利。你可以中斷帳戶連結、在產品允許時刪除加密之 TrackFi 快取，並請求刪除帳戶。部分紀錄可能因法律要求而保存。如欲行使權利，請寄信至
        <a href="mailto:privacy@kura-finance.com" class="text-kura-primary hover:text-kura-accent">privacy@kura-finance.com</a>。
        我們可能需要驗證你的身分。你得向當地監管機關提出申訴。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">11. 美國各州隱私權聲明（包括 CCPA）</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        如你是加州居民（或設有類似法律之州的居民），你可能享有知悉、刪除、更正及選擇退出特定分享之權利。我們蒐集之個人資料類別詳見第 2 條。我們不以一般定義之「出售」方式出售個人資料，亦不為跨情境行為廣告而分享個人資料。除提供本服務所必要者外，我們不會基於 CCPA 下須賦予限制權之目的使用或揭露敏感個人資料。你可以寄信至
        <a href="mailto:privacy@kura-finance.com" class="text-kura-primary hover:text-kura-accent">privacy@kura-finance.com</a>
        提出請求。經授權之代理人得檢附授權證明提出請求。我們不會因你行使隱私權利而給予差別待遇。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">12. Cookie、SDK 及分析</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        我們的網站及應用程式可能為驗證、安全、偏好設定、效能及有限之產品分析，使用 Cookie、本機儲存空間及行動 SDK。必要性 Cookie 為本服務運作所必需。於法律要求時，我們將就非必要性 Cookie 取得你的同意。你可以透過瀏覽器設定控制 Cookie；封鎖部分 Cookie 可能導致功能無法使用。行動作業系統之設定可能限制廣告或追蹤識別碼；我們不將 TrackFi 資料用於廣告。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">13. 兒童</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        本服務並非以未滿 18 歲之兒童（或於適用較高保護標準時，未滿 13 歲之兒童）為對象。我們不會在知情的情況下蒐集兒童之個人資料。如我們得知曾蒐集該等資料，將予以刪除。如你認為有兒童提供了資料，請與我們聯絡。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">14. 業務移轉</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        如我們涉及合併、收購、融資、重組、破產或資產出售，個人資料可能作為該交易之一部分而被移轉，並受保密義務及與本政策一致之持續隱私承諾所拘束。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">15. 本政策之變更</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        我們得不時更新本政策。我們將修改「最後更新」日期，並得就重大變更另行通知。於法律允許之範圍內，你於生效日後繼續使用本服務，即構成你對更新後政策之接受。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">16. 聯絡方式</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        隱私請求：
        <a href="mailto:privacy@kura-finance.com" class="text-kura-primary hover:text-kura-accent">privacy@kura-finance.com</a>
        · 法務：
        <a href="mailto:legal@kura-finance.com" class="text-kura-primary hover:text-kura-accent">legal@kura-finance.com</a>。
      </p>
    </section>
  </div>
</template>
