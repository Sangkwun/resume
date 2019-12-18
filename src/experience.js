import React from 'react';

var data = {
  experience: [
    {
      title: "Lomin: 딥러닝 엔지니어",
      period: "2018.08 - present",
      description:
        "딥러닝 모델 연구개발 및 딥러닝 엔진 서빙을 위한 서버, 웹 구축 및 최저화",
      image: [
      ],
      bullet: [
        <a href="http://faceforensic.lomin.ai">합성사진 판별 모델 개발 및 웹데모 구축</a>,
        <a href="http://lomin.ai/deidentify">얼굴 및 번호판 탐지 및 비식별화 솔루션 개발</a>,
        <a href="https://www.youtube.com/watch?v=rRa0f34ssNM&feature=youtu.be">"2019 AI Grand 챌린지 문자인식 트랙 1위 수상"</a>,
      ]
    },
    {
      title: "Knowru: 백엔드 엔지니어",
      period: "2018.05 - 2018.07",
      description:
        "Obejct detection 및 pedestrian attribute 모델, IoT Digital Signage 개발",
      image: [],
      bullet: [
        "Computer vision: OpenCV, Yolo, Inception 등을 활용하여 사람을 감지하고 나이와 성별을 추출해냄",
        "Oowa Signage: AWS IoT를 활용한 디지털사이니지 개발"
      ]
    },
    {
      title: "인스테드: '결제를 부탁해' 기획 및 개발",
      period: "2017.09 - 2018.04",
      description:
        "Unbanked를 위한 대신결제 서비스인 '결제를 부탁해' 기획 및 개발. NodeJS, Angular, ReactJS 를 이용하여 서버, 웹 등을 구현",
      image: [require("./images/2.gif"), require("./images/request.png")],
      bullet: [
        "서버: NodeJS Express, 서비스페이지: Angular JS, 관리자페이지: React JS"
      ]
    },
    {
      title: "구일도시: 문학자판기 제품 개발",
      period: "2017.07 - 2017.09",
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
      period: " 2016.02 - 2017.08",
      description:
        "상용차 공압브레이크의 제어 및 설계.기술개발 프로젝트 진행 경험 및 제동 관련 시뮬레이션을 Visual Basic으로 제작하여 활용",
      image: [require("./images/4.jpeg"), require("./images/brake.gif")],
      bullet: [
        "HILS(Hardware in loop system) 시뮬레이션 장비 설계",
        "국내, 중국 차종 설계",
        "기술개발 프로젝트 PM"
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
      period: "2014.12 - 2015.09",
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
      period: "2014.12 - 2015.08",
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
      period: "2014.06 - 2014.08",
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
      title: "Kaggle study 및 Competition Expert 달성",
      periodd: "2019.06 - 2019.08",
      description: "iMet collection, Free sound audio tagging 등의 메달획득을 통해 Competition Expert달성(Highest Rank 2005)",
      bullet: [
        <a href="https://www.kaggle.com/sankwun">Kaggle Profile</a>
      ]
    },
    {
      title: "Face landmark detection을 통한 웃음 참기",
      period: "2019.02 - 2019.03",
      description: "js기반 모델 inference 및 입의 랜드마크를 기반으로 웃음 감지",
      bullet: [
        <a href="https://github.com/tensorflow/tfjs/pull/1182">Tensorflow.js를 사용한 프로젝트로 등록되어 Contribute</a>,
        <a href="http://trynottolaugh.net/">Try not to laugh 웹사이트</a>
      ]
    },
    {
      title: "Keras로 구현한 Resnet",
      period: "2019.07 - 2019.08",
      description: "Short connection의 Residual block의 유무의 효과를 비교",
      image: [
        require("./images/resnet.png"),
        require("./images/training.png"),
        require("./images/validating.png")
      ],
      bullet: [
        "Short connection의 Residual block의 효과를 cifar-10을 통해서 비교",
        "Orange line: with short connection, Blue line: without short connection",
        <a href="https://github.com/Sangkwun/Resnet">Link to Github</a>
      ]
    },
    {
      title: "Tensorflow로 구현한 Alexnet과 Flower classification",
      period: "2018.06 - 2018.07",
      description: "Deep network의 시초격인 Alexnet을 tensorflow로 구현",
      image: [
        require("./images/alexnet.jpeg"),
        require("./images/flower.jpg")
      ],
      bullet: [
        "Kaggle의 flower recognition dataset을 학습 및 테스트를 진행해봄.",
        "5가지 종류의 꽃(chamomile, tulip, rose, sunflower, dandelion)을 분류",
        <a href="https://github.com/Sangkwun/Alexnet">Link to Github</a>
      ]
    },
    {
      title: "이미지를 통한 카페 추천",
      period: "2018.03 - 2018.04",
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
      period: "2018.01 - 2018.02",
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
      period: "2015.03 - 2015.07",
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
      title: "Udacity: 머신러닝을 이용한 매장 판매량 예측",
      period: "2017.11 - 2017.12",
      description:
        "에콰도르의 favorita체인점의 데이터를 분석하여 매장의 판매량을 예측",
      image: [require("./images/ud_capstone_1.png"), require("./images/ud_capstone_2.png")],
      bullet: [
        <a href="https://drive.google.com/file/d/1MGNa3aePvLgWKybcal1IMoREtPX6pEfR/view?usp=sharing">
          Capstone Project : Sales forecasting with Machine learning
        </a>
      ]
    },
    {
      title: "Udacity: 딥러닝을 이용한 견종 분류하기",
      period: "2017.09 - 2017.10",
      description:
        "얼굴을 감지하여 사람인지 개인지 구분한 후 얼굴을 어떤 견종인지 분류",
      image: [require("./images/dog.jpg")],
      bullet: [
        <a href="https://github.com/Sangkwun/dog_breed/blob/master/dog_app.ipynb">
          Deep Learning : Dog Breed Classifier
        </a>
      ]
    },
    {
      title: "Udacity: 강화학습을 통해 스마트택시 만들기",
      period: "2017.08 - 2017.09",
      description: "교통신호 체계를 Q-Learning을 통해서 학습",
      image: [require("./images/smartcab1.png"), require("./images/smartcab2.png")],
      bullet: [
        <a href="https://github.com/Sangkwun/smartcab">
          Train a Smartcab to Drive with Reinforcement Learning
        </a>
      ]
    },
    {
      title: "Udacity: 비지도학습을 이용한 고객군 분류하기",
      period: "2017.07 - 2017.08",
      description:
        "고객군을 분석하여 새로운 정책을 적용할 경우 적합한 고객군을 도출함",
      image: [require("./images/clust1.png"), require("./images/clust2.png")],
      bullet: [
        <a href="https://github.com/Sangkwun/customer_segments/blob/master/customer_segments.ipynb">
          Creating Customer Segments with Unsupervised machine learning
        </a>
      ]
    },
    {
      title: "Udacity: 지도학습을 통해 기부자를 찾기 위한 개인 수입 분석",
      period: "2017.05 - 2017.06",
      description:
        "두가지 클래스로 사람의 수입에대해 분석하여 일정 수입의 이상인 경우에 기부 홍보 메일을 보내도록 판단",
      image: [require("./images/donor1.png"), require("./images/donor2.png")],
      bullet: [
        <a href="https://github.com/Sangkwun/finding_donors/blob/master/finding_donors.ipynb">
          Finding donors for CharityML
        </a>
      ]
    },
    {
      title: "Udacity: 보스톤 집값 예측하기",
      period: "2017.03 - 2017.04",
      description:
        "보스톤 집값 데이터를 기반으로 머신러닝 기술을 활용하여 주어진 집에 대한 집값을 예측",
      image: [],
      bullet: [
        <a href="https://github.com/Sangkwun/boston_housing/blob/master/boston_housing.ipynb">
          Predicting Boston Housing Prices with Machine learning
        </a>
      ]
    },
    {
      title: "UNIST 기계및신소재공학부 졸업",
      period: "2010.03 - 2016.02",
      description: "UNIST 이공계 특성화 대학교",
      image: [],
      bullet: [
        "1트랙 : Mechanical system design & manufacturing",
        "2트랙 : Engineering system design"
      ]
    }
  ]
};

export default data;
