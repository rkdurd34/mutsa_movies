const express = require('express');
const bodyParser = require('body-parser');
const app = express();



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/mutsa", (req, res, next) => {
  const data = {
    "movies": [
      {
        "title_kor": "블랙 위도우",
        "title_eng": "Black Widow, 2021",
        "postr_url": "https://movie-phinf.pstatic.net/20210617_272/1623906098516QjpeS_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "9.09",
        "rating_cri": "6.70",
        "rating_net": "8.50",
        "genre": "액션,모험,SF",
        "showtimes": "134분",
        "release_date": "2021.07.07 개봉",
        "rate": "12세 관람가",
        "summary": "어벤져스의 히어로 블랙 위도우, ‘나타샤 로마노프’ (스칼렛 요한슨)는\n 자신의 과거와 연결된 레드룸의 거대한 음모와 실체를 깨닫게 된다.\n \n 상대의 능력을 복제하는 빌런 ‘태스크마스터’와 새로운 위도우들의 위협에 맞서\n 목숨을 건 반격을 시작하는 ‘나타샤’는 스파이로 활약했던 자신의 과거 뿐 아니라,\n 어벤져스가 되기 전 함께했던 동료들을 마주해야만 하는데…\n \n 폭발하는 리얼 액션 카타르시스!\n MCU의 새로운 시대를 시작할 첫 액션 블록버스터를 만끽하라!",
        "staff": [
          {
            "name": "레이 윈스턴",
            "role": "조연",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000012%2FPM1282_172056_000.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "랑종",
        "title_eng": "The Medium, 2021",
        "postr_url": "https://movie-phinf.pstatic.net/20210630_28/1625030138001Xq38w_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "7.50",
        "rating_cri": "6.64",
        "rating_net": "5.37",
        "genre": "공포,스릴러,드라마",
        "showtimes": "131분",
        "release_date": "2021.07.14 개봉",
        "rate": "청소년 관람불가",
        "summary": "태국 북동부 ‘이산’ 지역 낯선 시골 마을.\n 집 안, 숲, 산, 나무, 논밭까지,\n 이 곳의 사람들은\n 모든 것에 혼이 깃들어 있다고 믿는다.\n \n 가문의 대를 이어 조상신 ‘바얀 신’을 모시는 랑종(무당) ‘님’은\n 조카 ‘밍’의 상태가 심상치 않음을 직감한다.\n 날이 갈수록 이상 증세가 점점 심각해지는 ‘밍’.\n 무당을 취재하기 위해 ‘님’과 동행했던 촬영팀은\n 신내림이 대물림되는 순간을 포착하기 위해\n ‘밍’과 ‘님’, 그리고 가족에게 벌어지는 미스터리한 현상을 카메라에 담기 시작한다.\n \n 신내림이 대물림되는 무당 가문\n 피에 관한 세 달간의 기록",
        "staff": [
          {
            "name": "야사카 차이쏜",
            "role": "주연",
            "image_url": "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png"
          }
        ]
      },
      {
        "title_kor": "이스케이프 룸 2: 노 웨이 아웃",
        "title_eng": "Escape Room: Tournament of Champions, 2021",
        "postr_url": "https://movie-phinf.pstatic.net/20210707_1/1625644082274E6g2t_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "8.88",
        "rating_cri": "6.00",
        "rating_net": "8.50",
        "genre": "액션,공포,스릴러",
        "showtimes": "88분",
        "release_date": "2021.07.14 개봉",
        "rate": "15세 관람가",
        "summary": "출구 없는 탈출 게임에서 가까스로 살아남은 ‘조이’와 ‘벤’.\n 게임을 설계한 의문의 조직 ‘미노스’의 실체를 밝히기 위해\n 뉴욕에 도착한 두 사람은 정체불명의 남자에게 휘말려 지하철에 갇히고 만다.\n \n 순간 다른 칸과 분리된 열차 안에는 초고압 전류가 흐르기 시작하고,\n 그곳에 있는 6명 모두 게임의 생존자라는 것이 밝혀진다.\n 목숨을 건 탈출 게임이 다시 시작됐음을 직감한 그들은\n 뉴욕을 배경으로 벌어지는 극한의 상황에서\n 살아남기 위한 사투를 벌이는데….",
        "staff": [
          {
            "name": "토마스 코쿼렐",
            "role": "조연",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000003754%2FPM375407_173427_000.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "스페이스 잼: 새로운 시대",
        "title_eng": "Space Jam: A New Legacy, 2021",
        "postr_url": "https://movie-phinf.pstatic.net/20210708_257/1625728215707Oi5DA_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "9.00",
        "rating_cri": "4.50",
        "rating_net": "8.02",
        "genre": "애니메이션,모험,코미디",
        "showtimes": "115분",
        "release_date": "2021.07.15 개봉",
        "rate": "전체 관람가",
        "summary": "농구를 하기 싫다며 투정하는 아들이 갑자기 사라지고,\n 매트릭스 같은 공간으로 빨려 들어간 아빠 킹 제임스 앞에 나타난 도메인의 왕은\n 아들을 만나려면 자신과의 농구 경기에서 이겨야 한다는 것!\n 워너 3000 엔터테인먼트 서버버스의 ‘툰 월드’에 떨어진 킹 제임스는 아들을 되찾기 위해\n 루니 툰 캐릭터들과 드림팀을 결성, 군 스쿼드와 시합을 펼치는데…\n 놀랄 준비 완료? 지금부터 게임의 룰이 바뀐다, 레디 플레이어 원!",
        "staff": [
          {
            "name": "제프 버그먼",
            "role": "주연",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000002679%2FPM267973_161853_000.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "발신제한",
        "title_eng": "HARD HIT, 2021",
        "postr_url": "https://movie-phinf.pstatic.net/20210609_138/1623220637715dKMK5_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "8.00",
        "rating_cri": "5.71",
        "rating_net": "6.77",
        "genre": "드라마,스릴러",
        "showtimes": "94분",
        "release_date": "2021.06.23 개봉",
        "rate": "15세 관람가",
        "summary": "은행센터장 성규(조우진)는 아이들을 차에 태우고 출발한 평범한 출근길에\n 한 통의 발신번호 표시제한 전화를 받는다.\n 전화기 너머 의문의 목소리는 차에 폭탄이 설치되어 있고,\n 자리에서 일어날 경우 폭탄이 터진다고 경고하는데…\n \n 의문의 전화를 보이스피싱이라고 대수롭지 않게 여기던 성규는\n 곧 회사 동료의 차가 같은 방식으로 폭파되는 것을 바로 눈 앞에서 목격하고,\n 졸지에 부산 도심 테러의 용의자가 되어 경찰의 추격을 받게 된다.\n \n 내리면 폭탄이 터지는 절체절명의 순간,\n 경찰의 추격 속 의문의 발신자와의 전화마저 끊을 수 없는 상황에 놓이게 되는데…!",
        "staff": [
          {
            "name": "김지호",
            "role": "조연",
            "image_url": "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F201908%2F20190802122943919.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "오필리아",
        "title_eng": "Ophelia, 2018",
        "postr_url": "https://movie-phinf.pstatic.net/20210714_140/1626240346885Dpe03_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "6.00",
        "rating_cri": "5.80",
        "rating_net": "8.36",
        "genre": "드라마,멜로/로맨스",
        "showtimes": "106분",
        "release_date": "2021.07.14 개봉",
        "rate": "15세 관람가",
        "summary": "현명함과 자유로움을 지닌 오필리아는 왕비 거트루드의 총애를 받아 왕실의 시녀가 된다.\n 왕실의 규율에 얽매이지 않는 오필리아에게 첫눈에 반한 왕자 햄릿은 운명적 사랑에 빠지지만\n 신분의 격차로 인해 두 사람의 사랑은 위기를 맞는다.\n 선왕의 갑작스런 죽음으로 왕국은 혼란에 빠지고,\n 오필리아는 이 사건의 배후에 커다란 음모가 감춰져 있음을 알게 되는데…",
        "staff": [
          {
            "name": "톰 펠튼",
            "role": "조연",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000081%2FPM8196_163835_000.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "크루엘라",
        "title_eng": "Cruella, 2021",
        "postr_url": "https://movie-phinf.pstatic.net/20210512_139/1620799657168vGIqq_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "9.32",
        "rating_cri": "6.63",
        "rating_net": "9.25",
        "genre": "드라마,범죄,코미디",
        "showtimes": "133분",
        "release_date": "2021.05.26 개봉",
        "rate": "12세 관람가",
        "summary": "처음부터 난 알았어. 내가 특별하단 걸\n 그게 불편한 인간들도 있겠지만 모두의 비위를 맞출 수는 없잖아?\n 그러다 보니 결국, 학교를 계속 다닐 수가 없었지\n \n 우여곡절 런던에 오게 된 나, 에스텔라는 재스퍼와 호레이스를 운명처럼 만났고\n 나의 뛰어난 패션 감각을 이용해 완벽한 변장과 빠른 손놀림으로 런던 거리를 싹쓸이 했어\n \n 도둑질이 지겹게 느껴질 때쯤, 꿈에 그리던 리버티 백화점에 낙하산(?)으로 들어가게 됐어\n 거리를 떠돌았지만 패션을 향한 나의 열정만큼은 언제나 진심이었거든\n \n 근데 이게 뭐야, 옷에는 손도 못 대보고 하루 종일 바닥 청소라니\n 인내심에 한계를 느끼고 있을 때, 런던 패션계를 꽉 쥐고 있는 남작 부인이 나타났어\n 천재는 천재를 알아보는 법! 난 남작 부인의 브랜드 디자이너로 들어가게 되었지\n \n 꿈을 이룰 것 같았던 순간도 잠시, 세상에 남작 부인이 ‘그런 사람’이었을 줄이야…\n \n 그래서 난 내가 누군지 보여주기로 했어\n 잘가, 에스텔라\n \n 난 이제 크루엘라야!",
        "staff": [
          {
            "name": "에밀리 비샴",
            "role": "조연",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000001254%2F00000125402-t.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "꽃다발 같은 사랑을 했다",
        "title_eng": "花束みたいな恋をした, We Made a Beautiful Bouquet, 2021",
        "postr_url": "https://movie-phinf.pstatic.net/20210615_3/1623748505590DVbIq_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "7.71",
        "rating_cri": "6.67",
        "rating_net": "8.67",
        "genre": "멜로/로맨스",
        "showtimes": "123분",
        "release_date": "2021.07.14 개봉",
        "rate": "12세 관람가",
        "summary": "“시작은 막차였다”\n 집으로 가는 막차를 놓친 스물한 살 대학생 ’무기’와 ‘키누’는\n 첫차를 기다리며 함께 시간을 보내게 된다.\n 좋아하는 책부터 영화, 신고 있는 신발까지 모든 게 꼭 닮은 두 사람은\n 수줍은 고백과 함께 연애를 시작하고 매일매일 행복한 시간을 쌓아간다.\n \n “내 인생의 목표는 너와의 현상 유지야!”\n 하지만 대학 졸업과 함께 취업 준비에 나선 두 사람은 점점 서로에게 소원해지고\n 꿈과 현실 사이의 거리 만큼 마음의 거리도 멀어지기 시작하는데...",
        "staff": [
          {
            "name": "칸 하나에",
            "role": "조연",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000533%2F00000053333-t.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "킬러의 보디가드 2",
        "title_eng": "Hitman's Wife's Bodyguard, 2021",
        "postr_url": "https://movie-phinf.pstatic.net/20210624_286/1624496856988kAD9f_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "7.87",
        "rating_cri": "5.33",
        "rating_net": "7.36",
        "genre": "액션,코미디,범죄",
        "showtimes": "117분",
        "release_date": "2021.06.23 개봉",
        "rate": "청소년 관람불가",
        "summary": "미치광이 킬러 ‘다리우스’의 경호를 맡은 후\n 매일 밤 그의 악몽을 꾸는 보디가드 ‘마이클’ 앞에 나타난 무대포 직진녀 ‘소니아’\n 남편 ‘다리우스’가 납치되었다며 다짜고짜 그를 구하러 가야 한다고 하는데…\n \n 한 명도 버거운데 그의 와이프까지 플러스?!\n 설상가상으로 유럽 전역을 위기로 몰아넣는 사건들이 연속적으로 터지고\n 인터폴의 비밀스러운 의뢰까지 추가되는데..\n \n 2배 더 강력한, 2배 더 골때리는, 2배 더 커진\n 모두가 기다린 1+1 트리플 환장 액션 블록버스터가 온다!",
        "staff": [
          {
            "name": "안토니오 반데라스",
            "role": "조연",
            "image_url": "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F42%2F201701091607588221.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "우리는 매일매일",
        "title_eng": "Us, Day by Day, 2019",
        "postr_url": "https://movie-phinf.pstatic.net/20210614_156/1623649784985R6zzJ_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "9.75",
        "rating_cri": "6.33",
        "rating_net": "8.07",
        "genre": "다큐멘터리",
        "showtimes": "75분",
        "release_date": "2021.06.30 개봉",
        "rate": "12세 관람가",
        "summary": "미투운동이 한창이던 어느 날, 옛 친구들이 떠올랐다\n 90년대 말 함께 페미니즘을 외쳤던 친구들은 지금 어떻게 살고 있을까.\n 삶터, 일터, 가족형태 모두 다른 친구들을 찾아가 던진 질문 하나.\n “한국사회에서 페미니스트로 산다는 건 뭘까?”\n \n 그때나 지금이나 세상을 향해 목소리를 내는\n 아직 끝나지 않은 우리들의 이야기가 다시 시작된다!",
        "staff": [
          {
            "name": "강정임",
            "role": "주연",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004501%2FPM450153_174540_000.png&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "와인 패밀리",
        "title_eng": "From the Vine, 2019",
        "postr_url": "https://movie-phinf.pstatic.net/20210609_210/1623214576414CO9Bm_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "평점 없",
        "rating_cri": "4.80",
        "rating_net": "9.75",
        "genre": "드라마,코미디,멜로/로맨스",
        "showtimes": "94분",
        "release_date": "2021.07.15 개봉",
        "rate": "12세 관람가",
        "summary": "일만 하며 바쁘게 살아온 캐나다의 자동차 회사 CEO 마크.\n \n 문득 남은 인생을 어떻게 살아야 할지 고민에 빠진 그는 자신의 신념에 반대하는 회사를 그만두고 고향인 이탈리아 아체렌자로 떠난다. 아름다운 작은 마을에서 순수했던 어린 시절 추억을 떠올리던 마크는 할아버지가 남긴 포도밭을 되살리고 와인을 만들기로 결심하지만, 그의 무모한 도전에 마을 주민들은 꿈 깨라며 만류하고 가족들의 반대에도 부딪히는데…\n \n 쉼표가 필요한 당신을 위한 달콤한 인생 리셋 여행이 시작된다!",
        "staff": [
          {
            "name": "마르코 레오나르디",
            "role": "주연",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000060%2F00000006038-t.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "루카",
        "title_eng": "Luca, 2021",
        "postr_url": "https://movie-phinf.pstatic.net/20210603_104/1622684157296bKxr2_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "9.38",
        "rating_cri": "6.60",
        "rating_net": "9.05",
        "genre": "애니메이션,모험,코미디",
        "showtimes": "95분",
        "release_date": "2021.06.17 개봉",
        "rate": "전체 관람가",
        "summary": "이탈리아 리비에라의 아름다운 해변 마을,\n 바다 밖 세상이 궁금하지만, 두렵기도 한 호기심 많은 소년 '루카'\n \n 자칭 인간세상 전문가 ‘알베르토’와 함께 모험을 감행하지만,\n 물만 닿으면 바다 괴물로 변신하는 비밀 때문에 아슬아슬하기만 하다.\n \n 새로운 친구 ‘줄리아’와 함께 젤라또와 파스타를 실컷 먹고\n 스쿠터 여행을 꿈꾸는 여름은 그저 즐겁기만 한데…\n \n 과연 이들은 언제까지 비밀을 감출 수 있을까?\n \n 함께라서 행복한 여름,\n 우리들의 잊지 못할 모험이 시작된다!",
        "staff": [
          {
            "name": "마야 루돌프",
            "role": "조연",
            "image_url": "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F107%2F201710181718088871.png&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "미드나이트",
        "title_eng": "2020",
        "postr_url": "https://movie-phinf.pstatic.net/20210610_18/16233093429042QIXx_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "8.60",
        "rating_cri": "4.33",
        "rating_net": "5.17",
        "genre": "스릴러",
        "showtimes": "103분",
        "release_date": "2021.06.30 개봉",
        "rate": "15세 관람가",
        "summary": "청각장애를 가진 '경미'는 귀가하던 길에 피를 흘리며 쓰러져 있는 '소정'을 목격하고,\n 그녀를 도와주려다 연쇄살인마 '도식'의 새로운 타겟이 된다.\n \n 살고 싶다는 의지로 미친듯이 도망치는 '경미' 하지만 살인마의 발소리조차 들을 수 없고,\n '도식'은 또 다른 얼굴로 나타나 경미를 위협하는데...\n \n 한밤중, 서울 한복판에서 펼쳐지는 연쇄살인마와 그의 타겟이 된 '경미'의 멈출 수 없는 추격전!\n 극강의 음소거 추격 스릴러가 온다!",
        "staff": [
          {
            "name": "김혜윤",
            "role": "주연",
            "image_url": "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202003%2F2020032014473689.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "메이드 인 루프탑",
        "title_eng": "Made On The Rooftop, 2020",
        "postr_url": "https://movie-phinf.pstatic.net/20210624_289/16245014547204cVKw_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "9.14",
        "rating_cri": "5.83",
        "rating_net": "8.17",
        "genre": "드라마,멜로/로맨스,코미디",
        "showtimes": "87분",
        "release_date": "2021.06.23 개봉",
        "rate": "15세 관람가",
        "summary": "“나도 쿨해질거야 이제!”\n \n 3년 동안 지지고 볶은 남자친구 ‘정민’에게 가.짜. 이별 통보를 한 지\n 30분 만에 한 개의 캐리어와 함께 집에서 쫓겨난 밀.당.실.패 취준생 ‘하늘’.\n 이별 1일차, 갈 곳 없어 무작정 쳐들어간 친구 ‘봉식’의 옥탑방에서\n 헤어진 연인과 쿨하게 밀당을 이어보는데…\n \n “내가 하는 건 다 힙해!”\n \n BJ를 하며 번 돈으로 플.렉.스.하며 원룸보다 작은 옥탑방을 명품샵으로 꾸미고\n ‘마흔 전에 죽기’를 목표로 세운 채 오늘만 사는 자.유.영.혼. 힙스터 ‘봉식’.\n 썸 1일차, 연애 따윈 필요 없다고 다짐 또 다짐했건만\n 적극적으로 대시하는 썸남에게 자꾸만 눈이 가는데…\n \n 쿨하고 힙한 청춘들의 하이텐션 썸머 로맨스가 시작된다!",
        "staff": [
          {
            "name": "이정은",
            "role": "주연",
            "image_url": "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202001%2F20200122131108914.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "내언니전지현과 나",
        "title_eng": "People in Elancia, 2020",
        "postr_url": "https://movie-phinf.pstatic.net/20201119_223/1605770759962Bq1oi_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "9.21",
        "rating_cri": "6.67",
        "rating_net": "9.14",
        "genre": "다큐멘터리",
        "showtimes": "86분",
        "release_date": "2020.12.03 개봉",
        "rate": "12세 관람가",
        "summary": "과거 국내 최대 이용자 수를 자랑했던 클래식 RPG 게임 '일랜시아'\n 현재는 운영진에 버림받은 대한민국 대표 망겜!\n \n 감독은 매크로와 해킹이 난무하는 무법천지 게임 세계에\n 여전히 남아있는 유저들에게 질문을 던진다.\n \n “일랜시아 왜 하세요?”",
        "staff": [
          {
            "name": "박윤진",
            "role": "주연",
            "image_url": "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202012%2F20201205132643727.png&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "트립 투 그리스",
        "title_eng": "The Trip to Greece, 2020",
        "postr_url": "https://movie-phinf.pstatic.net/20210614_272/1623638971526LBra1_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "평점 없",
        "rating_cri": "6.00",
        "rating_net": "6.58",
        "genre": "코미디,드라마",
        "showtimes": "103분",
        "release_date": "2021.07.08 개봉",
        "rate": "15세 관람가",
        "summary": "영국 유명 배우 스티브와 롭은 ‘옵저버’ 매거진의 제안으로\n 6일 동안의 그리스 여행을 떠난다.\n 터키 아소스를 시작으로 그리스 아테네, 이타카까지 [오디세이] 속\n 오디세우스의 발자취를 따라가는 낭만적인 여행을 통해\n 인생과 예술, 사랑에 대한 유쾌한 대화를 나눈다.",
        "staff": [
          {
            "name": "롭 브라이든",
            "role": "주연",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000706%2F00000070636-t.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "인 더 하이츠",
        "title_eng": "In the Heights, 2020",
        "postr_url": "https://movie-phinf.pstatic.net/20210601_180/1622529931896LLAeY_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "7.16",
        "rating_cri": "6.83",
        "rating_net": "8.29",
        "genre": "뮤지컬",
        "showtimes": "142분",
        "release_date": "2021.06.30 개봉",
        "rate": "12세 관람가",
        "summary": "'우스나비'에겐 도미니카 해변에 아버지의 상점을 다시 열고 싶은 꿈이 있다.\n 어린 시절부터 좋아한 친구 바네사에게 아직 고백 한 번 못한 채 망설이며 지내고 있다.\n '바네사'는 동네 미용실에서 패션 디자이너가 되기 위해\n 도시로 나가려다 예기치 못한 사랑에 빠진다.\n 스탠포드 대학에 진학한 '니나'는 가족들과 마을 사람들의 기대가 부담스럽고,\n 연인 '베니'는 니나의 아버지이자 사장이 니나의 학비 마련을 위해\n 운수회사를 팔려고 한다는 사실을 알게 된다.\n 그러던 어느 날 우스나비 가게에서 복권 당첨자가 나오고,\n 하이츠의 모든 사람들은 저 마다의 행복한 미래를 꿈꾸는데...",
        "staff": [
          {
            "name": "스테파니 비트리즈",
            "role": "주연",
            "image_url": "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png"
          }
        ]
      },
      {
        "title_kor": "체르노빌 1986",
        "title_eng": "Kogda padali aisty, Chernobyl: Abyss, 2021",
        "postr_url": "https://movie-phinf.pstatic.net/20210610_257/1623310010472XGTly_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "8.18",
        "rating_cri": "4.50",
        "rating_net": "8.21",
        "genre": "액션,스릴러",
        "showtimes": "136분",
        "release_date": "2021.06.30 개봉",
        "rate": "12세 관람가",
        "summary": "1986년 4월 26일 오전 1시 24분\n 누구도 상상하지 못했던\n 체르노빌 원자력 발전소 폭발!\n \n 엄청난 위험에 노출된 줄도 모르는, 사람들\n 방사능에 피폭되어 쏟아지는, 환자들\n 그리고\n 전세계를 위협할 2차 폭발의 일촉즉발 상황\n \n 더 큰 재앙을 막고\n 소중한 사람들을 지키기 위해\n 생사를 넘어선 위대한 용기를 낸 이들의 진짜 이야기",
        "staff": [
          {
            "name": "니콜라이 코작",
            "role": "주연",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000003032%2FPM303247_172301_000.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "남매의 여름밤",
        "title_eng": "Moving On, 2019",
        "postr_url": "https://movie-phinf.pstatic.net/20200721_100/1595307510654a6eNC_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "9.02",
        "rating_cri": "7.83",
        "rating_net": "8.94",
        "genre": "드라마",
        "showtimes": "104분",
        "release_date": "2020.08.20 개봉",
        "rate": "전체 관람가",
        "summary": "방학 동안, 아빠와 함께 할아버지 집에서 지내게 된 남매 옥주와 동주,\n 그렇게 오래된 2층 양옥집에서의 여름이 시작되고\n 한동안 못 만났던 고모까지 합세하면서\n 기억에 남을 온 가족의 이야기가 펼쳐진다.\n \n 제24회 토론토릴아시안국제영화제 오슬러 최우수 장편 영화상 (2020)\n 제17회 홍콩아시안영화제 뉴탤런트상 (2020)\n 제38회 이탈리아토리노영화제 최고 작품상 (2020)",
        "staff": [
          {
            "name": "김상동",
            "role": "조연",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004386%2FPM438632_145414_000.png&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "콰이어트 플레이스 2",
        "title_eng": "A Quiet Place: Part II, 2020",
        "postr_url": "https://movie-phinf.pstatic.net/20210616_285/1623810005020XPJFm_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "8.79",
        "rating_cri": "6.50",
        "rating_net": "8.23",
        "genre": "스릴러",
        "showtimes": "97분",
        "release_date": "2021.06.16 개봉",
        "rate": "15세 관람가",
        "summary": "실체를 알 수 없는 괴생명체의 공격으로 일상의 모든 것이 사라진 세상,\n 아이들 대신 죽음을 선택한 아빠의 희생 이후 살아남은 가족들은 위험에 노출된다.\n 갓 태어난 막내를 포함한 아이들과 함께 소리 없는 사투를 이어가던 엄마 ‘에블린’은\n 살아남기 위해 새로운 은신처를 찾아 집 밖을 나서지만,\n 텅 빈 고요함으로 가득한 바깥은 더 큰 위험이 도사리고 있는데...",
        "staff": [
          {
            "name": "디몬 하운수",
            "role": "조연",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000160%2FPM16069_165940_000.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "빛나는 순간",
        "title_eng": "Everglow, 2020",
        "postr_url": "https://movie-phinf.pstatic.net/20210630_227/1625035301941FCenY_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "9.00",
        "rating_cri": "6.83",
        "rating_net": "8.46",
        "genre": "드라마",
        "showtimes": "95분",
        "release_date": "2021.06.30 개봉",
        "rate": "12세 관람가",
        "summary": "‘바다에서 숨 오래 참기’로 기네스북에 오른 제주 해녀 진옥(고두심)\n 성질도, 물질도 제주에서 그를 이길 사람이 없다.\n 진옥을 취재하기 위해 서울에서 내려온 다큐멘터리 PD 경훈(지현우)\n 하지만 진옥의 반응은 냉담하다.\n 경훈은 진옥의 마음을 열기 위해 그의 주위를 맴돌기 시작하고,\n 진옥은 바다에 빠진 경훈의 목숨을 구해준 이후\n 자신과 같은 상처를 가졌음을 알고 경훈에게 마음을 연다.\n 제주 그리고 해녀의 삶에 깊숙이 들어가게 된 경훈\n 그런 경훈을 통해 진옥은 생전 처음 느껴보는 감정들을 마주하기 시작하는데…\n 당신을 만나고 비로소 알게 된,\n 나의 가장 빛나는 순간",
        "staff": [
          {
            "name": "김중기",
            "role": "조연",
            "image_url": "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202007%2F2020072212255277.png&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "CCTV",
        "title_eng": "CCTV, 2020",
        "postr_url": "https://ssl.pstatic.net/static/movie/2012/06/dft_img203x290.png",
        "rating_aud": "9.00",
        "rating_cri": "",
        "rating_net": "9.24",
        "genre": "공포",
        "showtimes": "99분",
        "release_date": "2021.07.07 개봉",
        "rate": "15세 관람가",
        "summary": "유튜버에 의해 십 년 전 발생한 한 방송국의 잔인한 살상극의 진실이 밝혀진다는 내용의 공포영화",
        "staff": [
          {
            "name": "김낙균",
            "role": "조연",
            "image_url": "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202103%2F20210315021735342.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "노매드랜드",
        "title_eng": "Nomadland, 2020",
        "postr_url": "https://movie-phinf.pstatic.net/20210325_116/16166363029599OMXS_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "8.58",
        "rating_cri": "8.00",
        "rating_net": "8.46",
        "genre": "드라마",
        "showtimes": "108분",
        "release_date": "2021.04.15 개봉",
        "rate": "12세 관람가",
        "summary": "경제적 붕괴로 도시 전체가 무너진 후 홀로 남겨진 ‘펀’.(프란시스 맥도맨드)\n 추억이 깃든 도시를 떠나 작은 밴과 함께 한 번도 가보지 않은 낯선 길 위의 세상으로 떠난다.\n 그 곳에서 ‘펀’은 각자의 사연을 가진 노매드들을 만나게 되고,\n 광활한 자연과 길 위에서의 삶을 스스로 선택한 그들과 만나고 헤어지며\n 다시 살아가기 위한 여정을 시작하는데…",
        "staff": [
          {
            "name": "샬린 스완키",
            "role": "조연",
            "image_url": "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png"
          }
        ]
      },
      {
        "title_kor": "좀비크러쉬: 헤이리",
        "title_eng": "Zombie Crush in Heyri, 2021",
        "postr_url": "https://movie-phinf.pstatic.net/20210629_79/1624955458845GVSiY_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "3.00",
        "rating_cri": "4.67",
        "rating_net": "6.73",
        "genre": "코미디,액션",
        "showtimes": "119분",
        "release_date": "2021.06.30 개봉",
        "rate": "15세 관람가",
        "summary": "자고 일어나니 온 동네에 퍼진 좀비 바이러스!\n 살아남기 위해 고군분투하는 진선(공민정), 현아(이민지), 가연(박소진) 삼총사는\n 우연히 숨겨진 비리를 알게 되고 마을을 구하기 위해 용기를 내는데..\n \n 무더위 통쾌하게 날려버릴 NEW 코믹 액션 어드벤처가 온다!",
        "staff": [
          {
            "name": "김준식",
            "role": "조연",
            "image_url": "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202008%2F20200804022359221.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "자메이카의 소울: 이나 데 야드",
        "title_eng": "Inna de Yard - The Soul of Jamaica, 2019",
        "postr_url": "https://movie-phinf.pstatic.net/20210705_165/1625453128842qSXX0_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "평점 없",
        "rating_cri": "6.33",
        "rating_net": "10.00",
        "genre": "다큐멘터리",
        "showtimes": "99분",
        "release_date": "2021.07.14 개봉",
        "rate": "12세 관람가",
        "summary": "오래된 레코드판이 가득한 집 앞 마당,\n 자메이카 레게 황금기를 이끌었던 레전드 뮤지션들과\n 지금 레게 씬의 아이콘들이 한자리에 모였다.\n 레게가 탄생한 언덕에서 다시 한번 시작되는 단 하나의 레전드 프로젝트,\n ‘이나 데 야드’를 위해 숨겨왔던 이야기와 음악적 고민을 나누며 목소리를 모으게 되고\n 다시 한번 전세계를 감동시킬 무대를 준비하는데…\n \n 자메이카의 심장에서 울린 레게 레전더리 프로젝트의 마지막 무대가 펼쳐진다!",
        "staff": [
          {
            "name": "피터 웨버",
            "role": "감독",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000283%2FPM28318_115921_000.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "나는 나대로 혼자서 간다",
        "title_eng": "Ora Ora de Hitori Igumo, Ora, Ora Be Goin′ Alone, 2020",
        "postr_url": "https://movie-phinf.pstatic.net/20210629_142/1624943003859r8KML_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "평점 없",
        "rating_cri": "5.75",
        "rating_net": "9.00",
        "genre": "드라마",
        "showtimes": "138분",
        "release_date": "2021.07.15 개봉",
        "rate": "12세 관람가",
        "summary": "정략결혼을 피해 도망친 도쿄에서\n ‘슈조’와 운명적 사랑에 빠진 ‘모모코’는\n 오랜 시간 가족을 위한 삶을 살아간다.\n \n 남편이 먼저 세상을 떠나고 혼자 남게 된 모모코는\n 비로소 진정한 자유를 만끽하며\n 새로운 ‘홀로 라이프’를 펼쳐나가기 시작하는데...\n \n 찬란했던 젊은 날의 기억과 함께\n 새롭게 꽃피우는 모모코의 인생 후반전!",
        "staff": [
          {
            "name": "히가시데 마사히로",
            "role": "주연",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000003127%2FPM312782_181101_000.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "극장판 귀멸의 칼날: 무한열차편",
        "title_eng": "劇場版「鬼滅の刃」無限列車編, Demon Slayer: Kimetsu no Yaiba the Movie - Muge...",
        "postr_url": "https://movie-phinf.pstatic.net/20210126_174/1611638248803840HH_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "9.62",
        "rating_cri": "6.00",
        "rating_net": "9.28",
        "genre": "애니메이션",
        "showtimes": "117분",
        "release_date": "2021.01.27 개봉",
        "rate": "15세 관람가",
        "summary": "혈귀로 변해버린 여동생 ‘네즈코’를 인간으로 되돌릴 단서를 찾아 비밀조직 귀살대에 들어간 ‘탄지로.’\n ‘젠이츠’, ‘이노스케’와 새로운 임무 수행을 위해 무한열차에 탑승 후\n 귀살대 최강 검사 염주 ‘렌고쿠’와 합류한다.\n \n 달리는 무한열차에서 승객들이 하나 둘 흔적 없이 사라지자\n 숨어있는 식인 혈귀의 존재를 직감하는 ‘렌고쿠’.\n \n 귀살대 ‘탄지로’ 일행과 최강 검사 염주 ‘렌고쿠’는\n 어둠 속을 달리는 무한열차에서 모두의 목숨을 구하기 위해\n 예측불가능한 능력을 가진 혈귀와 목숨을 건 혈전을 시작하는데…",
        "staff": [
          {
            "name": "히노 사토시",
            "role": "조연",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000001339%2FPM133998_181403_000.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "괴기맨숀",
        "title_eng": "2021",
        "postr_url": "https://movie-phinf.pstatic.net/20210601_201/1622537257870D809T_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "6.86",
        "rating_cri": "6.00",
        "rating_net": "6.43",
        "genre": "공포",
        "showtimes": "106분",
        "release_date": "2021.06.30 개봉",
        "rate": "15세 관람가",
        "summary": "공포 웹툰 작가 지우는 아이디어를 찾아 괴기맨숀이라 불리는 허름한 아파트에 도착한다.\n 표정을 알 수 없는 중년의 관리인은\n 이 아파트에서 일어났던 기묘한 사건들에 대해 이야기보따리를 풀어내고,\n 504호, 708호… 지우는 사연을 들을수록 홀리기라도 한 듯 괴기맨숀에 점점 집착하게 되는데...!\n \n 미스터리한 맨숀! 5개의 에피소드! 괴이하고 섬뜩한 현실 공포가 온다!",
        "staff": [
          {
            "name": "박소진",
            "role": "조연",
            "image_url": "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202005%2F202005201549134.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "크레센도",
        "title_eng": "Crescendo, 2019",
        "postr_url": "https://movie-phinf.pstatic.net/20210528_249/1622168825230rzIML_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "9.00",
        "rating_cri": "5.67",
        "rating_net": "8.97",
        "genre": "드라마",
        "showtimes": "112분",
        "release_date": "2021.06.24 개봉",
        "rate": "12세 관람가",
        "summary": "세계적인 마에스트로 ‘에두아르트’는 평화 콘서트를 위해\n 오디션을 거쳐 이스라엘과 팔레스타인의 재능 있는 연주자들을 뽑는다.\n 수십 년간 이어온 분쟁과 갈등을 넘어 오직 음악을 바라보고 모였지만,\n 깊이 담겨 있던 분노와 증오는 이내 서로를 공격한다.\n \n 하나의 오케스트라를 위해 지휘자 ‘에두아르트’는 진심을 담아 노력하고\n 영원히 평행선을 걸을 것 같던 이들은 조금씩 서로를 이해하기 시작한다.\n \n 그러나 공연을 하루 앞두고\n 팔레스타인 클라리넷 연주자 ‘오마르’와 이스라엘 프렌치 호른 연주가 ‘쉬라’가 사라지는데…\n 오케스트라 공연은 무사히 열릴 수 있을까?\n \n 평화를 향한 희망의 멜로디가 울려 퍼진다!",
        "staff": [
          {
            "name": "비비아나 베글라우",
            "role": "주연",
            "image_url": "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png"
          }
        ]
      },
      {
        "title_kor": "더 퍼지: 포에버",
        "title_eng": "The Forever Purge, 2020",
        "postr_url": "https://movie-phinf.pstatic.net/20210616_37/1623804323063hUT9H_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "평점 없",
        "rating_cri": "",
        "rating_net": "7.83",
        "genre": "스릴러,공포",
        "showtimes": "103분",
        "release_date": "2021.07.14 개봉",
        "rate": "청소년 관람불가",
        "summary": "아메리칸 드림을 꿈꾸며 미국에 정착한 멕시코 부부 ‘아델라’와 ‘후안’,\n 텍사스 부촌에서 마구간과 농장을 꾸리며 안락하게 살아가는 ‘딜런’ 가족까지\n 모든 이들이 긴장감 속에서 ‘퍼지’ 데이를 맞이한다.\n \n 다행히 큰 사고없이 ‘퍼지’ 데이를 보낸 이들은 공식적인 ‘퍼지’ 종료 사이렌이 울리자 일상으로 복귀한다.\n 하지만 ‘영원한 퍼지’를 통한 ‘미국의 정화’를 외치는 추종자 세력이 등장하면서\n 걷잡을 수 없는 폭력과 살인이 난무하기 시작한다.\n \n 안전을 위해 멕시코 국경까지 이동해야 하는 ‘아델라’와 ‘후안’, 그리고 ‘딜런’ 가족은\n 과연 공권력과 법의 통제가 완전히 사라져버린 ‘영원한 퍼지’ 속에서 살아남을 수 있을 것인가…\n \n 시작만 있을 뿐, 더 이상의 끝은 존재하지 않는 ‘영원한 퍼지’가 온다!",
        "staff": [
          {
            "name": "레븐 램빈",
            "role": "조연",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000506%2FPM50622_180300_000.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "화이트 온 화이트",
        "title_eng": "Blanco en Blanco, White on White, 2019",
        "postr_url": "https://movie-phinf.pstatic.net/20210506_85/1620279847281982qq_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "6.00",
        "rating_cri": "7.00",
        "rating_net": "6.47",
        "genre": "드라마",
        "showtimes": "100분",
        "release_date": "2021.06.10 개봉",
        "rate": "12세 관람가",
        "summary": "20세기 초반, 중년의 사진작가 ‘페드로’는\n 정체 모를 지주 ‘포터’의 결혼식 사진을 찍기 위해\n 설원으로 둘러싸인 칠레의 어느 마을에 도착한다.\n 하지만 소녀 티가 아직 가시지 않은 어린 신부만이 나타나고\n ‘페드로’는 그녀의 순수한 아름다움에 집착하다\n 결국 ‘포터’의 부하들에게 끌려가고 마는데…\n \n 세상 끝에 선 사진작가, 잔혹한 현실을 마주한다!",
        "staff": [
          {
            "name": "데이비드 판탈레온",
            "role": "조연",
            "image_url": "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png"
          }
        ]
      },
      {
        "title_kor": "내 남자친구의 결혼식",
        "title_eng": "My Best Friend's Wedding, 1997",
        "postr_url": "https://movie-phinf.pstatic.net/20210705_34/1625450508539eAh3V_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "8.00",
        "rating_cri": "",
        "rating_net": "7.85",
        "genre": "멜로/로맨스,코미디",
        "showtimes": "105분",
        "release_date": "2021.07.14 재개봉, 1997.12.13 개봉",
        "rate": "15세 관람가",
        "summary": "줄리안, 드디어 남사친과 사랑에 빠지다?!\n \n 9년 지기 남사친 마이클의 결혼 소식을 들은 그 순간!\n 뭘까 이 감정은? 나 아무래도 널 사랑하고 있었나 봐!\n \n 어쩌면 마지막일지 모를 내 사랑 되찾기\n \n “너에게 꼭 말하고 싶어.\n 지난 9년간 진심으로 널 사랑하고 있었다고.”",
        "staff": [
          {
            "name": "필립 보스코",
            "role": "조연",
            "image_url": "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png"
          }
        ]
      },
      {
        "title_kor": "너의 이름은.",
        "title_eng": "君の名は。, your name., 2016",
        "postr_url": "https://movie-phinf.pstatic.net/20171222_70/1513920001726sikUX_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "9.02",
        "rating_cri": "7.55",
        "rating_net": "8.79",
        "genre": "애니메이션,드라마,멜로/로맨스",
        "showtimes": "106분",
        "release_date": "2018.01.04 재개봉, 2017.07.13 재개봉, 2017.01.04 개봉",
        "rate": "12세 관람가",
        "summary": "아직 만난 적 없는 너를, 찾고 있어\n \n 천년 만에 다가오는 혜성\n 기적이 시작된다\n \n 도쿄에 사는 소년 ‘타키’와 시골에 사는 소녀 ‘미츠하’는\n 서로의 몸이 뒤바뀌는 신기한 꿈을 꾼다\n 낯선 가족, 낯선 친구들, 낯선 풍경들...\n 반복되는 꿈과 흘러가는 시간 속, 마침내 깨닫는다\n 우리, 서로 뒤바뀐 거야?\n \n 절대 만날 리 없는 두 사람\n 반드시 만나야 하는 운명이 되다\n \n 서로에게 남긴 메모를 확인하며\n 점점 친구가 되어가는 ‘타키’와 ‘미츠하’\n 언제부턴가 더 이상 몸이 바뀌지 않자\n 자신들이 특별하게 이어져있었음을 깨달은\n ‘타키’는 ‘미츠하’를 만나러 가는데...\n \n 잊고 싶지 않은 사람\n 잊으면 안 되는 사람\n 너의 이름은?",
        "staff": [
          {
            "name": "유우키 아오이",
            "role": "조연",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000002852%2FPM285284_133340_000.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "동아시아반일무장전선",
        "title_eng": "East Asia Anti-Japan Armed Front, 2019",
        "postr_url": "https://movie-phinf.pstatic.net/20200727_181/1595825046794nQhvY_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "9.00",
        "rating_cri": "6.00",
        "rating_net": "7.41",
        "genre": "다큐멘터리",
        "showtimes": "74분",
        "release_date": "2020.08.20 개봉",
        "rate": "15세 관람가",
        "summary": "어떻게 살아야 좋을지 생각했습니다.\n 어떤 일본인도 우리를 이해하지 않을 거라 생각했습니다.\n 가해의 기억은 우리를 꽃샘추위 속에 가두고 등을 짓누르지만\n 지금 일본에 살고 있는 우리는, 마음을 전하고 싶었습니다.\n 1974년 8월 30일 도쿄 미쓰비시중공업 빌딩을 시작으로\n 1975년까지 이어진 일제 전범기업 연속폭파사건의 가해자.\n 우리는 ‘동아시아반일무장전선’입니다.\n \n 일본사회의 거대한 성찰을 만난다",
        "staff": [
          {
            "name": "김미례",
            "role": "감독",
            "image_url": "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F71%2F202011121218404251.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "날씨의 아이",
        "title_eng": "天気の子, Weathering With You, 2019",
        "postr_url": "https://movie-phinf.pstatic.net/20200515_153/1589521029136pyDNk_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "8.40",
        "rating_cri": "6.57",
        "rating_net": "7.95",
        "genre": "애니메이션",
        "showtimes": "112분",
        "release_date": "2020.05.21 재개봉, 2019.10.30 개봉",
        "rate": "15세 관람가",
        "summary": "비가 그치지 않던 어느 여름날,\n 가출 소년 ‘호다카’는 수상한 잡지사에 취직하게 되고\n 비밀스러운 소녀 ‘히나’를 우연히 만난다.\n \n “지금부터 하늘이 맑아질 거야”\n \n 그녀의 기도에 거짓말 같이 빗줄기는 멈추고,\n 사람들의 얼굴에 환한 빛이 내려온다.\n \n “신기해, 날씨 하나에 사람들의 감정이 이렇게나 움직이다니”\n \n 하지만, 맑음 뒤 흐림이 찾아오듯\n 두 사람은 엄청난 세계의 비밀을 마주하게 되는데…\n \n 흐리기만 했던 세상이 빛나기 시작했고, 그 끝에는 네가 있었다.",
        "staff": [
          {
            "name": "이장원",
            "role": "주연",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000043%2F00000004346-t.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "그레타 툰베리",
        "title_eng": "I Am Greta, 2020",
        "postr_url": "https://movie-phinf.pstatic.net/20210604_136/1622768134334SUynR_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "0.00",
        "rating_cri": "6.00",
        "rating_net": "4.61",
        "genre": "다큐멘터리",
        "showtimes": "102분",
        "release_date": "2021.06.17 개봉",
        "rate": "전체 관람가",
        "summary": "기후 변화 법안 마련 촉구를 위해 금요일마다 학교를 결석하며\n 의회 앞에서 홀로 시위를 시작한 15세 소녀 ‘그레타 툰베리’.\n 그녀가 쏘아 올린 ‘미래를 위한 금요일’ 운동은 전 세계로 퍼져나가는데…\n \n 평범한 10대 소녀에서\n 어른들의 무감각한 환경 의식에 일침을 가하는\n 세계적인 청소년 환경운동가가 되기까지!\n \n 700만을 움직인 그녀의 외침에 주목하라!",
        "staff": [
          {
            "name": "나탄 그로스만",
            "role": "감독",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004410%2FPM441061_141059_000.JPG&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "운디네",
        "title_eng": "Undine, 2020",
        "postr_url": "https://movie-phinf.pstatic.net/20201203_42/1606961784754hFbwE_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "8.43",
        "rating_cri": "8.00",
        "rating_net": "8.26",
        "genre": "드라마,멜로/로맨스",
        "showtimes": "89분",
        "release_date": "2020.12.24 개봉",
        "rate": "12세 관람가",
        "summary": "도시개발 전문 역사학자이자 박물관 관광 가이드 운디네는 운명적인 사랑이라 믿었던 요하네스에게 실연당한다.\n 절망한 그녀 앞에 산업 잠수사인 크리스토프가 나타나고 그녀의 심장은 다시 뛰기 시작한다.",
        "staff": [
          {
            "name": "안네 라테-폴레",
            "role": "조연",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000001719%2FPM171940_095219_000.png&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "낫아웃",
        "title_eng": "NOT OUT, 2021",
        "postr_url": "https://movie-phinf.pstatic.net/20210520_152/1621485754326FuY4e_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "8.12",
        "rating_cri": "6.40",
        "rating_net": "8.70",
        "genre": "드라마",
        "showtimes": "107분",
        "release_date": "2021.06.03 개봉",
        "rate": "15세 관람가",
        "summary": "기적이 일어났고, 끝까지 가고 싶었다.\n \n 특별할 것 없던 열아홉 고교 야구 입시생 ‘광호’는\n 봉황대기 결승전 결승타의 주인공이 된다,\n 잘 될 것 같았던 신인 드래프트에서 탈락한 ‘광호’.\n \n 야구를 계속하기 위해서는 돈이 필요하다고 생각한 ‘광호’는\n 친구에게 불법 휘발유를 파는 일을 소개받아 악착같이 돈을 모으기 시작한다.\n \n 하지만 뭐하나 뜻대로 되지 않자,\n 결국 ‘광호’는 친구에게 위험한 제안을 하는데….",
        "staff": [
          {
            "name": "송이재",
            "role": "주연",
            "image_url": "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F201906%2F20190607213042215.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "여고괴담 여섯번째 이야기 : 모교",
        "title_eng": "WHISPERING CORRIDORS 6 : THE HUMMING, 2020",
        "postr_url": "https://movie-phinf.pstatic.net/20210610_158/1623288736483kkjkR_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "5.90",
        "rating_cri": "4.20",
        "rating_net": "5.04",
        "genre": "미스터리,공포",
        "showtimes": "108분",
        "release_date": "2021.06.17 개봉",
        "rate": "15세 관람가",
        "summary": "고교시절의 기억을 잃은 ‘은희(김서형)’는\n 모교에 교감으로 부임한 후부터\n 알 수 없는 환영과 환청에 시달리기 시작한다.\n \n 피해자임에도 불구하고 문제아로 내몰린 ‘하영(김현수)’은\n 홀리듯 들어간 학교의 폐쇄된 화장실에서 귀신 소리를 듣게 되고\n 그 곳에서 같은 아픔을 가진 ‘은희(김서형)’와 마주친다.\n \n 두 사람은 학교에서 벌어지는 기이한 일들이\n 화장실에 있는 존재와 연관됐음을 알게 되고,\n 곧 죽음의 공포와 마주하게 된다.\n \n 기억 속에 감춰진 충격적인 진실이 밝혀진다!",
        "staff": [
          {
            "name": "서혜원",
            "role": "조연",
            "image_url": "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png"
          }
        ]
      },
      {
        "title_kor": "에로스",
        "title_eng": "Eros, 2004",
        "postr_url": "https://movie-phinf.pstatic.net/20111222_184/1324546022107iHdDp_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "8.56",
        "rating_cri": "",
        "rating_net": "6.73",
        "genre": "드라마",
        "showtimes": "108분",
        "release_date": "2005.06.30 개봉",
        "rate": "청소년 관람불가",
        "summary": "‘그녀의 손길’ - 왕가위 감독. 재단사인 장은 오래 전 그날 일을 잊지 못한다. 아직 견습생이던 시절, 고급 콜걸인 후아가 그녀에게 심부름을 간 자신의 다리를 쓰다듬던 그 순간을... 그 일 이후, 장은 후아의 부드러운 손길이 닿던 촉감을 간직한 채 혼자만의 사랑을 키워 나간다. 그러나 후아의 전담 재단사일 뿐인 장은, 다른 남자들을 위해 그녀가 입을 옷을 정성스레 만들며 그저 멀리서 그녀를 바라볼 수 밖에 없다. 세월은 흘러, 후아는 파산과 함께 병든 모습으로 이제 아무도 찾지 않는 서글픈 신세가 되어있다. 변함없이 그녀를 지켜보던 장은 이제 자신의 마음을 고백하려 하는데...그녀와 사랑할 수 있을까?\n  ‘꿈 속의 여인’ - 스티븐 소더버그 감독. 광고 회사에 다니면서 항상 스트레스에 시달리는 남자 닉 펜로즈는 매일 밤 똑같은 꿈을 꾼다. 왠지 낯익은 한 여자가 야릇한 몸짓을 한 채 그 앞에 나타나는 것이다. 꿈에선 분명 아는 사이인데, 깨고 나면 도통 누군지 알 수 없는 이 여인의 정체가 궁금해서 신경쇠약 직전에까지 이르게 된 닉. 결국 정신분석가를 찾아가 자신의 고민을 털어 놓게 되고, 담당 의사는 그를 눕힌 채 꿈 속의 장면을 하나씩 더듬어 가도록 하는데...\n  ‘위험한 관계’ - 미켈란젤로 안토니오니 감독. 권태기에 빠진 부부 크리스토퍼와 클로에는 둘만의 시간을 갖기 위해 여행을 떠난다. 하지만 이미 소원해진 두 사람은 여행지의 아름다운 풍광에도 아무런 감흥을 느끼지 못한 채, 그저 말없이 시간을 보낼 뿐이다. 그런 끝에 심하게 싸움을 하고 헤어지는 두 사람. 혼자 남은 크리스토퍼는 식당에서 만난 신비스런 여인에 이끌려 그녀와 격정적인 하룻밤을 보내게 된다. 그러던 어느 날, 인적 없는 해변가를 거닐던 클로에는 우연히 그녀와 마주치고, 둘은 한눈에 서로를 알아보는데.",
        "staff": [
          {
            "name": "엘레 키츠",
            "role": "조연",
            "image_url": "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png"
          }
        ]
      },
      {
        "title_kor": "웬디",
        "title_eng": "Wendy, 2020",
        "postr_url": "https://movie-phinf.pstatic.net/20210603_146/1622701148189x39IC_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "4.50",
        "rating_cri": "5.75",
        "rating_net": "6.34",
        "genre": "드라마,판타지",
        "showtimes": "111분",
        "release_date": "2021.06.30 개봉",
        "rate": "12세 관람가",
        "summary": "기찻길 옆, 작은 식당이 세상의 전부인 소녀 ‘웬디’는\n 내면에 차오르는 호기심과 모험심으로 매일 새로운 세상을 꿈꾼다.\n \n 그러던 어느 날, ‘피터’가 나타나고\n ‘웬디’와 쌍둥이 형제 ‘더글라스’, ‘제임스’를 이끌고 여정을 떠나게 된다.\n 그리고 자신의 의지로 어른이 되지 않고 영원히 어린이로 살 수 있는\n 신비로운 섬에 도착하게 되는데…",
        "staff": [
          {
            "name": "개빈 나퀸",
            "role": "주연",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004505%2FPM450537_173143_000.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "인트로덕션",
        "title_eng": "INTRODUCTION, 2020",
        "postr_url": "https://movie-phinf.pstatic.net/20210426_268/1619414355444DtDxz_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "8.45",
        "rating_cri": "7.67",
        "rating_net": "7.75",
        "genre": "",
        "showtimes": "66분",
        "release_date": "2021.05.27",
        "rate": "12세 관람가",
        "summary": "1.\n 아들은 아버지가 불러서 한의원을 찾았다\n 도착했을 때 아버지는 환자들 때문에 바빴고\n 아들은 하루 종일을 기다려야 했다\n \n 2.\n 딸은 독일로 패션디자인을 공부하러 갔다\n 어머니는 독일에 사는 옛 친구의 집에 딸이 묵게 하려고 같이 동행했다\n 친구 집에 묵게 된다면 방세를 절약할 수 있을 것이다\n \n 3.\n 아들은 어머니가 갑자기 불러서 동해안의 횟집으로 찾아갔다\n 어머니는 나이 든 남자배우와 함께 있었다\n 그 배우는 오랜 전에 아버지의 한의원을 찾아갔을 때 만난 적 있는 사람이었다",
        "staff": [
          {
            "name": "서영화",
            "role": "주연",
            "image_url": "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F145%2F202006181535585631.png&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "흩어진 밤",
        "title_eng": "Scattered Night, 2019",
        "postr_url": "https://movie-phinf.pstatic.net/20210525_242/1621909147645RsPwU_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "8.17",
        "rating_cri": "6.40",
        "rating_net": "8.24",
        "genre": "드라마",
        "showtimes": "81분",
        "release_date": "2021.06.24 개봉",
        "rate": "전체 관람가",
        "summary": "갑자기 집에 찾아드는 낯선 사람들.\n 엄마와 함께 공부에 집중하는 오빠.\n 일주일에 한 번 볼까 말까 한 아빠.\n 그리고 원치 않게 떠맡게 된 힘든 선택.\n 어둠 속에서 흩어지는 마음들을 바라보는 수민.",
        "staff": [
          {
            "name": "강석원",
            "role": "조연",
            "image_url": "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202003%2F20200301202845648.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "이번엔 잘 되겠지",
        "title_eng": "2021",
        "postr_url": "https://movie-phinf.pstatic.net/20210514_148/1620977566896hBk6r_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "4.00",
        "rating_cri": "",
        "rating_net": "9.06",
        "genre": "코미디",
        "showtimes": "96분",
        "release_date": "2021.07.08 개봉",
        "rate": "15세 관람가",
        "summary": "구 에로 영화 감독, 현 치킨집 사장인 승훈에게\n 코로나라는 일생 최악의 위기가 찾아오고\n 가족 같던 닭 집 식구들마저 떠나보내야 할 상황에 처한다.\n \n 승훈의 앞에 블록버스터 대작의 기운을 물씬 풍기는\n 시나리오가 나타나고 다시 한번 재기를 꿈꾸지만 쉽지만은 않다.\n 가는 곳마다 번번히 퇴짜를 맞고 순조롭던 영화 촬영에도\n 예측불가한 상황들이 일파만파 커지는데..\n \n “버티고 또 버티면, 이번엔 잘 되겠지!”",
        "staff": [
          {
            "name": "이상훈",
            "role": "주연",
            "image_url": "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F201910%2F20191001171157297.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "미션 임파서블: 루벤",
        "title_eng": "Ruben Brandt, Collector, 2018",
        "postr_url": "https://movie-phinf.pstatic.net/20210614_253/1623632518704rxmYh_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "8.00",
        "rating_cri": "6.50",
        "rating_net": "8.09",
        "genre": "애니메이션,액션,범죄,모험,미스터리,스릴러",
        "showtimes": "93분",
        "release_date": "2021.07.08 개봉",
        "rate": "15세 관람가",
        "summary": "파리 오르세 미술관에서 마네의 ‘올랭피아’ 도난 사건이 발생하고,\n 연이어 폴 고갱의 ‘과일을 든 여인’, 반 고흐의 ‘우편배달부 조셉 룰랭의 초상’,\n 피카소의 ‘책을 든 여인’, 에드워드 호퍼의 ‘밤을 지새우는 사람들’까지…\n 세계 곳곳에서 유명 명화들이 사라지기 시작한다!\n \n 범인은 바로 심리치료사 루벤과 그의 환자 미미, 페르난도, 조, 브루노!\n 루벤이 명화 속 주인공들에게 공격당하는 끔찍한 악몽에 시달리자\n 다 함께 문제의 예술작품 13점을 훔치기 시작한 것!\n \n 하지만 마지막 작전을 앞두고 사립탐정 코왈스키에게 덜미가 잡히고\n 현상금을 노리는 킬러들에게 쫓기기 시작하며 예기치 못한 위험에 빠지는데…\n \n 남은 명화는 단 하나!\n 마지막 한탕을 위한 팀 루벤의 미션 임파서블이 시작된다!",
        "staff": [
          {
            "name": "이반 카마라스",
            "role": "주연",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000001516%2F00000151623-t.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "죽어도 좋은 경험",
        "title_eng": "An Experience to Die For, 1990",
        "postr_url": "https://movie-phinf.pstatic.net/20210617_202/16239090949095ra6F_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "7.00",
        "rating_cri": "5.00",
        "rating_net": "8.56",
        "genre": "드라마,미스터리",
        "showtimes": "95분",
        "release_date": "2021.07.15 개봉",
        "rate": "청소년 관람불가",
        "summary": "남편의 실수로 아이를 잃은 ‘여정’은\n 우연히 만난 ‘명자’가 남편의 외도로\n 억울하게 이혼당했다는 사실을 알게 된다.\n \n 모든 비밀과 진실을 알고 있는 ‘여정’은\n ‘명자’와 치밀한 계획 아래\n 서로 상대방의 남편을 살해한다는 범죄를 공모한다.\n \n 독을 품은 두 여자의 광기 어린 복수극이 시작된다!",
        "staff": [
          {
            "name": "김학",
            "role": "조연",
            "image_url": "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png"
          }
        ]
      },
      {
        "title_kor": "북샵",
        "title_eng": "La libreria, The Bookshop, 2017",
        "postr_url": "https://movie-phinf.pstatic.net/20210616_228/1623822185768ssWPl_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "평점 없",
        "rating_cri": "",
        "rating_net": "8.62",
        "genre": "드라마",
        "showtimes": "112분",
        "release_date": "2021.06.24 개봉",
        "rate": "전체 관람가",
        "summary": "‘플로렌스’는 남편과 처음 만나 사랑에 빠진 특별한 장소이기도 했던\n 작은 바닷가 마을 하드버러에서 영리한 소녀 ‘크리스틴’을 채용해 서점을 운영하기 시작한다.\n 작고 외진 마을에서 서점을 운영한다는 사실이 알려지자\n 마을 최고 권력자인 가맛 부인은 서점 자리에 문화센터를 세운다는 핑계로\n 온갖 경제력과 인맥을 동원해 방해하기 시작하는데…!\n \n 책을 통해 삶의 희망을 찾아나선 플로렌스의 용기 있는 도전이 시작된다!",
        "staff": [
          {
            "name": "패트리시아 클락슨",
            "role": "주연",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000046%2FPM4666_164448_000.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "클라이밍",
        "title_eng": "Climbing, 2020",
        "postr_url": "https://movie-phinf.pstatic.net/20210521_119/16215634401368xBCC_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "7.00",
        "rating_cri": "6.17",
        "rating_net": "6.40",
        "genre": "애니메이션",
        "showtimes": "77분",
        "release_date": "2021.06.16 개봉",
        "rate": "15세 관람가",
        "summary": "세 달 전 교통사고를 겪은 세현은 세계 클라이밍 대회를 앞두고\n 회복되지 않는 컨디션과 경쟁에 대한 압박으로 악몽에 시달린다.\n 그러던 어느 날 밤, 사고 당시 고장 났던 세현의 핸드폰으로 전화가 걸려온다.\n \n 다름 아닌, 바로 '나'로부터.\n \n 연락을 주고받을수록 서로 연결되어 있음을 느끼는 두 사람.\n 급기야 세현은 또 다른 세현의 임신이 자신에게도 영향을 끼친다는 것을 알게 되고,\n 그 이후 악몽처럼 기이한 일들이 일어나기 시작한다.",
        "staff": [
          {
            "name": "박주광",
            "role": "조연",
            "image_url": "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F99%2F201910291707408601.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "컨저링 3: 악마가 시켰다",
        "title_eng": "The Conjuring: The Devil Made Me Do It, 2021",
        "postr_url": "https://movie-phinf.pstatic.net/20210518_265/1621316858792fXwRb_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "8.23",
        "rating_cri": "5.75",
        "rating_net": "6.53",
        "genre": "공포,미스터리,스릴러",
        "showtimes": "111분",
        "release_date": "2021.06.03 개봉",
        "rate": "15세 관람가",
        "summary": "1981년, 미국 역사상 최초로 잔혹한 살인사건의 용의자가 악마가 살해하도록 시켰다고 주장하는 초유의 사태가 일어난다! 그리고 사건의 배후에는 악마에게 빙의된 소년이 있었는데…\n 초자연 현상 연구가 워렌 부부의 사건 파일 중 여전히 미스터리로 남아있는 실화!\n 진실 혹은 거짓? 살인사건의 범인, 인간인가 악마인가...",
        "staff": [
          {
            "name": "샬린 아모이아",
            "role": "조연",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000528%2FPM52802_183225_000.JPG&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "뱅드림! 로젤리아 에피소드Ⅰ: 약속",
        "title_eng": "BanG Dream! Episode of Roselia I：Promise, 2020",
        "postr_url": "https://movie-phinf.pstatic.net/20210506_101/1620287396480X8Wbi_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "0.00",
        "rating_cri": "6.00",
        "rating_net": "7.94",
        "genre": "애니메이션",
        "showtimes": "77분",
        "release_date": "2021.06.03 개봉",
        "rate": "전체 관람가",
        "summary": "너희들, Roselia에 전부를 걸 각오는 됐어?\n '페스'에 출전하기 위해 밴드 결성을 결심한 미나토 유키나.\n 그런 그녀 앞에 각자의 소망을 품은 멤버들이 모인다.\n 다섯 멤버는 Roselia로서 정상을 노린다.\n 이것은 그녀들의 결성부터 FUTURE WORLD FES에 도전하기까지의 '약속'을 그린 이야기.",
        "staff": [
          {
            "name": "코다이 카키모토",
            "role": "감독",
            "image_url": "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png"
          }
        ]
      },
      {
        "title_kor": "샤먼 로드",
        "title_eng": "Shaman Road, 2018",
        "postr_url": "https://movie-phinf.pstatic.net/20210705_86/1625448832976w5qpG_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "평점 없",
        "rating_cri": "",
        "rating_net": "9.75",
        "genre": "다큐멘터리",
        "showtimes": "105분",
        "release_date": "2021.07.03 개봉",
        "rate": "12세 관람가",
        "summary": "중세시대였다면 ‘마녀’라고 화형을 당했을 프랑스 여자 샤먼 꼴레뜨와 한국 여자 샤먼 성미의 운명적 만남과 우정.\n 성미와 꼴레뜨는 어렸을 때부터 들린 신의 음성과 영상들(visions)로 인해 남들과 다른 삶을 살 수밖에 없었고, 이를 천형이라 생각했다.\n 2014년 프랑스에서 열린 세계샤머니즘축제에서 서로를 만난 뒤에야, 꼴레뜨와 성미는 그들의 특별한 능력이 세상 사람들의 아픈 상처를 어루만져주기 위한 신의 선물이라는 걸 깨닫고 서로를 의지하며 샤먼 로드를 걷는다.",
        "staff": [
          {
            "name": "모드 다바단",
            "role": "조연",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004505%2FPM450511_175232_000.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "이보다 더 좋을 순 없다",
        "title_eng": "As Good As It Gets, 1997",
        "postr_url": "https://movie-phinf.pstatic.net/20210610_191/1623315278350b4saF_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "7.80",
        "rating_cri": "",
        "rating_net": "8.95",
        "genre": "코미디,드라마",
        "showtimes": "138분",
        "release_date": "2021.06.30 재개봉, 1998.03.14 개봉",
        "rate": "15세 관람가",
        "summary": "[멜빈의 데일리 루틴]\n \n 길을 걸을 땐 보도블록 경계선을 밟지 말 것.\n 식사는 정해진 식당, 정해진 자리, 정해진 메뉴로 할 것.\n 귀가 후에는 문 걸쇠를 위아래로 5번씩 돌려서 확인.\n 손을 씻은 명품 비누는 한 번 사용하고 버릴 것.\n 이웃과는 말을 섞지 말 것. 특히 강아지는 최악이야!\n \n 세상과 거리를 두고 자신만의 규칙 속에 살아온 소설가 ‘멜빈’\n 그에게 세상의 따뜻함을 알려준 것은 다름 아닌 두 명의 이웃?\n 처음으로 사랑의 떨림을 알려준 ‘캐롤’\n 처음으로 우정의 깊이를 알려준 ‘사이먼’\n 여기, 부드럽게 번져 세상을 꽉 채우는 세 사람이 온다!",
        "staff": [
          {
            "name": "스키트 울리치",
            "role": "조연",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000014%2FPM1460_162446_000.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "열아홉",
        "title_eng": "Nineteen, 2021",
        "postr_url": "https://movie-phinf.pstatic.net/20210609_190/1623218016233uptm2_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "9.00",
        "rating_cri": "5.29",
        "rating_net": "7.44",
        "genre": "드라마",
        "showtimes": "87분",
        "release_date": "2021.06.30 개봉",
        "rate": "15세 관람가",
        "summary": "괴물 같았던 아빠는 집을 떠났고,\n 엄마마저 사라졌으면 좋겠다는 생각이 들었던 그 날\n 열아홉 ‘소정’은 피를 토한 채 죽어있는 엄마와 마주한다.\n \n 엄마의 시신을 욕조에 숨긴 ‘소정’은 음악으로 도피하며\n 위태로운 홀로서기를 시작하는데…",
        "staff": [
          {
            "name": "최원용",
            "role": "조연",
            "image_url": "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F201911%2F20191112091335156-3624187.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "그 여름, 가장 차가웠던",
        "title_eng": "少女佳禾, Summer Is the Coldest Season, 2019",
        "postr_url": "https://movie-phinf.pstatic.net/20210527_103/1622095334350ilR1A_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "7.67",
        "rating_cri": "6.00",
        "rating_net": "7.71",
        "genre": "드라마",
        "showtimes": "100분",
        "release_date": "2021.06.17 개봉",
        "rate": "15세 관람가",
        "summary": "3년 전 엄마가 살해된 후, 소녀 ‘자허’와 아빠의 삶은 엉망이다.\n 친구들에게 왕따를 당하고, 아빠와도 마음 속 이야기를 하지 않게 된 소녀,\n 그러던 어느 날 우연히 자신의 엄마를 죽인 소년 ‘유레이’와 마주치게 된다.\n 예상보다 빨리 석방된 그를 보고 소녀는 분노에 휩싸이고,\n 복수하고 싶은 마음으로 그에게 의도적으로 접근하게 되는데…",
        "staff": [
          {
            "name": "이감",
            "role": "주연",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004493%2FPM449354_113717_000.JPEG&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "시카다 3301",
        "title_eng": "Dark Web: Cicada 3301, 2021",
        "postr_url": "https://movie-phinf.pstatic.net/20210621_167/16242537656014nMrw_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "8.00",
        "rating_cri": "",
        "rating_net": "7.30",
        "genre": "액션,스릴러",
        "showtimes": "105분",
        "release_date": "2021.07.01 개봉",
        "rate": "청소년 관람불가",
        "summary": "의문의 웹 조직에게 지능 테스트 메시지를 받은 천재 해커 ‘코너’가 그들의 정체를 밝히기 위해 복잡한 퍼즐을 푸는 과정을 담은 코드브레이킹 스릴러",
        "staff": [
          {
            "name": "론 푼체스",
            "role": "주연",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000003823%2FPM382305_164452_000.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "링",
        "title_eng": "リング: The Ring, 1998",
        "postr_url": "https://movie-phinf.pstatic.net/20111216_7/1324027921575JqRFV_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "평점 없",
        "rating_cri": "6.50",
        "rating_net": "8.44",
        "genre": "공포,드라마,스릴러,미스터리",
        "showtimes": "98분",
        "release_date": "1999.12.11 개봉",
        "rate": "12세 관람가",
        "summary": "방송국 기자 아사가와 레이코(마츠시마 나나코 분)는 어떤 비디오를 보면 그 일주일 후 죽게 된다는 학생들 사이의 소문을 취재하던 중 조카 토모코의 사망소식을 듣는다. 토모코와 같은 날 죽은 3명의 학생들이 같은 비디오를 봤다는 조카 친구들의 이야기를 듣고 아사가와는 그 비디오를 찾아 나선다. 네 명의 아이들이 놀러갔던 콘도에서 발견한 비디오 테이프를 데크에 밀어넣는 순간 엄청난 죽음의 게임에 말려들게 된다. 비디오 테이프가 끝나는 순간 전화벨이 울리고 죽은 아이들처럼 아사가와가 찍힌 사진은 흉물스럽게 뭉그러져 나온다. 죽음을 직감한 아사가와는 이혼한 남편인 다카야마 류지(사다나 히로유키)를 찾는다.\n 의사였지만 미래의 일을 예언하는 등 괴이한 행동으로 인해 병원을 나와 대학에서 철학강사를 하고 있는 류지는 비디오 테이프를 보고는 흥미를 느낀다. 이제 류지도 이 게임에 참여하게 된 것이다. 그 테이프는 카메라로 촬영한 것이 아니라 사람의 눈을 통해 염사된 것이고 염사한 주인공은 야마무라 사다코라는 초능력을 지닌 여자아이라는 것. 사다코는 그 능력으로 인해 비운의 일생을 살다 40년 전 우물에 빠져 죽었다는 것, 그리고 그 우물이 비디오가 발견된 콘도 바로 아래 있다는 사실을 밝혀낸 두 사람은 사다코의 시신을 찾아 원한을 풀어주면 저주가 풀리리라고 생각한다. 사다코의 시신은 우물 속에서 발견되고 두 사람은 죽음에서 벗어났다고 생각한다. 일상으로 돌아온 류지는 밀린 원고를 정리하던 중, 등 뒤의 TV가 갑자기 켜지면서 예의 비디오 테이프가 흐르는 것을 보고 공포를 느낀다.\n 우물에서 끝나야 할 비디오 테이프는 끝나지 않고 우물 속에서 사다코가 기어 나오는 것이다. 그리고 점점 다가와서 TV밖으로 튀어 나오는 것이 아닌가. 공포를 이기지 못한 류지는 심장마비로 죽게 된다. 류지의 죽음을 알게 된 아사가와는 패닉 상태에 빠진다. 그 비디오 테이프를 아들인 요이치도 본 것이다. 도대체 왜 나만 살아나고 그는 죽었는가? 내가 하고 그가 하지 않은 것은 무엇이란 말인가?",
        "staff": [
          {
            "name": "사토 히토미",
            "role": "조연",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000066%2F00000006640-t.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "링 2",
        "title_eng": "リング 2: The Ring 2, 1999",
        "postr_url": "https://movie-phinf.pstatic.net/20111221_144/1324466507217oPUwp_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "평점 없",
        "rating_cri": "",
        "rating_net": "5.92",
        "genre": "공포,드라마,스릴러,미스터리",
        "showtimes": "95분",
        "release_date": "2000.07.29 개봉",
        "rate": "15세 관람가",
        "summary": "이것을 본 사람은 일주일 후에 죽는다는 저주받은 비디오 테이프. 레이코와 그녀의 전남편 류지는 긴 세월동안 우물 속에 갇혀 있었던 사다코의 시체를 꺼내면서 비디오의 저주에서 벗어나는 듯 했지만, 류지는 비디오를 본지 일주일이 되는 날 죽음을 당한다. 죽은 지 30년이 지난 후에 발견된 사다코의 시체는 부검결과 불과 1, 2년 전에 죽은 것이라는 사실이 알려진다. 새롭게 제기되는 수수께끼같은 사건의 연속, 저주의 비디오는 점점 더 많은 사람들에게 급속하게 복사되어 퍼져나간다. 레이코는 아버지의 목숨을 담보로 아들 요이치를 살려내지만, 사다코의 염력이 아들에게 전이된다. 요이치를 통해 사다코는 무언가를 말하려 하지만 그것이 야기할 예측할 수 없는 결과에 대해 모두는 공포감에 치를 떠는데.",
        "staff": [
          {
            "name": "이시마루 켄지로",
            "role": "조연",
            "image_url": "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png"
          }
        ]
      },
      {
        "title_kor": "뱅드림! 필름 라이브",
        "title_eng": "BanG Dream! Film Live, 2019",
        "postr_url": "https://movie-phinf.pstatic.net/20190910_178/1568093201930HCxMC_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "9.65",
        "rating_cri": "",
        "rating_net": "7.96",
        "genre": "애니메이션",
        "showtimes": "73분",
        "release_date": "2019.09.26 개봉",
        "rate": "전체 관람가",
        "summary": "하나사키가와 여자 고등학교에서 결성된 걸즈 밴드 Poppin'Party\n 소꿉친구 다섯 명이 연주하는 전형적인 걸즈 록 밴드 Afterglow\n 연예 기획사의 의향으로 탄생한 아이돌 밴드 Pastel*Palettes\n 중후한 세계관으로 매료시키는 본격파 밴드 Roselia\n 온 세상을 웃게 하기 위해 행복 가득한 멜로디를 전하는 헬로, 해피 월드!\n 다섯 밴드가 꿈꾸는 다음 무대는...",
        "staff": [
          {
            "name": "이토 아야사",
            "role": "주연",
            "image_url": "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png"
          }
        ]
      },
      {
        "title_kor": "식물카페, 온정",
        "title_eng": "Plant Cafe, Warmth, 2021",
        "postr_url": "https://movie-phinf.pstatic.net/20210602_96/1622594445428K2j4v_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "8.00",
        "rating_cri": "5.17",
        "rating_net": "7.00",
        "genre": "",
        "showtimes": "75분",
        "release_date": "2021.06.24",
        "rate": "전체 관람가",
        "summary": "종군 사진기자로 일했던 주인공 ‘현재’는\n 파키스탄 전쟁 당시의 트라우마로 더 이상 사진을 찍을 수 없게 된다.\n 퇴사 후 다시 찾은 할아버지의 수목원에서\n 어린 시절 느꼈던 식물과의 특별한 교감을 떠올린다.\n 식물로부터 살아갈 용기를 얻은 ‘현재’는\n 도심 속 <식물카페, 온정>을 운영하게 된다.\n 본인의 반려식물과 함께 저마다의 사연을 가지고\n 카페를 찾은 손님들에게 ‘현재’는 병든 식물은 물론\n 병든 마음에 필요한 그만의 식물 처방전을 건넨다.",
        "staff": [
          {
            "name": "이가경",
            "role": "주연",
            "image_url": "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F148%2F202001231108136801.png&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "청춘 선거",
        "title_eng": "Vote Young Ones, 2020",
        "postr_url": "https://movie-phinf.pstatic.net/20210520_168/1621498719009MT53k_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "0.00",
        "rating_cri": "6.00",
        "rating_net": "8.80",
        "genre": "다큐멘터리",
        "showtimes": "99분",
        "release_date": "2021.06.17 개봉",
        "rate": "12세 관람가",
        "summary": "제주 최초 여성 도지사에 출마한 만 32세 고은영.\n 바꾸고 싶어서, 바뀌고 싶어서 선거에 뛰어든 사람들.\n 맨땅에 헤딩하면 어떤가. 맨날 후달리면 어떤가.\n ‘청춘’을 유일한 ‘선거전략’으로 삼았다?\n 무모하지만 판타스틱했던 청춘들이 온다\n \n 판타스틱 청.춘.박.두.",
        "staff": [
          {
            "name": "안재홍",
            "role": "조연",
            "image_url": "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png"
          }
        ]
      },
      {
        "title_kor": "폭력의 그림자",
        "title_eng": "Calm With Horses, 2019",
        "postr_url": "https://movie-phinf.pstatic.net/20210622_185/1624354002767gWABY_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "평점 없",
        "rating_cri": "6.00",
        "rating_net": "8.50",
        "genre": "드라마,범죄",
        "showtimes": "101분",
        "release_date": "2021.06.17 개봉",
        "rate": "청소년 관람불가",
        "summary": "황홀한 아일랜드 배경에 스며드는 액션\n 전직 복서이면서 자폐증을 앓는 아들에게 좋은 아빠가 되고자 한다.\n 그러나 청부 살인 일을 맡게 되면서 그의 삶은 위태롭게 흔들리기 시작하는데…",
        "staff": [
          {
            "name": "배리 케오간",
            "role": "조연",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000003428%2FPM342827_181915_000.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "극장판 콩순이: 장난감나라 대모험",
        "title_eng": "2020",
        "postr_url": "https://movie-phinf.pstatic.net/20210511_239/1620717383918Q0bgO_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "9.09",
        "rating_cri": "6.00",
        "rating_net": "8.94",
        "genre": "애니메이션",
        "showtimes": "79분",
        "release_date": "2021.05.05 개봉",
        "rate": "전체 관람가",
        "summary": "“진짜 진짜 이번이 마지막! 이것만 사주세요~!”\n 장난감가게의 새 장난감을 보니 콩순이의 가슴은 콩닥콩닥!\n 그런데 엄마는 안 된다고만 하고 흥.칫.뿡!\n “콩순아, 자꾸 새 것만 찾으면 집에 있는 장난감 친구들이 마음 아프지 않을까?”\n 장난감이 마음이 아프다니! 거짓말이야!\n \n \"안녕? 나는 해피! 해피는 너의 친구야\"\n 토라진 콩순이 앞에 나타난 원숭이 로봇 해피!\n 콩순이가 가장 아끼는 인형 토토를 주면 새 장난감들을 준다고?\n \n 집에 도착하니 거짓말처럼 새로운 장난감이 방 안에 한가득!\n 그런데 잠깐! 토토와 함께 엄마, 아빠, 콩콩이가 사라졌다?! 설마 해피가…?\n \n 사라진 가족을 찾기 위해 세요, 밤이, 송이와 함께\n 해피가 있는 신비한 장난감나라로 떠나는 콩순이!\n 콩순이와 친구들의 우당탕탕 콩짝발랄 모험이 시작된다!",
        "staff": [
          {
            "name": "이선명",
            "role": "감독",
            "image_url": "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png"
          }
        ]
      },
      {
        "title_kor": "링0 - 버스데이",
        "title_eng": "リング0 バ－スデイ, Ring 0: Birthday, 2000",
        "postr_url": "https://movie-phinf.pstatic.net/20111221_251/1324458095432xoYg7_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "평점 없",
        "rating_cri": "",
        "rating_net": "6.84",
        "genre": "공포,스릴러",
        "showtimes": "97분",
        "release_date": "2003.04.11 개봉",
        "rate": "15세 관람가",
        "summary": "현재 도쿄 중심가. 한 십대 소녀가 오래된 우물과 흉가, 그리고 절대 올라가서는 안 될 계단에 관한 꿈을 이야기한다. 야마무라 사다코는 그녀의 어머니인 시즈코가 자살한 후 아버지인 이쿠마 박사와 함께 오시마 섬을 떠나 도쿄로 상경한다. 젊은 여성으로 자란 사다코는 이쿠마 박사의 제자인 신경학 전공의 쿠노 박사의 보호 아래 극단의 연극 지망생이 되어 공연 연습 중이다. 사다코는 자신도 모르는 사이에 주연 여배우 아이코에게 이상한 영향을 미치고, 의상 코디네이터 에츠코는 그것을 눈치 챘지만, 음향 감독 토야마는 감독인 시게모리를 탓한다. 하지만 그는 극에 쓰일 배경 효과 테이프에서 이상한 소리를 발견한다.\n  공연을 바로 앞 둔 어느날, 아이코가 리허설 도중 의문의 죽음을 당하고, 사다코가 그 대역으로 발탁된다. 시게모리는 사다코를 스타로 만들어 주겠다며 그녀를 덮치지만, 그녀를 감싸안는 토마야에 대한 질투심에 젖어 그를 공격하다가 사고사를 당한다. 이어지는 불가사의한 기괴 현상과 연속되는 죽음의 원인이 사다코라고 생각한 극단 멤버들은 사다코를 몰아 세우다 그녀를 죽이고 만다. 그들은 그 시체를 꿈에서와 똑같은 집으로 끌고 가는데, 거기서 그들은 이쿠마 박사와 길고 검은머리에 얼굴이 가려진 작은 소녀를 발견한다. 드디어 상상을 초월한 사다코의 비밀이 밝혀지기 시작하는데.",
        "staff": [
          {
            "name": "반 다이스케",
            "role": "조연",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000374%2FPM37427_185921_000.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "매직아치",
        "title_eng": "Magic Arch, 2020",
        "postr_url": "https://movie-phinf.pstatic.net/20210429_192/1619679768331akKbm_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "9.00",
        "rating_cri": "5.00",
        "rating_net": "8.78",
        "genre": "애니메이션,코미디",
        "showtimes": "84분",
        "release_date": "2021.07.01 개봉",
        "rate": "전체 관람가",
        "summary": "깊은 바닷 속 소심한 돌고래 ‘델피’는\n 오래 전 모험을 떠난 아버지에게 들은 숨겨진 도시를 찾기 위한 탐험 중\n 원하는 것으로 변신시켜주는 ‘매직아치’를 발견하게 된다.\n \n 한편, 시시탐탐 피쉬타운을 노리던 곰치들은 ‘매직아치’의 존재를 알게 되자\n ‘매직아치’를 이용해 피쉬타운을 차지하려 하는데…\n \n 과연 델피는 피쉬타운의 평화를 지키고 용감한 돌고래가 될 수 있을까?",
        "staff": [
          {
            "name": "바실리 로벤스키",
            "role": "감독",
            "image_url": "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png"
          }
        ]
      },
      {
        "title_kor": "분노의 질주: 더 얼티메이트",
        "title_eng": "Fast & Furious 9 THE FAST SAGA, 2021",
        "postr_url": "https://movie-phinf.pstatic.net/20210421_37/1618971733493B4ykS_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "8.87",
        "rating_cri": "5.71",
        "rating_net": "7.62",
        "genre": "액션",
        "showtimes": "142분",
        "release_date": "2021.05.19 개봉",
        "rate": "12세 관람가",
        "summary": "도미닉(빈 디젤)은 자신과 가장 가까웠던 형제 제이콥(존 시나)이 사이퍼(샤를리즈 테론)와 연합해\n 전 세계를 위기로 빠트릴 위험천만한 계획을 세운다는 사실을 알게 되고,\n 이를 막기 위해 다시 한 번 패밀리들을 소환한다.\n \n 가장 가까운 자가 한순간, 가장 위험한 적이 된 상황\n 도미닉과 패밀리들은 이에 반격할 놀라운 컴백과 작전을 세우고\n 지상도, 상공도, 국경도 경계가 없는 불가능한 대결이 시작되는데…",
        "staff": [
          {
            "name": "미셸 로드리게즈",
            "role": "주연",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000058%2FPM5829_173000_000.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "온다",
        "title_eng": "来る, It Comes, 2018",
        "postr_url": "https://movie-phinf.pstatic.net/20200302_77/1583113976085kgJT8_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "5.71",
        "rating_cri": "5.40",
        "rating_net": "7.11",
        "genre": "공포",
        "showtimes": "134분",
        "release_date": "2020.03.26 개봉",
        "rate": "15세 관람가",
        "summary": "행복한 결혼 생활 중인 한 남자가 자신을 부르는 미스터리한 ‘그것’의 전화를 받는다\n 초현실적이고 의문스러운 사건들이 이어지고 결국 그의 아내와 딸도 표적이 된다\n 보이지 않지만 도망칠 수도 없는 공포 속, ‘그것’이 부른 그들의 비밀도 서서히 드러나는데...\n 준비됐습니까? 맞이합시다!",
        "staff": [
          {
            "name": "츠마부키 사토시",
            "role": "주연",
            "image_url": "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F121%2F202102171512023051.png&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "#위왓치유",
        "title_eng": "V siti, #WeWatchYou, 2020",
        "postr_url": "https://movie-phinf.pstatic.net/20210520_89/1621492263055WWAzV_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "0.00",
        "rating_cri": "6.00",
        "rating_net": "9.04",
        "genre": "다큐멘터리",
        "showtimes": "104분",
        "release_date": "2021.06.03 개봉",
        "rate": "청소년 관람불가",
        "summary": "평범한 집처럼 꾸며진 3개의 세트장,\n 12살로 설정한 페이크 계정을 만들고 컴퓨터 모니터 앞에 선 배우들.\n 계정 계설과 동시에 전 세계 남성이 접촉해왔으며\n 열흘 간 나체사진 요구, 가스라이팅, 협박, 그루밍 등을 시도하는 남성은 총 2,458명이었다.\n 그리고 우린 그 중 21명과 대면하게 된다.\n \n 범죄의 형식이 온라인으로 확산된 언택트 시대.\n 성에 대한 가치관이 형성되지 않은 아동·청소년들에게 일어나는 충격적인 디지털 성범죄를 추적한다.\n 그리고, 가해자들의 처벌까지 이어질 수 있을까?\n \n 디지털 성범죄자 검거 프로젝트\n <#위왓치유>",
        "staff": [
          {
            "name": "바르보라 차르포바",
            "role": "감독",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004367%2FPM436780_142443_000.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "5인의 해병",
        "title_eng": "1961",
        "postr_url": "https://movie-phinf.pstatic.net/20111222_24/13244906898273mELY_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "평점 없",
        "rating_cri": "",
        "rating_net": "8.28",
        "genre": "전쟁,드라마",
        "showtimes": "118분",
        "release_date": "2018.06.05 재개봉, 1961 개봉",
        "rate": "12세 관람가",
        "summary": "한국전쟁에 참전한 해병소위 오덕수(신영균 분)는 일선의 소대장을 자원하여 전선으로 간다. 아버지 오성만 중령(김승호 분)이 대대장으로 있는 부대로 가게 된 오덕수를 그의 아버지는 반갑게 맞이하지만 어릴 적부터 항상 자신보다 형을 더 아꼈던 아버지에 대한 원망과 서운함은 아직까지 그의 가슴에 깊게 남아있다.\n 중공군과의 대치상태가 계속되고 있는 현재의 전선 상황 속에서 제대로 된 공격이 이루어지지 않고 병사들은 참호 속에서 지쳐간다. 현재의 위치만을 고수하라는 지시 속에 분대장과 분대원들의 갈등이 나타나고, 시골 출신의 영선(박노식 분), 학사 출신의 종국(최무룡 분), 고향에 홀어머니를 두고 온 훈구(황해 분), 의장대출신의 주환(곽규석 분)은 자신들을 못살게 구는 분대장이 무척 못마땅하다.\n 어느 날, 하영규 이병과 잠복근무를 나간 종국은 적의 갑작스런 기습을 받는다. 잠깐 동안의 교전 상황 속에서 영규는 수류탄을 몸으로 막아 종국을 살리고 그 자리에서 즉사한다. 그의 죽음으로 종국은 그동안 이기적이고 냉소적이었던 자신의 태도를 되돌아보게 된다.\n 영규를 아꼈던 분대장은 그가 죽자 홀로 적지로 수색을 나갔다가 중상을 입고 돌아온 후, 적의 상황과 이동 계획 등 중요 기밀을 알리고 숨을 거둔다. 그의 죽음을 애도하는 가운데, 적의 탄약고 폭파를 위한 특공대 편성 작전이 하달되고, 오소위는 분대장의 죽음에 자극되어 특공대를 자원한 영선, 종국, 훈구, 주환과 함께 살아 돌아오기 힘든 임무를 수행하게 된다. 떠나기 직전 오소위는 아버지로부터 형의 출생에 관한 이야기를 듣고 그간의 모든 오해를 풀게 되며 오중령은 그에게 살아 돌아올 것을 당부한다.\n 그러나 임무를 수행하는 과정 속에서 병사들은 하나둘씩 목숨을 잃고 결국 성공적으로 임무를 완수한 후 중상을 입은 오소위 역시 종국의 품에서 죽음을 맞이한다. 5명의 해병 중 유일하게 살아 돌아 온 종국은 눈물을 머금고 오중령에게 작전 수행 결과를 보고하며 오소위의 유품을 전달한다.",
        "staff": [
          {
            "name": "박노식",
            "role": "주연",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000293%2F00000029349-t.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "기기괴괴 성형수",
        "title_eng": "Beauty Water, 2020",
        "postr_url": "https://movie-phinf.pstatic.net/20200901_11/1598922866258hETJp_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "7.92",
        "rating_cri": "6.60",
        "rating_net": "6.92",
        "genre": "공포,스릴러",
        "showtimes": "85분",
        "release_date": "2020.11.18 재개봉, 2020.09.09 개봉",
        "rate": "15세 관람가",
        "summary": "지금부터 기적의 성형수 사용 방법을 알려드리겠습니다.\n 본인의 얼굴을 거울로 확인해 보세요.\n 사진을 찍어두셔도 좋습니다. 마지막 작별의 시간이니까요.\n 물과 성형수를 4:1 비율로 섞은 후, 20분간 얼굴을 담가주세요.\n 앞으로 당신의 근육과 살의 성질이 완전히 변하게 됩니다. 찰흙처럼 말이죠.\n 겁먹지 말고… 당신이 원하는 얼굴을 만들어보세요\n 이제 당신은 새로 태어나는 겁니다. 아주 새롭게…\n \n 부작용, 후유증 없이 아름다워지는 단 하나의 방법\n 바르면 성형이 되는 기적의 물 성형수\n 올여름 가장 기괴하고 독창적인 호러성형괴담이 온다!",
        "staff": [
          {
            "name": "최승훈",
            "role": "주연",
            "image_url": "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F201409%2F20140917002548148-7892356.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "까치발",
        "title_eng": "Tiptoeing, 2019",
        "postr_url": "https://movie-phinf.pstatic.net/20210506_259/1620280381079wzSrW_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "0.00",
        "rating_cri": "6.25",
        "rating_net": "8.45",
        "genre": "다큐멘터리",
        "showtimes": "79분",
        "release_date": "2021.06.03 개봉",
        "rate": "12세 관람가",
        "summary": "까치발로 걸음마를 시작한 딸 ‘지후’\n 엄마 ‘우정’은 의사에게 충격적인 선언을 듣는다!\n \n “아이가 뇌성마비일 수 있어요”\n \n 크면서 자연스레 없어질 수 있다는 말 한마디에 모든 것을 걸었지만\n 6살이 된 지금까지도 ‘지후’는 까치발로 걷는데…\n \n 엄마에게 ‘괜찮아’라는 말을 듣고 싶은 딸들의 이야기",
        "staff": [
          {
            "name": "우진아",
            "role": "조연",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004500%2FPM450036_150208_000.JPEG&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "나는 나를 해고하지 않는다",
        "title_eng": "I Don’t Fire Myself, 2020",
        "postr_url": "https://movie-phinf.pstatic.net/20201230_87/1609308950593VgLko_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "8.17",
        "rating_cri": "6.88",
        "rating_net": "7.98",
        "genre": "드라마",
        "showtimes": "111분",
        "release_date": "2021.01.28 개봉",
        "rate": "12세 관람가",
        "summary": "7년간 근무했던 회사에서 하청 업체로 파견 명령을 받은 정은,\n 자신의 자리를 찾아보려 하지만 사람들은 그녀를 불편해하고, 현장 일은 낯설다.\n 그러나 반드시 1년을 채워 원청으로 돌아가고 싶은 정은은\n ‘막내’의 도움으로 점점 적응해가는데…\n 1년의 파견, 살아남기 위해 치열하게 도약하다!",
        "staff": [
          {
            "name": "박지홍",
            "role": "조연",
            "image_url": "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F67%2F201407311748239811.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "너의 췌장을 먹고 싶어",
        "title_eng": "君の膵臓をたべたい, Let Me Eat Your Pancreas, 2017",
        "postr_url": "https://movie-phinf.pstatic.net/20170927_210/1506482182997qLEa4_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "8.36",
        "rating_cri": "5.29",
        "rating_net": "8.10",
        "genre": "드라마",
        "showtimes": "115분",
        "release_date": "2017.10.25 개봉",
        "rate": "12세 관람가",
        "summary": "스스로를 외톨이로 만드는 ‘나’\n 학교 최고의 인기인 ‘그녀’\n \n 어느 날, 우연히 주운 [공병문고]를 통해\n 나는 그녀와 비밀을 공유하게 되었다.\n \n “너 말이야, 정말 죽어?”\n “...응, 죽어”\n \n 그날 이후, 너의 무언가가 조금씩 내게로 옮겨오고 있다.",
        "staff": [
          {
            "name": "오오토모 카렌",
            "role": "조연",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000003389%2FPM338964_133945_000.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "러브 액츄얼리",
        "title_eng": "Love Actually, 2003",
        "postr_url": "https://movie-phinf.pstatic.net/20191202_278/1575250003279Taafr_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "9.24",
        "rating_cri": "7.00",
        "rating_net": "8.93",
        "genre": "멜로/로맨스,드라마,코미디",
        "showtimes": "130분",
        "release_date": "2020.12.16 재개봉, 2019.12.18 재개봉, 2017.12.20 재개봉, 2015.12.17 재개봉, 2013.12.18 재개봉, 2003.12.05 개봉",
        "rate": "15세 관람가",
        "summary": "사랑에 상처받은 당신을 위해,\n 사랑하지만 말하지 못했던 당신을 위해,\n 사랑에 확신하지 못했던 당신을 위해,\n 모두의 마음을 따뜻하게 할 선물이 찾아옵니다.",
        "staff": [
          {
            "name": "엠마 톰슨",
            "role": "주연",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000004%2FPM404_162039_000.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "번지 점프를 하다",
        "title_eng": "Bungee Jumping Of Their Own, 2000",
        "postr_url": "https://movie-phinf.pstatic.net/20111222_138/1324545567577v2JLW_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "8.45",
        "rating_cri": "",
        "rating_net": "8.98",
        "genre": "멜로/로맨스",
        "showtimes": "101분",
        "release_date": "2017.11.02 재개봉, 2001.02.03 개봉",
        "rate": "15세 관람가",
        "summary": "1983년 여름. 첫 눈에 반하는 일 따위는 믿지 않는 국문학과 82학번 서인우(이병헌 분)는 적극적이고 사랑스런 여자 82학번 인태희(이은주 분)를 만난다. 자신의 우산 속에 당돌하게 뛰어들어온 여자 인태희. 비에 젖은 검은 머리, 아름다운 얼굴, 그리고 당돌한 말투까지 인우의 마음은 온통 그녀로 가득 차 버린다. 그녀의 존재로 가슴 설레여하고, 그 사람의 손이 닿은 물건이면 무엇이든 소중하게 간직하며 사랑은 무르익어 간다.\n  험한 소리 퍼부으며 다시는 안 볼 것 같이 뒤돌아 가다가도 금세 혀가 말릴 정도로 그리움에 애를 태우는 그들에게 군입대라는 짧은 이별의 순간이 왔다. 그러나, 서로에게 짧은 이별이라 위로했던 그 순간은 영원으로 이어지는데...\n  2000년 봄. 사랑의 기억만을 간직한 채 새로운 삶을 살고 있는 인우. 이제 그는 어엿한 가장이고 고등학교 국어교사다. 그러나 아직도 태희를 잊지 못하는 그의 정수리 위로 다시 한 번 쏟아지는 감정의 소낙비. 17년전, 소나기가 쏟아지던 그 여름 자신의 우산 속에 갑작스레 뛰어들었던 태희처럼, 다시 그의 인생을 송두리째 흔드는 사람. 그녀처럼 새끼손가락을 펼치는 버릇이 있고, 그녀의 얼굴이 새겨진 라이터를 가지고 있고, 그녀가 했던 이야기를 그대로 하는 그 사람에게서 인우는 다시 사랑을 느끼기 시작하는데.\n  {“몇번을 죽고 다시 태어난대도, 결국 진정한 사랑은 단 한 번 뿐이라고 합니다. 대부분의 사람은, 한 사람만을 사랑할 수 있는 심장을 지녔기 때문이라죠. 인생의 절벽 아래로 뛰어내린대도, 그 아래는, 끝이 아닐 거라고, 당신이 말했었습니다. 다시 만나 사랑하겠습니다... 사랑하기 때문에 사랑하는 것이 아니라 사랑할 수 밖에 없기 때문에 당신을 사랑을 사랑합니다...” - 2001년, 서인우}",
        "staff": [
          {
            "name": "전미선",
            "role": "조연",
            "image_url": "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F201507%2F20150706132048900.jpeg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "부활",
        "title_eng": "2020",
        "postr_url": "https://movie-phinf.pstatic.net/20210319_228/1616116102230P9GPX_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "9.75",
        "rating_cri": "",
        "rating_net": "9.53",
        "genre": "다큐멘터리",
        "showtimes": "110분",
        "release_date": "2021.03.26 재개봉, 2020.07.09 개봉",
        "rate": "전체 관람가",
        "summary": "이태석 신부가 아프리카 톤즈에 뿌린 사랑의 씨앗이 꽃으로 피어나는 이야기\n <울지마톤즈> 후속영화, 《부활》\n \n 아프리카 수단에서 헌신하다 마흔 여덟의 젊은 나이에\n 세상을 떠난 이태석 신부.\n 십년 후 그분의 사랑으로 자란 제자들을 찾아 나섰다.\n \n 의사?약사?공무원?의대에 다니는 제자만 40여명.\n 놀라운 것은 모두가 이태석 신부의 삶을 살아가고 있다.\n 주민들은 이 신부가 돌아왔다며 기뻐한다.\n \n 십만 킬로미터 대장정, 일 년 간의 추적\n 인간이 인간에게 꽃이 되어 주는 감동을 공개한다.",
        "staff": [
          {
            "name": "제임스 마누트",
            "role": "조연",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004477%2FPM447778_113759_000.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "블라이스 스피릿",
        "title_eng": "BLITHE SPIRIT, 2020",
        "postr_url": "https://movie-phinf.pstatic.net/20210518_236/162130414403674Ddt_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "6.60",
        "rating_cri": "4.33",
        "rating_net": "6.93",
        "genre": "판타지,코미디",
        "showtimes": "99분",
        "release_date": "2021.06.30 개봉",
        "rate": "12세 관람가",
        "summary": "뮤즈였던 전처 ’엘비라’의 죽음 이후\n 슬럼프에 빠진 작가 ‘찰스’는\n 영감을 얻기 위해 사랑하는 아내 ‘루스’와 함께\n 심령술사 ‘마담 아카티’를 찾아가 강령회를 제안한다\n \n ‘마담 아카티’의 진지한 퍼포먼스에도 불구하고\n 아무 일도 일어나지 않자 다들 코웃음 쳤지만\n 그 날 밤, ‘찰스’ 앞에 죽은 ‘엘비라’가 나타나는데…\n \n 목숨 건 살벌한 삼각관계가 시작된다!",
        "staff": [
          {
            "name": "아일라 피셔",
            "role": "주연",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000062%2F00000006282-t.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "사막의 라이온",
        "title_eng": "Lion Of The Desert, 1981",
        "postr_url": "https://movie-phinf.pstatic.net/20111222_144/1324498432034dBAmo_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "평점 없",
        "rating_cri": "",
        "rating_net": "8.39",
        "genre": "전쟁,드라마",
        "showtimes": "180분",
        "release_date": "1981.12.17 개봉",
        "rate": "12세 관람가",
        "summary": "20세기 초기에 벌어졌던 이탈리아와 리비아 사이의 20년 전쟁이 이 영화의 소재이다. 이 영화는 실화이며 등장인물도 역사적 실존 인물의 실명을 그대로 활용하고 있다.\n  20세기 초, 당시 끊임없이 벌어졌던 강대국의 제국주의 전쟁은 아프리카에서도 예외가 아니었다. 영국은 이집트를, 프랑스는 튀니지아를, 스페인은 모로코를 점령했다. 그런데 이탈리아는 1910년부터 리비아를 침공하였으나 29년까지 교착상태에 빠진다. 그러자 무솔리니는 새 지후관 그라치아니를 파견한다.\n  한편 그의 상관 베드윈족의 지도자 요마르 무크타르로서 전직은 교사이며 적을 물리치는 것만이 평화로 가는 유일한 방법이라는 코란의 정신을 이어받아총을 들고 나선 탁원한 전술가이다. 이탈리아군에 의한 무자비한 양민학살이 지속되지만 무크타르는 사막전과 산악전에서 뛰어난 전술로 현대병기로 무장한 이탈리아군을 계속 패퇴시킨다.\n  평화라는 미명하에 작전상의 협상이 벌어지고 전쟁은 계속된다. 결국 이탈리아군은 리비아 사막 수백 마일에 4천 명의 인부를 동원해 수천 톤의 철조망 작업을 행하영 베드윈족 5천명을 강제 수용소에 수용하고 무크타르를 생포해 공개리에 교수형에 처함으로서 1931년 9월 16일 전쟁을 종결한다.",
        "staff": [
          {
            "name": "이렌느 파파스",
            "role": "조연",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000059%2FPM5980_111332_000.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "언어의 정원",
        "title_eng": "言の葉の庭, The Garden of Words, 2013",
        "postr_url": "https://movie-phinf.pstatic.net/20210506_116/1620269253724yUAgH_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "8.95",
        "rating_cri": "6.97",
        "rating_net": "8.17",
        "genre": "애니메이션",
        "showtimes": "46분",
        "release_date": "2020.04.22 재개봉, 2016.07.07 재개봉, 2013.08.14 개봉",
        "rate": "12세 관람가",
        "summary": "구두 디자이너를 꿈꾸는 고등학생 ‘다카오’는\n 비가 오는 날이면 도심의 정원으로 구두를 스케치하러 간다.\n \n 어느 날 그는 우연히 ‘유키노’라는 여인과 정원에서 만나게 되고,\n 예상치 못한 만남은 비가 오는 날이면 계속 이어진다.\n \n 그리고 비록 이름조차 모르지만 걷는 법을 잊어버린 그녀를 위해\n ‘다카오’는 구두를 만들어 주기로 결심한다.\n \n 그러나 장마가 끝나갈 무렵, 그들 사이에는\n 뭔가 말하지 못한 것들이 남아 있는 듯한데…",
        "staff": [
          {
            "name": "테라사키 유카",
            "role": "조연",
            "image_url": "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png"
          }
        ]
      },
      {
        "title_kor": "욕창",
        "title_eng": "A Bedsore, 2019",
        "postr_url": "https://movie-phinf.pstatic.net/20200617_91/1592361542959sLERz_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "8.83",
        "rating_cri": "6.80",
        "rating_net": "8.36",
        "genre": "드라마",
        "showtimes": "99분",
        "release_date": "2020.07.02 개봉",
        "rate": "12세 관람가",
        "summary": "퇴직 공무원 창식은 간병인 수옥과 함께 뇌출혈로 쓰러진 아내 길순을 돌보며 지내던 중\n 길순에게 욕창이 생긴 것을 발견한다.\n \n 욕창과 함께 길순의 건강이 점점 악화되자 애써 감춰두었던 각자의 욕망이 드러나며,\n 마음속 상처들이 덧나기 시작한다.",
        "staff": [
          {
            "name": "김재록",
            "role": "조연",
            "image_url": "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202010%2F20201006191619949-8844251.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "초속5센티미터",
        "title_eng": "秒速 5センチメ-トル, 5 CENTIMETER PER SECOND, 2007",
        "postr_url": "https://movie-phinf.pstatic.net/20191115_264/15737816336734R30z_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "9.52",
        "rating_cri": "7.00",
        "rating_net": "8.36",
        "genre": "애니메이션,드라마",
        "showtimes": "62분",
        "release_date": "2017.11.02 재개봉, 2016.07.07 재개봉, 2007.06.21 개봉",
        "rate": "전체 관람가",
        "summary": "초등학교 졸업과 동시에 떨어져 있게 된 ‘타카키’와 ‘아카리’.\n 둘만의 특별한 추억만 남은 채 시간이 흐른다.\n 폭설이 내리던 어느 날 밤,\n ‘타카키’는 ‘아카리’를 찾아 나서는데…",
        "staff": [
          {
            "name": "오노우에 아야카",
            "role": "주연",
            "image_url": "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png"
          }
        ]
      },
      {
        "title_kor": "쾌걸 조로",
        "title_eng": "The Mark Of Zorro, 1940",
        "postr_url": "https://movie-phinf.pstatic.net/20111222_239/1324490771924rL0Co_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "평점 없",
        "rating_cri": "",
        "rating_net": "6.60",
        "genre": "",
        "showtimes": "94분",
        "release_date": "1955.04.06",
        "rate": "NR",
        "summary": "",
        "staff": [
          {
            "name": "유진 팔렛",
            "role": "조연",
            "image_url": "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png"
          }
        ]
      },
      {
        "title_kor": "파이프라인",
        "title_eng": "Pipeline, 2021",
        "postr_url": "https://movie-phinf.pstatic.net/20210526_164/1622018439127m1L49_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "7.94",
        "rating_cri": "5.00",
        "rating_net": "6.65",
        "genre": "범죄",
        "showtimes": "108분",
        "release_date": "2021.05.26 개봉",
        "rate": "15세 관람가",
        "summary": "손만 대면 대박을 터트리는 도유 업계 최고 천공기술자 ‘핀돌이’는\n 수천억의 기름을 빼돌리기 위해 거대한 판을 짠 대기업 후계자 ‘건우’의\n 거부할 수 없는 제안에 빠져 위험천만한 도유 작전에 합류한다.\n \n 프로 용접공 '접새', 땅 속을 장기판처럼 꿰고 있는 '나과장',\n 괴력의 인간 굴착기 '큰삽', 이 모든 이들을 감시하는 '카운터'까지!\n \n 그러나 저마다 다른 목적을 가진 이들이 서로를 속고 속이면서\n 계획은 예상치 못한 방향으로 흘러가기 시작하는데...\n \n 인생 역전을 꿈꾸는 여섯 명의 도유꾼들\n 그들의 막장 팀플레이가 시작된다!",
        "staff": [
          {
            "name": "태항호",
            "role": "주연",
            "image_url": "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F201907%2F20190716124604809.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "페드라",
        "title_eng": "Phaedra, 1962",
        "postr_url": "https://movie-phinf.pstatic.net/20160503_75/1462257623843x6Y4Q_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "평점 없",
        "rating_cri": "",
        "rating_net": "8.46",
        "genre": "",
        "showtimes": "미국 , 프랑스 , 그리스",
        "release_date": "1996.11.061967",
        "rate": "청소년 관람불가",
        "summary": "아테네에 테세우스라는 용맹하고 고독한 왕이 살았다. 그는 일찍이 비로 맞이했던 아마존 여왕 히폴리테가 아들을 하나 남긴 채 죽자 크레타왕의 딸 페드라와 결혼한다. 페드라는 젊은 날의 왕에게 버림받은 아리아드네의 자매였다. 아테네에 당도한 페드라 공주는 전처 소생의 아들 히폴리투스와 상면하는데..",
        "staff": [
          {
            "name": "줄스 다신",
            "role": "조연",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000159%2F00000015974-t.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "혼자 사는 사람들",
        "title_eng": "Aloners, 2021",
        "postr_url": "https://movie-phinf.pstatic.net/20210506_173/1620292148907Ao11i_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "8.81",
        "rating_cri": "6.71",
        "rating_net": "8.54",
        "genre": "드라마",
        "showtimes": "90분",
        "release_date": "2021.05.19 개봉",
        "rate": "12세 관람가",
        "summary": "집에서도 밖에서도 늘 혼자가 편한 진아.\n 사람들은 자꾸 말을 걸어오지만, 진아는 그저 불편하다.\n 회사에서 신입사원의 1:1 교육까지 떠맡자 괴로워 죽을 지경.\n 그러던 어느 날, 출퇴근길에 맨날 말을 걸던 옆집 남자가\n 아무도 모르게 혼자 죽었다는 걸 알게 된다.\n 그 죽음 이후, 진아의 고요한 일상에 작은 파문이 이는데…\n \n 저마다 1인분의 외로움을 간직한, 우리들 이야기",
        "staff": [
          {
            "name": "김해나",
            "role": "조연",
            "image_url": "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202005%2F20200523213656248.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "화양연화",
        "title_eng": "花樣年華, In The Mood For Love, 2000",
        "postr_url": "https://movie-phinf.pstatic.net/20201028_19/1603867994616GALu9_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "9.16",
        "rating_cri": "",
        "rating_net": "8.77",
        "genre": "드라마,멜로/로맨스",
        "showtimes": "99분",
        "release_date": "2020.12.24 재개봉, 2013.11.28 재개봉, 2000.10.21 개봉",
        "rate": "15세 관람가",
        "summary": "화양연화花樣年華\n 가장 아름답고 찬란했던 시절\n \n 같은 날 같은 아파트로 이사 온 ‘첸 부인’과 ‘차우’.\n 이사 첫날부터 자주 마주치던 두 사람은\n ‘차우’의 넥타이와 ‘첸 부인’의 가방이\n 각자 배우자의 것과 똑같음을 깨닫고 그들의 관계를 눈치챈다.\n \n 그 관계의 시작이 궁금해진 두 사람은 비밀스러운 만남을 이어가고\n 감정이 깊어지지 않기 위해 노력하지만, 서로에게 점점 빠져들기 시작한다.\n \"많은 일이 나도 모르게 시작되죠\"",
        "staff": [
          {
            "name": "손가군",
            "role": "조연",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000325%2F00000032528-t.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "맹크",
        "title_eng": "Mank, 2020",
        "postr_url": "https://movie-phinf.pstatic.net/20201104_244/1604453688064YHNPF_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "7.33",
        "rating_cri": "8.14",
        "rating_net": "7.30",
        "genre": "드라마",
        "showtimes": "131분",
        "release_date": "2020.12.04 개봉",
        "rate": "15세 관람가",
        "summary": "냉소적이고 신랄한 사회 비평가이자 알코올 중독자인 시나리오 작가 허먼 J. 맹키위츠가 훗날 영화사에 길이 남을\n 명작 <시민 케인>의 시나리오를 집필하는 과정을 통해 1930년대의 할리우드를 재조명하는 영화.",
        "staff": [
          {
            "name": "톰 펠프레이",
            "role": "주연",
            "image_url": "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F184%2F201611231616201081.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "미스 사이공: 25주년 특별 공연",
        "title_eng": "Miss Saigon : 25th Anniversary Performance, 2016",
        "postr_url": "https://movie-phinf.pstatic.net/20161103_256/1478160313724rHuDS_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "9.33",
        "rating_cri": "",
        "rating_net": "9.21",
        "genre": "공연실황",
        "showtimes": "175분",
        "release_date": "2016.11.24 개봉",
        "rate": "15세 관람가",
        "summary": "1975년 베트남 전쟁에 참가한 미군 크리스(앨리스테어 브라머)는 클럽 ‘드림랜드’에서 전쟁 고아 킴(에바 노블자다)을 만나 사랑에 빠지고 결혼식을 올린다. 하지만 1978년 호찌민 정부가 들어서고 미군이 급히 철수하게 되면서 크리스는 미국으로 돌아가게 되고 킴은 베트남에 홀로 남겨진 채 아들 탬을 낳게 된다.\n 한편, 킴의 약혼자였던 투이(홍광호)는 호찌민 정부 위원이 되어 반역자로 몰린 킴을 찾아와 결혼을 강요하지만, 킴이 자신의 청혼을 거절하자 위험한 선택을 하게 되는데",
        "staff": [
          {
            "name": "존 존 브라이언스",
            "role": "주연",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000003197%2FPM319741_154336_000.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "바람이 우리를 데려다 주리라",
        "title_eng": "Bad Ma Ra Khahad Bord, The Wind Will Carry Us, 1999",
        "postr_url": "https://movie-phinf.pstatic.net/20111216_53/1324028682457I10eG_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "9.25",
        "rating_cri": "",
        "rating_net": "8.20",
        "genre": "드라마",
        "showtimes": "118분",
        "release_date": "2002.11.22 개봉",
        "rate": "전체 관람가",
        "summary": "테헤란에서 450마일, 지도에도 나와있지 않은 외딴 마을 시어 다레(검은 계곡)로 지프 한 대가 들어선다. 붉은 언덕과 나무들을 길잡이 삼아 어렵게 도착한 베흐저드 일행. 스스로를 전화 기술자라고 소개하지만 멀리까지 와서는 하는 일이 없다. 묘지로 차를 몰아가는 모습에 마을 사람들은 그들이 보물을 찾으러 온 것은 아닐까 추측할 뿐...\n  사실 베흐저드 일행은 이 마을 최고령 할머니의 장례식을 촬영하러 온 취재팀이다. 문제는 일이 벌어지기도 전에 너무 앞질러 왔다는 것. 모두가 느긋하기만 한 이 곳에서, 곧 돌아가실 줄만 알았던 여배우는 여유만만. 좀처럼 천국행을 서두르지 않으신다. 심지어는 무심하게도 회복의 기미마저 보이고...\n  초조한 마음으로 할머니의 소식을 기다리는 보름동안, 베흐저드는 마을 사람들과 우정을 나눈다. 언제나 바쁘고 재촉하는 일에 익숙했던 그에게 마을사람들의 여유로운 삶과 넉넉한 자연의 모습은 신선한 충격. 서서히 이곳의 리듬에 젖어드는 베흐저드는 자기도 모르는 사이 놀라운 변신을 경험한다. 맨 처음 마을을 찾아온 불순한 목적과는 180도 다른 일에 뛰어드는데.",
        "staff": [
          {
            "name": "바흐만 고바디",
            "role": "조연",
            "image_url": "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F149%2F201510021614444621.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "부활: 그 증거",
        "title_eng": "Stigma, 2020",
        "postr_url": "https://movie-phinf.pstatic.net/20200917_133/1600306215089RKFsD_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "9.82",
        "rating_cri": "4.00",
        "rating_net": "9.27",
        "genre": "다큐멘터리",
        "showtimes": "99분",
        "release_date": "2020.10.08 개봉",
        "rate": "전체 관람가",
        "summary": "모든 종교는 죽음 너머의 세상에 관심이 있지만\n 종교를 가진 사람들조차\n 죽음은 두려움과 공포의 대상이다.\n \n 이용규 교수, 배우 권오중, 이성혜는\n 고통 때문에 다시 태어나지 않기를 소망하는 사람들과\n 고통 속에서도 부활의 소망을 갖고 살았던 사람들의 흔적을 찾는다.\n 인도 바라나시와 첸나이 그리고 이탈리아 로마에 있는 카타콤.\n 산 자와 죽은 자들 사이에서 보고 듣는 삶과 죽음, 그리고 부활.\n \n 현대의 가장 큰 문제는 죽음이 죽어버렸다는 이어령 교수와 이들의 여정은\n 마침내 말기 암 판정을 받은 후, 80차 항암치료를 하며\n 부활의 증인이 된 한 사람(천정은)을 만나게 되는데...",
        "staff": [
          {
            "name": "천정은",
            "role": "주연",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000004405%2FPM440552_143051_000.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "아야와 마녀",
        "title_eng": "アーヤと魔女, Earwig and the Witch, 2020",
        "postr_url": "https://movie-phinf.pstatic.net/20210610_19/1623305794918z2N37_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "9.60",
        "rating_cri": "5.00",
        "rating_net": "6.90",
        "genre": "애니메이션,가족,판타지",
        "showtimes": "83분",
        "release_date": "2021.06.10 개봉",
        "rate": "전체 관람가",
        "summary": "‘동료 마녀 12명을 완전히 따돌리면 아이를 찾으러 오겠다’는 수수께끼 같은 편지와 함께 성 모어발트의 집에 맡겨진 아야. 10살이 된 어느 날, 아야는 갑자기 찾아온 마법사 벨라와 맨드레이크를 따라 미스터리한 저택에 발을 들이게 된다. 순간이동할 수 있는 문부터 비밀의 방까지 신비로움으로 가득 찬 그곳에서의 생활이 시작되고, 아야는 벨라를 돕는 조건으로 마법을 배우기로 한다. 하지만 마법은 알려주지 않고 잔심부름만 시키는 마녀 벨라.\n \n 벨라를 골탕 먹이기 위한 마녀지망생 아야와\n 말하는 고양이 토마스의 아주 특별한 주문이 시작된다!",
        "staff": [
          {
            "name": "미야자키 고로",
            "role": "감독",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000001081%2F00000108191-t.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "아이들은 즐겁다",
        "title_eng": "2020",
        "postr_url": "https://movie-phinf.pstatic.net/20210414_16/1618390578607BCgD2_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "9.18",
        "rating_cri": "6.60",
        "rating_net": "9.34",
        "genre": "드라마",
        "showtimes": "108분",
        "release_date": "2021.05.05 개봉",
        "rate": "전체 관람가",
        "summary": "신나는 만남, 함께 한 여행, 그리고 마지막 인사 “고마워”\n 어딘가 아파서 병원에 있는 엄마와 항상 바쁜 아빠,\n 조금은 외롭지만 새로 전학간 학교에서 만난 친구들 덕분에\n 9살 다이는 즐겁다.\n \n 어느 날, 엄마와의 이별이 조금씩 가까워지는 것을 느낀 다이,\n 친구들과 함께 엄마를 만나기 위해 어른들 몰래 여행을 떠난다.\n 9세 인생 최초! 전재산을 탈탈 털어 떠난 여행,\n 그리고 엄마와의 만남 끝에 기다리고 있는 마지막 인사.",
        "staff": [
          {
            "name": "옥예린",
            "role": "주연",
            "image_url": "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202005%2F20200524163847270-806765.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "아이윌 송",
        "title_eng": "2021",
        "postr_url": "https://movie-phinf.pstatic.net/20210607_190/1623046653222gwhWg_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "평점 없",
        "rating_cri": "4.00",
        "rating_net": "9.12",
        "genre": "",
        "showtimes": "99분",
        "release_date": "2021.07.01",
        "rate": "12세 관람가",
        "summary": "더 이상 노래를 할 수 없게 된 무명가수 ‘물결’은\n 주체할 수 없는 슬픔을 안고 무작정 안동으로 떠난다.\n \n 여행지에서 우연히 ‘물결’을 만난 영화감독 ‘바람’은\n 어째선지 그녀가 못내 신경이 쓰여 자꾸만 주위를 맴돈다.\n \n 그렇게, 소중한 꿈만 좇아 바쁘게만 달려온 이들은\n 어느덧 서로의 상처와 아픔을 공유하며 마음을 열기 시작하는데…\n \n 꿈을 포기하는 순간 모든 것을 잃을까\n 그 어떤 용기도 낼 수 없었던 두 청춘은\n 다시 찬란한 희망의 멜로디를 만들어 갈 수 있을까?",
        "staff": [
          {
            "name": "김민체",
            "role": "조연",
            "image_url": "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F187%2F201806051150068131.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "올리브 나무 사이로",
        "title_eng": "Through The Olive Trees, Zire Darakhatan Zeyton, 1994",
        "postr_url": "https://movie-phinf.pstatic.net/20111212_299/1323671730343XKThF_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "8.50",
        "rating_cri": "",
        "rating_net": "8.08",
        "genre": "드라마",
        "showtimes": "103분",
        "release_date": "1997.08.23 개봉",
        "rate": "12세 관람가",
        "summary": "<그리고 삶은 계속된다>를 찍고 있는 케샤바르쯔 감독은 젊은 신혼부부 역을 맡을 두 명의 아마추어를 찾고 있던 중, 남편 역을 맡은 청년이 말을 더듬게 되자 촬영팀에 끼어 허드렛일을 하던 호세인으로 대치시킨다. 호세인은 아내 역을 맡은 테헤레를 오래전부터 짝사랑해오고 있었다. 영화 속에서와 같이 그녀의 남편이 되고 싶었던 것. 그 역을 맡은 호세인은 절호의 챤스라 생각하여 촬영기간을 이용, 가까이에서 열심히 구혼을 하지만 테헤레는 반응이 없을 뿐더러 테헤레의 할머니도 호세인이 집도 없는 가난뱅이라며 환영하지 않는다. 촬영은 끝나가고 얼음처럼 차가운 테헤레를 쫓아 호세인은 구불거리는 언덕길을 오른다. 테헤레는 호세인에게 한 번도 눈길을 주지 않은 채 길을 가는 데 불쌍한 호세인은 구혼을 하며 그 대답을 듣기 위해 쫓아간다. 카메라는 점점 멀어지고 테헤레의 모습도 작아지는데.",
        "staff": [
          {
            "name": "파해드 커라드먼드",
            "role": "조연",
            "image_url": "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png"
          }
        ]
      },
      {
        "title_kor": "인사이드 르윈",
        "title_eng": "Inside Llewyn Davis, 2013",
        "postr_url": "https://movie-phinf.pstatic.net/20131226_276/1388024023837qG7Pl_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "8.28",
        "rating_cri": "8.86",
        "rating_net": "8.17",
        "genre": "드라마",
        "showtimes": "105분",
        "release_date": "2014.01.29 개봉",
        "rate": "15세 관람가",
        "summary": "뉴욕의 시린 겨울에 코트도 없이 기타 하나 달랑 매고 매일밤 지인들의 집을 전전하는 무일푼 뮤지션 르윈. 듀엣으로 노래하던 파트너는 자살을 하고, 솔로앨범은 팔리지 않은 채 먼지만 쌓여간다. 우연히 떠맡게 된 고양이 한 마리처럼 계속 간직하기에는 점점 버거워지는 그의 꿈을 포기해야 하는 지 고민하던 중, 유명 음악 프로듀서인 버드 그로스맨이 주최하는 오디션에 참여하기 위해 시카고를 향한 여정에 오르게 되는데...",
        "staff": [
          {
            "name": "가렛 헤드룬드",
            "role": "조연",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000150%2FPM15056_161908_000.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "중경삼림",
        "title_eng": "重慶森林: Chungking Express, 1994",
        "postr_url": "https://movie-phinf.pstatic.net/20210208_255/1612760227924x9jop_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "9.27",
        "rating_cri": "",
        "rating_net": "8.93",
        "genre": "드라마",
        "showtimes": "102분",
        "release_date": "2021.03.04 재개봉, 2013.11.28 재개봉, 1995.09.02 개봉",
        "rate": "15세 관람가",
        "summary": "1994년 홍콩,\n \n “내 사랑의 유통기한은 만 년으로 하고 싶다”\n 만우절의 이별 통보가 거짓말이길 바라며 술집을 찾은 경찰 223\n 고단한 하루를 보내고 술집에 들어온 금발머리의 마약밀매상\n \n \"그녀가 떠난 후 이 방의 모든 것들이 슬퍼한다\"\n 여자친구가 남긴 이별 편지를 외면하고 있는 경찰 663\n 편지 속에 담긴 그의 아파트 열쇠를 손에 쥔 단골집 점원 페이\n \n 네 사람이 만들어낸 두 개의 로맨스\n 새로운 사랑을 만나는 방법에 대한 독특한 상상력",
        "staff": [
          {
            "name": "주가령",
            "role": "조연",
            "image_url": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000019%2F00000001990-t.jpg&type=u111_139&quality=95"
          }
        ]
      },
      {
        "title_kor": "체리 향기",
        "title_eng": "The Taste Of Cherry, Ta'm E Guilass, 1997",
        "postr_url": "https://movie-phinf.pstatic.net/20111222_162/1324499613360aYNMI_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "9.33",
        "rating_cri": "",
        "rating_net": "8.76",
        "genre": "드라마,실험",
        "showtimes": "99분",
        "release_date": "1998.01.01 개봉",
        "rate": "12세 관람가",
        "summary": "97년 깐느 영화제에서 이란 정부의 출국금지 조치로 출품되지 못하다가, 폐막 3일전, 이 영화의 상영 공고가 붙으면서 공식 경쟁작의 명단에도 없었고, 영화제 공식 책자에도 실리지 않은 영화가 출품되기도 했는데 결국 왕가위의 <해피 투게더>, 아톰 에고이앙의 <달콤한 내세>, 이안의 <얼음폭풍>을 제치고 황금 종려상을 수상하는 이변을 낳으면서 큰 화제를 모은 작품이다. 1994년 <올리브 나무 사이로> 이후 3년 여의 공백기 만에 발표한 작품이며 키아로스타미가 직접 제작까지 맡은 첫 영화이다.\n 한 남자가 자동차를 몰고 황량한 벌판을 달려간다. 그는 지나치는 사람들을 눈여겨 보며 자신의 차에 동승할 사람을 찾는다. 그가 찾고 있는 사람은 수면제를 먹고 누운 자신의 위로 흙을 덮어 줄 사람. 돈은 얼마든지 주겠다는 그의 간절한 부탁에도 사람들은 고개를 젓는다. 애띤 얼굴의 군인도, 온화한 미소의 신학도도 죽음이란 단어 앞에선 단호하게 외면할 뿐. 드디어 한 노인이 그의 제안을 수락한다. 박물관에서 새의 박제를 만드는 노인은 주인공 바디(Mr. Badii: Homayon Ershadi 분)에게 자신의 살아온 이야기를 해주며 작지만 소중한, 삶의 기쁨들을 하나씩 펼쳐 놓는다. 노인의 이야기를 들으며 불현 듯 삶에 대해 강한 애착을 느끼는 바디. 운동장을 뛰어노는 아이들의 재잘거림, 도시의 하늘 너머 펼쳐지는 저녁노을의 눈부신 빛깔. 밤이 오고 바디는 수면제를 먹고 자신이 파놓은 구덩이 안에 눕는다. 조금은 긴장된 그의 얼굴 위로 푸른 달빛이 서리고. 때맞춰 내리는 비. 사방은 온통 어둠뿐. 가끔씩 치는 번개의 빛에 그의 얼굴이 잠깐 보였다간 사라지는데. 아침이 오면 그는 그토록 바라던 죽음을 얻게될까? 아니면.",
        "staff": [
          {
            "name": "아브돌라만 바그헤리",
            "role": "주연",
            "image_url": "https://ssl.pstatic.net/static/movie/2012/06/dft_img111x139.png"
          }
        ]
      },
      {
        "title_kor": "프로페서 앤 매드맨",
        "title_eng": "The Professor and the Madman, 2019",
        "postr_url": "https://movie-phinf.pstatic.net/20210604_231/1622788969819Gr0ta_JPEG/movie_image.jpg?type=m203_290_2",
        "rating_aud": "8.13",
        "rating_cri": "5.25",
        "rating_net": "9.06",
        "genre": "드라마,미스터리,스릴러",
        "showtimes": "124분",
        "release_date": "2021.06.02 개봉",
        "rate": "15세 관람가",
        "summary": "빅토리아 시대, 대영제국의 부활을 위해 세상을 정의할 '옥스퍼드 사전 편찬 프로젝트'가 시작된다. 책임자로 부임한 이는 수십 개의 언어를 구사하는 괴짜 교수 제임스 머리(멜 깁슨). 그는 영어를 쓰는 모든 이들로부터 단어와 예문을 모으자는 파격적인 제안을 내놓는다. 전국에서 편지가 빗발치던 어느 날, 머리는 고전을 풍부하게 인용한 수백 개 예문이 담긴 편지를 발견한다. 보낸 이는 닥터 윌리엄 마이너(숀 펜), 그의 천재적인 능력으로 불가능해 보였던 사전 편찬 작업엔 속도가 붙는다. 하지만 윌리엄이 정신병원에 구금된 미치광이라는 사실이 밝혀지게 되는데...",
        "staff": [
          {
            "name": "에디 마산",
            "role": "조연",
            "image_url": "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F92%2F201702021039015981.png&type=u111_139&quality=95"
          }
        ]
      }
    ]
  };
  res.json(data);
});



const PORT = process.env.APP_PORT || 3479;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));