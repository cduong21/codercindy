const Introduction = () => {
  return (
    <div className="container">
      <div className="name">
        <h1>Cindy Duong</h1>
      </div>
      <div className="main">
        <img src="intro_pic.jpg"></img>
        <div className="text">
          <div className="main-text">
            <h2>
              Hey there, I'm <span>Cindy Duong.</span>
            </h2>
          </div>
          <div>
            <p>
              I’m a senior at Claremont McKenna College. I enjoy leveraging code
              + design to build human-centric technology. The endless frontier
              of knowledge in the tech space excites me; alt: “i love to learn!”
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .name {
          margin-left: 50px;
          padding-top: 20px;
        }
        img {
          max-width: 250px;
          margin-right: 50px;
        }
        .main {
          display: flex;
          margin: auto;
          max-width: 850px;
          justify-content: center;
          align-items: center;
          margin-top: 90px;
        }
        h2 {
            font-size: 35px;
            line-height: 40px;
        }
        p {
            line-height: 32px;
        }
        span {
            font-style: bold;
            color: #369DCA;
        }
      `}</style>
    </div>
  );
};

export default Introduction;
