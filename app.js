const works = [
    {
        id: "welstory",
        title: "삼성 웰스토리",
        date: "2019.08 ~ 2019.12",
        content: "삼성 웰스토리 모바일 오피스 UI 디자인 및 퍼블리싱",
        behance: "",
        link: ""
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
]

const Work = (props) => (
    <div>
        <ul>
            <li><h4 className="kr">{props.title}</h4></li>
            <li className="date">{props.date}</li>
            <li className="content">{props.content}</li>
        </ul>
        <ul>
            <li className="behance"><a href="{}"><i className="fab fa-behance"></i></a></li>
            <li className="link"></li>
        </ul>
    </div>
)

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
)

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
}


const Title = () => (
    <section className="title">
        <div className="picture"></div>
        <h1 className="name kr">김소리</h1>
        <h4 className="role">web developer</h4>
    </section>
)

const Information = () => {
    return (
        <section className="information">
            <ul>
                <li>
                    <i className="fas fa-envelope-open-text fa-sm"></i>
                    <span>sori.developer@gmail.com</span>
                </li>
                <li>
                    <i className="fas fa-phone-alt fa-sm"></i>
                    <span>010 9690 5021</span>
                </li>
            </ul>
        </section>
    )
}
const Profile = () => (
    <section className="profile kr">
        손이 빠른 편이며, 정보검색을 통하여 문제 해결이나 오픈소스를 유용하게 활용하는 편입니다.
        배움에 대한 열망이 강하여 여가시간을 허투루 보내지 않고, 끊임없이 공부하여 새로 나오는 기술들에 뒤쳐지지 않도록 노력하는 편입니다.
    </section>
)

const Education = () => (
    <section className="education">
        <h3>education</h3>
        <ul>
            <li><h4 className="kr">창덕여자고등학교</h4></li>
            <li className="date">2002 - 2005</li>
        </ul>
    </section>
)

const Aside = () => {
    return (
        <aside>
            <Title/>
            <Information/>
            <Profile/>
            <Education/>
        </aside>
    )
}


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