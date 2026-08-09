export interface VdrItem {
  id: string;
  title: string;
  url: string;
}

export interface VdrFolder {
  id: string;
  title: string;
  items: VdrItem[];
}

export const vdrData: VdrFolder[] = [
  {
    id: "01_Company_Presentation",
    title: "01_Company_Presentation",
    items: [
      {
        id: "01_Company_Overview",
        title: "01_Company_Overview",
        url: "https://drive.google.com/file/d/1QlIEuuG_wC9ubdAG5Rki3hkP9eT2giDS/preview",
      },
      {
        id: "02_Product_Deck",
        title: "02_Product_Deck",
        url: "https://drive.google.com/file/d/1tLs32fFdoeVU2crCd30xiczuML9d2RP0/preview",
      },
      {
        id: "03_Technology_IP",
        title: "03_Technology_IP",
        url: "https://drive.google.com/file/d/14GpoUwIsj4wdxho6S3vFqq5hkQTJkmQP/preview",
      },
    ],
  },
  {
    id: "02_Financial_Data",
    title: "02_Financial_Data",
    items: [
      {
        id: "01_Financial_Model",
        title: "01_Financial_Model (Excel)",
        url: "https://docs.google.com/spreadsheets/d/1QwiFAtZvJSKtjy0P0GKuIkdLaOQjhr68/preview",
      },
    ],
  },
  {
    id: "03_Company_Documents_CapTable",
    title: "03_Company_Documents_CapTable",
    items: [
      {
        id: "01_Cap_Table",
        title: "01_Cap_Table",
        url: "https://drive.google.com/file/d/13jamUrP4k7hO9MDAc4CxjIm6mTLTYyAL/preview",
      },
      {
        id: "02_Funding_History",
        title: "02_Funding_History",
        url: "https://drive.google.com/file/d/1BAIH2ZSzKwPyA4yQbZzk8bQuAuyGPQcL/preview",
      },
      {
        id: "03_Corporate_Documents",
        title: "03_Corporate_Documents",
        url: "https://drive.google.com/file/d/1yy89wCeDzmJmjSEYQKjwFpPU_tSBnyOK/preview",
      },
      {
        id: "04_Licenses",
        title: "04_Licenses",
        url: "https://drive.google.com/file/d/1H7im74erQCyIOA1bKitdeSxIYkqUPTOT/preview",
      },
    ],
  },
  {
    id: "04_Industry_Research",
    title: "04_Industry_Research",
    items: [
      {
        id: "01_Market_Research",
        title: "01_Market_Research",
        url: "https://drive.google.com/file/d/1Le68HCDth5x_-EAPgrEdtwt8U8tdO_Br/preview",
      },
      {
        id: "02_TAM_SAM_SOM",
        title: "02_TAM_SAM_SOM",
        url: "https://drive.google.com/file/d/1zrpOb74Da25wq2wrvrlU7HmtcRd8z34B/preview",
      },
      {
        id: "03_Competitor_Analysis",
        title: "03_Competitor_Analysis",
        url: "https://drive.google.com/file/d/16ptC8eZG-6uiHb4aUtmP9kBAGuOf_MNE/preview",
      },
      {
        id: "04_Market_Opportunity",
        title: "04_Market_Opportunity",
        url: "https://drive.google.com/file/d/1xOcxXL7CoUB2YrO69lOa0880SWthSTr7/preview",
      },
      {
        id: "05_Sources",
        title: "05_Sources",
        url: "https://drive.google.com/file/d/13DpHxLwml1PDgTl64VQx3Jd64fLiEVGS/preview",
      },
    ],
  },
  {
    id: "05_Data_Analytics",
    title: "05_Data_Analytics",
    items: [
      {
        id: "01_Analytics_Report",
        title: "01_Analytics_Report (Excel)",
        url: "https://docs.google.com/spreadsheets/d/1H72CQgN3DrPb8gX1H6bkRojSrQW8CAwB/preview",
      },
    ],
  },
  {
    id: "06_Founders_Management_Team",
    title: "06_Founders_Management_Team",
    items: [
      {
        id: "01_Founders",
        title: "01_Founders",
        url: "https://drive.google.com/file/d/1CIsnDbMRFwzewSqB7TeQQwdxbTm5vEs0/preview",
      },
      {
        id: "02_Organization",
        title: "02_Organization",
        url: "https://drive.google.com/file/d/1W8X7-ujXWF5uxJoYDN8bmV7YA_1ZylXj/preview",
      },
      {
        id: "03_ESOP",
        title: "03_ESOP",
        url: "https://drive.google.com/file/d/1FSqSsNAFRl-C16AXAHAmfFU9sd4y6Kox/preview",
      },
      {
        id: "04_Team_Roles",
        title: "04_Team_Roles",
        url: "https://drive.google.com/file/d/1Or6AZpEVdvXjjhEIm5NQGp7l0vOptO8X/preview",
      },
    ],
  },
];

export function findFolder(folderId: string): VdrFolder | undefined {
  return vdrData.find((f) => f.id === folderId);
}

export function findItem(
  folderId: string,
  itemId: string
): { folder: VdrFolder; item: VdrItem } | undefined {
  const folder = findFolder(folderId);
  if (!folder) return undefined;
  const item = folder.items.find((i) => i.id === itemId);
  if (!item) return undefined;
  return { folder, item };
}
