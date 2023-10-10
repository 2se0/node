const bestSellerList = {
  title : '국내 도서 종합 베스트',
  list : [ 
  {
    bid:100,
    //title : '종합 베스트 셀러',
    bname:'퓨처 셀프',
    bname_comment:'현재와 미래가 달라지는 놀라운 혁명',
    author:'벤저민하디',
    translator:'최은아',
    publisher :'상상스퀘어',
    pdate :'2023년 8월',
    price:'19800',
    dc:10
  },
  {
    bid:111,
    //title : '종합 베스트 셀러', 
    bname:'트렌드 코리아 2024',
    bname_comment:'[ 양장 ]',
    author:'송길영',
    translator:'',
    publisher :'교보문고',
    pdate :'2023년 09월',
    price:'18,900',
    dc:10
  },
  {
    bid:112,
    //title : '종합 베스트 셀러', 
    bname:'시대예보: 핵개인의 시대',
    bname_comment:'청룡을 타고 비상하는 2024를 기원하며!',
    author:'김난도, 전미영, 최지혜, 이수진, 권정윤 외 6명',
    translator:'',
    publisher :'미래의창',
    pdate :'2023년 10월',
    price:'17,100',
    dc:10
  },
  {
    bid:113,
    //title : '종합 베스트 셀러', 
    bname:'도시와 그 불확실한 벽',
    bname_comment:'',
    author:'무라카미 하루키',
    translator:'홍은주',
    publisher :'문학동네',
    pdate :'2023년 09월',
    price:'17,550',
    dc:10
  },
  {
    bid:114,
    //title : '종합 베스트 셀러', 
    bname:'세이노의 가르침 ',
    bname_comment:'',
    author:'세이노(SayNo)',
    translator:'',
    publisher :'데이원',
    pdate :'2023년 09월',
    price:'6,480',
    dc:10
  }
],
}

const realTimeBestsellerList = {
  title : '국내 도서 실시간 베스트',
  list :[ 
  {
    bid:101,
    //title : '실시간 베스트 셀러',
    bname:'ELLE 엘르 B형 (여성월간) : 11월 [2023]',
    bname_comment:'표지 : BTS 지민',
    author:'허스트중앙 편집부',
    translator:'',
    publisher :'HEARST JOONGANG',
    pdate :'2023년 10월',
    price:'12,250',
    dc:5
  },
  {
    bid:121,
    //title : '실시간 베스트 셀러',
    bname:'ELLE 엘르 A형 (여성월간) : 11월 [2023]',
    bname_comment:'표지 : BTS 지민',
    author:'허스트중앙 편집부',
    translator:'',
    publisher :'HEARST JOONGANG',
    pdate :'2023년 10월',
    price:'12,250',
    dc:5
  },
  {
    bid:122,
    //title : '실시간 베스트 셀러',
    bname:'ELLE 엘르 C형 (여성월간) : 11월 [2023]',
    bname_comment:'표지 : BTS 지민',
    author:'허스트중앙 편집부',
    translator:'',
    publisher :'HEARST JOONGANG',
    pdate :'2023년 10월',
    price:'12,250',
    dc:5
  },
  {
    bid:123,
    //title : '실시간 베스트 셀러',
    bname:'태민 (TAEMIN) - 미니앨범 4집 : Guilty [Box Ver.]',
    bname_comment:'표지 : BTS 지민',
    author:'태민',
    translator:'',
    publisher :'Kakao Entertainment',
    pdate :'2023년 10월',
    price:'22,300',
    dc:19
  },
  {
    bid:124,
    //title : '실시간 베스트 셀러',
    bname:'태민 (TAEMIN) - 미니앨범 4집 : Guilty [SMini Ver.](스마트앨범)',
    bname_comment:'표지 : BTS 지민',
    author:'태민',
    translator:'',
    publisher :'Kakao Entertainment',
    pdate :'2023년 10월',
    price:'12,600',
    dc:19
  },
],
}

