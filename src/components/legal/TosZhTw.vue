<template>
  <div class="prose max-w-none space-y-8">
    <LegalTranslationNote />

    <section>
      <p class="text-kura-text-secondary leading-relaxed text-sm border border-kura-border rounded-xl p-4 bg-kura-background">
        <span class="font-semibold text-kura-text">重要提示。</span>
        Kura Finance LLC 已解散並停止營運。Kura 目前僅以不再維護的開源錢包形式存在，依「現狀」提供，使用風險完全由你自行承擔（見第 3、16 及 17 條）。
        本條款包含第 19 條所載之具拘束力的仲裁協議及放棄集體訴訟條款。
        使用本服務即表示你同意以個人身分透過仲裁解決爭議，但法律禁止者除外。
        相關文件：
        <NuxtLinkLocale to="/privacy" class="text-kura-primary hover:text-kura-accent">隱私權政策</NuxtLinkLocale>、
        <NuxtLinkLocale to="/disclaimer" class="text-kura-primary hover:text-kura-accent">風險揭露</NuxtLinkLocale>、
        <NuxtLinkLocale to="/prohibited-activities" class="text-kura-primary hover:text-kura-accent">禁止行為</NuxtLinkLocale>
        及
        <NuxtLinkLocale to="/referral-terms" class="text-kura-primary hover:text-kura-accent">推薦計畫條款</NuxtLinkLocale>。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">1. 條款之接受</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        本服務條款（下稱「本條款」）為你與 Kura Finance LLC 之間具拘束力的協議。Kura Finance LLC 為已解散並停止營運之懷俄明州有限責任公司（下稱「營運方」、「我們」或「我們的」）。本條款所稱「Kura」係指本服務。本條款規範你對 Kura 行動應用程式、網站（包括 kura-finance.com 及相關子網域）、API、儀表板，以及我們所提供且連結至本條款之任何其他產品或服務（下合稱「本服務」）的存取與使用。
      </p>
      <p class="text-kura-text-secondary leading-relaxed mt-3">
        建立帳戶、存取或使用本服務，即表示你同意本條款及以引用方式納入之文件。如你不同意，請勿使用本服務。如你代表某一實體使用本服務，即表示你聲明你有權代表該實體受拘束，且「你」包括該實體。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">2. 條款之變更</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        我們得不時更新本條款。更新時，我們將修改「最後更新」日期，並得於應用程式內、以電子郵件或於我們的網站另行通知。除法律要求較長通知期間者外，重大變更自公布時生效。你於生效日後繼續使用本服務，即構成你對更新後條款之接受。如你不同意，你必須停止使用本服務。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">3. 服務說明</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        <span class="font-semibold text-kura-text">開源專案；已終止之服務。</span>
        Kura Finance LLC 已解散並停止營運。Kura 目前僅以開源錢包形式存在，其原始碼公開於
        <a href="https://github.com/Kura-Finance" target="_blank" rel="noopener noreferrer" class="text-kura-primary hover:text-kura-accent">GitHub</a>。
        該錢包不再維護，亦無客服團隊。銀行轉帳與法幣出入金、美股、卡片、KYC、TrackFi、訂閱及推薦計畫均已永久終止，我們亦不再接受註冊或入金。任何其他功能均得隨時變更、不予維護或關閉，恕不另行通知。以下功能說明僅供參考，並不表示該等功能仍可使用。
      </p>
      <p class="text-kura-text-secondary leading-relaxed mt-3">
        Kura 是一款非託管的金融科技應用程式，將多項由使用者自主操作的工具整合於單一介面，包括：
      </p>
      <ul class="list-disc pl-6 mt-3 space-y-2 text-kura-text-secondary leading-relaxed">
        <li><span class="font-semibold text-kura-text">自託管錢包</span>：位於 Base 上、由你透過 MPC 簽署基礎設施控制之 Safe 智慧帳戶。我們不持有你的私鑰，亦不代你移轉資金。</li>
        <li><span class="font-semibold text-kura-text">探索與交易</span>：由使用者自主進行之加密貨幣兌換與跨鏈橋接、代幣化現實世界資產，以及透過持牌第三方提供者交易之美國股票。</li>
        <li><span class="font-semibold text-kura-text">Morpho Earn</span>：透過 Base 上 Morpho 之 Kura fee warp 金庫，就支援之穩定幣選擇性賺取收益。Kura 得收取最高 10% 之績效費。報酬取決於 Morpho 之狀況及金庫費用。</li>
        <li><span class="font-semibold text-kura-text">Morpho Borrow</span>：透過 Base 上第三方 Morpho 借貸市場，以支援之抵押品選擇性借款，並承擔清算及利率風險。</li>
        <li><span class="font-semibold text-kura-text">Kura Card</span>：取得由受監管之卡片合作夥伴發行、並由你所擁有之智慧合約錢包提供資金的非託管 Visa 簽帳金融卡。能否取得取決於候補名單狀態、合作夥伴之資格審核，且發卡時另受持卡人協議之規範。</li>
        <li><span class="font-semibold text-kura-text">法幣出入金</span>：透過受監管之支付合作夥伴，於法幣與穩定幣之間入金及出金。</li>
        <li><span class="font-semibold text-kura-text">TrackFi</span>：以唯讀方式彙整已連結之銀行、券商、交易所及鏈上帳戶，並以 zero-access 加密保護。</li>
        <li><span class="font-semibold text-kura-text">訂閱</span>：可選擇之付費方案（Basic、Pro、Ultimate），用以解鎖額外功能。</li>
        <li><span class="font-semibold text-kura-text">推薦計畫</span>：可選擇參加之營收分潤計畫，受
          <NuxtLinkLocale to="/referral-terms" class="text-kura-primary hover:text-kura-accent">推薦計畫條款</NuxtLinkLocale>規範。</li>
      </ul>
      <p class="text-kura-text-secondary leading-relaxed mt-3">
        Kura 是軟體提供者。我們不是銀行、證券經紀自營商、匯款業者、保管機構、交易所或投資顧問，亦不提供財務、法律或稅務建議。所顯示之餘額係你所控制或連結之錢包或帳戶內資產的視覺化呈現，並非由 Kura 持有之存款。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">4. 資格；聲明與保證</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        你聲明並保證：
      </p>
      <ul class="list-disc pl-6 mt-3 space-y-2 text-kura-text-secondary leading-relaxed">
        <li>你已年滿 18 歲（或你所在司法管轄區之成年年齡），並具有締結本條款之法律行為能力。</li>
        <li>你並非全面制裁司法管轄區之公民或居民，亦不位於該等司法管轄區，且未列名於 OFAC 或其他適用主管機關所管理之任何制裁名單。</li>
        <li>你僅將本服務用於合法目的，並遵守所有適用法律，包括洗錢防制、制裁、稅務及證券法規。</li>
        <li>你所提供之一切資訊均正確完整，且你將持續更新。</li>
        <li>你係為自己行事，而非代表任何未揭露之第三人，但我們明示允許多使用者或企業功能者除外。</li>
        <li>你了解數位資產、DeFi 協定、跨鏈橋及代幣化證券涉及重大虧損風險，如我們的
          <NuxtLinkLocale to="/disclaimer" class="text-kura-primary hover:text-kura-accent">風險揭露</NuxtLinkLocale>所述。</li>
      </ul>
      <p class="text-kura-text-secondary leading-relaxed mt-3">
        部分功能（包括卡片、法幣出入金、Dinari 證券、Morpho Earn 及 Morpho Borrow）僅於支援地區、且僅向完成合作夥伴驗證之使用者提供。登記候補名單並不保證取得資格、時程或權益。我們及我們的合作夥伴得為遵守法律或合作夥伴要求而拒絕、暫停或限制存取。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">5. 非託管錢包；金鑰；復原</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        Kura 為非託管服務。簽署金鑰由我們的驗證合作夥伴（目前為 Privy）透過多方計算產生並保護，僅你本人得授權交易。你應自行負責保護你的裝置、登入憑證、通行密鑰、已匯出之金鑰及任何復原資料。
      </p>
      <p class="text-kura-text-secondary leading-relaxed mt-3">
        區塊鏈交易不可撤回。交易一經廣播，我們即無法撤回、取消、凍結或追回資金；如你失去對驗證要素或金鑰之控制，我們亦無法恢復你的存取權。匯出金鑰或種子資料可能永久改變你的安全狀態，你承擔一切相關風險。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">6. 第三方服務及合作夥伴</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        發卡、法幣出入金、身分驗證、兌換與跨鏈橋接、收益及借貸市場、證券管道、計費、帳戶連結及鏈上資料，均由獨立第三方提供，包括 Privy、Bridge、MoonPay、Li.Fi、Morpho、Dinari、Sumsub、Stripe、Plaid、DeBank、CoinGecko、Pimlico 及 WalletConnect（Reown）。TrackFi 之交易所連結使用唯讀憑證，Kura 無法於已連結之交易所帳戶執行交易。
      </p>
      <p class="text-kura-text-secondary leading-relaxed mt-3">
        該等服務受其各自之條款及隱私權政策規範，並可能要求 KYC、資格審核或設有地理限制。Bridge（法幣）、Sumsub／卡片合作夥伴（卡片）及 Dinari（證券）可能適用各自獨立之 KYC 流程。對於第三方、區塊鏈網路或 RPC 提供者之可用性、正確性、效能、費用或決定，我們無法控制，亦不負責任。
      </p>
      <p class="text-kura-text-secondary leading-relaxed mt-3">
        Kura Card 發卡時，你與發卡機構之關係受另行簽訂之持卡人協議規範。就卡片使用事項，本條款與持卡人協議如有衝突，以持卡人協議為準。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">7. 使用者行為；禁止行為</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        你同意不濫用本服務。在不限於此的前提下，你不得從事我們的
        <NuxtLinkLocale to="/prohibited-activities" class="text-kura-primary hover:text-kura-accent">禁止行為清單</NuxtLinkLocale>
        所列之行為，包括違法活動、洗錢、規避制裁、詐欺、市場濫用、未經授權之存取或干擾本服務。我們及我們的合作夥伴會比對制裁名單，並得為履行法律義務而拒絕、暫停或限制存取。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">8. 費用</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        你應負擔與你使用本服務有關之一切費用，包括：(a) Kura 訂閱費；(b) Kura 績效費或平台費（包括適用時最高 10% 之 Morpho Earn 績效費）；(c) 出入金管道、跨鏈橋、兌換、卡片網路、發卡機構、券商或協定所收取之第三方費用；及 (d) 網路 gas 或類似之區塊鏈成本。費用可能變動。我們將於應用程式內或我們的價格頁面揭露重大之 Kura 費用。第三方及網路費用非我們所能控制，且即使交易在協定或合作夥伴層面失敗或被撤回，仍可能收取。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">9. 訂閱及計費</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        付費訂閱方案透過 Stripe 或適用之應用程式商店支付處理商計費。除非於續訂日前依處理商或商店之取消流程取消，訂閱將自動續訂。各方案之功能限制依我們的價格頁面所述。可能須另付稅款。除法律或商店政策另有規定外，費用概不退還。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">10. 推薦計畫</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        如你參加我們的推薦計畫，
        <NuxtLinkLocale to="/referral-terms" class="text-kura-primary hover:text-kura-accent">推薦計畫條款</NuxtLinkLocale>
        即適用，且就推薦相關事項優先於本條款。推薦獎勵並非利息、存款或保證收入，並受資格審核、追回及詐欺審查之限制。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">11. 非投資、法律或稅務建議；無受託義務</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        本服務中之一切內容、分析、市場資料及資產資訊僅供參考，並非投資、法律或稅務建議。你使用 Kura 並不因此產生受託、顧問、經紀或本人與代理人之關係。你應自行負責你的決定，並自行評估其利弊與風險。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">12. 智慧財產權；授權</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        本服務之原始碼著作權屬於 Kura Finance LLC，並依各儲存庫所載之授權條款公開於 GitHub。你對該原始碼之使用、重製、修改及散布，受該授權條款規範。本條款規範你對我們所營運之本服務的使用。「Kura」及相關名稱與標誌用以識別本服務，本條款並未授予你任何使用該等名稱與標誌之權利。你提供之意見回饋，我們得不受限制且無償使用。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">13. Zero-Access 揭露範圍</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        Kura 採用 Zero-Access 架構設計。TrackFi 於同步前，以你的通行密鑰所解鎖之金鑰在你的裝置上加密敏感財務內容，我們的伺服器僅以密文形式儲存該等內容。任何揭露之回應，均以請求當時於我們的架構內實際可存取之資料為限，包括於資料外洩情形或政府依法請求時。此並不限制我們依隱私權政策所述，處理或揭露帳戶中繼資料、錢包地址、驗證識別碼、計費紀錄、推薦紀錄或其他非密文之營運資料。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">14. 監控、執行及法律程序</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        我們得為安全、詐欺防制及法令遵循之目的監控本服務之使用。我們得為回應有效之法律程序、遵守法律、執行本條款，或保護我們、使用者或公眾，而存取、保存及揭露與你的帳戶相關之資訊。由於你的錢包為非託管，我們無法扣押、凍結或移轉你錢包中所持有之資產；限制措施一般適用於本服務之存取，而非底層之鏈上資產。無論 Kura 採取何種行動，鏈上活動均公開可見。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">15. 暫停及終止</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        你得隨時停止使用本服務。如我們合理認為你違反本條款或禁止行為清單、具有詐欺或制裁風險、造成安全或法律上之曝險，或經合作夥伴、網路或主管機關要求，我們得立即暫停、限制或終止你的存取。終止時，你的授權即告終止。依其性質應於終止後繼續有效之條款（包括所有權、免責聲明、責任限制、賠償、仲裁及一般條款）將繼續有效。終止並不會刪除你所控制之鏈上資產。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">16. 不為保證之聲明</h2>
      <p class="text-kura-text-secondary leading-relaxed text-sm font-semibold">
        在法律允許之最大範圍內，本服務係依「現狀」及「現有」基礎提供，不附帶任何明示、默示或法定之保證，包括適售性、特定目的適用性、權利完整性及不侵權之保證。我們不保證本服務將不中斷、安全、無錯誤或不含有害成分，亦不保證資料正確或完整。你承擔因使用本服務、數位資產、智慧合約及第三方提供者所生之一切風險。
      </p>
      <p class="text-kura-text-secondary leading-relaxed mt-3">
        Kura 是開源專案。它不再維護、沒有客服團隊，並可能含有不會修復之錯誤或漏洞。我們不承諾維持任何功能、伺服器或整合之運作。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">17. 責任限制</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        在法律允許之最大範圍內，營運方（Kura Finance LLC）及其高階主管、董事、員工與代理人，以及 Kura 開源專案之貢獻者（下合稱「Kura 方」），對於因本服務或本條款所生或與之相關之任何間接、附帶、特別、衍生、懲戒性或懲罰性損害，或任何利潤、收入、資料、商譽、數位資產或商業機會之損失，無論係基於契約、侵權行為或其他法律依據，即使已被告知發生之可能，均不負賠償責任。
      </p>
      <p class="text-kura-text-secondary leading-relaxed mt-3">
        在不限制前述規定之前提下，且於法律允許之最大範圍內，Kura 方對於因你使用本服務所生之任何損失均不負責任，包括但不限於下列原因所致之損失：
      </p>
      <ul class="list-disc pl-6 mt-3 space-y-2 text-kura-text-secondary leading-relaxed">
        <li>使用不再維護、已終止或不再支援之功能、伺服器或整合；</li>
        <li>種子詞、私鑰、通行密鑰或登入憑證之遺失、遺忘、外洩或遭盜用；</li>
        <li>轉帳至錯誤之地址、網路或收款人；</li>
        <li>軟體錯誤、漏洞或智慧合約失效；及</li>
        <li>因你的裝置、環境或行為所致之駭客攻擊、網路釣魚、惡意軟體或其他資安事件。</li>
      </ul>
      <p class="text-kura-text-secondary leading-relaxed mt-3">
        你繼續使用本服務，即表示你知悉上述風險，並完全自行承擔使用本服務之風險。
      </p>
      <p class="text-kura-text-secondary leading-relaxed mt-3">
        我們對因本服務或本條款所生或與之相關之任何請求所負之賠償責任總額，以下列較高者為上限：(a) 你於請求發生前十二（12）個月內就本服務支付予我們之金額，或 (b) 一百美元（US$100）。部分司法管轄區不允許特定之責任限制；於該等情形，我們的責任以法律允許之最大範圍為限。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">18. 賠償</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        對於因下列事項所生或與之相關之任何請求、損害、損失、責任、成本及費用（包括合理之律師費），你同意為 Kura 方及其代理人與合作夥伴進行防禦、予以賠償並使其免受損害：(a) 你使用本服務；(b) 你違反本條款或適用法律；(c) 你的數位資產、金鑰或交易；(d) 你的內容或提交之資料；或 (e) 你與第三人（包括合作夥伴、協定或其他使用者）之間的爭議。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">19. 爭議解決；具拘束力之仲裁；放棄集體訴訟</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        <span class="font-semibold text-kura-text">非正式解決。</span>
        提出請求前，你同意先寄信至
        <a href="mailto:legal@kura-finance.com" class="text-kura-primary hover:text-kura-accent">legal@kura-finance.com</a>
        與我們聯繫，並嘗試於三十（30）日內以非正式方式解決爭議。
      </p>
      <p class="text-kura-text-secondary leading-relaxed mt-3">
        <span class="font-semibold text-kura-text">具拘束力之仲裁。</span>
        除得向小額訴訟法院提起之爭議，或就智慧財產權濫用請求禁制令救濟之請求外，因本條款或本服務所生或與之相關之任何爭議，均應依美國仲裁協會（「AAA」）之消費者仲裁規則（或於適用時依其商業仲裁規則），由其管理之具拘束力的個人仲裁解決。除你與我們另有約定外，仲裁地為懷俄明州夏安。仲裁判斷得於任何有管轄權之法院聲請登錄為判決。
      </p>
      <p class="text-kura-text-secondary leading-relaxed mt-3">
        <span class="font-semibold text-kura-text">放棄集體訴訟及陪審團審判。</span>
        你與我們同意，爭議僅得以個人身分提出，不得以原告或成員身分於任何集體、合併或代表訴訟中提出。在法律允許之最大範圍內，你與我們放棄任何陪審團審判之權利。
      </p>
      <p class="text-kura-text-secondary leading-relaxed mt-3">
        如本仲裁協議就特定請求經認定無法執行，該請求應專屬於懷俄明州境內之州法院或聯邦法院提起，並適用第 20 條。如你係位於禁止強制仲裁之司法管轄區的消費者，則在必要範圍內，以該司法管轄區之爭議解決規則為準。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">20. 準據法；管轄法院</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        本條款以美國懷俄明州法律為準據法，不適用其法律衝突原則；但第 19 條之解釋及執行應適用《聯邦仲裁法》。在第 19 條之限制下，得提起之法院訴訟專屬由懷俄明州境內之州法院或聯邦法院管轄。如你居住國之強制性消費者保護規定不得拋棄，該等規定亦可能適用。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">21. 應用程式商店</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        如你自 Apple App Store 或 Google Play 下載本應用程式，你承認本條款係存在於你與營運方之間，而非與 Apple 或 Google 之間。除其商店條款另有要求外，Apple 及 Google 對本應用程式或其內容、維護或支援不負責任。你的使用亦應遵守適用之商店條款。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-kura-text mb-4">22. 一般條款</h2>
      <p class="text-kura-text-secondary leading-relaxed">
        本條款連同隱私權政策、風險揭露、禁止行為清單、推薦計畫條款，以及任何適用之持卡人或合作夥伴條款，構成你與營運方之間關於本服務之完整協議，並取代先前就該事項所為之協議。任何條款無法執行時，其餘條款仍繼續有效。我們未執行任何條款，不構成棄權。未經我們同意，你不得讓與本條款；我們得因合併、收購或資產出售而讓與本條款。通知得以電子方式寄送至與你帳戶相關聯之電子郵件地址，或於應用程式內提供。依其意旨應於終止後繼續有效之條款，將繼續有效。本條款如有翻譯版本，以英文版本為準。
      </p>
      <p class="text-kura-text-secondary leading-relaxed mt-3">
        聯絡方式：
        <a href="mailto:legal@kura-finance.com" class="text-kura-primary hover:text-kura-accent">legal@kura-finance.com</a>
        · 郵寄地址：Kura Finance LLC, 1007 N Orange St. 4th Floor 5629, Wilmington, DE 19801。
        我們沒有客服團隊，可能不會回覆客服請求。
      </p>
    </section>
  </div>
</template>
