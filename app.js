const App = () => {
    return (
        <div className="resume">
            <aside>
                <section className="title">
                    <div className="picture"></div>
                    <h1 className="name">김소리</h1>
                    <p className="role">web developer</p>
                </section>
                <section className="profile">
                    <p>

                    </p>
                </section>
                <section className="information">
                    <ul>
                        <li>
                            <small>name</small>
                            <h5 className="kr">김소리</h5>
                        </li>
                        <li>
                            <small>role</small>
                            <h5 className="kr">웹퍼블리셔, 웹디자이너</h5>
                        </li>
                        <li>
                            <small>e-mail</small>
                            <h5>sori.developer@gmail.com</h5>
                        </li>
                        <li>
                            <small>phone</small>
                            <h5>010 9690 5021</h5>
                        </li>
                    </ul>
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
                        <li className="career"></li>
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