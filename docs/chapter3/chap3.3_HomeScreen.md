---
id: Home_Screen
title: 3.3. होम स्क्रीन
sidebar_label: होम स्क्रीन
---
import useBaseUrl from '@docusaurus/useBaseUrl';
export const Clear = ({children}) => (
  <div
    style={{ 
         display: 'table',
    }}>
    {children}
  </div>
);

export const Tabheader = ({children, color}) => (
  <th
    style={{
      backgroundColor: color,
      borderRight: '0.5rem solid white',
      height: '1.5rem',
      width: '2rem',
    }}>
    *{children}
  </th>
);

export const Tabcell = ({children, color}) => (
  <td
    style={{
      backgroundColor: color,
      borderRight: '0.5rem solid white',
      height: '100px',
    }}>
    {children}
  </td>
);


## 3.3.1. एक नजर (ओवरव्यू)
* लॉग-इन करने के बाद यूज़र के सामने सबसे पहले होम स्क्रीन आता है। 
* एप्लीकेशन की अलग-अलग फंक्शनलिटी तक सर्क्युलर मॉड्यूल के जरिए पहुँचा जा सकता है।
* इनके आइकॉन को कंज़्यूमर, पैकेज, स्कीम आदि हेडिंग के अंतर्गत रखा गया है।नीचे दिया गया चित्र देखें


<figure><br clear="right"/>
<img align="left" src={useBaseUrl("img/scrnshts/3.3_1_HomeScreen.png")} alt="Home Screen" width="45%"/>
<Clear>

1. <u>अधिसूचना आइकन</u> (घंटी के आकार का आइकन) <a href='./Home_Screen#333-सूचनाओं-के-नोटिफिकेशन्स-आइकॉन'> 3.3.3 अनुभाग </a> में समझाया गया है 
2. <u>मुख्य मेनू</u> (तीन क्षैतिज रेखाएं) <a href="../chapter3/Main_Menu"> अनुभाग 3.4 </a> में समझाया गया है
3. <u>मॉड्यूल आइकन </u> विभिन्न एप्लिकेशन कार्यात्मकताओं का उपयोग करने के लिए; शीर्षकों को उपभोक्ता, पैकेज और योजना आदि के अंतर्गत वर्गीकृत किया जाता है।

</Clear>
<br clear="both"/></figure>

<!-- ![Home Screen](./assets/3.3_1_HomeScreen.png)  -->


##### चित्र फील्ड एजेंट ऐप के सेक्शन का हैडिंग
![FIELD AGENT APP SECTION HEADINGS](./assets/3.5_AppSecHeadings.svg)

## 3.3.2. पॉप-अप सूचनाएँ (नोटिफिकेशन्स)
**फंक्शनलिटी**

* लॉग-इन करने पर यूज़र को एक या दो पॉप-अप अपने आप दिखाई दे सकते हैं।
* इन पॉप-अप में यूज़र का ध्यान बकाया कार्यों की ओर दिलाया जाता है।
* तत्काल महत्व के मामलों पर भी सूचनाएँ भेजी जा सकती हैं, जैसे कोरोना वाइरस से बचाव के लिए जरूरी सतर्कता।

**पेज के डिटेल** 

मुख्य-मुख्य पॉप-अप सूचनाएँ नीचे बताई गई हैं –

<table>
    <tr>
        <Tabheader color="#A9CCE3 ">प्लांट मेंटेनेंस रिमाइंडर</Tabheader>
        <Tabheader color="#A9CCE3">जनरेशन एरर</Tabheader>
        <Tabheader color="#A9CCE3">खपत डेटा अनुस्मारक</Tabheader>
        <Tabheader color="#A9CCE3">जनरेशन डेटा रिमाइंडर</Tabheader>
    </tr>
    <tr>
        <Tabcell color="#AED6F1">विभिन्न संयंत्रों में तकनीकी सर्विसिंग मुद्दों पर चिंता</Tabcell>
        <Tabcell color="#AED6F1">उपयोगकर्ताओं को सौर पीढ़ी में विसंगतियों के लिए सचेत करें</Tabcell>
        <Tabcell color="#AED6F1">अपूर्ण उपभोग डेटा लॉगिंग पर एक उपयोगकर्ता को सूचित करता है</Tabcell>
        <Tabcell color="#AED6F1">अपूर्ण पीढ़ी डेटा लॉगिंग पर एक उपयोगकर्ता को सूचित करता है</Tabcell>
    </tr>
