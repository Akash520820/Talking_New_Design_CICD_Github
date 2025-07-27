import "bootstrap/dist/css/bootstrap.min.css";
import "./FourthContent.css";

function FourthContent() {
  const CardContent2 = [
    {
      id: 1,
      imageurl:
        "https://talkengglobal.com/assets/images/spoken_english_and_personality_development_course.jpg",
      coursename: "Spoken English and Personality Development Program",
      coursedescription:
        "Designed for best value, this combo pack is specially crafted for you. ENROLL NOW! for the best value",
      raiting: "4.0",
    },
    {
      id: 2,
      imageurl:
        "https://talkengglobal.com/assets/images/English%20course%20for%20class%201%20and%202.webp",
      coursename: "English Mastery Program",
      coursedescription:
        "We are excited to introduce you to TalkEng's English Mastery Program, specially designed for students in...",
      raiting: "4.2",
    },
    {
      id: 3,
      imageurl:
        "https://talkengglobal.com/assets/images/English%20course%20for%20class%203,4%20and%205.webp",
      coursename: "English Enrichment Program",
      coursedescription:
        "The English Enrichment Program for classes 3-5 is a comprehensive language course aimed at...",
      raiting: "4.3",
    },
    {
      id: 4,
      imageurl:
        "https://talkengglobal.com/assets/images/English%20course%20for%20class%206,7%20and%208.webp",
      coursename: "English for Academic Success",
      coursedescription:
        "In this curriculum students from 6 to 8 to a rigorous curriculum, students will strengthen their reading...",
      raiting: "4.5",
    },
  ];

  return (
    <>
      <div className="container text-center">
        <h2 className="h21">
          <span className="coral">Special</span>{" "}
          <span className="blue">Courses</span>{" "}
          <span className="dark">To Meet Your</span>
        </h2>
        <h2 className="h21">
          <span className="dark">Specific</span>{" "}
          <span className="coral">Learning Needs </span>
        </h2>
        <h2 className="h21">
          <span className="coral2">SPECIAL COURSES</span>
        </h2>
      </div>
      <div className="container">
        <div className="row">
          {CardContent2.map((item) => (
            <div key={item.id} className="col-md-4 col-lg-3 mb-4">
              <div className="card">
                <img
                  src={item.imageurl}
                  className="card-img-top"
                  alt={item.coursename}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.coursename}</h5>
                  <p className="card-text">{item.coursedescription}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="badge bg-warning">⭐ {item.raiting}</span>
                    <a href="#" className="btn btn-primary">
                      Enroll Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div class="text-center">
          <button className="btn btn2 ">View All Courses</button>
        </div>
      </div>
    </>
  );
}

export default FourthContent;