const dayBestsellerList = {
  title : '국내 도서 일간 베스트',
  list :[ 
  {
    bid:102,
    //title : '종합 베스트 셀러',
    bname:'퓨처 셀프',
    bname_comment:'현재와 미래가 달라지는 놀라운 혁명',
    author:'벤저민하디',
    translator:'최은아',
    publisher :'상상스퀘어',
    pdate :'2023년 8월',
    price:'19800',
    dc:10
  }, 
  {
    bid:131,
    //title : '종합 베스트 셀러', 
    bname:'트렌드 코리아 2024',
    bname_comment:'[ 양장 ]',
    author:'송길영',
    translator:'',
    publisher :'교보문고',
    pdate :'2023년 09월',
    price:'18,900',
    dc:10
  },
  {
    bid:132,
    //title : '종합 베스트 셀러', 
    bname:'시대예보: 핵개인의 시대',
    bname_comment:'청룡을 타고 비상하는 2024를 기원하며!',
    author:'김난도, 전미영, 최지혜, 이수진, 권정윤 외 6명',
    translator:'',
    publisher :'미래의창',
    pdate :'2023년 10월',
    price:'17,100',
    dc:10
  },
  {
    bid:133,
    //title : '종합 베스트 셀러', 
    bname:'세이노의 가르침 ',
    bname_comment:'',
    author:'세이노(SayNo)',
    translator:'',
    publisher :'데이원',
    pdate :'2023년 09월',
    price:'6,480',
    dc:10
  },
  {
    bid:134,
    //title : '종합 베스트 셀러', 
    bname:'도시와 그 불확실한 벽',
    bname_comment:'청룡을 타고 비상하는 2024를 기원하며!',
    author:'김난도, 전미영, 최지혜, 이수진, 권정윤 외 6명',
    translator:'',
    publisher :'미래의창',
    pdate :'2023년 10월',
    price:'17,100',
    dc:10
  },
],
}

const monthBestsellerList = {
  title : '국내 도서 월간 베스트',
  list :[ 
  {
    bid:103,
    //title : '특가',
    bname:' 도시와 그 불확실한 벽',
    bname_comment:'',
    author:'무라카미 하루키',
    translator:'홍은주',
    publisher :'문학동네',
    pdate :'2023년 09월',
    price:'17550',
    dc:10
  },
  {
    bid:131,
    //title : '종합 베스트 셀러', 
    bname:'트렌드 코리아 2024',
    bname_comment:'[ 양장 ]',
    author:'송길영',
    translator:'',
    publisher :'교보문고',
    pdate :'2023년 09월',
    price:'18,900',
    dc:10
  },
  {
    bid:132,
    //title : '종합 베스트 셀러', 
    bname:'시대예보: 핵개인의 시대',
    bname_comment:'청룡을 타고 비상하는 2024를 기원하며!',
    author:'김난도, 전미영, 최지혜, 이수진, 권정윤 외 6명',
    translator:'',
    publisher :'미래의창',
    pdate :'2023년 10월',
    price:'17,100',
    dc:10
  },
  {
    bid:133,
    //title : '종합 베스트 셀러', 
    bname:'세이노의 가르침 ',
    bname_comment:'',
    author:'세이노(SayNo)',
    translator:'',
    publisher :'데이원',
    pdate :'2023년 09월',
    price:'6,480',
    dc:10
  },
  {
    bid:134,
    //title : '종합 베스트 셀러', 
    bname:'도시와 그 불확실한 벽',
    bname_comment:'청룡을 타고 비상하는 2024를 기원하며!',
    author:'김난도, 전미영, 최지혜, 이수진, 권정윤 외 6명',
    translator:'',
    publisher :'미래의창',
    pdate :'2023년 10월',
    price:'17,100',
    dc:10
  },
],
}

