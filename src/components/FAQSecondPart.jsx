import "./FAQSecondPart.css";

function FAQSecondPart() {

 const FAQvideoContent = [
  {
    id : 1,
    h3content1 :"How Do I Download TalkEng" ,
    h3content2 : "And Get Started?",
    pcontent : "This tutorial explains how you can download TalkEng on your devices and launch the application.",
    videoLink : "https://www.youtube.com/embed/vYUG7Fhe4_M"
  },
  {
    id : 2,
    h3content1 :"How Do I sign In And Register" ,
    h3content2 : "As A Learner â€‹Or A Tutor?",
    pcontent : "This tutorial explains how you can register yourself as a learner/tutor.",
    videoLink : "https://www.youtube.com/watch?v=O29lucbHTEg&t=8s"
  },
  {
    id : 3,
    h3content1 :"How Can I Join The Guided" ,
    h3content2 : "Public Speaking?",
    pcontent : "This video explains how a learner can join the guided Public Speaking.",
    videoLink : "https://www.youtube.com/watch?v=-UyXq8PBFaM"
  },
  {
    id : 4,
    h3content1 :"How Can You Avail The First" ,
    h3content2 : "Class For Free?",
    pcontent : "This tutorial explains how you can avail the first class for free.",
    videoLink : "https://www.youtube.com/watch?v=BJs7gb8xUwY"
  },
  {
    id : 5,
    h3content1 :"How Do I Book A Class?" ,
    h3content2 : "",
    pcontent : "This video explains how a learner can book a class.",
    videoLink : "https://www.youtube.com/watch?v=UstUmoLhZ9M"
  },
  {
    id : 6,
    h3content1 :"How Do I Book A premium Class And " ,
    h3content2 : "Check The Profile Of A Tutor?",
    pcontent : "This tutorial explains how a learner can book his/her premium classes. And visit the tutor's profile for more information.",
    videoLink : "https://www.youtube.com/watch?v=9d9mfmm3Caw"
  },
  {
    id : 7,
    h3content1 :"How Do I Enter A Class?" ,
    h3content2 : "",
    pcontent : "This video explains how a learner can enter the class in due time.",
    videoLink : "https://www.youtube.com/watch?v=R1d_rSOPsl0"
  },
  {
    id : 8,
    h3content1 :"How Do I Cancel A Class?" ,
    h3content2 : "",
    pcontent : "This video explains how a learner can cancel an already booked class.",
    videoLink : "https://www.youtube.com/watch?v=Uj6EqB5HKdE"
  },
  {
    id : 9,
    h3content1 :"How Can I Choose A Plan?" ,
    h3content2 : "",
    pcontent : "Tâ€‹his tutorial explains how a learner can choose a plan and pay for it. There are 5 kinds of plans - 3 days, 7 days, 1 month, 3 months, 6 months.",
    videoLink : "https://www.youtube.com/watch?v=F0UnyZOqmjs"
  },
  {
    id : 10,
    h3content1 :"How Can I Follow And Add A" ,
    h3content2 : "Tutor To Favourites?",
    pcontent : "This video explains how a learner can go to the tutor's profile and follow & add them to favourites.",
    videoLink : "https://www.youtube.com/watch?v=0y90NNyuxqo"
  },
  {
    id : 11,
    h3content1 :"How Can I Chat With The" ,
    h3content2 : "Tutors?",
    pcontent : "This video explains how you can chat with the tutors if any confusion arises.",
    videoLink : "https://www.youtube.com/watch?v=81TlD2HEHaQ"
  },
  {
    id : 12,
    h3content1 :"How Do I Switch To Dark/Light" ,
    h3content2 : "Mode?",
    pcontent : "This tutorial explains how a user can convert to dark and light mode.",
    videoLink : "https://www.youtube.com/watch?v=D7AcZdQN7gQ"
  },
 ];

 // Function to convert YouTube watch URLs to embed URLs
 const getEmbedUrl = (url) => {
   if (url.includes('embed/')) {
     return url; // Already an embed URL
   }
   // Convert watch URL to embed URL
   const videoId = url.split('v=')[1]?.split('&')[0] || url.split('/').pop();
   return `https://www.youtube.com/embed/${videoId}`;
 };

  return (
    <div className="faq-section">
      <div className="container">
        <div className="row">
          {FAQvideoContent.map((item) => (
            <div key={item.id} className="col-lg-6 col-sm-12 faq-card">
              <div className="faq-content">
                <div className="faq-header">
                  <h3>{item.h3content1}</h3>
                  {item.h3content2 && <h3>{item.h3content2}</h3>}
                </div>
                <p className="faq-description">
                  {item.pcontent}
                </p>
                <div className="video-container">
                  <iframe
                    className="video-iframe"
                    src={getEmbedUrl(item.videoLink)}
                    title={`${item.h3content1} ${item.h3content2}`.trim()}
                    allowFullScreen
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQSecondPart;