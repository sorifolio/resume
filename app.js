/** @format */

const sns = [
  { id: "behance", link: "https://www.behance.net/sorrrri", icon: "fab fa-behance fa-stack-1x fa-inverse" },
  { id: "github", link: "https://www.github.com/sorrrri", icon: "fab fa-github-alt fa-stack-1x fa-inverse" },
  { id: "pinterest", link: "https://www.pinterest.com/rgbsound", icon: "fab fa-pinterest-p fa-stack-1x fa-inverse" },
  {
    id: "youtube",
    link: "https://www.youtube.com/channel/UC6hdJ39DekitIQ8sIf5RtQg",
    icon: "fab fa-youtube fa-stack-1x fa-inverse",
  },
];

const academies = [
  {
    id: "Typescript",
    title: "Typescript",
    date: "2025.01 ~ 2024.02",
    hours: "10시간",
  },
  {
    id: "Vuejs",
    title: "Vue.js",
    date: "2024.02 ~ 2024.06",
    hours: "30시간",
  },
  {
    id: "Reactjs",
    title: "ReactJS Programming",
    date: "2020.02 ~ 2020.03",
    hours: "32시간",
  },
  {
    id: "Illustrator",
    title: "Adobe Illustrator",
    date: "2019.10 ~ 2019.12",
    hours: "30시간",
  },
  {
    id: "Nodejs",
    title: "NodeJS Programming",
    date: "2019.06 ~ 2019.07",
    hours: "32시간",
  },
  {
    id: "HTML",
    title: "HTML5 & CSS3",
    date: "2019.03 ~ 2019.04",
    hours: "30시간",
  },
  {
    id: "JAVA",
    title: "JAVA Software Engineering",
    date: "2017.03 ~ 2017.10",
    hours: "1016시간",
  },
  {
    id: "javascript",
    title: "Javascript & jQuery",
    date: "2016.03 ~ 2016.04",
    hours: "30시간",
  },
  {
    id: "actionscript",
    title: "Adobe Flash Actionscript",
    date: "2010.12 ~ 2011.01",
    hours: "60시간",
  },
  {
    id: "flash",
    title: "Adobe Flash",
    date: "2010.04 ~ 2010.05",
    hours: "30시간",
  },
  {
    id: "dreamweaver",
    title: "Adobe Dreamweaver",
    date: "2010.12 ~ 2011.01",
    hours: "30시간",
  },
];