const hotPriceBestsellerList = {
  title : '국내 도서 특가',
  list :[ 
  {
    bid:104,
    //title : '스테디셀러',
    bname:'  2024년 애드워드 호퍼 ‘고독이 나를 위로한다’ 탁상달력',
    bname_comment:' [ 스프링북 ]',
    author:'편집부 저',
    translator:'',
    publisher :'북엔',
    pdate :'2023년 09월',
    price:'6900',
    dc:40
  },
  {
    bid:131,
    //title : '종합 베스트 셀러', 
    bname:'트렌드 코리아 2024',
    bname_comment:'[ 양장 ]',
    author:'송길영',
    translator:'',
    publisher :'교보문고',
    pdate :'2023년 09월',
    price:'18,900',
    dc:10
  },
  {
    bid:132,
    //title : '종합 베스트 셀러', 
    bname:'시대예보: 핵개인의 시대',
    bname_comment:'청룡을 타고 비상하는 2024를 기원하며!',
    author:'김난도, 전미영, 최지혜, 이수진, 권정윤 외 6명',
    translator:'',
    publisher :'미래의창',
    pdate :'2023년 10월',
    price:'17,100',
    dc:10
  },
  {
    bid:133,
    //title : '종합 베스트 셀러', 
    bname:'세이노의 가르침 ',
    bname_comment:'',
    author:'세이노(SayNo)',
    translator:'',
    publisher :'데이원',
    pdate :'2023년 09월',
    price:'6,480',
    dc:10
  },
  {
    bid:134,
    //title : '종합 베스트 셀러', 
    bname:'도시와 그 불확실한 벽',
    bname_comment:'청룡을 타고 비상하는 2024를 기원하며!',
    author:'김난도, 전미영, 최지혜, 이수진, 권정윤 외 6명',
    translator:'',
    publisher :'미래의창',
    pdate :'2023년 10월',
    price:'17,100',
    dc:10
  },
],
}

const steadysellerList = {
  title : '국내 도서 스테디셀러',
  list : [ 
  {
    bid:105,
    //title : '종합 베스트 셀러',
    bname:' 불편한 편의점 ',
    bname_comment:' [ 벚꽃 에디션 ]',
    author:'김호연 저',
    translator:'',
    publisher :'나무옆의자',
    pdate :'2021년 04월',
    price:'12600',
    dc:10
  },
  {
    bid:131,
    //title : '종합 베스트 셀러', 
    bname:'트렌드 코리아 2024',
    bname_comment:'[ 양장 ]',
    author:'송길영',
    translator:'',
    publisher :'교보문고',
    pdate :'2023년 09월',
    price:'18,900',
    dc:10
  },
  {
    bid:132,
    //title : '종합 베스트 셀러', 
    bname:'시대예보: 핵개인의 시대',
    bname_comment:'청룡을 타고 비상하는 2024를 기원하며!',
    author:'김난도, 전미영, 최지혜, 이수진, 권정윤 외 6명',
    translator:'',
    publisher :'미래의창',
    pdate :'2023년 10월',
    price:'17,100',
    dc:10
  },
  {
    bid:133,
    //title : '종합 베스트 셀러', 
    bname:'세이노의 가르침 ',
    bname_comment:'',
    author:'세이노(SayNo)',
    translator:'',
    publisher :'데이원',
    pdate :'2023년 09월',
    price:'6,480',
    dc:10
  },
  {
    bid:134,
    //title : '종합 베스트 셀러', 
    bname:'도시와 그 불확실한 벽',
    bname_comment:'청룡을 타고 비상하는 2024를 기원하며!',
    author:'김난도, 전미영, 최지혜, 이수진, 권정윤 외 6명',
    translator:'',
    publisher :'미래의창',
    pdate :'2023년 10월',
    price:'17,100',
    dc:10
  },
],
}


export {
  bestSellerList,
  realTimeBestsellerList,
  dayBestsellerList,
  monthBestsellerList,
  hotPriceBestsellerList,
  steadysellerList
}
