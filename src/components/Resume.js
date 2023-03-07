function Resume(props) {
  return (
    <>
      <section className="bg-info">
        <nav className="navbar bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand text-white" href="#">
              Resume
            </a>
          </div>
        </nav>
        <div className="container mt-5 ">
          <div className="row">
            <div className="col-xl-12 bg-light">
              <h3 className="mt-5">Interests</h3>
              <ul className="list-group">
                <li className="list-group-item">{props.interests[0]}</li>
                <li className="list-group-item">{props.interests[1]}</li>
                <li className="list-group-item">{props.interests[2]}</li>
                <li className="list-group-item">{props.interests[3]}</li>
              </ul>
              <h3 className="mt-5">Education</h3>
              <ul className="list-group">
                <li className="list-group-item">{props.education[0]}</li>
                <li className="list-group-item">{props.education[1]}</li>
                <li className="list-group-item">{props.education[2]}</li>
              </ul>
              <h3 className="mt-5">Skills</h3>
              <ul className="list-group">
                <li className="list-group-item">{props.skills}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Resume;