</table>


<figure><br clear="right"/>
<img align="left" src={useBaseUrl("img/scrnshts/3.3_2_PlantMaintenance.png")} alt="Home Screen" width="45%"/>
<Clear>

***संयंत्र रखरखाव अनुस्मारक***
1. <u> रखरखाव वस्तुओं की सूची </u> ध्यान देने की जरूरत है कि विभिन्न सेवा मुद्दों की गणना करता है
2. <u> संयंत्र की सूची </u> जिसमें विशेष सेवा की आवश्यकता होती है
3. <u> पॉप-अप को बंद करने के लिए </u> ok टैप करें

</Clear>
<br clear="both"/></figure>

<figure><br clear="right"/>
<img align="left" src={useBaseUrl("img/scrnshts/3.3_3_GenerationError.png")} alt="Home Screen" width="45%"/>
<Clear>

*** जनरेशन एरर ***
1. <u> प्लांट की सूची </u> विशिष्ट सौर सरणियों / MPPT को बढ़ाता है जो विभिन्न मिनीग्रिड्स में अविकसित हैं
2. <u> पॉप-अप को बंद करने के लिए </u> ok टैप करें

</Clear>
<br clear="both"/></figure>

<figure><br clear="right"/>
<img align="left" src={useBaseUrl("img/scrnshts/3.3_4_GenerationDataReminder.png")} alt="Home Screen" width="45%"/>
<Clear>

*** जनरेशन डेटा अनुस्मारक ***
1. <u> प्लांट और डेट्स की सूची </u> जिसके लिए उत्पादन डेटा गायब है
2. <u> पॉप-अप को बंद करने के लिए </u> ok टैप करें

</Clear>
<br clear="both"/></figure>

<figure><br clear="right"/>
<img align="left" src={useBaseUrl("img/scrnshts/3.3_5_ConsumptionDataReminder.png")} alt="Home Screen" width="45%"/>
<Clear>

*** खपत डेटा अनुस्मारक ***
1. <u> संयंत्र और तारीखों की सूची </u> जिसके लिए प्रेषण डेटा गायब है
2. <u> पॉप-अप को बंद करने के लिए </u> ok टैप करें

</Clear>
<br clear="both"/></figure>

<!-- ![Plant Maintenance Reminder](./assets/3.6_PlantMaintenanceRemind.png)

![Generation Error](./assets/3.7_GenError.png)

![Generation Data Reminder](./assets/3.8_GenDataRemind.png) 

![Consumption Data Reminder](./assets/3.9_ConsDataReminder.png) -->

## 3.3.3. सूचनाओं के (नोटिफिकेशन्स) आइकॉन
**फंक्शनलिटी**
* यह दिखाता है कि ग्राहकों के कितने सेवा-अनुरोध और मीटर रिलीज़ करने के कितने अनुरोध अभी पूरे नहीं हुए (एक्टिव) हैं।
* टैप करने पर सभी अनुरोध की सूची मिल जाती है।
* ज्यादातर पेज पर यह आइकॉन रखा गया है।

**पेज के डिटेल**


<figure><br clear="right"/>
<img align="left" src={useBaseUrl("img/scrnshts/3.3_6_NotificationIcon.png")} alt="Home Screen" width="45%"/>
<Clear>

1. <u> अधिसूचना चिह्न: </u> लंबित अनुरोधों की कुल संख्या दर्शाता है; आइकन को टैप करने से निम्नलिखित विकल्प प्रस्तुत होते हैं
2. <u> ग्राहक सेवा अनुरोध </u> टैप किए जाने पर सेवा अनुरोध अनुभाग में अनुप्रेषित (<a href='./Consumers#357-उपभोक्ता-सेवा'>Section 3.5.7</a>)
3. <u> मीटर रिलीज़ अनुरोध </u> अप्रयुक्त मीटर सेक्शन पर अनुप्रेषित करता है जब टैप किया जाता है (<a href='./Meter#383-रिलीज़-न-किए-गए-मीटर'>Section 3.8.3</a>)

</Clear>
<br clear="both"/></figure>

<!-- ![Page Details](./assets/3.10_PageDetails.png) -->

