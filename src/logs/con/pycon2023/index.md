---
title: PYCON 2023
ogImage: https://pbs.twimg.com/media/F3a20xBbwAA37Lo?format=jpg&name=4096x4096
metaTitle: PYCON2023
meta:
    - name: og:description
      content: 다시, 우리, 파이콘2023 참관 글적이
    - name: og:image
      content: https://pbs.twimg.com/media/F3a20xBbwAA37Lo?format=jpg&name=4096x4096
---
# PYCON 2023
- [https://2023.pycon.kr/session/schedule](https://2023.pycon.kr/session/schedule)
::: tip 3줄요약
- 다시 - 메인 로고는 BACK 과 같이 코로나 전으로 돌아가는 힘을 느낌
- 우리 - 조금은 서로 조심스럽지만 배려가 깔려있는 우리 모두를 위한 축제
- 피똥 - 음악을 만들고 자바스크립트를 몰라도 웹을 만드는 파이썬 재밋다 

2023.08.12-13 COEX 그랜드볼룸 1F 2F
:::

![start](https://user-images.githubusercontent.com/10396850/260189097-33b34f86-8904-4829-ba9f-0cd48bf93838.jpeg)
- 양일권에 한하여 현장 등록도 가능합니다. 

### 우리 파이썬의 꼬꼬마 시절
- [https://2023.pycon.kr/session/47](https://2023.pycon.kr/session/47)
![kkokko](https://user-images.githubusercontent.com/10396850/260189167-5806c9cf-9304-4175-b8c7-24175ad74a31.jpeg)
- 2000년 한국 오프라인 첫모임에서 피똥 ... 등등에서 강해 보이는 파이썬으로
- v2.4 에서 CjKcodecs 와 decoretor 
- 파이썬으로 하늘을 나는법

### 러스트 파이썬
- Jeong YunWon - [https://github.com/youknowone](https://github.com/youknowone), [https://youknowone.github.io/](https://youknowone.github.io/)
- [https://2023.pycon.kr/session/48](https://2023.pycon.kr/session/48)
- [https://rustpython.github.io](https://rustpython.github.io/)
[rustPytho](https://user-images.githubusercontent.com/10396850/260189197-296a1674-7806-4174-b6b3-95d6fb161310.jpeg)
- 파이썬 구현체는 10개가 넘는다 c, python ... + rs
- 경쟁, 모방하며 언어가 성장한다
- CPython 말고 다른 구현체를 써본적인 있는가? PyPy, Graal, Micro ...
- 피브(pip) 이렇게 발음하는 거구나 ㅎ
- 그렇다면 rustPython 의 자리는 어딘가? 그럼에도 불가하고 ~ ( 웹 브라우저 데모, )
- Ruff(러프) - 소스코드를 분석하여 오류룰 표시해주는 정적분석 ... Flake8 보다 빠르다.
- [Ruff](https://beta.ruff.rs/docs/) - flake + pydocstyle + Pylint(일부) + Black(진행중)
- Pylyzer - 엄청나게 빠른 파이썬 정석 분석기, type checker, mypy/pyright 와 비슷 rs 로 개발

### 짠내나는 데이터 다루기
![짠내나는 데이터 다루기](https://github.com/log-diginori/log-diginori.github.io/assets/10396850/22cce031-0791-4d66-887e-fef7a00e7c2b)
- [https://2023.pycon.kr/session/29](https://2023.pycon.kr/session/29)
- 판다스의 판다는 푸바오의 판다는 아니지만 ...
- 판다스와 파케이(parquet) 를 중심으로
- sciti-learn 의 pandas ... 지원 로드맵상에서 잘 될것이다.
- 샘플링, 분산처리(dask,vaex, pyspark), 청크와 반복문, [parquet](https://parquet.apache.org/)
- read_csv() chunksize 설정해서 조금씩 조금씩
- etl OR elt
- 공공포털에서 가장 큰 데이터는 국민건강보험공단_의약품 31G -> parquet (5G) -> 조금씩 읽어서 파일로 쓰고 다시 읽고 ~
- [분석(分析)](https://ko.dict.naver.com/#/entry/koko/c9f9949f666044b1949f457e82bca2da) - 한자가 이렇게 중요하다. 나눌 분! 쪼갤 석!
- 발표 차트에 나온 주단위 레텐션 ... 차트는 어떻게 그리신건가 궁금하다. 아주!
- 파이콘 부스에서 공식로고 티셔츠를 판매 중 이라고 하심가. 고고!!! 단돈 2만원 공식 로고 티셔츠 득탬 ~
- 그래서 물어봄 ML 만드는건 어렵고 모르고 재미난 모델을 받아서 재미난 서비스를 만들고 싶어요. 어디로 가면 되나요? -> [허깅페이스][https://huggingface.co/]


### 래블업 언어 모델 프롬프팅
![래블업 언어 모델 프롬프팅](https://user-images.githubusercontent.com/10396850/260206171-491d1ec2-39bc-452c-9263-85c38c61ad52.png)

- 나는 아래와 같이 해봤다. 이렇게 저렇게 해봤는데 이게 맘에 들엇다.  [chatbot-ui](https://github.com/mckaywrigley/chatbot-ui)에 대한 링크도 아래에 표기되어 있다.

![내가 해본거](https://user-images.githubusercontent.com/10396850/260206540-b4a71220-3f08-4582-81d4-8d6d834b6c10.png)

### 리스트와 딕셔너리 학습을 위한 패키지 개발 여정
- [한상곤](https://github.com/sigmadream)
- [https://pypi.org/project/melon-top100/](https://pypi.org/project/melon-top100/)
- 열역학을 듣고온 수강생에게 덧샘 뺄샘을 약간 모욕적이다.
- [Alison Hill, PhD](https://www.apreshill.com/) 와 고민에 붙여 ...
- 더 많은 파이썬 교육용 배포 팩키지가 많들어 지길 원한다.


### MLOps: Model Serving Architecture with BentoML
- [MLOps 의 분야중 하나인 Model Serving 에 대해 개략적인 내용을 정리해보려합니다. BentoML이라는 프레임워크를 통해 Model Serving 이라는 분야에서 어떤 것들을 해야하는지 설명](https://2023.pycon.kr/session/7)
- MLOps 는 무엇인가? 모델을 만들기를 뺀 모든것, 현생(학계) 에서 ML 박사(회사)였던 내가 이 세계에서는 쉘크립트 마스트(석사)?
- 모델서빙 생태계 - ML 플랫폼(Kubeflow AWS SageMaker) -> 모델 서빙 플랫폼(Yatai) -> 모델 서빙 프레임워크(벤토) -> 모델 만들기(파이토치, 텐서플로우)
- 모델 서빙 플랫폼 + 모델 서빙 프레임워크가 오늘 주제
- 모델 서빙 플랫폼는 웹프레임워와 공통점이 많다 - 차이점은 비지니스로직이 없고 / 디스크IO 도 없다. 요청 받아서 모델에게 전달만 해주면 끄읏
- 플랫폼 영영인 Kserv 가 있지만 ... 벤토가 좋다.
- API + 벡엔드 모델 워크(러너)
- 벤토에서는 모델을 저장하면 버전 관리를 해준다. s3 업로드도 가능하다.
- Yatai 로 같이 운영하면 docker 처럼 push pull ... 가능
- 벤토에서 모델을 갖고 cmd 를 하면 스웨거도 제공
- fastAIP 와 차이는 버저닝이 없고 모델 서빙 부분과 하나로 뭉쳐저 있어 성능적 측면이 다르다 벤토의 개발모드는 하나루 뭉쳐있다.
- 모델서버의 성능 튜닝은 워커, cpu, 워커/프로세스 설정, batchable option - 처리량은 증가하지만 처리속도는 느리다. 잘 생각하고 테스트 하고 써야한다. 안쓰는 방향으로 쓰고 있다. 모델의 특성에 따라 다르다.
- 벤토:OpenLLM 이라는 것도 있다.
- 배치사이즈가 커지만 pydantic 를 써서 직열화 시간을 줄이는 것이 가능하다.
- 판다스 사용하는 인스턴스는 느리다. modin 으로 하면 대안이 된다. 멀티 코어를 사용하니까. 속도가 중요하다면 쇼핑처럼
- 모델 서빙 플랫폼(Yatai, Kserver) - 버저닝, 모니터링 - 어떤 밴토를 띄우고 러너는 몇개 api 서버는 몇개 ... k8s 에다 알아서 ... 
- Yatai, 벤토의 데모는 공식 싸이트에서 미니쿠베 이용해서 시연이 가능하다.
- 벤토는 모든 ML.Framework 와 연결가능하다.
- 고성능이 필요하다면 triton-inference-server 는 매우 좋은 선택 - 벤토에서 러너로 지원이 가느하다. 공식 문서를 찾아 보자.
- [질문] 발표에서 보여준 프로파일링은 어떻게 하나요? [프로파일링은 파이참에서 c프로파일링으로 사용한다.](https://plugins.jetbrains.com/plugin/16536-line-profiler) 발표처럼 GUI 를 제공한다.

### Python으로 전자음악 작곡하기
![파이썬 음악 만들기](https://github.com/log-diginori/log-diginori.github.io/assets/10396850/84fefda9-6153-4207-8c7f-e43c871278ed)
- [python으로 numpy와 pedalboard를 이용해서 신디사이저를 구현해봅니다](https://2023.pycon.kr/session/28)
- 3분 길의의 음악을 작곡하려면 8백만게 값을 ...
- 인간의 귀에 음악처럼 들리도록 하는 연속된 값을 만들어 내는 것이 신디사이저

### 열린점심
![wow](https://github.com/log-diginori/log-diginori.github.io/assets/10396850/82a15a56-7ca5-431e-bbb5-e4aca2512283)
- AI 로 돈을 버는 방법에 대해 맛있는 점심을 함께 하며 이야기 나눔
- 크립토 ccxt 롱 숏 유니버스 벡테스트 ...


### Pynecone 프레임워크로 웹 기반 운영도구 개발하기
![pynecone](https://github.com/log-diginori/log-diginori.github.io/assets/10396850/e919081e-1687-4ef3-9934-18a0b84da9f2)
- [파인콘](pynecone.io) - [reflex](https://reflex.dev/)라는 이름으로 다시 브랜딩
- 오호라 자바 스크립트 어려운 나에게 큰 도움이
- 질문 - 차트는 아직 미숙하지만 테이블, 버튼 운영도구로 사용하기 편하다


### Python DDD
- https://2023.pycon.kr/session/6
- 도매인 전문가와 개발자간의 소통을 중요하게 생각함 - 유비쿼터스 랭귀지를 정의함

### FastAPI Deep-dive
- [https://2023.pycon.kr/session/21](https://2023.pycon.kr/session/21)
- FastAPI가 어떻게 "Fast"를 달성할 수 있었는지
- Uvcorn ASGI WSGI 랑 다름


### Python2 개발자의 Python3 개발 도전기
- PEP-498 {year=}
- PEP-484 Type Hints
```python
def sum(a: int, b: int) -> int:
    return a + b

# 에러 없음
print(f"{sum(3, 3.2)}")

# check
mypy main.py
```
- @dataclass PEP-557
``` python
from dataclasses ...

@dataclass
class Point:
    x: int
    y: int
    z: int

# fast api
@dataclass
class Point:
    id: int
    name: int
    ename: int
```
- PEP-492 async/await CPU 를 놓게 하지 말고 ... 코드를 갈아 없어야 한다. gunicorn -> uvicorn
- 3.11 은 3.10 대비 아무런 변화 없이 성능 개선
- 모든 파이썬의 변화는 PEP

### MLOps, LLM 개발에 필요한 실전 파이썬 디자인 패턴
- https://2023.pycon.kr/session/30
- 23개의 디자인 패턴 생성, 구조, 행동 2개로 나눔

### 라이트닝톡
- [목차](https://docs.google.com/document/u/0/d/1gfeBePHVNb2VFyONmy-r-qm9_hSNe_FDa8KsK9upKrI/mobilebasic)
- [평화](https://docs.google.com/presentation/d/1g-T98s61c7ixF2X84x5WEXMpnpWqIOk5rGciyEKrQDg/edit?usp=sharing)
``` yaml
- Numerical Methods in Scipy
    - https://github.com/kangwonlee/nmisp
    - 다양한 수치 해법을 Python 언어와 그 확장 기능인 SciPy 를 이용하여 설명

- 고랭 코리아 커뮤니티를 소개합니다!
    - gogo

- 공공기관에서 ‘비 전공자’가 전산도 ‘같이’하면서 사는 이야기
    - https://www.instagram.com/mirirnet/

- 나의 실시간 데이터 처리 도전기
    - 정적/동적 크롤링
    - 강동우

- 객체지향 파이썬을 위하여
    - [코딩의 신 아샬](https://www.youtube.com/channel/UCLLncfeIYljE0o_yUw7MkcA)
    - 파이썬은 객체지향 언어입니다. 웹 개발을 하면서 이 사실을 잊지 않으려면 어떻게 해야 할까요?
    - 위임
        - 썩지말자 Layer
    - [https://ko.onepredict.ai/](https://ko.onepredict.ai/) 채용중

- HW 아무것도 모르는채로 블루투스 디바이스 만들기
    - Circuitpython으로 BLE 날로먹기
    - 김슬
```

발표자 | 제목 | 한 줄 소개
-- | -- | --
이강원 | Numerical Methods in Scipy | https://github.com/kangwonlee/nmisp
한성민 | 고랭 코리아 커뮤니티를 소개합니다! | 고랭 코리아에 대한 소개 및 8월 5~6일 진행되었던, 고퍼콘 코리아 2023의 뒷 이야기를 짧은 라이트닝 토크 세션을 통해 전합니다!
차영호 | setup-python을 내가 원하는 환경에서 실행해도 될까? (Feat. Github Actions) | Centos/Rocky Linux 에서 setup-python 구동시켜보기(안될수도 있음)
김지은 | 프리랜서 1년 8개월 차 돌아보기 | 파이썬으로 밥벌이한 1년 8개월 간의 이야기를 해보려고 합니다
민경국 | 모든 파이프라인 엔지니어의 평화를 빕니다 | 오래전 디지털 풍물놀이 디지노리를 만들었습니다.
조현진 | 공공기관에서 ‘비 전공자’가 전산도 ‘같이’하면서 사는 이야기 | 전산 맛만 본 사람이 공공기관에서 전산으로 고통받는 이야기
강동우 | 나의 실시간 데이터 처리 도전기 | 저는 안정성있는 데이터 파이프라인 구축하는 데이터 엔지니어가 되고 싶은 0년차 개발자 강동우입니다.
아샬 | 객체지향 파이썬을 위하여 | 파이썬은 객체지향 언어입니다. 웹 개발을 하면서 이 사실을 잊지 않으려면 어떻게 해야 할까요?
김슬 | HW 아무것도 모르는채로 블루투스 디바이스 만들기 | Circuitpython으로 BLE 날로먹기
김무훈 | 사진으로 둘러보는 지난 파이콘 | 사진과 함께 여러 지난 파이콘을 자원봉사, 재정지원의 도움으로 참석한 이야기를 소개합니다.


### END
![pycon2023 end](https://pbs.twimg.com/media/F3a20xBbwAA37Lo?format=jpg&name=4096x4096)