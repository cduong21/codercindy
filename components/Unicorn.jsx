const Unicorn = () => {
  return (
    <div className="container">
      <div className="main">
        <div className="header">
          <div className="title">
            <h3> UNICORN </h3>
          </div>
          <img src="unicorn.jpg"></img>
        </div>
        <div className="text">
          <p>
            I’ve always been keen of art and design but also love coding. So
            let’s coin the term unicorn for this intersection! <br />{" "}
            <span>[term adopted from Notion job posting]</span>
          </p>
        </div>
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          height: 625px;
          background-color: #112f40;
          margin-top: 150px;
        }
        .main {
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: 850px;
          margin: auto;
          flex-direction: column;
        }
        .header {
          display: flex;
          padding-top: 50px;
        }
        .title {
          margin-top: 100px;
        }
        h3 {
          font-weight: bold;
          font-size: 30px;
          line-height: 37px;
          letter-spacing: 0.25em;
          color: #ffffff;
        }
        img {
          width: 250px;
        }
        .text {
          max-width: 450px;
          font-size: 20px;
          line-height: 37px;
          text-align: justify;
          color: #ffffff;
        }
        span {
          font-size: 15px;
        }
      `}</style>
    </div>
  );
};

export default Unicorn;
