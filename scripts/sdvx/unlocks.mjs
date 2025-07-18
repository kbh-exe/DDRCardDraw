export const UNPLAYABLE_IDS = [
  840, // Grace's Tutorial https://remywiki.com/GRACE-chan_no_chou~zetsu!!_GRAVITY_kouza_w
  1219, // Maxima's Tutorial https://remywiki.com/Maxima_sensei_no_mankai!!_HEAVENLY_kouza
  1259, // AUTOMATION PARADISE
  1438, // AUTOMATION PARADISE, April Fools
  1490, // MAX BURNING!! (FOR INFINITE EXTENDED VERSION), Automation Paradise/Megamix Exclusive
  1491, // Zusammenbruch of Gott, Automation Paradise/Megamix Exclusive
  1751, // EXCEED GEAR April Fools https://remywiki.com/Exceed_kamen-chan_no_chotto_issen_wo_exceed_shita_EXCEED_kouza
];

/**
 * @typedef ChartType
 * @type {"novice"|"advanced"|"exhaust"|"infinite"|"maximum"|"gravity"|"heavenly"|"vivid"|"exceed"}
 */

/**
 * @type {Record<string, Array<number | [number, ChartType]>>}
 * Specifies specific songs or charts which are unlocked via various events.
 * Each event has an array of song IDs or charts (specified as a tuple of song
 * id and chart type) that should be flagged as part of that particular event.
 */
