"use client";

import { useState } from "react";
import styles from "./RecruitTab.module.scss";
import { RECRUIT_TAB_PAGE } from "@/app/recruit/recruitTabPage/RecruitTabPage";
import { ABOUT_TAB_PAGE } from "@/app/aboutus/AboutUsTabPage/AboutUsTabPage";

const RECRUIT_TAB = [
    {id: 0, tabName: "働き方について"},
    {id: 1, tabName: "正社員"},
    {id: 2, tabName: "時短勤務"},
    {id: 3, tabName: "アルバイト・長期アルバイト"},
    {id: 4, tabName: "事務所説明会"},
    {id: 5, tabName: "OB・OG"}
]

const ABOUT_TAB = [
    {id: 0, tabName: "Profiles"},
    {id: 1, tabName: "Awards"},
    {id: 2, tabName: "Architecture/Interior Design"},
    {id: 3, tabName: "Product Design"},
    {id: 4, tabName: "Exhibitions/Installations"},
    {id: 5, tabName: "Lectures/Symposia"},
    {id: 6, tabName: "Media"}
]

interface isRecruitType {
    isRecruit: boolean;
}

export const RecruitTab = ({ isRecruit }: isRecruitType) => {

    const TABS = isRecruit ? RECRUIT_TAB : ABOUT_TAB;
    const PAGES = isRecruit ? RECRUIT_TAB_PAGE : ABOUT_TAB_PAGE;
    
    const [activeTab, setActiveTab] = useState(TABS[0]);

    // 選択中のタブに対応するページを取得
    const activePage = PAGES.find((page) => page.id === activeTab.id);

    return (
        <>
            <div className={styles.tabCont}>
                <h2 className={styles.sectionTitle}>
                    {isRecruit ? "RECRUIT" : "ABOUT US"}
                </h2>
                <div className={styles.tabList}>
                    {TABS.map((tab) => (
                        <button
                            type="button"
                            key={tab.id}
                            onClick={() => setActiveTab(tab)}
                            className={`${styles.tabStyle} ${activeTab.id === tab.id ? styles.active : ""}`}
                        >
                            <span className={styles.mark}>＞</span>
                            <span className={styles.text}>{tab.tabName}</span>
                        </button>
                    ))}
                </div>
            </div>
            <div key={activePage?.id} className={styles.pageSection}>
                {activePage && activePage.page}
            </div>
        </>
    );
};