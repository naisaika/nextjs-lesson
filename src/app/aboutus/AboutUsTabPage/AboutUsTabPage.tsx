import Image from "next/image";
import styles from "./AboutUsTabPage.module.scss"

interface TabPage {
    id: number;
    page: JSX.Element;
}

export const ABOUT_TAB_PAGE: TabPage[] = [
    {
        id: 0,
        page: (
            <div className={styles.aboutUsSection}>
                <h3>Profiles</h3>
                <div>
                    <p>NARUSE・INOKUMA ARCHITECTS Co., Ltd. First-Class Architect Office ( Tokyo Metropolitan Governor Registration No. 58579 )</p>
                    <p>ADDRESS : Senkei Building 3F, Koenjikita 2-18-7, Suginami-Ku, 1670002 Tokyo, Japan</p>
                    <p>TEL 03-6915-1288　FAX 03-6276-9030</p>
                    <p>  Business Outline :<br></br>
                        Planning and Management of Architecture, Landscape and Interior Design<br></br>
                        Planning and Design of Products<br></br>
                        Consulting services<br></br>
                    </p>
                </div>
                <div>
                    <p>株式会社 成瀬・猪熊建築設計事務所 一級建築士事務所　東京都知事登録第58579号</p>
                    <p>〒166-0002　東京都杉並区高円寺北2-18-7 千恵ビル 3F</p>
                    <p>TEL 03-6915-1288　FAX 03-6276-9030</p>
                    <p>業務内容 :<br></br>
                        建築・ランドスケープ・インテリアの企画・設計及び監理<br></br>
                        プロダクトの企画・デザイン<br></br>
                        企業コンサルティング業務
                    </p>
                </div>
                <div>
                    <h3>President</h3>
                    <Image src="/aboutus/Jun-Inokuma.jpg" alt="猪熊氏写真" width={299} height={283} />
                    <div>
                        <p className={styles.name}>Jun Inokuma / First-class licensed Architect</p>
                        <p className={styles.name}>猪熊 純 / 一級建築士</p>
                        <div>
                            <p>2002　　　Completed the Bachelor Course, the University of Tokyo 　 東京大学工学部建築学科卒業</p>
                            <p>2004　　　Completed the Master Course, the University of Tokyo 　 東京大学大学院工学系研究科建築学専攻　修士課程修了</p>
                            <p>2004〜06　Worked at CHIBA MANABU ARCHITECTS 　 千葉学建築計画事務所勤務</p>
                            <p>2007　　　Co-established NARUSE INOKUMA ARCHITECTS 　 成瀬・猪熊建築設計事務所共同設立</p>
                            <p>2008〜20　Assistant Professor at Tokyo Metropolitan University 　 首都大学東京助教</p>
                            <p>2014　　　Part-Time Teacher at Meiji University 　 明治大学非常勤講師</p>
                            <p>2014〜16　Part-Time Teacher at Kanagawa University 　 神奈川大学非常勤講師</p>
                            <p>2015〜17　Part-Time Teacher at Tohoku University 　 東北大学非常勤講師</p>
                            <p>2016　　　Part-Time Teacher at Shibaura Institute of Technology 　 芝浦工業大学非常勤講師</p>
                            <p>2016〜18　Part-Time Teacher at Aichi University of Art 　 愛知県立芸術大学非常勤講師</p>
                            <p>2018〜21　A judge at GOOD DESIGN AWARD 　 グッドデザイン賞審査委員</p>
                            <p>2020〜21　Assistant Professor at Tokyo Metropolitan University 　 東京都立大学助教</p>
                            <p> 2021〜23　　Associate Professor at Shibaura Institute of Technology 　 芝浦工業大学准教授</p>
                            <p>2024〜　　Professor at Shibaura Institute of Technology 　 芝浦工業大学教授</p>
                        </div>
                    </div>
                    <Image src="/aboutus/Yuri-Naruse.jpg" alt="成瀬氏写真" width={299} height={283} />
                    <div>
                        <p className={styles.name}>Yuri Naruse / CEO and First-class licensed Architect</p>
                        <p className={styles.name}>成瀬 友梨 / 代表取締役・一級建築士</p>
                        <div>
                            <p>2002　　　Completed the Bachelor Course, the University of Tokyo 　 東京大学工学部建築学科卒業</p>
                            <p>2004　　　Completed the Master Course, the University of Tokyo 　 東京大学大学院工学系研究科建築学専攻　修士課程修了</p>
                            <p>2005〜06　President of NARUSE YURI ARCHITECTS 　 成瀬友梨建築設計事務所主宰</p>
                            <p>2007　　　PhD Coursework completed without degree 　 東京大学大学院工学系研究科建築学専攻　博士課程単位取得退学</p>
                            <p>2007　　　Co-established NARUSE INOKUMA ARCHITECTS 　 成瀬・猪熊建築設計事務所共同設立</p>
                            <p>2008〜09　Part-Time Teacher at Tokyo University of Science 　 東京理科大学非常勤講師</p>
                            <p>2009　　　Project Professor at University of Tokyo 　 東京大学特任助教</p>
                            <p>2010〜17　Assistant Professor at University of Tokyo 　 東京大学助教</p>
                            <p>2022〜　　A judge at GOOD DESIGN AWARD 　 グッドデザイン賞審査員</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>Staff</h3>
                    <div>
                        <p>Yukiko Kawabata / First-class licensed Architect 　川畑友紀子 / 一級建築士</p>
                        <p>Yohei Yamagata 　山形陽平</p>
                        <p>Eriko Obayashi 　大林恵理子</p>
                        <p>Shunya Kaneta 　金田駿也</p>
                        <p>Rei Etchu 　越中玲衣</p>
                        <p>Taiki Hayata 　早田大喜</p>
                        <p>Shino Marui 　丸伊紫仍</p>
                        <p>Mihoshi Ikawa 　井川美星</p>
                        <p>Sakie Mukai 　向咲重</p>
                        <p>Kanna Mizuta / First-class licensed Architect 　水田　栞菜 / 一級建築士</p>
                        <p>Chen Quanrui 　チンセンズイ</p>
                        <p>Huang Yuxiang 　黄語香</p>
                    </div>
                </div>
            </div>       
        )
    },
    {
        id: 1,
        page: (
            <div className={styles.aboutUsSection}>
                <h3>受賞</h3>
                <div>
                    <p>
                        <span className={styles.year}>2023</span><br></br>
                        AACA賞2023 優秀賞,お宿 Onn 中津川
                    </p>
                    <p>
                        <span className={styles.year}>2021</span><br></br>
                        GOOD DESIGN AWARD 〜2021,グッドデザイン賞 グッドデザイン・ベスト100,リエットガーデン三鷹<br></br>
                        JAPAN WOOD DESIGN AWARD 2021,ウッドデザイン賞2021,meettree NAKATSUGAWA
                    </p>
                    <p>
                        <span className={styles.year}>2020</span><br></br>
                        日本空間デザイン賞 2020,9h nine hours 中洲川端駅<br></br>
                        GOOD DESIGN AWARD 2020,グッドデザイン賞,ダンスオブライト<br></br>
                        FRAME AWARD 2020 GOVERNMENTAL INTERIOR OF THE YEAR NOMINEE, Dance of light
                    </p>
                    <p>
                        <span className={styles.year}>2019</span><br></br>
                        大韓民国公共デザイン大賞 国務総理賞, Dance of light<br></br>
                        日本空間デザイン賞　銅賞,9h nine hours なんば駅
                    </p>
                    <p>
                        <span className={styles.year}>2018</span><br></br>
                        Noksapyeong Station Project-International Nominating Invitation Contest for the Main Hall “The Shape of Light”　Winner,Dance of light
                    </p>
                    <p>
                        <span className={styles.year}>2016</span><br></br>
                        JCDデザインアワード 銀賞, 西武池袋本店 別館・書籍館パブリックスペース<br></br>
                        第15回ヴェネチア・ビエンナーレ国際建築展 特別表彰<br></br>
                        LIXIL「”キッチンで暮らす”施工事例コンテスト」審査員特別賞・谷尻誠賞, スプリットハウス
                    </p>
                    <p>
                        <span className={styles.year}>2015</span><br></br>
                        GOOD DESIGN AWARD 2015,グッドデザイン賞,りくカフェ本設<br></br>
                        GOOD DESIGN AWARD 2015,グッドデザイン賞,KOIL 柏の葉オープンイノベーションラボイノベーションフロア<br></br>
                        JID AWARD 2015 大賞,KOIL 柏の葉オープンイノベーションラボイノベーションフロア<br></br>
                        TANITA GALVA コンテスト 優秀賞,板橋の立体住居/特別賞,りくカフェ本設<br></br>
                        日本建築学会作品選集 新人賞,LT城西
                    </p>
                    <p>
                        <span className={styles.year}>2014</span><br></br>
                        2014 Best of Asia Pacific Design Awards Winning Projects 最優秀賞, KOIL 柏の葉オープンイノベーションラボ<br></br>
                        JIA東海住宅建築賞2014 優秀賞,LT城西<br></br>
                        JCDデザインアワード 銀賞 浅子賞, KOIL 柏の葉オープンイノベーションラボ<br></br>
                        A+Award 入賞,LT城西<br></br>
                        Design for Asia Awards2014 銅賞, KOIL 柏の葉オープンイノベーションラボ
                    </p>
                    <p>
                        <span className={styles.year}>2013</span><br></br>
                        第8回日本ファシリティマネジメント大賞（JFMA賞）特別賞,りくカフェ
                    </p>
                    <p>
                        <span className={styles.year}>2012</span><br></br>
                        グッドデザイン賞, MOCCA HUT<br></br>
                        モダンリビング大賞 ベスト6, 世田谷フラット<br></br>
                        首都大学東京リーディング・サイエンティスト賞,猪熊純<br></br>
                    </p>
                    <p>
                        <span className={styles.year}>2009</span><br></br>
                        INTERNATIONAL ARCHITECTURE AWARDS 2009, ひとへやの森<br></br>
                        DESIGN FOR ASIA AWARDS 2009 Merit Recognition, ひとへやの森<br></br>
                    </p>
                    <p>
                        <span className={styles.year}>2008</span><br></br>
                        天童木工デザインコンクール2008　入選<br></br>
                        Colors Designer International Competition　Special Mentions<br></br>
                    </p>
                    <p>
                        <span className={styles.year}>2007</span><br></br>
                        第5回SUSアルミニウムアワード大賞<br></br>
                        グッドデザイン賞2007 ROOM101<br></br>
                        鎌倉市常盤住宅設計競技「良質な都市のストックとしての住宅」 審査員特別賞<br></br>
                        WORLD Space Creators Awards 大賞1<br></br>
                    </p>
                    <p>
                        <span className={styles.year}>2006</span><br></br>
                        エイブル デザインプレミオ最優秀賞<br></br>
                        ９坪ハウスコンペ優秀賞
                    </p>
                    <p>
                        <span className={styles.year}>2005</span><br></br>
                        コイズミ国際学生照明デザインコンペ 佳作
                    </p>
                    <p>
                        <span className={styles.year}>2004</span><br></br>
                        TEPCOインターカレッジデザイン選手権 優秀賞<br></br>
                        TEPCOインターカレッジデザイン選手権 佳作
                    </p>
                    <p>
                        <span className={styles.year}>2003</span><br></br>
                        アテネ Design of Ephemeral Structures 国際設計競技 入賞
                    </p>
                    <p>
                        <span className={styles.year}>2002</span><br></br>
                        日本建築士会連合懸賞設計競技 佳作
                    </p>
                    <p>
                        <span className={styles.year}>2001</span><br></br>
                        建築学生設計大賞 大賞
                    </p>
                </div>
            </div>       
        )
    },
    {
        id: 2,
        page: (
            <div className={styles.aboutUsSection}>
                <h3>建築・内装設計</h3>
                <div>
                    <p>
                        <span className={styles.year}>2023</span><br></br>
                        meet tree 銀座,店舗内装　設計・監理,87.92㎡（計画面積）,2023.12<br></br>
                        common furniture,家具 ／ パーティション　デザイン監修,2023.11<br></br>
                        JINSイオンモール各務原店,店舗内装　デザイン監修,175.4㎡（計画面積）, 2023.10<br></br>
                        旧軽井沢倶楽部の別荘, 戸建住宅新築 設計・監理,122.39㎡（延床面積）, 2023.9, 長野県軽井沢<br></br>
                        Social Base HIGASHINAKANO, 社員寮・社宅リノベーション（寄宿舎・シェアハウス）設計・監理,2518.5㎡（延床面積）, 2023.3.17, 東京都中野区<br></br>
                    </p>
                    <p>
                        <span className={styles.year}>2022</span><br></br>
                        昭和電工マテリアルズ山崎事業所(勝田)計画,オフィス,設計・デザイン監修,2777.07㎡(延床面積),2022.12,茨城県ひたちなか市<br></br>
                        東急ハーベストクラブ浜名湖 リノベーション計画,ホテル内装,設計・監理,572㎡(計画面積),2022.9,静岡県浜松市<br></br>
                        芝浦工業大学豊洲キャンパス 校友会館整備工事大学,内装設計(基本)・デザイン監修,623.59㎡(延床面積),2022,09,東京都江東区<br></br>
                        お宿Onn 中津川,ホテル 設計・監理,2751.07㎡（延床面積）,2022.9,岐阜県中津川市<br></br>
                        お宿Onn 湯田温泉,ホテル デザイン監修,3842.41㎡（延床面積）,2022.7.山口県山口市<br></br>
                        SODA UP NAGOYA,店舗 内装設計・監理,105㎡（計画面積）,2022,1,愛知県名古屋市<br></br>
                    </p>
                    <p>
                        <span className={styles.year}>2021</span><br></br>
                        meet tree NAKATSUGAWA, 店舗新築 設計・監理, 98.41㎡（延床面積）, 2021.2, 岐阜県中津川市<br></br>
                        ブランズシティ調布, マンション デザイン監修, 25058.02㎡（延床面積）, 2021.1, 東京都調布市<br></br>
                    </p>
                    <p>
                        <span className={styles.year}>2020</span><br></br>
                        02/HM, 共同住宅・テナント, 設計・監理, 955.04m2（延床面積）, 2020.10 ,愛知県名古屋市<br></br>
                        DENSO Global R&D Tokyo Haneda, 自動車整備工場・オフィス 内装設計・管理, 1746㎡(計画面積), 2020.5.31, 東京都大田区<br></br>
                        東急ハーヴェストクラブ天城高原,ホテル客室共用部内装 リノベーション 企画・設計・管理, 286㎡(計画面積), 2020.4.25, 静岡県伊豆市<br></br>
                    </p>
                    <p>
                        <span className={styles.year}>2019</span><br></br>
                        座間市立市民交流プラザ「プラッとざま」, 市民交流施設・カフェ 内装設計・監理, 351.64㎡（計画面積）, 2019.12.1, 神奈川県座間市<br></br>
                        OPEN CAVE,戸建住宅新築 設計・監理, 120.66㎡（延床面積）, 2019.8,東京都杉並区<br></br>
                        9h nine hours 中洲川端駅, カプセルホテル内装 設計・監理, 868.021㎡（計画面積）, 2019.8.9, 福岡県福岡市<br></br>
                        リエットガーデン三鷹（アールリエット三鷹・シェアプレイス三鷹）, 社員寮・社宅リノベーション（共同住宅・シェアハウス）基本設計・デザイン監修, 4463.06㎡（延床面積）, 2019.6.20, 東京都三鷹市<br></br>
                        9h nine hours なんば駅, カプセルホテル内装 設計・監理, 994.67㎡（計画面積）, 2019.4.26, 大阪府大阪市<br></br>
                        さかのうえ ふれあいえん 国分寺駅前, 企業主導型保育園内装 設計・監理, 215.75㎡（計画面積）, 2019.3.31, 東京都国分寺市<br></br>
                        Dance of light, 鉄道駅リノベーション 設計・監理, 2722.02㎡（計画面積）, 2019.03.14, 韓国・ソウル市<br></br>
                        みしま未来研究所, 事務所・集会場・飲食店・物販店舗リノベーション 設計・監理, 351.21㎡（延床面積）, 2019.1.12, 静岡県三島市<br></br>
                        リビオタワー小田急相模原（商業・公益棟、住宅棟）, 共同住宅・店舗・集会所・保育所・事務所 デザイン監修, 約16,500㎡（延床面積）, 2019.1, 神奈川県座間市<br></br>
                    </p>
                    <p>
                        <span className={styles.year}>2018</span><br></br>
                        高尾山スミカ　物販店舗・飲食店リノベーション 設計・監理, 357.45㎡（延床面積）, 2018.3.31, 東京都八王子市<br></br>
                        リノア目黒大橋, マンション一棟リノベーション　デザイン監修（共用部）　設計・監理（モデルルーム）, 1112.01㎡（延床面積） , 2018.3.9, 東京都目黒区<br></br>
                    </p>
                    <p>
                        <span className={styles.year}>2017</span><br></br>
                        渋谷キャスト, コレクティブフロア内装 デザイン監修, 約1185㎡(計画面積), 2017.4.28, 渋谷<br></br>
                        キュープラザ二子玉川, 商環境デザイン, 2521.15㎡（延床面積）, 2017.4.14, 二子玉川<br></br>
                        天川村南日裏定住促進住宅, 戸建て団地の新築およびランドスケープ 設計・監理, 81.15㎡/戸×3住戸（延床面積）, 2017.3.27, 奈良県天川村<br></br>
                        坂の上テラス, コーポラティブハウス新築 設計・監理, 734㎡（延床面積）, 2017.3.25, 神楽坂<br></br>
                        株式会社デンソー名古屋オフィス, 共創スペースおよびオフィス内装 設計・監理, 1999,26㎡（計画面積）, 2017.3.22, 名古屋<br></br>
                        エクセルイン名古屋熱田, ホテル客室共用部内装 設計・監理, 320.75㎡（計画面積）, 2017.3.20, 名古屋<br></br>
                    </p>
                    <p>
                        <span className={styles.year}>2016</span><br></br>
                        2経堂のカフェ併用住宅, 店舗併用住宅リノベーション 設計・監理, 101.13㎡（延床面積）, 2016.4.2 世田谷<br></br>
                        豊島八百万ラボ, アートスペースリノベーション 設計・監理, 64.05㎡（延床面積）, 2016.3.16, 豊島甲生<br></br>
                        エクセルイン名古屋熱田, ホテルロビー内装 設計・監理,280.36㎡（計画面積）, 2016.2.14, 名古屋<br></br>
                        山野楽器西武池袋店,店舗内装 設計・監理,231.0㎡（計画面積）,2016.2.5,池袋<br></br>
                    </p>
                    <p>
                        <span className={styles.year}>2015</span><br></br>
                        三省堂書店池袋本店,店舗内装 デザイン監修,3115.27㎡（計画面積）,2015.12.6,池袋<br></br>
                        西武池袋本店 別館・書籍館パブリックスペース,店舗内装 設計・監理,1096.30㎡（計画面積）,2015.12.6,池袋<br></br>
                        駒込あおい薬局,店舗内装 設計・監理,57.6㎡（計画面積）,2015.12.1,駒込<br></br>
                        ピュアハート溝の口,撮影スタジオ内装 設計・監理,123.2㎡（計画面積）,2015.5.30,川崎<br></br>
                        FabCafe Tokyo 拡張計画,カフェ内装 設計・監理,175.40㎡ (計画面積),2015.8.5,渋谷<br></br>
                        FULLER株式会社オフィス,オフィス内装 設計・監理,163.22㎡（計画面積）,2015.5.9, 柏<br></br>
                        GLS JAPAN OFFICE,オフィス内装 設計・監理,837.22㎡（計画面積）,2015.4.7, 東京<br></br>
                        Garden Terrace 鷹の台, シェアハウスリノベーション 設計・監理,1518㎡（計画面積）,2015.3.31, 東京<br></br>
                        M邸, マンション内装 設計・監理,78.05㎡（計画面積）,2015.3.28, 東京<br></br>
                        大槌コミュニティプレイス,集会場新築 設計・監理,99.37㎡（延床面積）,2015.2.25,大槌町<br></br>
                        板橋の立体住居, 戸建住宅新築 設計・監理,198.60㎡（延床面積）,2015.2.12,東京<br></br>
                        KOIL ガレージ,イノベーションセンター内装 設計・監理,444.31㎡（計画面積）,2015.1.28,柏<br></br>
                    </p>
                    <p>
                        <span className={styles.year}>2014</span><br></br>
                        スプリットハウス, 戸建住宅新築 設計・監理,105.25㎡（延床面積）,2014.10.27,東京京<br></br>
                        りくカフェ本設, コミュニティカフェ新築 設計・監理,71.03㎡（延床面積）,2014.9.24,陸前高田京<br></br>
                        KOIL 柏の葉オープンイノベーションラボ,イノベーションセンター内装 設計・監理,2576㎡（計画面積）,2014.4,柏京<br></br>
                    </p>
                    <p>
                        <span className={styles.year}>2013</span><br></br>
                        skyroom,マンション内装 設計・監理,75.33㎡（計画面積）,2013.8,横浜<br></br>
                        GARDEN HOUSE,戸建住宅新築 設計・監理,180.52㎡（延床面積）,2013.7.25,神奈川<br></br>
                        LT城西,シェアハウス新築 設計・監理,321.59㎡（延床面積）,2013.6,名古屋<br></br>
                    </p>
                    <p>
                        <span className={styles.year}>2012</span><br></br>
                        THE SCAPE®,シェアタイプSOHO内装 設計・監理,1123.84㎡（計画面積）,2012.3.24,渋谷<br></br>
                        FabCafe,カフェ内装 設計・監理,90.38㎡（計画面積）,2012.3.7,渋谷<br></br>
                        りくカフェ,仮設コミュニティカフェ新築 設計・監理,34.76㎡（延床面積）,2012.1.9,陸前高田<br></br>
                    </p>
                    <p>
                        <span className={styles.year}>2011</span><br></br>
                        世田谷フラット,マンション内装 設計・監理,95.55㎡（計画面積）,2011.3,世田谷
                    </p>
                    <p>
                        <span className={styles.year}>2007</span><br></br>
                        far-out beyond,内装 設計・監理,2007,株式会社ワールド,恵比寿ガーデンプレイス
                    </p>
                    <p>
                        <span className={styles.year}>2006</span><br></br>
                        ROOM101,マンション内装 設計・監理,72㎡（述床面積）,2006.8,神宮前<br></br>
                        白馬の別荘,2006,白馬,長野
                    </p>
                </div>
            </div>       
        )
    },
    {
        id: 3,
        page: (
            <div className={styles.aboutUsSection}>
                <h3>プロダクト</h3>
                <div>
                    <p>
                        <span className={styles.year}>2013</span><br></br>
                        fula,メッセージフラワー,2013.2.5
                    </p>
                    <p>
                        <span className={styles.year}>2011</span><br></br>
                        one for all,皿,2011.10
                    </p>
                    <p>
                        <span className={styles.year}>2010</span><br></br>
                        イエタグ,付箋,2010.10
                    </p>
                    <p>
                        <span className={styles.year}>2009</span><br></br>
                        CLOTHES POLES,家具デザイン,2009.10.30～11.3<br></br>
                        成型合板の椅子,家具デザイン,2008.11.13<br></br>
                        客室用グラフィック,2008.9.3,ホテルアークリッシュ,豊橋<br></br>
                    </p>
                </div>
            </div>       
        )
    },
    {
        id: 4,
        page: (
            <div className={styles.aboutUsSection}>
                <h3>展覧会・インスタレーション</h3>
                <div>
                    <p>
                        <span className={styles.year}>2019</span><br></br>
                        グッドデザイン賞受賞展 『GOOD DESIGN EXHIBITION 2019』, 2019.10.31〜11.4, 東京ミッドタウン, 六本木<br></br>
                        Shenzhen Creative Week & the 34th Shenzhen International Furniture Exhibition 2019.3.19〜22, 中国深圳<br></br>
                    </p>
                    <p>
                        <span className={styles.year}>2018</span><br></br>
                        建築の日本展：その遺伝子のもたらすもの 2018,4,25〜9.17, 森美術館, 六本木<br></br>
                        「en[縁]：アート・オブ・ネクサス――第15回ヴェネチア・ビエンナーレ国際建築展日本館帰国展」 2018.1.24.～3.18, TOTO ギャラリー・間, 乃木坂<br></br>
                    </p>
                    <p>
                        <span className={styles.year}>2017</span><br></br>
                        紙のかたち展２ ふわふわ、ごろごろ、じわじわ　2017.10.6〜12.1, 猪熊純, 竹尾 見本帖本店2, 世田谷 神田<br></br>
                        『そこまでやるか』壮大なプロジェクト展 2017.6.23.〜101, 21_21 DESIGN SIGHT, 六本木<br></br>
                        Together! The New Architecture of the Collective Vitra Design Museum 2017.6.3〜9.10, ヴァイル・アム・ライン<br></br>
                    </p>
                    <p>
                        <span className={styles.year}>2016</span><br></br>
                        第15回ヴェネチア・ビエンナーレ国際建築展 日本館 2016.5.28〜11.27, ヴェネチア<br></br>
                        瀬戸内国際芸術祭 豊島八百万ラボ,2016.3.20〜, 豊島・甲生<br></br>
                        瀬戸内国際芸術祭2016 開幕直前展 2016.2.17~2.29, 渋谷ヒカリエ8/,渋谷<br></br>
                    </p>
                    <p>
                        <span className={styles.year}>2015</span><br></br>
                        GA JAPAN 2015「PLOT 設計のプロセス展」2015.11.21-2016.2.14,GAギャラリー,千駄ヶ谷<br></br>
                        3.11以後の建築2015.11.7～2016.1.31,水戸芸術館現代芸術ギャラリー,水戸<br></br>
                        「HOW to GO」vol.02,2015.5.1～7.2,MUJI to GO KITTE丸の内,丸の内<br></br>
                        JUTAKU Timeline　エレメントからみる住宅の可能性,2015.1.8～2.10,OZONEギャラリー,新宿<br></br>
                    </p>
                    <p>
                        <span className={styles.year}>2014</span><br></br>
                        ジャパン・アーキテクツ3.11以後の建築,2014.11.1～2015.5.10, 金沢21世紀美術館,金沢<br></br>
                        Life Space UX Exhibition 展示会場,2014.3.19～4.13,ソニービル8F,銀座<br></br>
                    </p>
                    <p>
                        <span className={styles.year}>2013</span><br></br>
                        アーキテクト and / vs アーバニスト展,2013.10.2～14,建築博物館ギャラリー,田町<br></br>
                        AGC studio Exhibition No.08 これからの社会を予見させる建築模型展 「新しい建築の楽しさ2013」展,2013.7.30～9.7,AGCstudio,銀座<br></br>
                        新スケープ　建築展,2013.4.17～4.28,渋谷<br></br>
                        HOUSE VISION 2013 TOKYO EXHIBITION,2013.3.2～24,青海<br></br>
                    </p>
                    <p>
                        <span className={styles.year}>2012</span><br></br>
                        現代建築日韓交流展「同じ家、違う家」,2012.11.16～12.09,トータルギャラリー,ソウル<br></br>
                        TOKYO DESIGNERS WEEK 2012 建築模型展,2012.10.30～11.05,明治神宮外苑<br></br>
                        くらし中心～「かたがみ」から始まる part1 家具のかたがみ,2012.10.26～11.18,ATELIER MUJI,有楽町<br></br>
                        建築的思考のパラダイム-アーキテクチャーの現在系,2012.10.21～11.25,旧東京電機大学11号館,神田<br></br>
                        JA86新世代建築家からの提起,2012.7.25～8.5,ヒカリエ,渋谷<br></br>
                    </p>
                    <p>
                        <span className={styles.year}>2011</span><br></br>
                        カーサ ラウンジ～若手建築家の考える未来都市：3・11を越えて,2011.10.27～11.8,森美術館,六本木<br></br>
                        DESIGNTIDE TOKYO,2011.10.29～11.3,東京ミッドタウン・ホール他都内各所<br></br>
                        TOKYO2050,2011.9.24～10.2（首都大チーム）横浜トリエンナーレ特別連携企画「新・港村」U35部門,展覧会,新・港村,横浜市<br></br>
                        meet my project,2011.1.21～25,パリ,フランス<br></br>
                    </p>
                    <p>
                        <span className={styles.year}>2010</span><br></br>
                        TOKYO DESIGNERS WEEK 2010,2010.10.29～11.3,明治神宮外苑<br></br>
                        集まって住む、を考えなおす,2010.09.23～10.05,OZONEギャラリー,新宿<br></br>
                        Hiroshima 2020 Design Charrette,2010.07.24～08.09,建築会館ギャラリー,東京<br></br>
                        Hiroshima 2020 Design Charrette,2010.07.24～08.09,紙屋町シャレオ西通り,広島<br></br>
                        地球マテリアル会議,2010.05.19～06.07,日本科学未来館,お台場<br></br>
                        デザイナーズ集合住宅の過去・現在・未来展,2010.3.10～20,NSビル,新宿<br></br>
                        Wind Mark(City Switch Newcastle),2010.2.23～27,ニューカッスル市,オーストラリア<br></br>
                    </p>
                    <p>
                        <span className={styles.year}>2009</span><br></br>
                        TOKYO DESIGNERS WEEK 2009 100％Professional,2009.10.30～11.3,外苑<br></br>
                        Growing from context展,展覧会,2009.8.21～9.23,プリズミックギャラリー,青山<br></br>
                    </p>
                    <p>
                        <span className={styles.year}>2008</span><br></br>
                        ひとへやの森-インタラクティブな風景展,インスタレーション,2008.11.1～11.4,ヒルサイドウェスト,代官山<br></br>
                    </p>
                    <p>
                        <span className={styles.year}>2002</span><br></br>
                        Tea Room,ワークショップ,2002,JAPAN2002,トロンハイム市,ノルウェー<br></br>
                    </p>
                </div>
            </div>       
        )
    },
    {
        id: 5,
        page: (
            <div className={styles.aboutUsSection}>
                <h3>レクチャ・シンポジウム・ワークショップ</h3>
                <div>
                    <p>
                        <span className={styles.year}>2024</span><br></br>
                        第16回エイブル空間デザインコンペティション 審査員,成瀬友梨,猪熊純<br></br>
                        種子島シンポジウム2024　レクチャー,猪熊純,2024.03.02,種子島<br></br>
                        ITOKI common furniture 発売記念イベント　トークイベント,成瀬友梨,猪熊純,2024.02.29,東京<br></br>
                        日建設計社内トークイベント　レクチャー,成瀬友梨,猪熊純,2024.01.26,東京<br></br>
                        2024年度グッドデザイン賞 審査員,成瀬友梨<br></br>
                        ジオ デザイン オブ ザ イヤー 2024 審査員,猪熊純<br></br>
                        ARCHITECTURAL DESIGN AWARD 2024 presented by KMEW 審査員,成瀬友梨<br></br>
                        第3回 JOIFA オフィスアワード 審査員,成瀬友梨<br></br>
                        第2回 OFFICE DESIGN COMPETITION／FRONTIER CONSULTING×商店建築 審査員,猪熊純<br></br>
                    </p>
                    <p>
                        <span className={styles.year}>2023</span><br></br>                  
                        第15回エイブル空間デザインコンペティション 審査員,成瀬友梨,猪熊純,2023.08.23,東京<br></br>
                        INTERNATIONAL FORUM ON THE SUPER AGING CHALLENGE 超高齢社会の課題を解決する国際会議 フォーラム,成瀬友梨,2023.11.20,東京<br></br>
                        正林建築文化財団 建築 フォーラム　レクチャー,成瀬友梨,猪熊純,2023.10.12,韓国<br></br>
                        ACC TOKYO CREATIVITY AWARDS 審査員,成瀬友梨<br></br>
                        2023年度グッドデザイン賞 審査員,成瀬友梨<br></br>
                        ジオ デザイン オブ ザ イヤー 2023 審査員,猪熊純<br></br>
                        ARCHITECTURAL DESIGN AWARD 2023 presented by KMEW 審査員,成瀬友梨<br></br>
                        第2回JOIFA オフィスアワード 審査員,成瀬友梨<br></br>
                        第1回 OFFICE DESIGN COMPETITION／FRONTIER CONSULTING×商店建築 審査員,猪熊純<br></br>
                    </p>
                    <p>
                        <span className={styles.year}>2022</span><br></br>
                        第14回エイブル空間デザインコンペティション 審査員,成瀬友梨,猪熊純,2022.10.14,東京<br></br>
                        第1回 JOIFA オフィスアワード 審査員,成瀬友梨<br></br>
                        2022年度グッドデザイン賞 審査員,成瀬友梨<br></br>
                        ジオ デザイン オブ ザ イヤー 2022 審査員,猪熊純<br></br>
                        コスモスモア 審査員,猪熊純<br></br>
                        suep対談（OZONE）,猪熊純,2022.08.28,東京<br></br>
                        イトーキ レクチャー,成瀬友梨,猪熊純,2022.06.27,東京<br></br>
                        明治大学理工学部建築学科 卒業設計公開講評会 ゲストクリティーク,成瀬友梨,2022.01.30<br></br>
                    </p>
                    <p>
                        <span className={styles.year}>2021</span><br></br>
                        第13回エイブル空間デザインコンペティション 審査員,成瀬友梨,猪熊純,2021.10.4,東京<br></br>
                        第13回ハーフェレ学生デザインコンペティション2021 審査員,成瀬友梨<br></br>
                        ジオ デザイン オブ ザ イヤー 2021 審査員,猪熊純<br></br>
                        住宅総合研究所 レクチャー,猪熊純,2021.9.15<br></br>
                        2021年度グッドデザイン賞 審査委員,猪熊純,2021.08.17~19,大阪<br></br>
                        名古屋モザイク工業株式会社 DESIGN AWARD 2021 審査員,猪熊純,2021.07.27,東京<br></br>
                        野村不動産 レクチャー,猪熊純,2021.6.15<br></br>
                    </p>
                    <p>
                        <span className={styles.year}>2020</span><br></br>              
                        日本財団　みらいの福祉施設建築プロジェクト　2021 審査員,成瀬友梨<br></br>
                        第12回ハーフェレ学生デザインコンペティション2020　審査員,成瀬友梨<br></br>
                        愛知淑徳大学 レクチャー,猪熊純,2020.12.08,愛知<br></br>
                        住宅総合研究所 レクチャー,猪熊純,2020.12.03,東京<br></br>
                        某車メーカー レクチャー,猪熊純,2020.9.23<br></br>
                        ジオ　デザイン　オブ　ザ　イヤー　2020　審査員,猪熊純,2020.09.14<br></br>
                        2020年度グッドデザイン賞審査委員,猪熊純,2020.08.25,東京<br></br>
                        名古屋モザイク工業株式会社 DESIGN AWARD 2020 審査員,猪熊純,2020.07.28,東京<br></br>
                        タカラ ビジネス クリエーション アワーズ　2020　特別審査員,猪熊純,2020.07.06,東京<br></br>
                        赤レンガ卒業設計展2020 審査員,猪熊純,2020.03.24,横浜<br></br>
                        Diploma x KYOTO’20　審査員,猪熊純,2020.02.22,京都<br></br>
                        岡山理科大学 卒業設計ゲスト審査員,猪熊純,2020.02.17,岡山<br></br>
                        日本女子大学 レクチャー,猪熊純,2020.1.20<br></br>
                    </p>
                    <p>
                        <span className={styles.year}>2019</span><br></br>
                        エイブル空間デザインコンペティション2019 審査員,成瀬友梨,猪熊純<br></br>
                        第11回ハーフェレ学生デザインコンペティション2019　審査員,成瀬友梨<br></br>
                        名城大学 ゲストレクチャー,猪熊純,2019.11.16,名古屋<br></br>
                        GOOD DESIGN EXHIBITION 2019 トークイベント「2019年度グッドデザイン賞受賞展 クリエイタートーク」,ゲスト,成瀬友梨,猪熊純,2019.11.2,六本木<br></br>
                        ケンチクトークセッション「都市のパブリックをつくるキーワード」第5回 「シェアから広がるパブリック」,株式会社ワコールアートセンター主催,ゲスト,猪熊純,2019.10.26<br></br>
                        床・意研究会第8回フォーラム 「建築家、デザイナーが語る建築における床の意味と意匠」,床・意研究会主催 ＩＯＣ株式会社特別協賛,ゲスト,成瀬友梨,2019.9.18<br></br>
                        日本建築学会特別研究部門研究協議会シンポジウム 2030年の都市・建築・くらし-縮小社会のゆくえと対応策,登壇者,猪熊純,2019.9.5<br></br>
                        2019年度日本建築学会技術部門設計競技解体・リユースを前提とした 期限付き環境配慮建築物,審査委員,猪熊純,2019.5<br></br>
                        ABLE DESIGN AWARD 審査委員,成瀬友梨,猪熊純,2019.4.11,東京<br></br>
                        Shenzhen Creative Week & the 34th Shenzhen International Furniture Exhibition プレゼンター,猪熊純,成瀬友梨,2019.3.19,中国<br></br>
                        クリエイティブナイト第39回,株式会社エイトブランディングデザイン主催,ゲスト,猪熊純,成瀬友梨,2019.2.27,南青山<br></br>
                        スイッチ. -Special talk guest-ソトコト編集長！指出一正さん クロストーク,成瀬友梨,2019.2.5,みしま未来研究所<br></br>
                        名古屋モザイク工業株式会社 DESIGN AWARD 2019 審査員,猪熊純<br></br>
                    </p>
                    <p>
                        <span className={styles.year}>2018</span><br></br>
                        2018年度グッドデザイン賞審査委員,猪熊純<br></br>
                        立教大学 公開シンポジウム 講師,猪熊純,2018.12.13,池袋<br></br>
                        JID AWARD ゲスト審査員,猪熊純,成瀬友梨,2018.11.22<br></br>
                        MUJI HOTEL 北京 講演会,猪熊純,2018.11.9,北京<br></br>
                        上海日本大使館講演会,猪熊純,2018.11.8,上海<br></br>
                        日立建設設計　第14回トーク会 ,猪熊純,2018.10.17,千代田区<br></br>
                        WIKITOPIA INTERNATIONAL COMPETITION 審査員,成瀬友梨<br></br>
                        CONDE HOUSE デザイントークイベント,猪熊純,成瀬友梨,2018.9.20,名古屋<br></br>
                        工学院大学 バーティカルレビュー ゲストクリティーク,成瀬友梨,2018.8.2<br></br>
                        国士舘大学理工学部建築学科 講評会 SUPER JURY,成瀬友梨,2018.7.28<br></br>
                        都市住宅学会　関東支部総会講演,成瀬友梨,2018.4.18,千代田区<br></br>
                        三菱地所設計社内レクチャー,猪熊純,2018.3.29<br></br>
                        デザイン女子No.1決定戦2018NAGOYA 審査委員長,成瀬友梨,2018.3.27,名古屋<br></br>
                        赤レンガ卒業設計展2018 審査員, 猪熊純,2018.3.23,横浜<br></br>
                        東京建築コレクション2018審査員,成瀬友梨,2018.3.4,渋谷区<br></br>
                        第15回ヴェネチア・ビエンナーレ国際建築展日本館帰国展 ギャラリートーク「暮らしとマテリアルをつなぐ」 パネリスト,猪熊純,成瀬友梨,2018.3.2,港区<br></br>
                        第8回 エイブル空間デザインコンペティション 審査員,猪熊純,成瀬友梨,2018.2.23<br></br>
                        東京大学デザインラボ ゲストレクチャー,猪熊純,2018.2.13<br></br>
                        第15回ヴェネチア・ビエンナーレ国際建築展日本館帰国展記念シンポジウム「en[縁]:アート・オブ・ネクサス、その先へ」 パネリスト,猪熊純,2018.2.16,港区<br></br>
                        愛知県立芸術大学レクチャー,猪熊純,2018.1,愛知県立芸術大学<br></br>
                    </p>
                    <p>
                        <span className={styles.year}>2017</span><br></br>
                        第37回 建築文化講演会　講師, 猪熊純, 2017.9.2, 岐阜<br></br>
                        自分らしく、賢く暮らす、リビタのリノベーション展　スペシャルトークイベント「集まって暮らす。」　ゲスト, 猪熊純, 2017.7.1, 渋谷<br></br>
                        デザイン女子No.1決定戦2017NAGOYA 審査員, 猪熊純, 2017.3.21, 名古屋<br></br>
                        赤レンガ卒業設計展2017 審査員,猪熊純,2017.3.20,横浜<br></br>
                        シェア空間の設計手法刊行記念イベント「”シェア空間”から見たコミュニティ、ビジネス、ケアの現在」 ゲスト, 成瀬友梨, 2017.3.2, 京都<br></br>
                        ARCHIFORUM2017 feat. Nomura Real Estate Development ゲスト, 猪熊純, 2017.2.18, 東京<br></br>
                        大場きっかけまち会議　コンセプトブックお披露目会 パネリスト, 猪熊純,成瀬友梨, 2017.2.12, 静岡<br></br>
                        OZONE設計塾　建築家の仕事の新しいかたち ゲスト, 猪熊純,成瀬友梨, 2017.1.28, 東京<br></br>
                        愛知県立芸術大学レクチャー,猪熊純,2017.1.27,愛知県立芸術大学<br></br>
                    </p>
                    <p>
                        <span className={styles.year}>2016</span><br></br>
                        シェア空間の設計手法刊行記念イベント「”シェア空間”から見た建築の現在」 ゲスト, 猪熊純, 2016.12.17, 東京<br></br>
                        近畿大学 企画マネジメント総論 オープンレクチャー 「シェアの概念を用いた新たな建築の企画とデザイン」 猪熊純, 2016.12.15, 大阪<br></br>
                        JIA愛知地域会 第７回レクチャーイベント「あたらしいシェア建築のカタチ」パネリスト, 猪熊純, 2016.11.24, 名古屋<br></br>
                        第7回 エイブル空間デザインコンペティション 審査員,猪熊純,成瀬友梨,2016.11.4<br></br>
                        サマーキャンプ2016「新たな都市プランニング・アーバニズムとシゴト」ゲスト, 成瀬友梨, 2016.9.6, 東京<br></br>
                        「空間観察学 Vol.2 presented by Sony Life Space UX Lab.」講師, 猪熊純, 2016.8.30, 3331alpha<br></br>
                        HOUSE VISION 2016 TOKYO EXHIBITION トークイベントゲスト, 猪熊純,成瀬友梨, 2016.8.7,2016.8.11, 東京<br></br>
                        Neighbors Next U26 Project “U-School” ゲスト, 猪熊純, 2016.8.2, Clipニホンバシ<br></br>
                        森美術館　ワークショップ「視覚のない国をデザインしよう」アドバイザー, 成瀬友梨, 2016.4.29, 2016.6.4, 東京<br></br>
                        チラミセNIGHTゲスト,猪熊純,2016.3.2,Clipニホンバシ<br></br>
                        赤レンガ卒業設計展2016 審査員,猪熊純,2016.3.27,横浜<br></br>
                        せんだいデザインリーグ2016 卒業設計日本一決定戦 審査員,成瀬友梨,2016.3.6,仙台<br></br>
                        リブシブ賞 審査員,猪熊純,成瀬友梨,2016.2.24,東京<br></br>
                        大阪工業大学 卒業研究展示会 審査員,猪熊純,2016.2.21,海岸通ギャラリーCASO<br></br>
                        第１回　U-35 主催　学生アイデアコンペティション 審査員,猪熊純,2016.2.20,KIITO デザイン・クリエイティブセンター神戸<br></br>
                        トークイベント「人気建築家のデザイン・メソッド」,成瀬友梨,2016.2.20,代官山蔦屋書店<br></br>
                        伊藤忠ファッションシステム　FAフォーラム　レクチャー,猪熊純,2016.1.14,東京<br></br>
                        愛知県立芸術大学レクチャー,猪熊純,2016.1.6,愛知県立芸術大学,長久手市<br></br>
                    </p>
                    <p>
                        <span className={styles.year}>2015</span><br></br>
                        第6回エイブル空間デザインコンペティション 審査員,成瀬友梨,猪熊純<br></br>
                        千葉工業大学 レクチャー,猪熊純,2015.12.15,習志野<br></br>
                        神奈川大学 レクチャー,猪熊純,2015.12.11,横浜<br></br>
                        東北大学 レクチャー,猪熊純,2015.12.10,仙台<br></br>
                        某家具メーカーワークショップ2015.12.22～,東京<br></br>
                        某放送局レクチャー,猪熊純,2015.11.3,東京<br></br>
                        CONDE HOUSE デザイントークイベント,猪熊純,2015.10.17,福岡<br></br>
                        JID AWARD 2015ゲストスピーカー,成瀬友梨,2015.9.18,リビングデザインセンターOZONE,新宿<br></br>
                        Nippon Paint Young Designers Award 2015,成瀬友梨,審査員,2015.10月<br></br>
                        第13回Aプロジェクトシンポジウム「つなぐ建築」時代の空気と思考の飛距離,成瀬友梨,2015.7.17,新宿ＮＳビル16階インテリアホール,東京<br></br>
                        野村不動産デザインレビュー審査員,成瀬友梨,2015.07.10,東京<br></br>
                        TOKYO GAS STYLE SUPPORT LAB,猪熊純,2015.6.30～10.19,東京<br></br>
                        愛知淑徳大学 レクチャー,猪熊純,2015.5.19,名古屋<br></br>
                        某大手電機メーカー,中期計画コンサルティング業務,猪熊純,2015.3.9～2015.4.13, 東京<br></br>
                        ARCHIFORUM feat. Nomura Real Estate Development トークセッション,猪熊純,2015.3.29,SHIBAURA HOUSE<br></br>
                        第5回 建築夜話 ゲスト,猪熊純,2015.3.28,HAGISO<br></br>
                        NAGOYA Archi Fes 2015 中部卒業設計展 審査員, 猪熊純,2015.3.12, 吹上ホール<br></br>
                        Neighbors Next U26 説明会! ゲスト,猪熊純,2015.2.3～2016.1.30, Clipニホンバシ<br></br>
                        HOUSE VISION 講演,猪熊純,2015.1.10, POLYLOGUE<br></br>
                    </p>
                    <p>
                        <span className={styles.year}>2014</span><br></br>
                        JIA建築セミナー2014 トークセッション,猪熊純,2014.12.20,JIA館<br></br>
                        TOUCHxWORK　講演,猪熊純,2014.10.26, 神戸KIITO<br></br>
                        新島リノベーション ワークショップ2014 ワークショップゲスト,猪熊純,2014.10.12,13,新島<br></br>
                        Nippon Paint Young Designers Award 2014 審査員, 猪熊純,2014.10.3,東京<br></br>
                        プラスファーニチャー社内 レクチャー,猪熊純,2014.8.6,東京<br></br>
                        広島大学　デザイン課題 レクチャー・出題・ゲストクリティーク,猪熊純,2014.8.1,2,広島<br></br>
                        東京都市大学設計課題 ゲストクリティーク,成瀬友梨+猪熊純,2014.7.26,東京<br></br>
                        慶応SFCデザイン課題 ゲストクリティーク,成瀬友梨,2014.7.19,神奈川<br></br>
                        明治大学設計課題 ゲストクリティーク,猪熊純,2014.7.16,東京<br></br>
                        吉祥寺コミュニティデザイン大賞審査員 審査員,成瀬友梨,2014.7.12,東京<br></br>
                        九州工業大学 講演,猪熊純,2014.4.28,福岡<br></br>
                        大阪市立大学 講演,猪熊純,2014.4.26,大阪<br></br>
                        卒、2014 講評,成瀬友梨,2014.3.2,お台場SIM STUDIO<br></br>
                        XD Exhibition2014 公共空間のデザイン トークセッション,猪熊純,2014.3.2,二子玉川ライズ<br></br>
                        新潟建築卒業設計展session!2014 審査員,成瀬友梨,2014.2.21～23,新潟大学駅南キャンパスときめいとほか,新潟<br></br>
                        open CU めおと起業家ミーティング,成瀬友梨+猪熊純,2014.02.12,Fabcafe Tokyo,渋谷<br></br>
                    </p>
                    <p>
                        <span className={styles.year}>2013</span><br></br>
                        TOKYO DESIGNERS WEEK 2013 トークセッション,成瀬友梨,2013.10.30,明治神宮外苑<br></br>
                        音楽と建築ライブ レクチャー,成瀬友梨,2013.10.6,MOBS FELLAS,鳥取<br></br>
                        明治大学 特別講義,猪熊純,2013.9.17,東京<br></br>
                        City Switch Izumo 2013　ワークショップ講師,猪熊純,2013.09.12～14,出雲<br></br>
                        北信越地区新人合同設計展「ＴＡＭＡＧＯ展」レクチャー&講評,成瀬友梨,2013.8.25,富山大学,富山<br></br>
                        LIXIL企業向けセミナー,成瀬友梨+猪熊純,2013.8.21,LIXIL大島ビル<br></br>
                        Fabスターターズガイド第1回講師,成瀬友梨＋猪熊純,2013.7.27,Fabcafe Tokyo,渋谷<br></br>
                        京都精華大学オープンジュリー ゲストクリティーク,猪熊純,2013.7.24,京都精華大学<br></br>
                        まちかど講評会ゲストクリティーク,成瀬友梨,2013.07.14,東洋大学<br></br>
                        第2回吉祥寺コミュニティデザイン大賞 審査委員,成瀬友梨,20137.12,吉祥寺<br></br>
                        第22回東京都学生卒業設計コンクール2013審査委員,成瀬友梨,2013.6.1,工学院大学,新宿<br></br>
                        HOUSE VISION 2013 TOKYO EXHIBITION トークセッション,成瀬友梨＋猪熊純,2013.3.8,11,17,青海<br></br>
                        HOUSE VISION 2013 TOKYO EXHIBITION トークセッション,成瀬友梨＋猪熊純,2013.3.16,代官山蔦屋書店,代官山<br></br>
                        トークセッション「デザインの文法」第6回,成瀬友梨＋猪熊純,2013.2.26,武蔵野美術大学デザイン・ラウンジ,六本木<br></br>
                        PROUD BOX 感謝祭 PDJ-Lab公開生討論,猪熊純,2013.2.11,東京国際フォーラム,有楽町<br></br>
                    </p>
                    <p>
                        <span className={styles.year}>2012</span><br></br>
                        City Switch Forum,猪熊純,2012.11.24,25,出雲市<br></br>
                        「RE:LOCAL」トークセッション,成瀬友梨＋猪熊純,2012.11.23,慶応義塾大学,三田<br></br>
                        ゲストクリティーク&レクチャー,成瀬友梨＋猪熊純,2012.11.21,22,東北芸術工科大学,山形市<br></br>
                        JIA東北支部大会レクチャー,成瀬友梨＋猪熊純,2012.11.17,ねぶたの家ワ・ラッセ,青森市<br></br>
                        日本の新しいユースホステルデザインコンペティション審査員,成瀬友梨＋猪熊純,2012.11.15<br></br>
                        PDJ-Lab第６回,猪熊純,2012.11.13,OZONE子育てふぁ～む,新宿<br></br>
                        colors workshop 2012講師,猪熊純,2012.10.20,21,東北工業大学,仙台市<br></br>
                        Amorphous Form 木内俊克+砂山太一展シンポジウムゲスト,成瀬友梨＋猪熊純,2012.10.7,リビングデザインセンターOZONE,西新宿<br></br>
                        日大スーパージュリーゲストクリティーク,猪熊純,2012.10.6,日本大学理工学部CSTホール,神田<br></br>
                        PDJ-Lab第５回,猪熊純,2012.9.28,求道会館,本郷<br></br>
                        名古屋賃貸住宅フェア21世紀街づくり会議,猪熊純,2012.9.26,吹上ホール,名古屋市<br></br>
                        DESIGNEAST03トークセッション,猪熊純,2012.9.16,クリエイティブセンター大阪,大阪市<br></br>
                        横浜ハーバーシティ・スタディーズ2012レクチャー,成瀬友梨＋猪熊純,2012.9.5,ヨコハマ創造都市センター,横浜市<br></br>
                        夏ゼミ2012,ワークショップ,猪熊純,2012.8.30,伊豆大島<br></br>
                        Community Crossing Japanトークイベント,成瀬友梨＋猪熊純,2012.8.28,co-ba library,渋谷<br></br>
                        シンポジウム「シェアの未来」第４回,成瀬友梨＋猪熊純,2012.7.21,THE TERMINAL,神宮前<br></br>
                        PDJ-Lab第４回,猪熊純,2012.7.12,トーキョーよるヒルズ,六本木<br></br>
                        Open CU「Community Design～これからのコミュニティデザインを考える」,成瀬友梨＋猪熊純,2012.7.6,loftwork 10F ID,渋谷<br></br>
                        シンポジウム「シェアの未来」第３回,成瀬友梨＋猪熊純,2012.6.23,THE TERMINAL,神宮前<br></br>
                        ゲストクリティーク&レクチャー,成瀬友梨＋猪熊純,2012.6.16,明治大学<br></br>
                        PDJ-Lab第３回,猪熊純,2012.6.13,PoRTAL,渋谷<br></br>
                        シンポジウム「シェアの未来」第２回,成瀬友梨＋猪熊純,2012.5.26,THE TERMINAL,神宮前<br></br>
                        PDJ-Lab第２回,成瀬友梨＋猪熊純,2012.5.16,TABLOID,日の出<br></br>
                        シンポジウム「シェアの未来」第１回,成瀬友梨＋猪熊純,2012.4.22,THE TERMINAL,神宮前<br></br>
                        PDJ-Lab第１回,成瀬友梨＋猪熊純,2012.4.4,THE SCAPE(R),渋谷<br></br>
                    </p>
                    <p>
                        <span className={styles.year}>2011</span><br></br>
                        City Switch 2011 IZUMO,ワークショップ,猪熊純,2011.11.3～6,木綿街道,出雲市<br></br>
                        KUUさんとの対談,成瀬友梨＋猪熊純,2011.11.10,吉岡ライブラリー,霞ヶ関<br></br>
                        カーサ ラウンジ 藤本壮介さんとの対談,成瀬友梨＋猪熊純,2011.10.30,森美術館,六本木<br></br>
                        シンポジウム HOUSE VISION,成瀬友梨＋猪熊純,2011.10.27～29,青山学院アスタジオ,神宮前<br></br>
                        colors workshop 2011,ワークショップ,成瀬友梨＋猪熊純,2011.10.15～16,東北工業大学,仙台市<br></br>
                        シンポジウム「アーキエイドの展望」,成瀬友梨＋猪熊純,2011.10.6,新・港村,横浜市<br></br>
                        City Switch 2011 IZUMO,ワークショップ,猪熊純,2011.8.5～8,木綿街道,出雲市<br></br>
                        SFIDAフットボールデザインコンテスト審査員,成瀬友梨＋猪熊純,2011.7.18～8.31<br></br>
                        アーキエイドサマーキャンプ「半島へ出よ」,ワークショップ,成瀬友梨＋猪熊純,2011.7.4～5,20～25,牡鹿半島,石巻市（東大チーム、首都大チーム）<br></br>
                        レクチャー,成瀬友梨＋猪熊純,2011.6.9,東京ミッドタウン,六本木<br></br>
                        全国合同卒業設計展 卒、ゲストクリティーク,猪熊純,2011.6.4,隅田公園リバーサイドギャラリー,浅草<br></br>
                        City Switch 2011 IZUMO,ワークショップ,猪熊純,2011.5.26～30,木綿街道,出雲市<br></br>
                        株式会社エイブルオーナー向けセミナー,成瀬友梨＋猪熊純,2011.5.14,エイブル本社,赤坂見附<br></br>
                        ラジオ番組 東京ウェッサイ,猪熊純,2011.1.7<br></br>
                    </p>
                    <p>
                        <span className={styles.year}>2010</span><br></br>
                        株式会社エイブルオーナー向けセミナー,成瀬友梨＋猪熊純,2010.10.23,エイブル本社,赤坂見附<br></br>
                        TUSA,ワークショップ,成瀬友梨,2010.10.12～31,東京理科大学<br></br>
                        日本文化デザイン会議2010アートプロジェクトin北本ビタミン,猪熊純,2010.10.9～11,北本市<br></br>
                        UTalkレクチャー,成瀬友梨,2010.10.9,UTcafe,本郷<br></br>
                        集まって住む、を考えなおす展シンポジウム,成瀬友梨＋猪熊純,2010.10.3,OZONEリビングデザインギャラリー,西新宿<br></br>
                        City Switch 2010 IZUMO,ワークショップ,猪熊純,2010.07.31～08.07,木綿街道,出雲市<br></br>
                        3D ENTREPRENEURS,猪熊純,2010.7.30,タブロイド,港区海岸<br></br>
                        第23回コイズミ国際学生照明デザインコンペ の表彰式特別講演,成瀬友梨＋猪熊純,2010.7.20,コイズミ照明ショールーム,秋葉原<br></br>
                        近作について,成瀬友梨,2010.6.17,国立台北科技大学,台北,台湾<br></br>
                        Hiroshima 2020 Design Charrette,成瀬友梨＋猪熊純,2010.06.06,まちづくり市民交流プラザ,広島市<br></br>
                        地球マテリアル会議公開ブレインストーミング,成瀬友梨＋猪熊純,2010.5.30,日本科学未来館,お台場<br></br>
                        デザイナーズ集合住宅の過去・現在・未来展シンポジウム,成瀬友梨＋猪熊純,2010.03.16,NSビル,新宿<br></br>
                        近作について,猪熊純,2010.3.3,シドニー工科大学,シドニー,オーストラリア<br></br>
                        近作について,猪熊純,2010.2.25,Renew Newcastle,ニューカッスル,オーストラリア<br></br>
                        Wind Mark(City Switch Newcastle),ワークショップ・インスタレーション,猪熊純,2010.2.23～27,ニューカッスル市,オーストラリア<br></br>
                        可能世界空間論シンポジウム,猪熊純,2010.2.06,ICCインターコミュニケーションセンター,初台<br></br>
                    </p>
                    <p>
                        <span className={styles.year}>2009</span><br></br>
                        学生にとっての「リアル」な建築とは,成瀬友梨＋猪熊純,2009.10.10,建築会館,田町<br></br>
                        卒業設計ゲストクリティーク,成瀬友梨＋猪熊純,2009.3,東京理科大学,野田<br></br>
                        LIVE ROUND ABOUT JOURNAL 2009,成瀬友梨＋猪熊純,2009.1,31,INAXギャラリー,銀座<br></br>
                        3 minutes プレゼンテーション,成瀬友梨＋猪熊純,2009.1,16,21_21 DESIGN SIGHT,六本木<br></br>
                    </p>
                    <p>
                        <span className={styles.year}>2008</span><br></br>
                        インタラクティブな風景展レクチャー,成瀬友梨＋猪熊純,2008.10,30,ヒルサイドウェスト,代官山<br></br>
                        Bamboo House Project,ワークショップ,猪熊純,2008.8.23～24,赤レンガ倉庫広場,横浜市<br></br>
                        City Switch Izumo,ワークショップ,猪熊純,2008.8.3～8.10,木綿街道,出雲市<br></br>
                        株式会社エイブルオーナー向けセミナー,成瀬友梨＋猪熊純,2008.7.26,エイブル本社,赤坂見附<br></br>
                    </p>
                    <p>
                        <span className={styles.year}>2007</span><br></br>
                        デザイン編集長会議,成瀬友梨＋猪熊純,2007.10,青山学院,青山<br></br>
                        設計課題ゲストクリティーク,成瀬友梨＋猪熊純,2007.7,明治大学,生田<br></br>
                    </p>
                </div>
            </div>       
        )
    },
    {
        id: 6,
        page: (
            <div className={styles.aboutUsSection}>
                <h3>メディア</h3>
                <h4>CM・映像作品出演</h4>
                <div>
                    <p>「ライク・ア・バードokitama 第２弾　建築家・成瀬友梨さんと訪ねる、新緑が芽吹く飯豊町」,映像作品,2021年8月<br></br>
                        「MAZDA TVCM MX-30　”建築家” 成瀬友梨・猪熊純篇」マツダ株式会社,TVCM,2020年10月</p>
                </div>
                <h4>著書・書籍</h4>
                <div>
                    <p>「住まいから問うシェアの未来: 所有しえないもののシェアが、社会を変える 」著者（岡部明子、鈴木亮平、山道拓人、猪熊純、小川さやか、前田昌弘、門脇耕三） 学芸出版社 2021年8月<br></br>
                        「The Ideal City: Exploring Urban Futures」著者 Gestalten・Space10 2021年5月<br></br>
                        「住空間計画学」著者 （藤本和男・辻壽一・細田みぎわ・山内靖朗・松尾兆郎・種村俊昭） 2020年12月<br></br>
                        「新しいコミュニティを生み出す空間とデザイン」PIE International 2020年4月<br></br>
                        「配慮するデザイン」著者 バン・イルギョン 美術文化 2019年8月<br></br>
                        「共感・時間・建築」編著（山名善之、塚本由晴）共著（槇文彦、猪熊純、西田司、能作文徳、伊藤暁） TOTO出版 2019年4月<br></br>
                        「建築のリテラシー」著者（遠藤政樹、石原健也、今村創平、田島則行、多田脩二）彰国社 2018年7月<br></br>
                        「子育てしながら建築を仕事にする」編著者 成瀬友梨、著者（アリソン理恵、勝岡裕貴、木下洋介、杉野勇太、鈴木悠子、瀬山真樹夫、杤尾直也、豊田啓介、永山祐子、馬場祥子、松島潤平、萬玉直子、三井祐介、矢野香里、吉川史子） 学芸出版社 2018年2月<br></br>
                        「建築の日本展:その遺伝子のもたらすもの」執筆者 （デイビッド・アジャイ、青井哲人、芦原太郎、坂茂、藤森照信、藤本壮介、藤原徹平、畑田尚子、市川紘司、猪熊純、石榑督和、石山修武、石上純也、勝原基貴、川勝真一、岸佑、木内俊彦、小岩正樹、腰原幹雄、倉方俊輔、桑原遼介、前田圭介、前田尚武、松隈章、アリソン・モリス、本橋仁、内藤廣、成瀬友梨、西沢立衛、野村俊一、大井隆弘、大沼靖、岡啓輔、岡田公彦、ケン・タダシ・オオシマ、斎藤精一、榊田倫之、坂本忠規、三分一博志、佐藤竜馬、妹島和世、仙田満、庄子晃子、杉江夏呼、田根剛、徳山拓一、豊川斎赫、塚本二朗、塚本由晴、海野聡、内海慎介、山崎泰寛、山崎健太郎、吉村靖孝）　Echelle-1 2018年8月<br></br>
                        「リノベーションの教科書」著者（小池志保子、宮部浩幸、花田佳明、川北健雄、山之内誠、森一彦）学芸出版社2018年4月<br></br>
                        「シェア空間の設計手法」責任編集者 猪熊純・成瀬友梨/成瀬猪熊建築設計事務所、編 山道拓人・千葉元生・西川日満里・石榑督和/ツバメアーキテクツ、藤田大樹・山野辺賢治・中里和佳/野村不動産 学芸出版社 2016年12月 （中国語版：2018年11月発売）<br></br>
                        「HOUSE VISION 2 CO-DIVIDUAL　分かれてつながる／離れてあつまる」編著（原研哉＋HOUSE VISION実行委員会）美術出版社2016年7月<br></br>
                        「en［縁］：アート・オブ・ネクサス」著者（山名善之＋菱川勢一＋内野正樹＋篠原雅武）TOTO出版2016年4月<br></br>
                        「ゼロ年代建築家の流儀」対談集（猪熊純＋藤村龍至＋山崎亮,他）プリズミックギャラリー編 彰国社 2016年1月<br></br>
                        SDレビュー2015　特集2「建築家のためのプロジェクトデザイン」企画・構成（猪熊純）協力（塚本二朗,浜田晶則,ツバメアーキテクツ）インタビュー（古澤大輔,平田晃久,乾久美子,重村力）鹿島出版会 2015年12月<br></br>
                        「天才建築家の成功するデザインの法則」インタビュー（青木淳,谷尻誠・吉田愛,トラフ建築設計事務所,長坂常,中村拓志,永山祐子,成瀬・猪熊建築設計事務所,藤本壮介,藤森照信,マウントフジ アーキテクツ スタジオ）エクスナレッジ 2015年11月<br></br>
                        「「シェア」の思想／または愛と制度と空間の関係」編著（門脇耕三）共著（西沢大良,千葉雅也,國分功一郎,吉村靖孝,青井哲人,猪熊純,中川エリカ,仲俊治,西田亮介,橋本健史,古澤大輔,連勇太朗,pha,能作文徳）LIXIL出版 2015年7月<br></br>
                        「広場」 淡交社 2015年4月<br></br>
                        「事例で読む建築計画」 彰国社 2015年3月<br></br>
                        「ぼくらは働く、未来をつくる。-向井理×12人のトップランナー-向井-理」 インタビュー（向井理,宮崎辰,西辻一真,森見登美彦,白木夏子,工藤啓,出雲充,成瀬友梨,ニコライ・バーグマン,スプツニ子!,古屋将太,飯田大輔,小松真実）朝日新聞出版 2014年11月<br></br>
                        KJ　2014年6月号　特集「成瀬・猪熊建築設計事務所－新しい時代の営みを,空間化する」
                        「シェアをデザインする」 共編著（成瀬友梨，猪熊純，門脇耕三，中村航，浜田晶則）学芸出版社　2013年12月
                        「時間のデザイン」 編著（早稲田大学渡辺仁史研究室 時間－空間研究会）共著（渡辺仁史，ホンマタカシ，藤村龍至，長坂常，廣村正彰，猪熊純，山本陽一，秋田道夫，内藤廣，宮城俊作，平田晃久，中原慎一郎，石川初，中村拓志，リッキー・バーデット，南後由和，白井宏昌，柳本浩市，石上純也，金田充弘，杉浦康平）鹿島出版会 2013年4月<br></br>
                        「やわらかい建築の発想ー未来の建築家になるための39の答え」共著（猪熊純，大西麻貴，木内俊克，田根剛，栃澤麻利，成瀬友梨，平瀬有人，藤原徹平）　フィルムアート社 2013年4月
                        「HOUSE VISION 2013 TOKYO EXHIBITION」編著（原研哉＋HOUSE VISION実行委員会）平凡社2013年3月<br></br>
                        「クリエイティブ・コミュニティ・デザイン －関わり、つくり、巻き込もう－」共著（成瀬友梨，猪熊純，田北雅裕，服部滋樹，西村勇也，兼松佳宏，アサダワタル，大和田順子，林美香子，下山浩一，いえつく，松場登美，諏訪光洋，マエキタミヤコ，中村陽一，籾山真人，友廣裕一，秋田光彦，鷲尾公子，宮本武典）フィルムアート社 2012年5月<br></br>
                        「HOUSE VISION 新しい常識で家をつくろう」共著（内藤廣, 山中俊治, 隈研吾, 塚本由晴, 猪熊純, 長谷川豪, 末光弘和, 田中浩也, 竹内昌義, 羽鳥達也, 古田秘馬, 小林光, 平田晃久, 内海智行, 馬場正尊, 大野秀敏, 藤村龍至, 山崎亮, 長坂常, 諏訪光洋, 小泉雅生, 小泉誠, 藤本壮介, 原研哉）平凡社 2012年<br></br>
                        「Xナレッジムック新世代建築家クリエイター100人の仕事」　2010年<br></br>
                        「Xナレッジムック新世代建築家デザイナー100」　2009年<br></br>
                    </p>
                </div>
                <h4>作品掲載・論説・評論・解説</h4>
                <div>
                    <p>
                        <span className={styles.year}>2024</span><br></br>
                        GA JAPAN 187　　JINSイオンモール各務原店<br></br>
                        Casa BRUTUS 3月号　　meet tree GINZA<br></br>
                        INTERIORS Korea 2月号　　お宿 Onn 中津川<br></br>
                        japan-architects.com　　meet tree GINZA<br></br>
                        <span className={styles.year}>2023</span><br></br>
                        TECTURE MAG　　meet tree GINZA<br></br>
                        STORYweb　　meet tree GINZA<br></br>
                        domusweb　　旧軽井沢倶楽部の別荘<br></br>
                        商店建築10月号増刊 ホテル客室図面集　　お宿 Onn 中津川<br></br>
                        architecturephoto.net　　旧軽井沢倶楽部の別荘<br></br>
                        TECTURE MAG　　旧軽井沢倶楽部の別荘<br></br>
                        architecturephoto.net　　Social Base 東中野<br></br>
                        新建築8月号　　Social Base 東中野<br></br>
                        建築ジャーナル7月号　　お宿 Onn 中津川<br></br>
                        近代建築4月号　　お宿 Onn 湯田温泉<br></br>
                        商店建築2月号　　お宿 Onn 湯田温泉/お宿 Onn 中津川<br></br>
                        日本建築学会作品選集2023　　meet tree NAKATSUGAWA<br></br>
                        <span className={styles.year}>2022</span><br></br>
                        designboom　　お宿 Onn 中津川<br></br>
                        エル・デコ10月号　　お宿Onn 湯田温泉<br></br>
                        TECTURE MAG　　お宿 Onn 湯田温泉/お宿 Onn 中津川<br></br>
                        AXIS Web Magazine　　お宿 Onn 中津川<br></br>
                        architecture photo.net　　お宿 Onn 中津川<br></br>
                        architecture photo.net　　お宿 Onn 湯田温泉<br></br>
                        TECTURE　　リエットガーデン三鷹<br></br>
                        TECTURE　　経堂のカフェ併用住宅<br></br>
                        TECTURE　　板橋の立体住居<br></br>
                        TECTURE　　スプリットハウス<br></br>
                        TECTURE　　高尾山スミカ<br></br>
                        TECTURE　　Dance of light<br></br>
                        HOTERES4月1日号　　お宿 Onn 中津川<br></br>
                        <span className={styles.year}>2021</span><br></br>
                        CLTから見える未来(web)　　meettree NAKATSUGAWA<br></br>
                        AXIS Web Magazine　　meettree NAKATSUGAWA<br></br>
                        architecture photo.net　　meettree NAKATSUGAWA<br></br>
                        商店建築8月号　　meettree NAKATSUGAWA<br></br>
                        建築知識6月号&youtube　　meettree NAKATSUGAWA<br></br>
                        新建築5月号　　meettree NAKATSUGAWA<br></br>
                        architecture photo.net　　DENSO Global R&D Tokyo Haneda<br></br>
                        新建築1月号　　DENSO Global R&D Tokyo Haneda<br></br>
                        <span className={styles.year}>2020</span><br></br>
                        商店建築　5月号　ナインアワーズなんば駅<br></br>
                        新建築２月号 リエットガーデン三鷹<br></br>
                        住宅特集１月号 OPEN CAVE<br></br>
                        designboom　Dance of light<br></br>
                        <span className={styles.year}>2019</span><br></br>
                        designboom　ナインアワーズなんば駅<br></br>
                        ArchDaily　ナインアワーズなんば駅<br></br>
                        ArchDaily　Dance of light<br></br>
                        건축 평단18　Dance of light<br></br>
                        ＫＪ 2019.8　「シェア」を考える, 寄稿<br></br>
                        W(i)de 07-08 Dance of light<br></br>
                        新建築7月号 Dance of light<br></br>
                        日経アーキテクチャ2019-5　Dance of light<br></br>
                        ソトコト　5月号 みしま未来研究所<br></br>
                        International Magazine of Space Design|BOB| 177　Dance of light<br></br>
                        ARCHITECTURE & CULTURE 455 Dance of light<br></br>
                        住宅特集 5月号 インタビュー,成瀬友梨<br></br>
                        AXIS Web Magazine ナインアワーズなんば駅<br></br>
                        検証 平成建築史 寄稿,成瀬友梨<br></br>
                        AXIS Web Magazine Dance of light<br></br>
                        J-WAVEラジオSTEP ONE INSIGHT PRIME STORY 成瀬友梨<br></br>
                        <span className={styles.year}>2018</span><br></br>
                        話題のショップをつくる注目の空間デザイナー100人の仕事　作品掲載<br></br>
                        WORKSIGHT インタビュー記事<br></br>
                        city & life インタビュー記事<br></br>
                        新建築9月号 高尾山スミカ<br></br>
                        アイシン インタビュー記事 柏の葉オープンイノベーションラボ<br></br>
                        designboom 高尾山スミカ<br></br>
                        designboom 豊島八百万ラボ<br></br>
                        サンゲツヴォーヌ インタビュー記事 高尾山スミカ・豊島八百万ラボ<br></br>
                        日経×TECH 高尾山スミカ<br></br>
                        毎日新聞東京版 BOOK『子育てしながら建築を仕事にする』紹介<br></br>
                        HILLS LIFE 5月号,成瀬友梨<br></br>
                        商店建築 5月号 カフェ＆ロースタリー特集 経堂のカフェ併用住宅<br></br>
                        AXIS Web Magazine 高尾山スミカ<br></br>
                        建築雑誌4月号 寄稿,成瀬友梨<br></br>
                        淵上正幸のアーキテクト訪問記 インタビュー,成瀬友梨・猪熊純<br></br>
                        LIXIL ビジネス情報　建築・まちづくりコラム 坂の上テラス<br></br>
                        日経プレジデントウーマン　インタビュー記事,成瀬友梨<br></br>
                        <span className={styles.year}>2017</span><br></br>
                        architecture photo.net 渋谷キャスト<br></br>
                        architecture photo.net　株式会社デンソー 名古屋オフィス<br></br>
                        東京カレンダー 12 渋谷キャスト<br></br>
                        architecture photo.net 『そこまでやるか』壮大なプロジェクト展<br></br>
                        architecture photo.net キュープラザ二子玉川<br></br>
                        architecture photo.net 坂の上テラス<br></br>
                        good design cafe vol.2 経堂のカフェ併用住宅<br></br>
                        日経アーキテクチュア　9-14　「女性が組織を伸ばす！」インタビュー記事,成瀬<br></br>
                        REMODELISTA　　　LT城西<br></br>
                        近代建築 8月号 キュープラザ二子玉川<br></br>
                        瀬戸内国際芸術祭2016　　豊島八百万ラボ<br></br>
                        新建築８月号　　天川村南日裏定住促進住宅<br></br>
                        cafesnap大人のカフェ 147　　経堂のカフェ併用住宅<br></br>
                        CAFERES 7月号　　経堂のカフェ併用住宅<br></br>
                        Together! The New Architecture of the Collective catalogue　　LT城西<br></br>
                        BRUTUS 7/15　　KOIL, 豊島八百万ラボ<br></br>
                        Casa BRUTUS 特別保存版　　スプリットハウス, 経堂のカフェ併用住宅<br></br>
                        新建築 6月号　　SHIBUYA CAST.<br></br>
                        商店建築 5月号　　経堂のカフェ併用住宅<br></br>
                        都心に住む by SUUMO 2017年4月号　　経堂のカフェ併用住宅<br></br>
                        OCEANS 2017年4月号　　経堂のカフェ併用住宅<br></br>
                        cafe-sweets vol.180　　経堂のカフェ併用住宅<br></br>
                        LiVES VOL.91　　経堂のカフェ併用住宅<br></br>
                        Casa BRUTUS 2月号　　　経堂のカフェ併用住宅<br></br>
                        <span className={styles.year}>2016</span><br></br>
                        ＭＢＳ「住人十色」#396　　　経堂のカフェ併用住宅<br></br>
                        商店建築 12月号　　　西武池袋本店 別館・書籍館パブリックスペース<br></br>
                        建築案内＠東京　 　FabCafe Tokyo<br></br>
                        FRAME 2016 JUL-AUG　　特集 「Share and Share Alike」<br></br>
                        新建築住宅特集9月号　　　経堂のカフェ併用住宅<br></br>
                        週刊ダイヤモンド別冊8月号　　　経堂のカフェ併用住宅<br></br>
                        SPUR 8月号　　　豊島八百万ラボ<br></br>
                        designboom　　　西武池袋本店 別館・書籍館パブリックスペース<br></br>
                        NAOSHIMA NOTE 2016 JULY　　　豊島八百万ラボ<br></br>
                        Casa BRUTUS 8月号　　　豊島八百万ラボ<br></br>
                        Casa BRUTUS 8月号　　　第15回ヴェネチア・ビエンナーレ国際建築展 日本館<br></br>
                        Discover japan8月号　　　豊島八百万ラボ<br></br>
                        新建築7月号　　　豊島八百万ラボ<br></br>
                        JA102 SUMMER,2016「若手の建築家がつくる家、そして彼らの仕事」<br></br>
                        LIXIL キッチン会議　　　成瀬,猪熊<br></br>
                        WORK MILL　　　KOIL<br></br>
                        建築と社会 vol.97 No.1130 第１回U-35主催学生アイデアコンペティション 活動報告記事,猪熊<br></br>
                        住む。 季刊 春 57　　　世田谷フラット<br></br>
                        Casa BRUTUS 1月号　　　スプリットハウス<br></br>
                        新建築住宅特集1月号　　　経堂のカフェ併用住宅<br></br>
                        <span className={styles.year}>2015</span><br></br>
                        Marketing Researcher No.128 インタビュー記事,猪熊<br></br>
                        野村不動産PROUD 会員誌 vol.76 「建築家が選ぶ住宅のマスターピース」リチャードノイトラのカウフマン邸,猪熊<br></br>
                        GA JAPAN 137号　　　スプツニ子！プロジェクト（仮称）,LT城西,スプリットハウス<br></br>
                        建築知識10月号　　　板橋の立体住居,ピュアハート溝の口,Life Space UX展<br></br>
                        野村不動産PROUD 会員誌 vol.75 「建築家が選ぶ住宅のマスターピース」ハンス・シャロウンのシュミンケ邸,成瀬<br></br>
                        日経アーキテクチュア8.10号　　　ガーデンテラス鷹の台<br></br>
                        新建築住宅特集10月号　　板橋の立体住居<br></br>
                        ART BOX vol.25 House 建築家と建てる家　　　板橋の立体住居<br></br>
                        GA HOUSES 142号　　　スプリットハウス<br></br>
                        作品選集2015　　　LT城西<br></br>
                        JDN　KOIL<br></br>
                        Free&Easy４月号　　　世田谷フラット<br></br>
                        「広場」淡交社 2015年4月　　　りくカフェ本設,KOIL 柏の葉オープンイノベーションラボイノベーションフロア<br></br>
                        BRUTUS3/1号　　　インタビューArt4d 221号　　　LT城西,りくカフェ本設<br></br>
                        新建築住宅特集1月号　　　ガーデンテラス鷹の台<br></br>
                        美術手帳1月号　　　りくカフェ本設<br></br>
                        <span className={styles.year}>2014</span><br></br>
                        JA96号　　　KOIL、りくカフェ本設<br></br>
                        新建築11月号　　　りくカフェ本設<br></br>
                        cafeglobe　　　インタビュー<br></br>
                        SURFACE　　　KOIL<br></br>
                        週刊ダイヤモンド9/6号　　　KOIL<br></br>
                        WAVE　　　インタビュー<br></br>
                        10+1 web site　　　LT城西<br></br>
                        新建築8月号　　　KOIL<br></br>
                        ロフトワーク タブロイド季刊誌　　　インタビュー<br></br>
                        ArchDaily　　　KOIL<br></br>
                        designboom　　　KOIL<br></br>
                        ジュニアエラ7月号　　　インタビュー<br></br>
                        十人十色　　　LT城西<br></br>
                        2014interiors　　　LT城西<br></br>
                        inhabitat　　　LT城西<br></br>
                        Spoon&Tamago　　　LT城西<br></br>
                        Archdaily　　　LT城西<br></br>
                        AXIS6月号　　　独居とシェアインタビュー<br></br>
                        無印 コラム　　　りくカフェ<br></br>
                        無印 コラム　　　LT城西<br></br>
                        日経アーキテクチュア2月号　　　次代の変革者100人<br></br>
                        100tokyo　　　Fabcafe<br></br>
                        新建築2月号　　　skyroom<br></br>
                        Casa BRUTAS 2月号　　　LT城西<br></br>
                        ミセス2月号　　　世田谷フラット<br></br>
                        TOTO通信新春号　　　LT城西<br></br>
                        <span className={styles.year}>2013</span><br></br>
                        AERA　　　仕事の理インタビュー<br></br>
                        日経アーキテクチャ10月号　　　LT城西<br></br>
                        家主と地主　　　LT城西<br></br>
                        greenz　　　りくカフェ<br></br>
                        dezeen　　　LT城西<br></br>
                        architecturephoto.net　　　LT城西<br></br>
                        新建築8月号　　　LT城西<br></br>
                        新建築4月号　　　HOUSE VISION<br></br>
                        YKK AP 窓研究所　　　「窓とシェア」インタビュー<br></br>
                        Blog Del Diseno　　　HOUSE VISION<br></br>
                        architecturephoto.net　　　HOUSE VISION<br></br>
                        All About　　　HOUSE VISION<br></br>
                        designboom　　　HOUSE VISION<br></br>
                        DETAIL daily　　　HOUSE VISION<br></br>
                        GIZMODO　　　HOUSE VISION<br></br>
                        AXIS jiku　　　HOUSE VISION<br></br>
                        TRENDHUNTER　　　HOUSE VISION<br></br>
                        Home crux　　　HOUSE VISION<br></br>
                        Architizer　　　HOUSE VISION<br></br>
                        metaboo　　　HOUSE VISION<br></br>
                        Spoon&Tamago　　　HOUSE VISION<br></br>
                        japan-architects.com　　　HOUSE VISION<br></br>
                        WEBマガジン環境と建築　　　名古屋のシェアハウス、HOUSE VISION<br></br>
                        Casa BRUTUS 2月号　　　プラウド東京八丁堀コワーキングスペース<br></br>
                        TETOTE ONAHAMA　　　トークセッション「RE:LOCAL」<br></br>
                        住む。44号　　　HOUSE VISION<br></br>
                        <span className={styles.year}>2012</span><br></br>
                        ART and ARCHITECTURE REVIEW　　　シェアから考える<br></br>
                        BRUTUS7/15号　　　この夏、集まって飲む<br></br>
                        マンション・戸建て-中古の正しい選び方　　　世田谷フラット<br></br>
                        JA86号　　　りくカフェ、THE SCAPE(R)、FabCafe<br></br>
                        新建築6月号　　　りくカフェ、THE SCAPE(R)、FabCafe<br></br>
                        日経アーキテクチュア4/25号　　　THE SCAPE(R)、FabCafe<br></br>
                        designboom りくカフェ<br></br>
                        Casa BRUTUS4月号　　　りくカフェ<br></br>
                        ハウジング・トリビューンVol.427　　　りくカフェ<br></br>
                        東海新報 3/7朝刊　　　りくカフェ<br></br>
                        岩手日報 3/6朝刊　　　りくカフェ<br></br>
                        仙台経済界　　　りくカフェ<br></br>
                        アリティーヴィー とうほく復興カレンダー　　　りくカフェ<br></br>
                        商店建築3月号　　　りくカフェ<br></br>
                        東海新報 2/18朝刊　　　りくカフェ<br></br>
                        岩手日日 2/18朝刊　　　りくカフェ<br></br>
                        岩手日報 2/17朝刊　　　りくカフェ<br></br>
                        jiku りくカフェ<br></br>
                        東海新報 2/1朝刊　　　りくカフェ<br></br>
                        o-cube157号　　　りくカフェ<br></br>
                        SUBLIME　　　ROOM101、ひとへやの森、from one sheet<br></br>
                        OPENERS りくカフェ<br></br>
                        J-WAVE JAM THE WORLD　　　りくカフェ<br></br>
                        陸前高田災害FM　　　りくカフェ<br></br>
                        岩手めんこいテレビ　　　りくカフェ<br></br>
                        河北新報 1/10朝刊　　　りくカフェ<br></br>
                        岩手日報 1/10朝刊　　　りくカフェ<br></br>
                        東海新報 1/10朝刊　　　りくカフェ<br></br>
                        Casa BRUTUS2月号　　　TOTOトイレ取材記事、世田谷フラット<br></br>
                        BS朝日 リモデルキラリ 世田谷フラット<br></br>
                        ソトコト1月号　　　社会をよくするお買いモノ<br></br>
                        <span className={styles.year}>2011</span><br></br>
                        新建築12月号　　　デザインウィークレポート<br></br>
                        Pen11/1号　　　世田谷フラット<br></br>
                        モダンリビング11月号　　　世田谷フラット<br></br>
                        ブレーン11月号　　　コミュニケーションを生み出す場<br></br>
                        dwell9-10月号　　　世田谷フラット<br></br>
                        DECO JOURNAL9月号　　　世田谷フラット<br></br>
                        LiVES10月号　　　世田谷フラット<br></br>
                        ELLE DECOR10月号　　　世田谷フラット<br></br>
                        新建築8月号　　　世田谷フラット<br></br>
                        地球マテリアルブック（iPadアプリ） 地球マテリアル会議<br></br>
                        SUSU7月号　　　世田谷フラット<br></br>
                        Casa BRUTUS8月号　　　震災復興提案<br></br>
                        VOGUEJAPAN7月号　　　世田谷フラット<br></br>
                        dezeen イエタグ<br></br>
                        architecturephoto.net イエタグ<br></br>
                        日本パルプ商事コラム　　　イエタグ<br></br>
                        designworks イエタグ<br></br>
                        インテリアハック　　　イエタグ<br></br>
                        msnトピックス イエタグ<br></br>
                        cotoba イエタグ<br></br>
                        Rodriguez Blog　　　イエタグ<br></br>
                        livedoor HOMME イエタグ<br></br>
                        ギズモードジャパン イエタグ<br></br>
                        マドリエ イエタグ<br></br>
                        建築ジャーナル4月号　　　「集まって住む、を考えなおす」展<br></br>
                        AXIS4月号　　　イエタグ<br></br>
                        Replan北海道　　　イエタグ<br></br>
                        Replan関東　　　イエタグ<br></br>
                        OPENERS 女性建築家特集<br></br>
                        Website 10+1 「集まって住む、を考えなおす」展<br></br>
                        <span className={styles.year}>2010</span><br></br>
                        新建築11月号　　　大切に暮らす<br></br>
                        住宅特集11月号　　　「集まって住む、を考えなおす」展<br></br>
                        新建築7月号　　　地球マテリアル会議<br></br>
                        AXIS8月号　　　地球マテリアル会議<br></br>
                        architecturephoto.net 地球マテリアル会議<br></br>
                        新建築住宅特集1月号　　　住宅物語<br></br>
                        AN 3-4月号　　　clothes poles<br></br>
                        Wallpaper* 4月号　　　clothes poles<br></br>
                        エキサイトイズム デザイナーズ集合住宅の過去・現在・未来展<br></br>
                        Website10＋1 デザイナーズ集合住宅の過去・現在・未来展<br></br>
                        <span className={styles.year}>2009</span><br></br>
                        新建築住宅特集10月号　　　Growing from context-成瀬友梨+猪熊純プロジェクト展<br></br>
                        サンケイEX　　　Growing from context-成瀬友梨+猪熊純プロジェクト展<br></br>
                        新建築住宅特集9月号　　　住宅物語<br></br>
                        Spoon&Tamago　　　from one sheet<br></br>
                        新建築住宅特集5月号　　　住宅物語<br></br>
                        しもつけ新聞4/20　　　エッセイ　街をデザインしよう3<br></br>
                        日経アーキテクチャ別冊　Designers’　　　ひとへやの森-インタラクティブな風景展<br></br>
                        しもつけ新聞3/9　　　エッセイ　街をデザインしよう2<br></br>
                        商店建築3月号空間時評　　　ひとへやの森-インタラクティブな風景展<br></br>
                        産経EX2月8日号　　　Colors Designer International Competition<br></br>
                        日経アーキテクチャ1/26　　　若手ユニット派特集<br></br>
                        しもつけ新聞1/26　　　エッセイ　街をデザインしよう<br></br>
                        domus1月号　　　ひとへやの森-インタラクティブな風景展<br></br>
                        honeyee.mag　　　ひとへやの森-インタラクティブな風景展<br></br>
                        CONFORT 2月号　　　ひとへやの森-インタラクティブな風景展<br></br>
                        新建築住宅特集1月号　　　ひとへやの森-インタラクティブな風景展　／　住宅物語<br></br>
                        architecturephoto.net Growing from context-成瀬友梨+猪熊純プロジェクト展<br></br>
                        dezeen clothes poles<br></br>
                        architecturephoto.net clothes poles<br></br>
                        <span className={styles.year}>2008</span><br></br>
                        新建築12月号　　　BAMBOO HOUSE PROJECTコラム　／　ひとへやの森-インタラクティブな風景展<br></br>
                        designboom　　from one sheet ／ open air shelter ／ a partially covered parking space ／ 100 pinwheels<br></br>
                        SHEARYADI’s WORLD 天童木工デザインコンクール2008 整形合板の椅子<br></br>
                        SHEARYADI’s WORLD ひとへやの森-インタラクティブな風景展<br></br>
                        architecturephoto.net 天童木工デザインコンクール2008 整形合板の椅子<br></br>
                        DESIGN CHANNEL ひとへやの森-インタラクティブな風景展<br></br>
                        dezeen ひとへやの森-インタラクティブな風景展<br></br>
                        architecturephoto.net ひとへやの森-インタラクティブな風景展　２回目<br></br>
                        architecturephoto.net ひとへやの森-インタラクティブな風景展<br></br>
                        新建築９月号/a+u９月号/新建築住宅特集10月号　共同冊子COLOR　　　色についてのエッセイ<br></br>
                        住宅特集4月号　　藤本壮介氏　中村拓志氏　乾久美子氏　佐藤淳氏　インタビュー＋批評<br></br>
                        Real Design（リアルデザイン）４月号　　　far-out beyond<br></br>
                        <span className={styles.year}>2007</span><br></br>
                        AXIS（アクシス）12月号　　　SUSアルミニウムアワードコンペ案<br></br>
                        新建築（新建築社）11月号　　　SUSアルミニウムアワードコンペ案<br></br>
                        pen（阪急コミュニケーションズ）10/15号　　　ひとへやの森<br></br>
                        新建築（新建築社）2月号　　　ROOM101<br></br>
                        pen（阪急コミュニケーションズ）4/1号　　　ROOM101<br></br>
                        <span className={styles.year}>2006</span><br></br>
                        Casa BRUTUS（マガジンハウス）2月号　　　若手建築家特集<br></br>
                        TITLE（文藝春秋）11月号　　　ROOM101<br></br>
                        TITLE（文藝春秋）12月号　　　９坪ハウスコンペ案<br></br>
                        リフォームハンドブック2007（建築資料研究社）　　　ROOM101<br></br>
                        <span className={styles.year}>2004</span><br></br>
                        新建築（新建築社）3月号　　　TEPCOインターカレッジデザインコンテストコンペ案<br></br>
                        <span className={styles.year}>2003</span><br></br>
                        新建築（新建築社）1月号　　　The Spirit of the Japanese Teahouse ワークショップ@ノルウェー<br></br>
                        <span className={styles.year}>2002</span><br></br>
                        新建築（新建築社）3月号　　　建築学生設計大賞コンペ案<br></br>
                    </p>
                </div>
            </div>       
        )
    },
]


