export const SDVX_UNLOCK_IDS = {
  omegaDimension: [
    // EXAMPLES:
    // to flag all charts of WHITEOUT, put its id here:
    // 1100,
    // or, to flag only a particular chart, wrap in braces,
    // then specify the chart afterwards:
    // [1100, "exceed"],

    [1025, "maximum"], // Make Magic MXM
    [1027, "maximum"], // infinite:youniverse MXM
    [1028, "maximum"], // HE4VEN ～天国へようこそ～ MXM
    [1032, "maximum"], // Fin.ArcDeaR MXM
    [1044, "maximum"], // Immortal Saga MXM

    1099, // FIN4LE ～終止線の彼方へ～
    1100, // WHITEOUT
    1101, // Deadly force
    1102, // Staring at star
    1103, // Dyscontrolled Galaxy
    1104, // セイレーン 〜悲壮の竪琴〜
    1105, // 神獄烙桜
    1106, // Juggler's Maddness
    1107, // ULTiMATE INFLATiON
    1108, // Mirrorwall

    1140, // BEAST BASS BOMB
    1141, // Cy-Bird
    1142, // Far Away
    1143, // OPEN MY GATE
    1144, // Hug!! Vs. Hug!!
    1145, // #SpeedyCats
    1146, // 闇夜に舞うは紅の華
    1147, // All Clear!!
    1148, // TWO-TORIAL

    1177, // Last Resort
    1178, // A Lasting Promise
    1179, // Cloud 9
    1180, // Sacrifice and Faith
    1181, // 羅生門
    1183, // 僕らの時間
    1185, // I
    1186, // 神話に芽吹く
    1187, // CUTE-Reflection

    1188, // Awakening
    1189, // Xéroa
    1191, // crossing blue
    1196, // BlueMoon Princess
    1202, // Яe's NoVǢ
    1206, // Wings of Glory
    1207, // メルヘン風紀委員会
    1212, // プラネタジャーニー

    1269, // Made In Love
    1270, // Xronièr
    1271, // Failnaught
    1272, // Absolute Domination
    1273, // Fly Like You
    1274, // そして黄金郷へ
    1275, // 光射す澪のユズリハ
    1276, // サイコパスラビット
    1277, // オニユリ
    1278, // 水簾ノ調
    1279, // Another Chapter
    1280, // スラッシュ//シスターズ
    1281, // コメット⇒スケイター

    1361, // *Feels Seasickness...*
    1362, // ΣmbryØ
    1363, // Cross Fire
    1364, // GODHEART
    1365, // THE HEAVEN
    1366, // 祝福の色彩は想い結ぶ君たち迄
    1367, // ULTRAVELOCITY
    1368, // Destiny

    1462, // ΣgØ
    1463, // 星の透る夏空に願う
    1464, // Lancelot ～Flame of the Rebellion～
    1465, // ΩVERFLOW
    1466, // Sudden Visitor
    1467, // Ghost Family Living In Graveyard
    1468, // petit fours

    1495, // * Erm, could it be a Spatiotemporal ShockWAVE Syndrome...?
    1496, // OUTERHEΛVEN
    1497, // Pulsar
    1498, // θコトノハθカプセルθ
    1499, // Butterfly Twist
    1500, // pique
    1501, // Teufel

    // BPL S2 Blaster Gate
    1939, // DEUX EX MĀXHINĀ
    1940, // All We Need is HAPPY END!!!
    1941, // Glory of Fighters
    1942, // MILITARY R04D
    1943, // WINNING ROAD
    1944, // Paradigm Shift
    1945, // Thousand Triggers
    1946, // Initiating League
    1947, // Petit espoir
    1948, // ENDGAME
    1949, // MURASAME
    1950, // イグノアザーズ
    1951, // ИADIR
    1952, // Chat perché
    1953, // Fl0ating:
    1954, // trea→journey
    1955, // 最果ての勇者にラブソングを
    1956, // Ice Fortress
    1957, // 灼ナル刃、破カヰ譜
    1958, // Scat Jazz Dance

    // BPL Season 2 Stamp Event Blaster Gate
    1919, // HALO
    1920, // S(TAR)²☆pistol
    1921, // 赫焉のヴァルキュリア -Ragnarøk-
    1922, // CUDDLIE CUDDLIE
    1923, // Brave Power Leader 《 = Voltage = 》
    1924, // 零天視
    1925, // ステラ・イミグレーション
    1926, // Garland
    1938, // SuddeИDeath

    // BPL S3 Blaster Gate
    2129, // We Are All The Dreamer
    2130, // Double or Nothing
    2131, // Crawl Out Immortal
    2132, // トリコエリヌム▽コンチェルト
    2133, // 群青纏う朱の槍
    2134, // CHOVERY GOOSE!!!
    2135, // V!LLA!N
    2136, // TOYBOX CANNØN=͟͟͞ Σ≡=｡ﾟ:*.:+｡.☆
    2137, // ON THE WORLD
    2138, // 花火のおもちゃ箱
    2139, // イグジスター
    2140, // La Nostra Storia!
    2141, // グリーディ・スターズ！
    2142, // Di-Da-De-Doo
    2143, // Break Through Δpex
    2144, // LOVE TONIC
    2145, // Inevitable Magic
    2146, // Ars Magna
    2147, // 異次元の孤独～カナタノキミヘ～
    2148, // SΛMVICΛ
    2149, // MΔX FLAVØR
    2150, // Cuz we <3 this Game
    2151, // Xeno Gravity
    2152, // NEMSYS ARENA World Hexathlon

    // BPL Season 3 Stamp Event
    2121, // Knew Order
    2122, // Ex concordia felicitas
    2123, // Allegro Saetta
    2124, // ARISE
    2125, // プリュネシエル
    2126, // Colorful Magical Parade
    2127, // NO SURRENDER
    2128, // StellarflightS
    2160, // ウイジン
    2161, // { eXLIPXe }

    // Unlock Chain
    2034, // 無意識レクイエム(cosmobsp mix)

    // TAMANEKO adventure
    2153, // トキノコエト
    2154, // Entropic EnĤαncemEnt
    2155, // Sweetie Beauti Magic
    2156, // 月明りの旅人たち
    2157, // SAD1STIC Я04D
    2158, // XΛLT=ØVER
    2159, // Two of Wonder Lights

    2183, // 閉塞的フレーション
    2185, // 弾幕信仰
    2186, // SUPER HEROINE!!

    2098, // Kool Awesome Croon
    2109, // ØverwriteTheCatastrophe
    2112, // Cumulonimbus
    2117, // ΛNXIENT:LEGΛXIEZ

    2094, // 一水山風
    2097, // Superstar!
    2100, // 鳳凰誓歌
    2107, // 永久の粒虹
    2115, // Lunatic Mare

    2106, // 孤独のドロップハンター
    2108, // MiRÀi
    2110, // reSTART yOUR STORIES
    2113, // ぼくらのはじまりのおと
    2116, // Line markeR

    2198, // Our garden is blue.
    2200, // Golden Rotation
    2201, // Titanomachia
    2202, // Ardenok
    2203, // Jupiter
    2204, // 流転に咲く魂の花

    [774, "exceed"], // neko＊neko XCD
    [450, "exceed"], // VILE CAT XCD
    [44, "exceed"], // 世界はネコのもの XCD

    [650, "exceed"], // Chant du Cygne XCD
    [642, "exceed"], // Sayonara Planet Wars XCD
    [653, "exceed"], // 混乱少女♥そふらんちゃん!! XCD
    [657, "exceed"], // 到達してしまった僕らと夢と希望の最之果 XCD

    [675, "exceed"], // BEAT-NEW-WORLD XCD
    [182, "exceed"], // 待チ人ハ来ズ。 XCD
  ],
  hexadiver: [
    1580, // 666
    1581, // 色を喪った街
    1582, // ЯeviveR
    1583, // 9TH5IN
    1585, // Katharsis
    1586, // ZEИITH
    1587, // SAMURAI TIGER

    1584, // VVelcome!!
    1588, // Redshift 2nd Ignition
    1589, // ミュージックプレイヤー
    1590, // 春告胡蝶
    1591, // †:OLPHEUX:†
    1592, // GEMINI LA2ER
    1593, // LubedeR
    1594, // Яe:son D'être

    1660, // MAYHEM
    1661, // 飄える翼追い掛けて
    1662, // Calamity Tempest
    1663, // Daisycutter
    1664, // ΛΛemoria
    1665, // With It This Heaven?
    1666, // apo:llioth

    1766, // XHRONOXAPSULΞ
    1768, // EncorE & cALL
    1769, // AμreoLe ~for Triumph~
    1770, // ZEUS
    1774, // All for One
    1775, // Wings to fly high
    1776, // AIM HIGHER

    1767, // MixxioN
    1771, // Xb10r
    1772, // 十の試練
    1773, // Rhapsody ⚙︎f Triumph
    1777, // 火狐之舞
    1778, // 蝕
    1779, // refluxio

    1889, // Bl∞min'
    1891, // LaμreLs ~the Angelus~
    1893, // Avalanx
    1895, // すべてが幻になった後で
    1896, // Grandeur
    1897, // Stairway to the sun
    1900, // 極夜、暁を望んで

    1888, // いまきみに
    1890, // Fαtα∠ Ent∠mEnt
    1892, // VɅZiLiSQ
    1894, // 赫焉
    1898, // STIGMA
    1899, // 光風霽月
    1901, // Lost Parliament

    2037, // APØCALYPSE RAY
    2039, // Spectacular“V”Adventure!
    2040, // Breakneck Pursuit
    2044, // 忘れないように、失くさないように
    2046, // Marielle
    2047, // ΣMERGENCY CODΣ
    2050, // BLISS

    2038, // HeaveИ's Rain
    2041, // and After the Merry BADEND
    2042, // Undead Raving Scare
    2043, // Enter The Rave
    2045, // SHARK IMPACT
    2048, // 十三不塔
    2049, // リュミレイラ

    2079, // TOKAKU=ALMiRAJ
    2080, // レインボウ・フレーバー
    2081, // =∴NOMADE∵OTION=
    2082, // 随神
    2083, // OVEЯ+TUЯE
    2084, // Burst Λnd reBoost
    2085, // Λkasha

    2086, // JACK -the KING Ki11ing-
    2087, // Don't you dare play GOD
    2088, // Xinca
    2089, // 憧憬のファンファーレ
    2090, // Imitated Visions
    2091, // こどもかくしのアンダーランド
    2092, // すべてを賭して
  ],

  // Variant Gate
  variantgate: [
    //Variant Gate 1
    2199, // 神凪
    2225, // 黒蝶のワルツ
    2226, // Gryphone
    2227, // Who then no 灯
  ],

  otherEvents: [
    // Cloud-Exclusive
    1762, // ドゥサンコオデッセイ!!
    1763, // Azalea
    1764, // Bayonex
    1765, // Reverenced Flower
    1811, // Reminiscence

    // Arena Exclusive
    1745, // graduation
    1846, // Tickled Pink
    1902, // You Are My Best RivaL!!
    2077, // ちくわパフェだよ☆ＣＫＰ (Yvya Remix)
    2078, // めうめうぺったんたん！！ (ZAQUVA Remix)
    2171, // BEMANI PRO LEAGUE -SEASON 2- SOUND VOLTEX ULTIMATE MEDLEY

    //REFLEC BEAT Special Stamp!
    2053, // 梅雪夜
    2054, // ARACHNE
    2055, // Poochie
    2056, // Crazy Jackpot
    2057, // 黒紅掬い

    2235, // Windy Fairy
    2236, // 幻影ノ消失
    2237, // Towards The Horizon
    2238, // SCHWARZSCHILD FIELD
    2239, // ビューティフル レシート

    // BPL Season 3 Triple Tribe
    2063, // stellar rain
    2064, // THE PEERLESS UNDER HEAVEN
    2065, // suspicions
    2162, // ちょえちょえまぎか
    2163, // Deep tenDon Reflex
    2164, // Ambivalent Vermilia

    // MYSTICAL Re:UNION
    2177, // Lichtsäule
    2178, // OROCHI STRIKE
    2179, // Blφφdy Cφncertφ
    2180, // REINCARNATION
    2181, // Re:RHYZE

    // BPL Season 4 Triple Tribe
    2189, // Come to Life
    2190, // SOLAR ECLIPSE
    2191, // COSMIC V3LOCITY

    // PRECIOUS UNIVERSAL CELEBRATE Stamp
    1969, // X1GNUS
    1970, // Nebula Dysorder
    1971, // For All The Challengers
    1972, // Guinevere～白き妖精～
    1973, // 細氷
    1974, // while (screen is blue)
    1975, // Never Forget Evergreen
    1976, // ヴァルプルギスの夜
    1977, // Little Red Riding Hood

    // ぼる×りこ Cross Resonance
    2231, // Crossfade
    2232, // 星界のアルペジオ
    2233, // Ö<3rf10₩

    // Arena Exclusive Exceed Charts
    [872, "exceed"], // Din Don Dan (Fusion Remix)
    [88, "exceed"], // Grip & Break down !! - SDVX Edit. -
    [64, "exceed"], // SOUL EXPLOSION
    [332, "exceed"], // crazy cinema story
    [871, "exceed"], // The star in eclipse
    [711, "exceed"], // ちくわパフェだよ☆ＣＫＰ
    [633, "exceed"], // 2 MINUTES FIGHTERS
    [381, "exceed"], // HYENA

    [111, "exceed"], // 地球最後の告白を
    [132, "exceed"], // 色は匂へど散りぬるを
    [239, "exceed"], // Foolish Hero
    [37, "exceed"], // neu BSP style
    [632, "exceed"], // Invitation from Mr.C

    [8, "exceed"], // smooooch・∀・ KN mix
    [323, "exceed"], // マネマネサイコトロピック
    [612, "exceed"], // Le Fruit Défendu
    [131, "exceed"], // 物凄い勢いでけーねが物凄いうた
    [342, "exceed"], // Fiat Lux

    [787, "exceed"], // Candy Colored Hearts
    [790, "exceed"], // EMPIRE OF FLAME
    [789, "exceed"], // End to end
    [788, "exceed"], // NEO GRAVITY
    [610, "exceed"], // veRtrageS
    [786, "exceed"], // 雲の彼方

    [842, "exceed"], // B.B.K.K.B.K.K.
    [510, "exceed"], // The Sampling Paradise (P*Light Remix)
    [281, "exceed"], // ネトゲ廃人シュプレヒコール

    [165, "exceed"], // Hello world!
    [634, "exceed"], // LegenD.
    [348, "exceed"], // ボルテ体操第一

    [241, "exceed"], // Lieselotte
    [289, "exceed"], // U.N.オーエンは彼女なのか？haru_naba Remix
    [390, "exceed"], // 轟け！恋のビーンボール！！

    [85, "exceed"], // dreamin' feat.Ryu☆
    [635, "exceed"], // World's end
    [389, "exceed"], // デッドボヲルdeホームラン

    [779, "exceed"], // conflict
    [225, "exceed"], // Next infection
    [418, "exceed"], // werewolf howls.
  ],

  jpOnly: [
    // Chase Chase Jokers J-Region Exclusive
    2027, // チェイスチェイスジョーカーズのうた

    // Tetoris
    2216, //テトリス
  ],
};