const works = [
  {
    id: "gabiacns-moa",
    title: "Front-end & Markup",
    date: "2024.03 ~ 2025.03",
    content: "전문가 매칭 플랫폼 웹서비스 프론트엔드",
    behance: "",
    link: "http://moa.gabiacns.com",
  },
  {
    id: "gabiacns-diad",
    title: "Front-end, Web UI/UX Design & Markup",
    date: "2022.01 ~ 2025.03",
    content: "광고 키워드 트렌드 조회 및 관리용 대시보드 UI/UX 디자인 및 마크업개발",
    behance: "https://www.behance.net/gallery/152626409/Diad-Trend",
    link: "http://sorrrri.github.io/diad_trend",
  },
  {
    id: "ajou-covid-19",
    title: "Web UI/UX Design & Markup",
    date: "2020.10 ~ 2021.11",
    content: "코로나 환자 현황 및 정보조회 대시보드 UI/UX 디자인 및 마크업개발",
    behance: "https://www.behance.net/gallery/121760365/Covid-19-Dashboard",
    link: "http://sorrrri.github.io/portfolio/corona-board",
  },
  {
    id: "ajou-budon",
    title: "Responsive UI/UX Design & Markup",
    date: "2020.07 ~ 2021.10",
    content: "아주대학교 교수님 사업체 BUD.on UI/UX 디자인 및 마크업개발",
    behance: "https://www.behance.net/gallery/109560787/BUDon",
    link: "https://sorrrri.github.io/portfolio/budon_v2/",
  },
  {
    id: "ajou-mel",
    title: "Responsive UI/UX Design & Markup",
    date: "2020.06 ~ 2021.07",
    content: "BUD.on 회사 사이트 UI/UX 디자인 및 마크업개발",
    behance: "https://www.behance.net/gallery/109210431/MEL",
    link: "https://sorrrri.github.io/portfolio/mel/",
  },
  {
    id: "ajou-dqts",
    title: "Web UI/UX Design & Markup",
    date: "2020.06 ~ 2021.10",
    content: "아주대학교 의료정보학과 DQTS UI/UX 디자인 및 마크업개발",
    behance: "https://www.behance.net/gallery/109412503/DQTS",
    link: "https://sorrrri.github.io/portfolio/dqts/",
  },
  {
    id: "ajou-vass",
    title: "Web UI/UX Design & Markup",
    date: "2020.04 ~ 2021.11",
    content: "아주대학교 백신접종현황 및 능동감시조회 VASS UI/UX 디자인 및 마크업개발",
    behance: "https://www.behance.net/gallery/109413629/VASS",
    link: "https://sorrrri.github.io/portfolio/vass/",
  },
  {
    id: "ajou-apex",
    title: "Responsive UI/UX Design & Markup",
    date: "2020.03 ~ 2020.11",
    content: "아주대학교 응급의학과 APEX UI/UX 디자인 및 마크업개발",
    behance: "https://www.behance.net/gallery/108927995/APEX",
    link: "https://sorrrri.github.io/portfolio/apex/",
  },
  {
    id: "welstory",
    title: "Mobile UI/UX Design & Markup",
    date: "2019.08 ~ 2019.12",
    content: "삼성 웰스토리 모바일 오피스 UI/UX 디자인 및 마크업개발",
    behance: "https://www.behance.net/gallery/92129937/SAMSUNG-Welstory",
    link: "https://sorrrri.github.io/welstory/",
  },
  {
    id: "rsm-chatbot",
    title: "Responsive UI/UX Design & Markup",
    date: "2019.02 ~ 2019.07",
    content: "르노삼성 자동차 고객센터 챗봇 UI/UX 디자인 및 마크업개발",
    behance: "https://www.behance.net/gallery/92085323/Renault-Samsung",
    link: "https://sorrrri.github.io/rsm_chatbot/",
  },
  {
    id: "skhynix",
    title: "Web UI/UX Design & Markup",
    date: "2018.12 ~ 2019.01",
    content: "SK 하이닉스 사내 시스템 GDPR UI/UX 디자인 및 마크업개발",
    behance: "https://www.behance.net/gallery/92070663/SK-Hynix",
    link: "https://sorrrri.github.io/sk_gdpr/",
  },
  {
    id: "skcnc",
    title: "Web UI/UX Design",
    date: "2018.08 ~ 2018.12",
    content: "SK C&C 사내 시스템 TAMS UI/UX 디자인",
    behance: "https://www.behance.net/gallery/91699661/SK-C-C",
    link: "",
  },
  {
    id: "samsung-sds",
    title: "UI/UX Design",
    date: "2018.05 ~ 2018.07",
    content: "삼성 소프트웨어 라이센스 B2B 사이트 UI/UX 디자인",
    behance: "https://www.behance.net/gallery/91699461/Samsung-License-Management",
    link: "",
  },
  {
    id: "ghsoft",
    title: "UI/UX Design & Web Markup",
    date: "2017.12 ~ 2018.03",
    content: "GHSoft ISO 인증관리 솔루션 마크업개발, 제품 프로모션 사이트 제작",
    behance: "https://www.behance.net/gallery/91578205/GHSoft",
    link: "https://sorrrri.github.io/imez/",
  },
  {
    id: "tovsoft",
    title: "Web Markup",
    date: "2017.11 ~ 2017.12",
    content: "디지털 교과서 마크업개발 및 웹표준화 작업",
    behance: "",
    link: "",
  },
  {
    id: "top-intercube",
    title: "Web Design & Markup",
    date: "2016.01 ~ 2017.01",
    content: "- 탑인터큐브 온라인몰 리뉴얼\n" + "- 사이트 내 모든 배너, 이벤트페이지, 메일링 이미지 제작 및 업로드\n" + "- 썸내일, 상세페이지 이미지 제작 및 업로드",
    behance: "https://www.behance.net/gallery/91577293/TNP-Mall",
    link: "",
  },
  {
    id: "chungsa",
    title: "UI/UX Design & Web Markup",
    date: "2015.01 ~ 2015.12",
    content: "- 정부청사관리소 공식사이트 관리, 메인페이지 디자인 및 마크업개발\n" + "- 사내 업무 시스템 메인페이지 디자인 및 마크업개발",
    behance: "https://www.behance.net/gallery/91576791/_",
    link: "http://chungsa.go.kr",
  },
  {
    id: "onestop",
    title: "Web Design & Markup",
    date: "2014.08 ~ 2014.12",
    content: "원스톱웨딩 웨딩&여행사 관련 배너/상세 이미지 제작, 사이트 부분 리뉴얼",
    behance: "https://www.behance.net/gallery/91576525/Onestop-Wedding   ",
    link: "",
  },
  {
    id: "akmall",
    title: "Web Design",
    date: "2013.07 ~ 2014.07",
    content: "AKMALL 백화점몰 기획전/이벤트/메일링 이미지 제작",
    behance: "https://www.behance.net/gallery/91575811/AK-Mall",
    link: "",
  },
  {
    id: "gib",
    title: "Web Design & Markup",
    date: "2012.07 ~ 2013.06",
    content: "제너럴아이디어 상품상세/이벤트/메일링 이미지 제작, 사이트 리뉴얼",
    behance: "https://www.behance.net/gallery/91575263/general-idea",
    link: "http://generalidea.co.kr/index.html",
  },
  {
    id: "sbr",
    title: "UI/UX Design & Web Publishing",
    date: "2011.11 ~ 2012.06",
    content: "- 넥스컨트럴사 온도제어시스템 UI/UX 디자인\n" + "- 한국전력공사 KDN 전력제어시스템 UI/UX 디자인",
    behance: "",
    link: "",
  },
  {
    id: "parttime",
    title: "Web Design Part time Job",
    date: "2011.02 ~ 2011.10",
    content: "- 서울문화사 뉴스레터 및 상품 상세 이미지 보조 제작\n" + "- 정상JLS어학원 교육 컨텐츠 관리",
    behance: "",
    link: "",
  },
  {
    id: "nhn",
    title: "Content Management",
    date: "2009.11 ~ 2010.11",
    content: "- 네이버 백신 업데이트, 테스트 및 CS관리\n" + "- 네이버 책 검수, 네이버 키친,웹툰, 영화, 등의 포토샵작업\n" + "- 네이버 모바일 과련 배너제작 등등",
    behance: "",
    link: "",
  },
];

