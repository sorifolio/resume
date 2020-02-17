const works = [
    {
        id: "welstory",
        title: "삼성 웰스토리",
        date: "2019.08 ~ 2019.12",
        content: "삼성 웰스토리 모바일 오피스 UI 디자인 및 퍼블리싱",
        behance: "https://www.behance.net/gallery/92129937/SAMSUNG-Welstory",
        link: "https://coralcat.github.io/welstory/"
    },
    {
        id: "rsm-chatbot",
        title: "르노삼성 자동차",
        date: "2019.02 ~ 2019.07",
        content: "고객센터 챗봇 UI 디자인 및 퍼블리싱",
        behance: "",
        link: ""
    },
    {
        id: "skhynix",
        title: "SK 하이닉스",
        date: "2018.12 ~ 2019.01",
        content: "사내 시스템 GDPR UI 디자인 및 퍼블리싱",
        behance: "",
        link: ""
    },
    {
        id: "skcnc",
        title: "SK C&C",
        date: "2018.08 ~ 2018.12",
        content: "사내 시스템 TAMS UI 디자인",
        behance: "",
        link: ""
    },
    {
        id: "samsung-sds",
        title: "삼성 SDS",
        date: "2018.05 ~ 2018.07",
        content: "소프트웨어 라이센스 B2B 사이트 UI 디자인",
        behance: "",
        link: ""
    },
    {
        id: "ghsoft",
        title: "GHSoft",
        date: "2017.12 ~ 2018.03",
        content: "사내 개발중인 프로그램 퍼블리싱, 프로모션 사이트 제작",
        behance: "",
        link: ""
    },
    {
        id: "tovsoft",
        title: "토브소프트",
        date: "2017.11 ~ 2017.12",
        content: "디지털 교과서 퍼블리싱 및 웹표준화 작업",
        behance: "",
        link: ""
    },
    {
        id: "top-intercube",
        title: "탑인터큐브 온라인몰팀",
        date: "2016.01 ~ 2017.01",
        content: "- 정부청사관리소 공식사이트 관리, 메인페이지 디자인 및 퍼블리싱\n" +
            "- 사내 업무 시스템 메인페이지 디자인 및 퍼블리싱",
        behance: "",
        link: ""
    },
    {
        id: "chungsa",
        title: "정부서울청사 청사유지보수사업단",
        date: "2015.01 ~ 2015.12",
        content: "- 정부청사관리소 공식사이트 관리, 메인페이지 디자인 및 퍼블리싱\n" +
            "- 사내 업무 시스템 메인페이지 디자인 및 퍼블리싱",
        behance: "",
        link: ""
    },
    {
        id: "onestop",
        title: "원스톱웨딩 웹디자인업무 총괄",
        date: "2014.08 ~ 2014.12",
        content: "웨딩&여행사 관련 배너/상세 이미지 제작, 사이트 부분 리뉴얼",
        behance: "",
        link: ""
    },
    {
        id: "akmall",
        title: "AKMALL 백화점몰 파트",
        date: "2013.07 ~ 2014.07",
        content: "백화점몰 기획전/이벤트/메일링 이미지 제작",
        behance: "",
        link: ""
    },
    {
        id: "gib",
        title: "제너럴아이디어 웹디자인업무 총괄",
        date: "2012.07 ~ 2013.06",
        content: "상품상세/이벤트/메일링 이미지 제작, 사이트 리뉴얼",
        behance: "",
        link: ""
    },
    {
        id: "sbr",
        title: "㈜에스비알",
        date: "2011.11 ~ 2012.06",
        content: "- 넥스컨트럴사 온도제어시스템 UI 디자인\n" +
            "- 한국전력공사 KDN 전력제어시스템 UI 디자인",
        behance: "",
        link: ""
    },
    {
        id: "parttime",
        title: "웹디자인 업무 아르바이트",
        date: "2011.02 ~ 2011.10",
        content: "- 서울문화사 뉴스레터 및 상품 상세 이미지 보조 제작\n" +
            "- 정상JLS어학원 교육 컨텐츠 관리",
        behance: "",
        link: ""
    },
    {
        id: "nhn",
        title: "NHN",
        date: "2009.11 ~ 2010.11",
        content: "- 네이버 백신 업데이트, 테스트 및 CS관리\n" +
            "- 네이버 책 검수, 네이버 키친,웹툰, 영화, 등의 포토샵작업\n" +
            "- 네이버 모바일 과련 배너제작 등등",
        behance: "",
        link: ""
    },
];

const Work = (props) => (
    <div>
        <ul>
            <li><h4 className="kr">{props.title}</h4></li>
            <li className="date">{props.date}</li>
            <li className="content">{props.content}</li>
        </ul>
        <ul className="links">
            <li className="behance"><a href="https://www.behance.net/gallery/92129937/SAMSUNG-Welstory" target="_blank"><i
                className="fab fa-behance"></i></a></li>
            <li className="link"><a href="https://coralcat.github.io/welstory/" target="_blank"><i
                className="fas fa-external-link-alt"></i></a></li>
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
                <li>jquery</li>
                <li>react.js</li>
                <li>node.js</li>
            </ul>
            <ul className="technical">
                <li>vscode</li>
                <li>webstorm</li>
                <li>eclipse</li>
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
                {props.initialWorks.map(item => <Work title={item.title} date={item.date} content={item.content}
                                                      key={item.id}/>)}
            </section>
            <Skills/>
        </div>
    )
};


const Title = () => (
    <section className="title">
        <div className="picture"></div>
        <h1 className="name">김소리</h1>
        <h4 className="role">web developer</h4>
    </section>
);

const Information = () => {
    return (
        <section className="information">
            <ul>
                <li>
                    <i className="fas fa-envelope-open-text fa-sm"></i>
                    <a href="mailto:sori.developer@gmail.com"><span>sori.developer@gmail.com</span></a>
                </li>
                <li>
                    <i className="fas fa-phone-alt fa-sm"></i>
                    <span>010 9690 5021</span>
                </li>
            </ul>
        </section>
    )
};
const Profile = () => (
    <section className="profile kr">
        손이 빠른 편이며, 정보검색을 통하여 문제 해결이나 오픈소스를 유용하게 활용하는 편입니다.
        배움에 대한 열망이 강하여 여가시간을 허투루 보내지 않고, 끊임없이 공부하여 새로 나오는 기술들에 뒤쳐지지 않도록 노력하는 편입니다.
    </section>
);

const Education = () => (
    <section className="education">
        <h3>education</h3>
        <ul>
            <li><h4 className="kr">창덕여자고등학교</h4></li>
            <li className="date">2002 - 2005</li>
        </ul>
    </section>
);

const Aside = () => {
    return (
        <aside>
            <Title/>
            <Information/>
            <Profile/>
            <Education/>
        </aside>
    )
};


const App = () => {
    return (
        <div className="resume">
            <Aside/>
            <Main initialWorks={works}/>
        </div>
    );
};


console.log(App);
ReactDOM.render(<App/>, document.getElementById("root"));