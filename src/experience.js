import React from 'react';

var data = {
  experience: [
    {
      title: "인스테드: '결제를 부탁해' 기획 및 개발",
      period: "2017.09 - present",
      description:
        "Unbanked를 위한 대신결제 서비스인 '결제를 부탁해' 기획 및 개발. NodeJS, Angular, ReactJS 를 이용하여 서버, 웹 등을 구현",
      image: [require("./images/2.gif"), require("./images/request.png")],
      bullet: [
        "서버: NodeJS Express, 서비스페이지: Angular JS, 관리자페이지: React JS",
        <a href="http://instead-corp.com/"> 인스테드 홈페이지</a>,
        <a href="https://admin.instead.co.kr/"> 인스테드 관리자페이지</a>
      ]
    },
    {
      title: "구일도시: 문학자판기 제품 개발",
      period: "2017.7 - 2017.9",
      description:
        "Raspberry pi를 이용 열전사 프린터를 컨트롤 하여 영수증에 문학을 프린트해주는 자판기 개발, 국제 도서전 등에서 화제가 됬으며 현재 용인 및 경전철역사에 설치됨. ",
      image: [require("./images/vending.gif"), require("./images/thermal.jpg")],
      bullet: [
        "C 프로그래밍, 프린터 하드웨어 컨트롤, 이미지 프로세싱",
        "2017 국제도서전, 서울시립미술관 SEMA 청산별곡전, 대림미술관 Paper Present전 등",
        <a href="https://www.91-degree.com/"> 구일도시 홈페이지</a>
      ]
    },
    {
      title: "현대자동차: Brake Engineer",
      period: " 2016.2 - 2017.8",
      description:
        "상용차 공압브레이크의 제어 및 설계.기술개발 프로젝트 진행 경험 및 제동 관련 시뮬레이션을 Visual Basic으로 제작하여 활용",
      image: [require("./images/4.jpeg"), require("./images/brake.gif")],
      bullet: [
        "HILS(Hardware in loop system) 시뮬레이션 장비 설계",
        "국내, 중국 차종 설계 / 기술개발 프로젝트 PM"
      ]
    },
    {
      title: "현대자동차 산학연구장학생",
      period: "2015.07 - 2016.12",
      description:
        "현대자동차의 산학장학생으로 활동하였으며 기간 중 차량설계, 제어 등과 관련한 프로젝트를 진행하며 자작차 제작 카티아 과정등을 통과함",
      image: [require("./images/car1.jpg")],
      bullet: [
        "자작차 설계 프로젝트: 차량 설계 및 기타 편의 신기술 적용",
        "아두이노 및 C 기반 OBD-II 통신"
      ]
    },
    {
      title: "MakingSoda: BigD 개발",
      period: "2014.12 - 2015.9",
      description:
        "도안을 넣어주면 그려주는 로봇인 BigD의 알고리즘 개발 및 하드웨어 설계. 초기의 K-startup 본선 진출",
      image: [require("./images/bigd2.gif"), require("./images/bigd4.png")],
      bullet: [
        "SVG to Path: 프로세싱 기반 벡터이미지 경로화 프로그램",
        "Drawing Bot: 경로에 따라 움직이는 드로잉 로봇"
      ]
    },
    {
      title: "Microfluidics & NanoMechatronics LAB: Micro Fluid Pump 개발",
      period: "2014.12 - 2015.8",
      description:
        "Braile을 기반으로 Piezo Actuator를 활용 Micro fluid를 제어할 수 있는 소형 펌프 제작하여 C# 기반 제어프로그램 제작",
      image: [require("./images/pump1.png"), require("./images/pump2.png")],
      bullet: [
        "Window Program: C#기반의 Micro Pump Control Program(sequence, time, speed 등 조절)",
        "Braile Piezo Actuator Mechanism에 따른 설계"
      ]
    },
    {
      title: "U-CIM LAB Intern: 화재 대피 시뮬레이션 개발",
      period: "2014.6 - 2014.8",
      description:
        "시뮬레이션 프로그램인 Anylogic(JAVA)과 Unity(C#)을 연동하여 Human in Loop 시뮬레이션 시스템을 개발. 화재대피상황의 시뮬레이션에 사람을 개입시켜 데이터를 얻어냄.",
      image: [require("./images/fire1.png"), require("./images/fire2.png")],
      bullet: [
        "Anylogic: 시뮬레이션 프로그램으로 화재대피 시뮬레이션 상황의 Agent base Simulation을 구축",
        "Unity: 게임엔진을 통해서 Human in Loop 구현을 위해 User Interface역할을 함"
      ]
    }
  ],
  side: [
    {
      title: "이미지를 통한 카페 추천",
      period: "2018.03",
      description:
        "CNN을 기반으로 Transition Learning을 통해 Classification을 하는 카페 추천 시스템 구현",
      image: [require("./images/caffe1.gif"), require("./images/caffe2.png")],
      bullet: [
        "강남 근처의 20개 카페를 Instagram 크롤링으로 22000장을 추출하여 2000장으로 필터링(음식, 사람 사진 제외)",
        "VGG-19 모델을 기반으로 이미지를 학습하여 입력한 사진을 분류하여 가능성이 높은 카페를 추천하며 정보를 제공",
        "백엔드에는 Keras와 Django를 이용하였으며 Front에는 React를 사용",
        <a href="https://github.com/Sangkwun/caffe_concierge">Link to Github</a>
      ]
    },
    {
      title: "Instgram clone coding",
      period: "2018.1",
      description: "Django & React 기반으로 Instagram 클로닝",
      image: [require("./images/insta1.gif"), require("./images/insta2.png")],
      bullet: [
        "인스타그램 클론 코딩하여 로그인, 소셜로그인, 댓글, 게시물, 팔로우 등 기능 구현",
        "Django, React 등을 기반으로 제작"
      ]
    },
    {
      title: "이미지 인식 프로젝트",
      period: "2016.09 - 2016.10",
      description:
        "opencv의 SIFT등과 같은 이미지 인식을 통해 원하는 기능을 실행할수 있도록 프로그램 고안 및 시험",
      image: [require("./images/image1.gif"), require("./images/image2.png")],
      bullet: [
        "opencv의 이미지 특성검출 알고리즘 사용",
        "데스크탑 프로그램: 미리 등록된 이미지를 인식시 해당 이미지에 맞는 기능 실행",
        "어플리케이션: 5가지 사진과 기능을 등록하여 인식 시 자동으로 해당 기능 실행"
      ]
    },
    {
      title: "평점 쓰레기통 Tresh to Trend",
      period: "2015.08 - 2015.12",
      description:
        "Arduino YUN과 google API를 이용하여 영화 감상 후 쓰레기를 버리는 동작에서 평점을 투표할 수 있는 시스템 개발",
      image: [
        require("./images/bin1.gif"),
        require("./images/bin2.png"),
        require("./images/bin3.png")
      ],
      bullet: [
        "영화관에 쓰레기통은 영화를 본사람만 버리는 점에서 착안",
        "쓰레기통의 적외선센서를 인식하면 아두이노에서 이를 인식하여 Google API에 전달",
        "이를 Spreadsheet에 전달하며 이 데이터를 워드프레스로 연동"
      ]
    },
    {
      title: "언양 매대 디자인 및 제작",
      period: "2015.3 - 2015.7",
      description:
        "접이식 매대 디자인 고안 및 제작 후 언양 시장 리디자인 프로젝트참여",
      image: [require("./images/table.png"), require("./images/table1.png")],
      bullet: [
        "전통시장 리디자인 프로젝트로 상인들의 행동을 관찰하고 매대를 디자인 및 제작"
      ]
    }
  ],
  education: [
    {
      title: "Udacity Machine Learning Nanodegree",
      period: "2017.3 - 2017.10",
      description: "MOOC 중 하나로 Udacity에서 머신러닝 코스를 수료",
      image: [],
      bullet: [
        "Chapter별 프로젝트 및 Capstone프로젝트를 멘토의 지도하에 진행",

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
      title: "UNIST 기계및신소재공학부 졸업",
      period: "2010.3 - 2016.2",
      description:
        "UNIST 이공계 특성화 대학교",
      image: [],
      bullet: [
        "1트랙 : Mechanical system design & manufacturing",
        "2트랙 : Engineering system design",
      ]
    }
  ]
};

export default data;
