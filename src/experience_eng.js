import React from 'react';

var data = {
  experience: [
    {
      title: "Instead: 'Asking Pay' Planning and Development",
      period: "2017.09 - present",
      description:
        //"Unbanked를 위한 대신결제 서비스인 '결제를 부탁해' 기획 및 개발. NodeJS, Angular, ReactJS 를 이용하여 서버, 웹 등을 구현",
        'Planning and development "Asking Pay" which is payment system for unbanked people. NodeJs, Angular, ReactJs is based on this project',
      image: [require("./images/2.gif"), require("./images/request.png")],
      bullet: [
        //"서버: NodeJS Express, 서비스페이지: Angular JS, 관리자페이지: React JS",
        "Server: NodeJS Express, ServicePage: AngularJS, AdminPage: React JS",
        <a href="http://instead-corp.com/"> Instead Homepage</a>,
        <a href="https://admin.instead.co.kr/"> Instead Adminpage</a>
      ]
    },
    {
      title: "91 Degree: literature vending machine product development",
      period: "2017.7 - 2017.9",
      description:
        //"Raspberry pi를 이용 열전사 프린터를 컨트롤 하여 영수증에 문학을 프린트해주는 자판기 개발, 국제 도서전 등에서 화제가 됬으며 현재 용인 및 경전철역사에 설치됨. ",
        "Developed with raspberry pi and thermal printer for printing short literature in seconds. Several station and exhibition ordered vending machine for their customer",
      image: [require("./images/vending.gif"), require("./images/thermal.jpg")],
      bullet: [
        //"C 프로그래밍, 프린터 하드웨어 컨트롤, 이미지 프로세싱",
        "Based on C language and controlled printer hardware, Image processing to convert text to image",
        "2017 International Book festival in Korea, SEMA 청산별곡 special Exhibition, Daelim art museum Paper Present",
        <a href="https://www.91-degree.com/"> 91degree Homepage</a>
      ]
    },
    {
      title: "Hyundai motors: Brake Engineer",
      period: " 2016.2 - 2017.8",
      description:
        //"상용차 공압브레이크의 제어 및 설계.기술개발 프로젝트 진행 경험 및 제동 관련 시뮬레이션을 Visual Basic으로 제작하여 활용",
        "Design and control brake for commercial car. Experience on New car development and technology development project. Make simulation program with visual basic for estimate braking distance",
      image: [require("./images/4.jpeg"), require("./images/brake.gif")],
      bullet: [
        "Desigjn HILS(Hardware in the loop system) for simulation",
        "Design Domestica and China vehicle / Project engineer for Technology development project"
      ]
    },
    {
      title: "Hyundai motors: Industrial scholarship",
      period: "2015.07 - 2016.12",
      description:
        "As program for industrial scholarship, experienced projects which related to  vehicle desing nad controll with emebeded software and CATIA.",
      //"현대자동차의 산학장학생으로 활동하였으며 기간 중 차량설계, 제어 등과 관련한 프로젝트를 진행하며 자작차 제작 카티아 과정등을 통과함",
      image: [require("./images/car1.jpg")],
      bullet: [
        "Own Vehicle design project: designed vehicle and developed convinence function",
        "Used arduino and OBD-II communication program based C-language"
      ]
    },
    {
      title: "MakingSoda: Development BigD",
      period: "2014.12 - 2015.9",
      description:
        "Developed algorithm and designed hardware Robot which can draw a sketch with vector image",
      image: [require("./images/bigd2.gif"), require("./images/bigd4.png")],
      bullet: [
        "SVG to Path: Program for convert vector image to path by processing",
        "Drawing Bot: Drawing robot which move by calculated path"
      ]
    },
    {
      title:
        "Microfluidics & NanoMechatronics LAB: Development Micro Fluid Pump",
      period: "2014.12 - 2015.8",
      description:
        "Based on braile piezo actuator developed micro pump and program which can control micro fluid based on C#",
      image: [require("./images/pump1.png"), require("./images/pump2.png")],
      bullet: [
        "Window Program: Based on C#, developed control program for micro pump which can change sequence, time, speed",
        "Hardware design for braile piezo actuator mechanism"
      ]
    },
    {
      title: "U-CIM LAB Intern: Development fire evacuation simulation",
      period: "2014.6 - 2014.8",
      description:
        "Developed Human in loop simulation system by liinking Anylogic(JAVA base) simulation program and Unity(C# base). Involving human in Object base simulation extract new data",
      image: [require("./images/fire1.png"), require("./images/fire2.png")],
      bullet: [
        "Anylogic: Constructed Agent based simulation for fire evacuation situation",
        "Unity: To develop Human in Loop used game engine for User interface to controll object in simulation"
      ]
    }
  ],
  side: [
    {
      title: "Caffe curation by image",
      period: "2018.03",
      description:
        "Developed Caffe suggestion system based on CNN by trasition learning",
      image: [require("./images/caffe1.gif"), require("./images/caffe2.png")],
      bullet: [
        "Gathered 22000 images about 20 caffe nearby Gangnam by crawlling instagram then filtered food, people",
        "transition learned model which based on VGG-19 model classify image then return highest possibility caffe with data",
        "Used Keras and Django in backend and ReactJS is used in Frontend",
        <a href="https://github.com/Sangkwun/caffe_concierge">Link to Github</a>
      ]
    },
    {
      title: "Instgram clone coding",
      period: "2018.1",
      description: "Cloning instagram based on Django & React",
      image: [require("./images/insta1.gif"), require("./images/insta2.png")],
      bullet: [
        "Developed login, social login, comment , post, follow function by cloing.",
        "Based on Django, React"
      ]
    },
    {
      title: "Image recognition project",
      period: "2016.09 - 2016.10",
      description:
        "Developed program wich can excute function with image by algorithm like SIFT in opencv",
      image: [require("./images/image1.gif"), require("./images/image2.png")],
      bullet: [
        "Used feature extraction algorithm in opencv",
        "Desktop program: When recognize pre enrolled image program execute function",
        "Application: User can register 5 kinds of picture with functions and application execute function when recognize image"
      ]
    },
    {
      title: "Rating Bin: Tresh to Trend",
      period: "2015.08 - 2015.12",
      description:
        "Developed rating system by thow trash after watching movie in theater with Arduino YUN and google API",
      image: [
        require("./images/bin1.gif"),
        require("./images/bin2.png"),
        require("./images/bin3.png")
      ],
      bullet: [
        "most of people throw trash right after watched movie in theater ",
        "Bin detect trash with infrared sensor then arduino send the data to google API",
        "Google API record data on spreadshee then show the graph in wordpress front"
      ]
    },
    {
      title: "Table design for Eonyang market",
      period: "2015.3 - 2015.7",
      description:
        "Design foldable table and making for Eonyang market redesign",
      image: [require("./images/table.png"), require("./images/table1.png")],
      bullet: ["Redesign project for traditional market by observing vendor"]
    }
  ],
  education: [
    {
      title: "Udacity Machine Learning Nanodegree",
      period: "2017.3 - 2017.10",
      description: "Finished Udacity Machine learning nanodegree course",
      image: [],
      bullet: [
        "Each projects on chapter are conducted with instuction of mentors",

        <a href="https://github.com/Sangkwun/boston_housing">
          Machine Learning Foundation: Predicting Boston Housing Prices
        </a>,

        <a href="https://github.com/Sangkwun/finding_donors">
          Supervised Learning : Finding donors for CharityML
        </a>,

        <a href="https://github.com/Sangkwun/customer_segments">
          Unsupervised Learing : Creating Customer Segments
        </a>,

        <a href="https://github.com/Sangkwun/smartcab">
          Reinforcement Learning : Train a Smartcab to Drive
        </a>,

        <a href="https://github.com/Sangkwun/dog_breed">
          Deep Learning : Dog Breed Classifier
        </a>,

        <a href="https://drive.google.com/file/d/1MGNa3aePvLgWKybcal1IMoREtPX6pEfR/view?usp=sharing">
          Capstone Project : Sales forecasting by Machine learning
        </a>
      ]
    },
    {
      title: "UNIST Bachelor degree Mechanical and  Advanced material Eng.",
      period: "2010.3 - 2016.2",
      description:
        "UNIST is one of the four public universities in South Korea which are dedicated to research in science and technology, along with KAIST, GIST, and DGIST.",
      image: [],
      bullet: [
        "1st Track : Mechanical system design & manufacturing",
        "2nd Track : Engineering system design"
      ]
    }
  ]
};

export default data;
