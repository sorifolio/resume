const App = () => {
    return (
        <div className="resume">
            <aside>
                <section className="title">
                    <div className="picture"></div>
                    <h1 className="name kr">김소리</h1>
                    <h4 className="role">web developer</h4>
                </section>
                <section className="information">
                    <ul>
                        <li>
                            <ion-icon name="mail"></ion-icon>
                            <span>sori.developer@gmail.com</span>
                        </li>
                        <li>
                            <ion-icon name="call"></ion-icon>
                            <span>010 9690 5021</span>
                        </li>
                    </ul>
                </section>
                <section className="profile kr">
                    손이 빠른 편이며, 정보검색을 통하여 문제 해결이나 오픈소스를 유용하게 활용하는 편입니다.
                    배움에 대한 열망이 강하여 여가시간을 허투루 보내지 않고, 끊임없이 공부하여 새로 나오는 기술들에 뒤쳐지지 않도록 노력하는 편입니다.
                </section>
                <section className="education">
                    <h3>education</h3>
                    <ul>
                        <li><h4 className="kr">창덕여자고등학교</h4></li>
                        <li className="date">2002 - 2005</li>
                    </ul>
                </section>
            </aside>
            <div className="main">
                <section className="work">
                    <h3>work experience</h3>
                    <ul>
                        <li><h4 className="kr">삼성 웰스토리</h4></li>
                        <li className="date">2019.08 - 2019.12</li>
                        <li className="career">삼성 웰스토리 모바일 오피스 UI 디자인 및 퍼블리싱</li>
                    </ul>
                </section>
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
            </div>
        </div>
    );
};


console.log(App);
ReactDOM.render(<App/>, document.getElementById("root"));