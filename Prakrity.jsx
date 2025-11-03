import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "swiper/css";
import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.min.css";
import "drift-zoom/dist/drift-basic.css";
import "../assets/css/main.css";
import "../assets/css/main-1.css";
import AOS from "aos";
// import prakrity from "../assets/Images/img/banner/healthcare-6.jpg";
// import image from "../assets/Images/img/prakrati-parikshan-8.jpg";
// import image from "../assets/Images/img/icons/hair-loss.jpg";
// import image from "../assets/Images/img/banner/healthcare-8.jpg";
import icon from "../assets/Images/img/icons/hair-loss.png";
import banner from "../assets/Images/img/Immunityassesment.png";
import prakrity from "../assets/Images/img/vatakaphapitta.png";
import { useForm } from "react-hook-form";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

const Prakrity = () => {
  const prakrityQuestions = [
    {
      QuestionId: 1,
      Question: "BODY WEIGHT",
      OptionA: "Lean",
      OptionB: "Average",
      OptionC: "Hefty",
    },
    {
      QuestionId: 2,
      Question: "BODY STRUCTURE",
      OptionA: "Tall",
      OptionB: "Medium",
      OptionC: "Short / Stocky",
    },
    {
      QuestionId: 3,
      Question: "SKIN",
      OptionA: "Rough ,Tendency to darken",
      OptionB: "Smooth,Copper colored,Acne/pimples",
      OptionC: "Bright,Smooth,Attractive",
    },
    {
      QuestionId: 4,
      Question: "EYES",
      OptionA: "Small,Protruding,Scanty eyelashes",
      OptionB: "Colored iris,Sharp eyelashes",
      OptionC: "Large,Attractive Eyes,Thick Eyebrows",
    },
    {
      QuestionId: 5,
      Question: "NAILS",
      OptionA: "Rough,Dry,Irregular,Cracked",
      OptionB: "Glossy,Copper colored",
      OptionC: "Long,White,Strong,Smooth,Thick",
    },
    {
      QuestionId: 6,
      Question: "TEETH",
      OptionA: "Cracked,Irregular,Dull white",
      OptionB: "Moderate,Yellow,Plaque",
      OptionC: "Large,White,Strong",
    },
    {
      QuestionId: 7,
      Question: "LIPS",
      OptionA: "Dry,Thin,Discolored,Dark tone",
      OptionB: "Glossy,Medium,Copper colored",
      OptionC: "Thick,Full,Glossy,Smooth",
    },
    {
      QuestionId: 8,
      Question: "SCALP HAIR",
      OptionA: "Rough,Dry,Irregular,Breaking",
      OptionB: "Scanty, baldness,greying",
      OptionC: "Plenty, Thick,Glossy",
    },
    {
      QuestionId: 9,
      Question: "JOINTS",
      OptionA: "Prominent,Cracking noise",
      OptionB: "Flabby, baldness,greying",
      OptionC: "Strong, Well defined,Compact",
    },
    {
      QuestionId: 10,
      Question: "Body strength",
      OptionA: "Weak",
      OptionB: "Moderate",
      OptionC: "Strong",
    },
    {
      QuestionId: 11,
      Question: "Body Temperature",
      OptionA: "Cold,Less than Normal",
      OptionB: "Hot, above normal",
      OptionC: "Normal",
    },
    {
      QuestionId: 12,
      Question: "Pulse",
      OptionA: "Irregular, quick",
      OptionB: "Fast,Less volume",
      OptionC: "Slow Voluminous",
    },
    {
      QuestionId: 13,
      Question: "Body Odor",
      OptionA: "None",
      OptionB: "Foul smell",
      OptionC: "Oily smell",
    },
    {
      QuestionId: 14,
      Question: "Voice",
      OptionA: "Fast, Irritating",
      OptionB: "Sharp, Commanding",
      OptionC: "Soft,Sweet,Reasonating",
    },
    {
      QuestionId: 15,
      Question: "Perspiration",
      OptionA: "Seldom",
      OptionB: "Excessive",
      OptionC: "Normal",
    },
    {
      QuestionId: 16,
      Question: "Walk",
      OptionA: "VeryQuick,Swirlling move",
      OptionB: "Normal",
      OptionC: "Slow ,Steady",
    },
    {
      QuestionId: 17,
      Question: "Performance of Activity",
      OptionA: "Quick Acting",
      OptionB: "Moderate",
      OptionC: "Stagnant",
    },
    {
      QuestionId: 18,
      Question: "Power of Digestion",
      OptionA: "Irregular",
      OptionB: "Powerful",
      OptionC: "Weak",
    },
    {
      QuestionId: 19,
      Question: "Ability to bear Hunger",
      OptionA: "Irregular",
      OptionB: "Poor",
      OptionC: "Very good",
    },
    {
      QuestionId: 20,
      Question: "Thirst",
      OptionA: "Irregular",
      OptionB: "Very Often",
      OptionC: "Seldom",
    },
    {
      QuestionId: 21,
      Question: "Desire for the taste in food",
      OptionA: "Sweet,Sour,Salty",
      OptionB: "Sweet,Bitter,Astringent",
      OptionC: "Pungent,Astringent,Bitter",
    },
    {
      QuestionId: 22,
      Question: "Bowel conditions",
      OptionA: "Irregular",
      OptionB: "Loose or Semisolid stool",
      OptionC: "Regular well formed stool",
    },
    {
      QuestionId: 23,
      Question: "Appetite",
      OptionA: "unpredictable, irregular, variable",
      OptionB:
        "strong, cannot skip meals and will have to eat again after 3 or 4 hours",
      OptionC:
        "constant but can skip meals easily and tolerate hunger and thirst",
    },
    {
      QuestionId: 24,
      Question: "Grasping Ability",
      OptionA: "Very Fast",
      OptionB: "Quick",
      OptionC: "Slow",
    },
    {
      QuestionId: 25,
      Question: "Memory",
      OptionA: "Irregular,Short term-Excellent,Long term-Weak",
      OptionB: "Powerful",
      OptionC: "Weak,Long term-Good",
    },
    {
      QuestionId: 26,
      Question: "Emotions",
      OptionA: "Wavering,Extreme happiness or Sadness",
      OptionB: "Angry",
      OptionC: "Calm,Attached",
    },
    {
      QuestionId: 27,
      Question: "Sleep",
      OptionA: "Interupted",
      OptionB: "Normal",
      OptionC: "Execive,Deep",
    },
    {
      QuestionId: 28,
      Question: "Dream",
      OptionA: "Flying,Climbing,Motions",
      OptionB: "Violance",
      OptionC: "Water bodies,Romance",
    },
    {
      QuestionId: 29,
      Question: "Talk,Speech Pattern",
      OptionA: "Very fast,Stammering,Missing words during the speech",
      OptionB: "Sharp,Provocative",
      OptionC: "Slow,Resonant,clear",
    },
    {
      QuestionId: 30,
      Question: "Excitability Temperament",
      OptionA: "Quick Initiative",
      OptionB: "Moderate",
      OptionC: "Very slow,Lethargic",
    },
  ];
  const questionData = prakrityQuestions.map((q) => ({
    id: q.QuestionId,
    Qheading: q.Question,
    Qpara: q.hint,
    answers: [
      { Option: q.OptionA, answer: q.OptionA },
      { Option: q.OptionB, answer: q.OptionB },
      { Option: q.OptionC, answer: q.OptionC },
      //   { Option: q.OptionD, answer: q.OptionD },
    ],
  }));

  const [showQuiz, setShowQuiz] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [modal, setModal] = useState(false);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const totalSteps = questionData?.length;
  const [data, setData] = useState([]);
  // const progress = (currentStep / totalSteps) * 100;

  // When user selects an answer

  const hideModal = () => {
    setModal(false);
    setCurrentStep(0);
    resetForm();
    // setShowResult(true)
    setShowQuiz(false);
    console.log(answers, "answer");
  };
  const handleSelect = (questionId, Answer) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: {
        questionId,
        Answer,
      },
    }));
  };

  // Go to next question
  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // setShowResult(false);

      setModal(true);
    }
  };

  // Go to previous question
  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  // Restart the quiz
  // const handleRestart = () => {
  //   setAnswers({});
  //   setCurrentStep(0);
  //   setShowResult(false);
  // };

  // Calculate total score
  const totalScore = Object.values(answers).reduce(
    (sum, val) => sum + Number(val),
    0
  );
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const {
    register,
    trigger,
    setValue,
    handleSubmit,

    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      mobileNumber: null,
      termsCheck: false,
    },
  });

  const onSubmit = (data) => {
    console.log("Form Submitted ", data);
    setData(data);
    // resetForm()
    setShowQuiz(!showQuiz);
  };
  const resetForm = () => {
    setValue("fullName", null);
    setValue("email", null);
    setValue("MobileNumber", null);
    setValue("termsCheck", null);
  };

  // Calculate total score
  const message = `
GREAT! DEAR ${data.fullName},
IT SEEMS YOU ARE CONCERNED ABOUT YOUR HEALTH & IMMUNITY.
Here are your details:
 Name: ${data.fullName}
 Email: ${data.email}
 Your Immunity Score: ${totalScore}%

SUGGESTIONS TO IMPROVE IMMUNITY:
Share this Immunity Assessment Form with your friends so they can assess their immunity and get holistic suggestions to improve it.

Check now: https://192.168.23.18:5173
`;

  // Encode the message for URL
  const encodedMessage = encodeURIComponent(message);

  // WhatsApp share link (with phone number)
  const whatsappLink = `https://wa.me/7985503761?text=${encodedMessage}`;
  return (
    <div style={{ fontFamily: "Quicksand, sans-serif" }}>
      <main className="main">
        <div className="page-title light-background border">
          <div className="container d-lg-flex justify-content-between align-items-center">
            <h1 className="mb-2 mb-lg-0">Immunity Check</h1>
            <nav className="breadcrumbs ">
              <ol>
                <li>
                  <a href="/">Home</a>
                </li>
                <li className="current">Immunity Check</li>
              </ol>
            </nav>
          </div>
        </div>
        <img
          className="img-fluid border"
          style={{ maxHeight: "500px", width: "100%" }}
          src={banner}
          alt=""
        />

        {/* End Page Title */}
        {/* About 2 Section */}

        <section id="about-2" className="about-2 section">
          <div className="container" data-aos="" data-aos-delay={100}>
            <div className="row">
              <div className="container-fluid col-lg-12 ">
                {/* <h2 className="about-title">
                  Welcome to Your Ayurvedic Immunity Assessment
                </h2> */}

                {/* <p className="about-description">
                  Find out your immunity level instantly. Answer our well
                  researched 10 powerful questions. It will give you an
                  indicative idea of where your current immunity stands.
                </p> */}
              </div>
              <div className="col-lg-12">
                <div className="registration-form-wrapper mb-3">
                  {!showQuiz ? (
                    <>
                      <div className="row mb-5">
                        <div className="form-header text-center my-5">
                          <h2
                            style={{
                              fontFamily: '"Quicksand", sans-serif',
                              color: "#253D4E",
                              fontWeight: 700,
                              lineHeight: 1.2,
                            }}
                          >
                            YOUR IMMUNITY ASSESSMENT
                          </h2>
                          <b className="text-center w-25">
                            Find out your immunity level instantly. Answer our
                            well researched 10 powerful questions. It will give
                            you <br />
                            an indicative idea of where your current immunity
                            stands
                          </b>
                        </div>

                        <div className="col-lg-12">
                          <div>
                            <div className="card-body">
                              <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row mb-3">
                                  <div className="col-md-4">
                                    <div className="form-floating">
                                      <input
                                        type="text"
                                        className={`form-control my-2   ${
                                          errors.fullName ? "is-invalid" : ""
                                        }`}
                                        id="fullName"
                                        placeholder="Full Name"
                                        autoComplete="name"
                                        {...register("fullName", {
                                          required: "Full name is required",

                                          minLength: {
                                            value: 3,
                                            message:
                                              "Must be at least 10 digits",
                                          },
                                        })}
                                      />
                                      <label htmlFor="fullName">
                                        Full Name
                                      </label>
                                      {errors.fullName && (
                                        <small className="text-danger">
                                          {errors.fullName.message}
                                        </small>
                                      )}
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="form-floating">
                                      <input
                                        type="email"
                                        className={`form-control my-2  ${
                                          errors.email ? "is-invalid" : ""
                                        }`}
                                        id="email"
                                        placeholder="Email"
                                        {...register("email", {
                                          required: "Email is required",
                                          pattern: {
                                            value: /^[^@]+@[^@]+\.[^@]+$/,
                                            message: "Invalid email address",
                                          },
                                        })}
                                      />
                                      <label htmlFor="email">Email</label>
                                      {errors.email && (
                                        <small className="text-danger">
                                          {errors.email.message}
                                        </small>
                                      )}
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="form-floating ">
                                      <input
                                        type="tel"
                                        onChange={(e) => {
                                          e.target.value =
                                            e.target.value.replace(
                                              /[^0-9]/g,
                                              ""
                                            );
                                          setValue(
                                            "mobileNumber",
                                            e.target.value
                                          );
                                          trigger("mobileNumber");
                                        }}
                                        onInput={(e) => {
                                          e.target.value =
                                            e.target.value.replace(
                                              /[^0-9]/g,
                                              ""
                                            );
                                          e.target.value = e.target.value
                                            .replace(/[^0-9]/g, "")
                                            .slice(0, 10);
                                        }}
                                        className={`form-control   my-2   ${
                                          errors.MobileNumber
                                            ? "is-invalid"
                                            : ""
                                        }`}
                                        id="MobileNumber"
                                        placeholder="Mobile Number"
                                        {...register("MobileNumber", {
                                          required: "Mobile number is required",
                                          minLength: {
                                            value: 10,
                                            message:
                                              "Must be at least 10 digits",
                                          },
                                          maxLength: {
                                            value: 10,
                                            message:
                                              "only 10 digits is required",
                                          },
                                        })}
                                      />
                                      <label htmlFor="MobileNumber">
                                        Mobile Number
                                      </label>
                                      {errors.MobileNumber && (
                                        <small className="text-danger">
                                          {errors.MobileNumber.message}
                                        </small>
                                      )}
                                    </div>
                                  </div>
                                </div>

                                <div className="d-flex justify-content-center my-5">
                                  <button
                                    type="submit"
                                    className="submit-btn d-flex align-items-center justify-content-center "
                                  >
                                    Start Assessment{" "}
                                    <span className="ms-2">&#8594;</span>
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {" "}
                      <div className="quiz-container">
                        {!showResult ? (
                          <div className="step active">
                            <div className="progress-bar">
                              <div
                                className="progress"
                                style={{
                                  width: `${
                                    ((currentStep + 1) / totalSteps) * 100
                                  }%`,
                                }}
                              ></div>
                            </div>
                            <div className="mb-3">
                              {" "}
                              <h2 className="m-0">
                                {currentStep + 1}.{" "}
                                {questionData[currentStep].Qheading}
                              </h2>
                              {questionData[currentStep].Qpara && (
                                <p className="question-para ps-4  text-secondary mt-0">
                                  {questionData[currentStep].Qpara}
                                </p>
                              )}
                            </div>

                            <div className="options">
                              {questionData[currentStep].answers.map(
                                (ans, i) => (
                                  <label
                                    key={i}
                                    className={`option ${
                                      answers[questionData[currentStep].id] ===
                                      ans.answer
                                        ? "selected"
                                        : ""
                                    }`}
                                  >
                                    <input
                                      type="radio"
                                      name={questionData[currentStep].id}
                                      value={ans.answer}
                                      checked={
                                        answers[
                                          questionData[currentStep].id
                                        ] === ans.answer
                                      }
                                      onChange={() =>
                                        handleSelect(
                                          questionData[currentStep].id,
                                          ans.answer,
                                          ans.Option
                                        )
                                      }
                                    />
                                    {ans.Option}
                                  </label>
                                )
                              )}
                            </div>

                            <div className="buttons">
                              <button
                                className="prev-btn"
                                onClick={handlePrev}
                                disabled={currentStep === 0}
                              >
                                Previous
                              </button>
                              <button
                                className="next-btn"
                                onClick={handleNext}
                                disabled={
                                  !answers[questionData[currentStep].id]
                                }
                              >
                                {currentStep === totalSteps - 1
                                  ? "Submit"
                                  : "Next"}
                              </button>
                            </div>
                          </div>
                        ) : (
                          <>
                            {" "}
                            <h1 className="text-primary">Quiz Completed !</h1>
                            <div className="">
                              <h2>Quiz Completed!</h2>
                              <p>
                                Your Total Score: <strong>{totalScore}</strong>{" "}
                                / {totalSteps * 10}
                              </p>
                              <div id="answers-summary">
                                {questionData.map((q, idx) => (
                                  <p key={q.id}>
                                    <strong>Q{idx + 1}:</strong> {q.Qheading} —{" "}
                                    {/* <em>{answers[q.id]}</em> */}
                                  </p>
                                ))}
                              </div>
                              {/* <button
                            className="restart-btn"
                             onClick={handleRestart}
                           >
                            Restart Quiz
                          </button> */}
                            </div>
                          </>
                        )}

                        <Modal
                          isOpen={modal}
                          toggle={hideModal}
                          centered
                          className="mt-3"
                        >
                          <ModalHeader toggle={hideModal}>
                            Immunity Assessment Data
                          </ModalHeader>
                          <ModalBody className="p-4">
                            <div className="resul"></div>

                            <h6>GREAT! DEAR {data.fullName}</h6>
                            <h6>
                              IT SEEMS YOU ARE CONCERNED ABOUT YOUR HEALTH &
                              IMMUNITY.
                            </h6>
                            <p>{data.email}</p>
                            <p>{data.fullName}</p>
                            {/* <h5>Your immunity score is: {totalScore}%</h5> */}

                            <h4>SUGGESTIONS TO IMPROVE IMMUNITY</h4>
                            <p>
                              JUST SHARE THE IMMUNITY ASSESSMENT FORM WITH YOUR
                              FRIENDS SO THAT THEY CAN ASSESS THEIR IMMUNITY AND
                              GET HOLISTIC SUGGESTIONS TO IMPROVE IT.
                            </p>

                            <a
                              href={whatsappLink}
                              className="whatsapp_float"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button
                                color="success"
                                style={{ fontSize: "18px" }}
                              >
                                Share
                                <i className="fa fa-whatsapp"></i>
                              </Button>
                            </a>
                          </ModalBody>
                          <ModalFooter>
                            <Button color="secondary" onClick={hideModal}>
                              Cancel
                            </Button>
                            <Button className="btn" onClick={hideModal}>
                              Ok
                            </Button>{" "}
                          </ModalFooter>
                        </Modal>
                      </div>
                    </>
                  )}
                  {/* <div className="decorative-elements">
                    <div className="circle circle-1" />
                    <div className="circle circle-2" />
                    <div className="circle circle-3" />
                    <div className="square square-1" />
                    <div className="square square-2" />
                  </div> */}
                </div>
              </div>
              <div className="col-lg-12">
                <h2 className="about-title">
                  Welcome to Your Ayurvedic Immunity Assessment
                </h2>
                <p className="about-description">
                  In today’s fast-paced world, maintaining strong immunity is
                  essential to lead a healthy and balanced life. This assessment
                  is designed to help you understand your body’s immune strength
                  through the ancient science of Ayurveda, a holistic system of
                  medicine that has been practiced in India for thousands of
                  years.
                </p>
              </div>
              <div className="col-lg-12">
                <h2 className="about-title">What is Immunity in Ayurveda?</h2>
                <p className="about-description">
                  In Ayurveda, immunity is known as "Ojas", a vital energy that
                  protects and sustains life. Ojas is the essence that keeps the
                  body, mind, and spirit in harmony. It is deeply connected to
                  your digestion (Agni), nutrition, lifestyle, and mental
                  well-being. According to Ayurveda, strong Ojas (immunity)
                  ensures that you stay resilient against diseases and maintain
                  overall vitality. Conversely, low Ojas can make you more
                  susceptible to illnesses, fatigue, and stress. The strength of
                  your immunity is determined by the balance of the three
                  Doshas: <br />
                  <b className="text-secondary">Vata (air and space),</b>
                  <br />{" "}
                  <b className="text-secondary">Pitta (fire and water),</b>
                  <br />
                  <b b className="text-secondary">  Kapha (earth and water).</b>
                  <br /> When your Doshas are in harmony, your immune system
                  works efficiently to protect your body.
                </p>
              </div>

              <div className="row my-5">
                <div className="col-lg-6">
                  <h2 className="about-title">What is Immunity in Ayurveda?</h2>
                  <p className="about-description">
                    In Ayurveda, immunity is known as "Ojas", a vital energy
                    that protects and sustains life. Ojas is the essence that
                    keeps the body, mind, and spirit in harmony. It is deeply
                    connected to your digestion (Agni), nutrition, lifestyle,
                    and mental well-being. According to Ayurveda, strong Ojas
                    (immunity) ensures that you stay resilient against diseases
                    and maintain overall vitality. Conversely, low Ojas can make
                    you more susceptible to illnesses, fatigue, and stress. The
                    strength of your immunity is determined by the balance of
                    the three Doshas: Vata (air and space), Pitta (fire and
                    water), Kapha (earth and water). When your Doshas are in
                    harmony, your immune system works efficiently to protect
                    your body.
                  </p>
                  <h2 className="about-title">What is Immunity in Ayurveda?</h2>
                  <p className="about-description">
                    In Ayurveda, immunity is known as "Ojas", a vital energy
                    that protects and sustains life. Ojas is the essence that
                    keeps the body, mind, and spirit in harmony. It is deeply
                    connected to your digestion (Agni), nutrition, lifestyle,
                    and mental well-being. According to Ayurveda, strong Ojas
                    (immunity) ensures that you stay resilient against diseases
                    and maintain overall vitality. Conversely, low Ojas can make
                    you more susceptible to illnesses, fatigue, and stress. The
                    strength of your immunity is determined by the balance of
                    the three Doshas: Vata (air and space), Pitta (fire and
                    water), Kapha (earth and water). When your Doshas are in
                    harmony, your immune system works efficiently to protect
                    your body.
                  </p>
                </div>

                <div className="col-lg-6">
                  <img
                    src={prakrity}
                    className="img-fluid h-100"
                    alt="vata-katha-pitta"
                  />
                </div>
              </div>
            </div>
            <div className="row gy-4">
              {[
                { title: "FREE SHIPPING", text: "On Orders Over ₹500" },
                {
                  title: "FAST & EFFICIENT",
                  text: "Fast And Qualitative Product",
                },
                { title: "ONLINE PAYMENT", text: "Instantly Pay Online" },
                {
                  title: "24 X 7 SERVICE",
                  text: "Our Service Is Available 24/7",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="col-lg-3 col-md-6 col-sm-6 col-12 d-flex justify-content-center"
                >
                  <div
                    className="d-flex align-items-center flex-md-row flex-column text-md-start text-center bg-light rounded-4 shadow-sm p-3 w-100"
                    style={{
                      maxWidth: "300px",
                      transition: "all 0.3s ease-in-out",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "translateY(-5px)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "translateY(0px)")
                    }
                  >
                    <img
                      width={50}
                      height={50}
                      src={icon}
                      alt="Service"
                      className="mb-md-0 mb-2"
                    />
                    <div className="ms-md-3">
                      <h6 className="fw-bold mb-1 text-dark">{item.title}</h6>
                      <p className="text-secondary mb-0 small">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* /About 2 Section */}
      </main>

      <footer id="footer" className="footer dark-background">
        <div className="footer-main">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4 col-md-6">
                <div className="footer-widget footer-about">
                  <a href="index.html" className="logo">
                    <span className="sitename">NiceShop</span>
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam in nibh vehicula, facilisis magna ut, consectetur
                    lorem. Proin eget tortor risus.
                  </p>
                  <div className="social-links mt-4">
                    <h5>Connect With Us</h5>
                    <div className="social-icons">
                      <a href="#" aria-label="Facebook">
                        <i className="bi bi-facebook" />
                      </a>
                      <a href="#" aria-label="Instagram">
                        <i className="bi bi-instagram" />
                      </a>
                      <a href="#" aria-label="Twitter">
                        <i className="bi bi-twitter-x" />
                      </a>
                      <a href="#" aria-label="TikTok">
                        <i className="bi bi-tiktok" />
                      </a>
                      <a href="#" aria-label="Pinterest">
                        <i className="bi bi-pinterest" />
                      </a>
                      <a href="#" aria-label="YouTube">
                        <i className="bi bi-youtube" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="footer-widget">
                  <h4>Shop</h4>
                  <ul className="footer-links">
                    <li>
                      <a href="category.html">New Arrivals</a>
                    </li>
                    <li>
                      <a href="category.html">Bestsellers</a>
                    </li>
                    <li>
                      <a href="category.html">Women's Clothing</a>
                    </li>
                    <li>
                      <a href="category.html">Men's Clothing</a>
                    </li>
                    <li>
                      <a href="category.html">Accessories</a>
                    </li>
                    <li>
                      <a href="category.html">Sale</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="footer-widget">
                  <h4>Support</h4>
                  <ul className="footer-links">
                    <li>
                      <a href="support.html">Help Center</a>
                    </li>
                    <li>
                      <a href="account.html">Order Status</a>
                    </li>
                    <li>
                      <a href="shiping-info.html">Shipping Info</a>
                    </li>
                    <li>
                      <a href="return-policy.html">Returns &amp; Exchanges</a>
                    </li>
                    <li>
                      <a href="#">Size Guide</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="footer-widget">
                  <h4>Contact Information</h4>
                  <div className="footer-contact">
                    <div className="contact-item">
                      <i className="bi bi-geo-alt" />
                      <span>123 Fashion Street, New York, NY 10001</span>
                    </div>
                    <div className="contact-item">
                      <i className="bi bi-telephone" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="contact-item">
                      <i className="bi bi-envelope" />
                      <span>
                        <a
                          href="https://bootstrapmade.com/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="adc5c8c1c1c2edc8d5ccc0ddc1c883cec2c0"
                        >
                          [email&nbsp;protected]
                        </a>
                      </span>
                    </div>
                    <div className="contact-item">
                      <i className="bi bi-clock" />
                      <span>
                        Monday-Friday: 9am-6pm
                        <br />
                        Saturday: 10am-4pm
                        <br />
                        Sunday: Closed
                      </span>
                    </div>
                  </div>
                  <div className="app-buttons mt-4">
                    <a href="#" className="app-btn">
                      <i className="bi bi-apple" />
                      <span>App Store</span>
                    </a>
                    <a href="#" className="app-btn">
                      <i className="bi bi-google-play" />
                      <span>Google Play</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row gy-3 align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="copyright">
                  <p>
                    © <span>Copyright</span>{" "}
                    <strong className="sitename">NiceShop</strong>. All Rights
                    Reserved.
                  </p>
                </div>
                <div className="credits mt-1">
                  {/* All the links in the footer should remain intact. */}
                  {/* You can delete the links only if you've purchased the pro version. */}
                  {/* Licensing information: https://bootstrapmade.com/license/ */}
                  {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
                  Designed by{" "}
                  <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="d-flex flex-wrap justify-content-lg-end justify-content-center align-items-center gap-4">
                  <div className="payment-methods">
                    <div className="payment-icons">
                      <i
                        className="bi bi-credit-card"
                        aria-label="Credit Card"
                      />
                      <i className="bi bi-paypal" aria-label="PayPal" />
                      <i className="bi bi-apple" aria-label="Apple Pay" />
                      <i className="bi bi-google" aria-label="Google Pay" />
                      <i className="bi bi-shop" aria-label="Shop Pay" />
                      <i className="bi bi-cash" aria-label="Cash on Delivery" />
                    </div>
                  </div>
                  <div className="legal-links">
                    <a href="tos.html">Terms</a>
                    <a href="privacy.html">Privacy</a>
                    <a href="tos.html">Cookies</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Scroll Top */}
      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>

      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n        .quiz-container {\n            background-color: white;\n            border-radius: 15px;\n            padding: 30px;\n            width: 100%;\n            max-width: 100%;\n            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);\n        }\n\n        .progress-bar {\n            height: 5px;\n            background-color: #e0e0e0;\n            border-radius: 10px;\n            margin-bottom: 30px;\n            overflow: hidden;\n        }\n\n        .progress {\n            height: 100%;\n            background: linear-gradient(to right, #618045, #B5D8FF);\n            transition: width 0.3s ease;\n            width: 0%;\n        }\n\n        .step {\n            display: none;\n            animation: fadeIn 0.5s ease;\n        }\n\n        .step.active {\n            display: block;\n        }\n\n        @keyframes fadeIn {\n            from {\n                opacity: 0;\n                transform: translateY(10px);\n            }\n\n            to {\n                opacity: 1;\n                transform: translateY(0);\n            }\n        }\n\n        h2 {\n            color: #333;\n            margin-bottom: 20px;\n            font-size: 1.5rem;\n        }\n\n        .options {\n            display: flex;\n            flex-direction: column;\n            gap: 15px;\n            margin-bottom: 30px;\n        }\n\n        .option {\n            padding: 15px;\n            border: 2px solid #e0e0e0;\n            border-radius: 10px;\n            cursor: pointer;\n            transition: all 0.3s ease;\n            position: relative;\n        }\n\n        .option:hover {\n            border-color: #618045;\n            background-color: #f8f9ff;\n        }\n\n        .option.selected {\n            border-color: #667eea;\n            background-color: #f8f9ff;\n        }\n\n        .option input[type="radio"] {\n            display: none;\n        }\n\n        .buttons {\n            display: flex;\n            justify-content: space-between;\n            gap: 15px;\n        }\n\n        button {\n            padding: 12px 25px;\n            border: none;\n            border-radius: 8px;\n            cursor: pointer;\n            font-size: 1rem;\n            transition: all 0.3s ease;\n        }\n\n        button:disabled {\n            opacity: 0.5;\n            cursor: not-allowed;\n        }\n\n        .prev-btn {\n            background-color: #e0e0e0;\n            color: #333;\n        }\n\n        .next-btn {\n            background-color: #618045;\n            color: white;\n        }\n\n        .prev-btn:hover:not(:disabled) {\n            background-color: #d0d0d0;\n        }\n\n        .next-btn:hover:not(:disabled) {\n            background-color: #8dbc63;\n        }\n\n        .result {\n            text-align: center;\n            display: none;\n        }\n\n        .result h2 {\n            color: #618045;\n            margin-bottom: 15px;\n        }\n\n        .result p {\n            color: #666;\n            margin-bottom: 20px;\n        }\n\n        .restart-btn {\n            background-color: #618045;\n            color: white;\n            width: 100%;\n        }\n    ',
        }}
      />
    </div>
  );
};
export default Prakrity;
