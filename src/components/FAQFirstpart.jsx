import React, { useState } from 'react';
import './FAQFirstpart.css';

const FAQFirstpart = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "I am having trouble signing in/creating account(In App), what should I do?",
      answer: (
        <>
          You can do a few things if you're having trouble signing in or creating an account in our app. First, make sure you're using the correct email address and password. If you've forgotten your password, you can click Forgot Password on the sign-in page to reset it. If you're still having trouble, please contact our customer support team at{' '}
          <a href="mailto:support@talkengglobal.com" className="faq-firstpart-support-link">
            support@talkengglobal.com
          </a>{' '}
          or call/whatsapp:{' '}
          <span className="faq-firstpart-phone-number">+91-70852-38085</span> and we'll be happy to help!
        </>
      )
    },
    {
      question: "What is the guarantee I will become fluent?",
      answer: "There is no guarantee that you will become fluent in spoken English after taking a class or course. However, taking a class or course can give you the opportunity to practice speaking English and improve your skills. There are many different classes and courses available, so it is important to choose one that is right for you. Some people find an intensive 6-month course works best for them, while others may prefer a monthly series of 20 minutes classes."
    },
    {
      question: "How many classes can a learner attend in a single day?",
      answer: "Learners can attend as many classes as they want in a single day. As a learner, you have the full freedom to attend many classes you want. There is no minimum or maximum limit per day. If you are really keen on learning spoken English, then we recommend that you take every opportunity that comes your way. Attend as many classes per day as possible to ensure that your learning potential reaches its highest potential!"
    },
    {
      question: "How long would it take me to become fluent in english?",
      answer: "How long it would take you to become fluent in English depends on many factors, such as your current level of English proficiency, how much time you're willing to dedicate to studying, and which learning method you prefer. However, with dedication and a bit of hard work, most people can become fluent within a year or two. In fact, some learners have reported becoming fluent within just three months!"
    },
    {
      question: "Can I become a tutor at TalkEng after becoming fluent in english?",
      answer: "Yes! You can become a tutor at TalkEng after becoming fluent in English. We offer a variety of courses that can help you reach fluency, including conversation classes and special courses. Plus, our tutors are all native speakers who are passionate about helping others learn the language."
    },
    {
      question: "What are the class timings?",
      answer: "Class timings are fully flexible, they could be mornings, afternoons, evenings, or weekends. They also have weekend classes. The classes last for 20 minutes each. Students can take as many as they want and complete the course when it suits them best."
    },
    {
      question: "How long are each of the classes?",
      answer: "Each class is for 20 mins but may be extended by the tutor. A Special course will last for 1 hour."
    },
    {
      question: "Where is the headquarter of TalkEng located?",
      answer: "TalkEng headquarter is based in Agartala."
    },
    {
      question: "Is there a curriculum for the classes?",
      answer: "Yes, there is a curriculum for the classes. It is important to learn spoken English so that you can improve your communication skills and be able to find a job in today's competitive market."
    },
    {
      question: "Can I use TalkEng from anywhere in the world?",
      answer: "TalkEng is an online spoken English class that you can take from anywhere in the world. You can study with a tutor. TalkEng is a great option for people who want to improve their spoken English skills for work or travel."
    },
    {
      question: "What is this app about?",
      answer: (
        <>
          TalkEng is a comprehensive online platform designed to help you improve your spoken English skills. Our app connects learners with experienced tutors for personalized 20-minute classes that can be taken from anywhere in the world. Whether you're looking to enhance your communication skills for work, travel, or personal growth, TalkEng provides flexible scheduling, structured curriculum, and quality instruction to help you achieve fluency in English.
        </>
      )
    },
    {
      question: "How to get a discount on the plans?",
      answer: (
        <>
          For information about current discounts and promotional offers on our plans, please contact our support team at{' '}
          <a href="mailto:support@talkengglobal.com" className="faq-firstpart-support-link">
            support@talkengglobal.com
          </a>{' '}
          or call/whatsapp:{' '}
          <span className="faq-firstpart-phone-number">+91-70852-38085</span>. Our team will be happy to inform you about any available discounts and help you choose the best plan for your learning needs.
        </>
      )
    },
    {
      question: "How is the quality of the classes assured?",
      answer: "TalkEng ensures high-quality classes through several measures: our tutors are carefully selected native speakers with teaching expertise, we maintain a structured curriculum that covers all aspects of spoken English, each class follows proven teaching methodologies, and we regularly collect feedback from students to continuously improve our services. Additionally, our flexible 20-minute class format is designed for optimal learning retention and engagement."
    },
    {
      question: "How much does it cost to join the guided Public Speaking?",
      answer: "The cost of joining the guided Public Speaking is ₹0.00. That's right, it's free! We believe that everyone should have access to communication skills training, so we offer our services at no cost. You can sign up for as many or as few sessions as you like. We hope you take advantage of this great opportunity! Public Speaking are an excellent way to learn and improve your communication skills in a relaxed environment with other learners."
    },
    {
      question: "Can I use TalkEng on multiple devices using the same account?",
      answer: "You can use TalkEng on multiple devices by signing in with the same account on each device. This allows you to keep your communication skills sharp whether you're at home or on the go. Plus, you can pick up right where you left off on any device. To sign out of an app and stop using it on that device, open the app menu and choose Sign Out. To delete an app from a device, search for it in your phone's app store and then tap Uninstall. Note that this will not remove it from all of your other devices."
    },
    {
      question: "How long does it usually takes to get a response on a tutor's application?",
      answer: "We appreciate your interest in becoming a TalkEng tutor! It usually takes us 3-5 business days to review applications, but under extreme circumstances, it can take up to 7-10 business days. Once we have made a decision, we will reach out to you via the Phone call or email address you provided. Thank you for your patience!"
    },
    {
      question: "What benefit will I get as a tutor at TalkEng?",
      answer: "As a tutor at TalkEng, you will have the flexibility to work from anywhere and anytime. You can set your own schedule and earn a good sum of money. Plus, you will be able to help people improve their spoken English skills."
    },
    {
      question: "How to get your tutors profile approved at TalkEng?",
      answer: "Once you successfully create your tutor's profile, you will be prompted to click on account activation button. Then you will be required to share a 2 mins intro video in the WhatsApp no. that you will be forwarded to. Upon evaluation, you will be contacted by TalkEng regarding the next steps to get your profile approved."
    },
    {
      question: "Are working hours flexible for tutor?",
      answer: "Yes, working hours are completely flexible for tutors at TalkEng. You have the freedom to set your own schedule and work according to your availability. Whether you prefer morning, afternoon, evening, or weekend sessions, you can choose the time slots that work best for you. This flexibility allows you to balance your tutoring work with other commitments and responsibilities."
    },
    {
      question: "Can the tutors work as per time?",
      answer: "Yes, tutors can work as per their preferred time. TalkEng offers complete flexibility in scheduling, allowing tutors to choose their working hours based on their availability and personal preferences. You can work part-time or full-time, and adjust your schedule as needed. This time flexibility is one of the key benefits of being a TalkEng tutor."
    },
    {
      question: "How much can I earn as a tutor on TalkEng?",
      answer: "As a tutor on TalkEng, you can earn up to Rs. 50,000 per month, depending upon the number of classes you conduct every day. The more classes you conduct, the more you earn. TalkEng is a great way to earn extra income and improve your spoken English skills at the same time!"
    },
    {
      question: "How many classes can a tutor conduct in a single day?",
      answer: "At TalkEng, we believe that the more classes you can conduct in a day, the better! Each class is only 20 minutes long, so you can easily fit a few into your schedule. Plus, the more classes you teach, the more money you can earn. So go ahead and give as many classes as you can handle!"
    }
  ];

  return (
    <>
    <div className="faq-firstpart-container">
      <div className="faq-firstpart-header">
        <h1 className="faq-firstpart-title">Frequently Asked Questions</h1>
        <p className="faq-firstpart-subtitle">Got some confusions? Here are some quick answers.</p>
      </div>

      <div className="faq-firstpart-accordion">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-firstpart-accordion-item">
            <h2 className="faq-firstpart-accordion-header">
              <button
                className={`faq-firstpart-accordion-button ${activeIndex === index ? '' : 'faq-firstpart-collapsed'}`}
                type="button"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
              >
                {faq.question}
              </button>
            </h2>
            <div className={`faq-firstpart-accordion-collapse ${activeIndex === index ? 'faq-firstpart-show' : 'faq-firstpart-collapse'}`}>
              <div className="faq-firstpart-accordion-body">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default FAQFirstpart;