const Work = (props) => (
  <div>
    <ul>
      <li>
        <h4>{props.title}</h4>
      </li>
      <li className="date">{props.date}</li>
      <li className="content kr">{props.content}</li>
    </ul>
    <ul className="links">
      <li className="behance">
        <a href={props.behance} target="_blank">
          <span className="fa-stack fa-2x">
            <i className="fas fa-square fa-stack-2x"></i>
            <i className="fab fa-behance fa-stack-1x fa-inverse"></i>
          </span>
        </a>
      </li>
      <li className="link">
        <a href={props.link} target="_blank">
          <span className="fa-stack fa-2x">
            <i className="fas fa-square fa-stack-2x"></i>
            <i className="fas fa-external-link-alt fa-stack-1x fa-inverse"></i>
          </span>
        </a>
      </li>
    </ul>
  </div>
);

const Skills = () => (
  <section className="skills">
    <h3>skills</h3>
    <div>
      <ul className="professional">
        <li>html5</li>
        <li>css3</li>
        <li>javascript</li>
      </ul>
      <ul className="professional">
        <li>jquery</li>
        <li>react.js</li>
        <li>node.js</li>
      </ul>
      <ul className="technical">
        <li>vscode</li>
        <li>webstorm</li>
        <li>eclipse</li>
      </ul>
      <ul className="technical">
        <li>sublime</li>
        <li>photoshop</li>
        <li>illustrator</li>
      </ul>
    </div>
  </section>
);

const Main = (props) => {
  return (
    <div className="main">
      <section className="work">
        <h3>work experience</h3>
        {props.initialWorks.map((item) => (
          <Work title={item.title} date={item.date} content={item.content} behance={item.behance} link={item.link} key={item.id} />
        ))}
      </section>
      <Skills />
    </div>
  );
};

const Title = () => (
  <section className="title">
    <div className="picture">
      <img src="./images/sori.jpg" alt="" />
    </div>
    <h1 className="name">김소리</h1>
    <h4 className="role">full-stack designer</h4>
  </section>
);

const SNS = (props) => (
  <li className={props.id}>
    <a href={props.link} target="_blank">
      <span className="fa-stack fa-2x">
        <i className="fas fa-circle fa-stack-2x"></i>
        <i className={props.icon}></i>
      </span>
    </a>
  </li>
);

const Information = () => (
  <section className="information">
    <ul>
      <li>
        <i className="fas fa-envelope-open-text fa-sm"></i>
        <a href="mailto:sori.developer@gmail.com">
          <span>sori.developer@gmail.com</span>
        </a>
      </li>
      <li>
        <i className="fas fa-phone-alt fa-sm"></i>
        <span>010 9690 5021</span>
      </li>
    </ul>
  </section>
);

const Profile = () => <section className="profile kr">웹디자이너로 시작하여 퍼블리셔를 거쳐 프론트엔드로 활동하고 있는 개발자입니다.</section>;

const Education = () => (
  <section className="education">
    <h3>education</h3>
    <ul>
      <li>
        <h4 className="kr">창덕여자고등학교</h4>
      </li>
      <li className="date">2002 - 2005</li>
    </ul>
    <ul>
      <li>
        <h4 className="kr">남서울대학교</h4>
      </li>
      <li className="date">2005 - 2010</li>
    </ul>
    <ul>
      <li>
        <h4 className="kr">애리조나주립대학교 CESL</h4>
      </li>
      <li className="date">2007</li>
    </ul>
  </section>
);

const Academy = (props) => (
  <ul>
    <li>
      <h4>{props.title}</h4>
    </li>
    <li className="date">
      <span className="hours">
        <i className="far fa-clock fa-sm"></i>
        {props.hours}
      </span>
      <span>{props.date}</span>
    </li>
  </ul>
);

const Aside = (props) => {
  return (
    <aside>
      <Title />
      <section className="sns">
        <ul>
          {props.initialSNS.map((item) => (
            <SNS link={item.link} icon={item.icon} key={item.id} />
          ))}
        </ul>
      </section>
      <Information />
      <Profile />
      <Education />
      <section className="academy">
        {props.initialAcademies.map((item) => (
          <Academy title={item.title} date={item.date} hours={item.hours} key={item.id} />
        ))}
      </section>
    </aside>
  );
};

const App = () => {
  return (
    <div className="wrapper">
      <ul className="icon">
        <li>
          <ion-icon className="ico-print" name="print-outline" size="large" onClick={() => window.print()}></ion-icon>
        </li>
      </ul>
      <div className="resume">
        <Aside initialSNS={sns} initialAcademies={academies} />
        <Main initialWorks={works} />
      </div>
    </div>
  );
};

console.log(App);
ReactDOM.render(<App />, document.getElementById("root"));
