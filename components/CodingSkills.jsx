const CodingSkills = () => {
    return (
      <div className="container">
        <div className="main">
            <div className="title">PROGRAMMING SKILLS</div>
        </div>

        <div className="description">
            I enjoy learning about new technologies and langauges! Here is my working toolbelt of skills which I'm always striving to grow or dive deeper into.
        </div>

        <div className="code-top">
            <div className="circles">
                <div className="green-circle"></div>
                <div className="yellow-circle"></div>
                <div className="red-circle"></div>
            </div>
        </div>
        <div className="code-block">
            <div className="console-content">
                <ul>
                    <li>&lt;<span className="div">div className="coding-skills"</span>&gt;</li>
                        <ul>
                            <li>&lt;<span className="div">ul</span>&gt;</li>
                                <ul>
                                    <div className="no-space">
                                        <li>&lt;<span className="div">li</span>&gt;</li> 
                                        <li>Python</li>
                                        <li>&lt;<span className="div">/li</span>&gt;</li>
                                    </div>
                                    <div className="no-space">
                                        <li>&lt;<span className="div">li</span>&gt;</li> 
                                        <li>Javascript</li>
                                        <li>&lt;<span className="div">/li</span>&gt;</li>
                                    </div>
                                    <div className="no-space">
                                        <li>&lt;<span className="div">li</span>&gt;</li> 
                                        <li>Java</li>
                                        <li>&lt;<span className="div">/li</span>&gt;</li>
                                    </div>
                                    <div className="no-space">
                                        <li>&lt;<span className="div">li</span>&gt;</li> 
                                        <li>C++</li>
                                        <li>&lt;<span className="div">/li</span>&gt;</li>
                                    </div>
                                    <div className="no-space">
                                        <li>&lt;<span className="div">li</span>&gt;</li> 
                                        <li>Docker</li>
                                        <li>&lt;<span className="div">/li</span>&gt;</li>
                                    </div>
                                    <div className="no-space">
                                        <li>&lt;<span className="div">li</span>&gt;</li> 
                                        <li>React, HTML, CSS</li>
                                        <li>&lt;<span className="div">/li</span>&gt;</li>
                                    </div>
                                    <div className="no-space">
                                        <li>&lt;<span className="div">li</span>&gt;</li> 
                                        <li>Git</li>
                                        <li>&lt;<span className="div">/li</span>&gt;</li>
                                    </div>
                                </ul>
                            <li>&lt;<span className="div">/ul</span>&gt;</li>
                        </ul>
                    <li>&lt;<span className="div">/div</span>&gt;</li>
                </ul>
            </div>
        </div>


        <style jsx>{`
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            height: 625px;
            background-color: #455D6B;
            margin-top: 150px;
          }
          .title {
            font-weight: bold;
            font-size: 20px;
            line-height: 37px;
            letter-spacing: 0.25em;
            margin-bottom: 20px;
            margin-top: 60px;
            color: #FFFFFF;
          }
          .code-top {
            background-color: #C4C4C4;
            width: 400px;
            height: 30px;
            border-radius: 20px 20px 0px 0px;
            display: flex;
            justify-content: flex-end;
          }
          .code-block {
            background-color: #1A1A1A;
            width: 400px;
            border-radius: 0px 0px 20px 20px;
            display: flex; 
          }
          .circles {
            display: flex;
            justify-content: flex-end;
            padding-right: 20px;
            padding-top: 5px
          }
          .green-circle {
            background-color: #086016;
            width: 17px;
            height: 17px;
            border-radius: 10px 10px 10px 10px;
            margin-right: 10px;
          }
          .yellow-circle {
            background-color: #FFF504;
            width: 17px;
            height: 17px;
            border-radius: 10px 10px 10px 10px;
            margin-right: 10px;
          }
          .red-circle {
            background-color: #FF0404;
            width: 17px;
            height: 17px;
            border-radius: 10px 10px 10px 10px;
          }
          ul {
            list-style-type: none;
            padding-left: 25px;
          }
          .no-space {
            display: flex;
            flex-direction: row;
          }
          li {
            color: #FFFFFF;
          }
          &lt {
            color:#B32424; 
          }
          .console-content {
            letter-spacing: 1.5px;
          }
          .description {
            padding-bottom: 20px;
            color: #FFFFFF;
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 500px;
            text-align: center;
          }
        `}</style>
      </div>
    );
  };
  
  export default CodingSkills;
  