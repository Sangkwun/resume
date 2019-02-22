import React from 'react';

var data = {
  experience: [
    {
      title: "Knowru: Backend developer",
      period: "2018.05 - 2018.08",
      description: "Obejct detection 및 pedestrian attribute 모델, IoT Digital Signage 개발",
      image: [],
      bullet: [
        "Computer vision: Extract gender and age data from video with OpenCV, Yolo, Inception",
        "Oowa Signage: Develop digital signage with AWS IoT"
      ]
    },
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
      title: "Implementation Resnet with Keras",
      period: "2018.07 - 2018.08",
      description: "Short connection의 Residual block의 유무의 효과를 비교",
      image: [
        require("./images/resnet.png"),
        require("./images/training.png"),
        require("./images/validating.png")
      ],
      bullet: [
        "Check effect of short connection in residual block by cifar-10",
        "Orange line: with short connection, Blue line: without short connection",
        <a href="https://github.com/Sangkwun/Resnet">Link to Github</a>
      ]
    },
    {
      title: "Implementation of Alexnet with Tensorflow for flower classification",
      period: "2018.06 - 2018.07",
      description: "Build Alexnet which is father of deep network with tensorflow",
      image: [
        require("./images/alexnet.jpeg"),
        require("./images/flower.jpg")
      ],
      bullet: [
        "Tested on flower recognition dataset in Kaggle.",
        "classification about 5 kinds of flowers(chamomile, tulip, rose, sunflower, dandelion)",
        <a href="https://github.com/Sangkwun/Alexnet">Link to Github</a>
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
      title: "Udacity: Sales forecasting with Machine learning",
      period: "2017.11 - 2017.12",
      description:
        "Sales forecasting of Corporacion favorita with machine learning",
      image: [],
      bullet: [
        <a href="https://drive.google.com/file/d/1MGNa3aePvLgWKybcal1IMoREtPX6pEfR/view?usp=sharing">
          Capstone Project : Sales forecasting with Machine learning
        </a>
      ]
    },
    {
      title: "Udacity:Deep learning: Dog Breed Classifier",
      period: "2017.9 - 2017.10",
      description:
        "Detect face and inference human or dog then classify breed with transfer learning",
      image: [],
      bullet: [
        <a href="https://github.com/Sangkwun/dog_breed/blob/master/dog_app.ipynb">
          Deep Learning : Dog Breed Classifier
        </a>
      ]
    },
    {
      title: "Udacity: Train a Smartcab to Drive with Reinforcement Learning",
      period: "2017.8 - 2017.9",
      description:
        "Learn traffic regulation and situation with Q-learning",
      image: [],
      bullet: [
        <a href="https://github.com/Sangkwun/smartcab">
          Train a Smartcab to Drive with Reinforcement Learning
        </a>
      ]
    },
    {
      title: "Udacity: Creating Customer Segments with Unsupervised machine learning",
      period: "2017.7 - 2017.8",
      description:
        "Clustering customer segment to apply new policy to customer",
      image: [],
      bullet: [
        < a href = "https://github.com/Sangkwun/customer_segments/blob/master/customer_segments.ipynb" >
          Creating Customer Segments with Unsupervised machine learning
        </a>
      ]
    },
    {
      title: "Udacity: Finding donors for CharityML with Supervised machine learning",
      period: "2017.5 - 2017.6",
      description:
        "Binary classification which is about donor with income dataset",
      image: [],
      bullet: [
        <a href="https://github.com/Sangkwun/finding_donors/blob/master/finding_donors.ipynb">
          Finding donors for CharityML
        </a>
      ]
    },
    {
      title: "Udacity: Predicting Boston Housing Prices with Machine learning",
      period: "2017.3 - 2017.4",
      description:
        "Predict house price with machine learning technique trained with boston house price dataset",
      image: [],
      bullet: [
        <a href="https://github.com/Sangkwun/boston_housing/blob/master/boston_housing.ipynb">
          Predicting Boston Housing Prices with Machine learning
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
