# AI & DEEP LEARNING

### Backend.AI
::: tip
AI & DEEP LEARNING 을 모르고 
"피할 수 없으면 즐겨라!" 라고 하여 lablup 세미나에 온 기록입니다.
횡성 수설 하니까 양해 바랍니다
:::

#### wrming up - 텐서플로 공식 예제를 돌려 보자 -> Backend.AI 에 올려서
- Backend.AI 빠르다 무료여도 코랩에 비해 제약사항이 없다.
- [피할 수 없으면 즐겨라 lab | up > /conf/2](https://docs.google.com/presentation/d/1fECgbTgVatpjV2AA0qBcbUX9lJNo_Vnp0-b68VR4BMY/edit#slide=id.p)
<img width="803" alt="image" src="https://user-images.githubusercontent.com/10396850/204970064-f14b7e68-ca0f-47c8-b23c-0539eff42dfb.png">

- Cheat Sheet
<img width="1187" alt="image" src="https://user-images.githubusercontent.com/10396850/204970154-b066bab8-1e78-4c95-9863-66ad6a2b14a0.png">

- tensorflow 는 2.x 에서 많은 변화가 있었다. keras 공식 API 를 정식 도입하면서 코드양이 1/10 줄어 들고 쉬워졌다.
- 연구자는 파이토치 / 현업에서는 tensorflow 가 좀더 많이 사용하는 추세이다.
- 255 로 나무면 0과 1사이로 만들어 준다
- 왜 0과 1사이로 만드나 - 민맥스 스케일링 해주면 성능이 좋아진다
- Ordinal vs One-hot encoding(원핫인코딩)기법
- tf.keras.layers.Flatten(input_shape=(28, 28)) -> Flatten 1차원 형태로 이미지를 넣어주면 어떤 단점이 있을까? 위치정보를 다 잃어 버려서 정보를 소실되고 이미지 데이터의 경우 양이 많이진다. - 그래서 CNN 을 쓴다 - ( 일단 적어 본다 나는 모른다 멋있는 말 인듯 하다 / 피할수없으면즐기자 )
- Flatten 해서 1차원으로 펴서 넣는걸 - 풀리커넥트디 ... 라고 한다.

- 짜장면 짬뽕 뭐 먹을꺼냐? 아무거나 - 최약이야!
``` python
model.compile(optimizer='adam', # 적당하게 러닝메이트를 찾아 가야 한다. 어떤 식으로 오차를 측정(Crossentropy) 할 때 적당한(?) 빠르게 천천히 방향과 속도를 적절하게 - 이중 아담은 base line 이상은 얻은 수 있다. 가장 무난하다.
              loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True), # 실값고 예측값이 얼마나 틀렸나? 웨이트와 바이어스 값을 찾을때 어떻게 평가할거냐? Crossentropy 라는 것은 얼마나 순수하냐? 0에 가까우면 아무 것도 안 섞임 
              metrics=['accuracy']) # 평가 할때는 accuracy 를 사용하겠다.
```

- overfitting => 학원 모의고사는 100점 맞음 학교가서 60점 맞음 - 난 학원교육에 overfitting 됨 / [사교육 없는 세상](https://noworry.kr)

- Softmax - 다 더하면 1이 됨
<img width="739" alt="image" src="https://user-images.githubusercontent.com/10396850/204973839-dfbfdb82-d075-4608-931b-b1b790862c6a.png">

#### 말라리아 도말 분류
- 말라리아 셀 현미경 이미지
- 공공 데이터다
- 01_malaria_image_PIL_OpenCV.ipynb
- SIGMOID - 0에 가까우면 감염되지 않음 1에 가까우면 감염되엇다 - 현미경 이미지를 보고 파악
- SIGMOID 는 활성화 함수로 쓸때 양족 끝에 기울기가 0인 곳이 있다보니 ... 그 과정이 미분 ... 그라디언트 ( 아 T T )
<img width="1260" alt="image" src="https://user-images.githubusercontent.com/10396850/204975117-17690e42-d5be-47a2-8e31-e274bb99b388.png">

- activation 활성화 함수 예전에는 SIGMOID 많이 사용 기울기소실이라는 문제가 있다. relu 가 대안 하지만 비슷한 문제가 없는건 아니다.
- 바이너리 클래스픽케이션 할때

- png 이미지 count
<img width="733" alt="image" src="https://user-images.githubusercontent.com/10396850/204978045-b3f3f5b1-ade8-497c-9049-978e019d9be0.png">

- 감염된 이미지는 점이 찍혀있다. 정상은 깨끗하다.

- 아래에서 3 3개의 채널 - RGB 를 뜻한다. 0~255
<img width="261" alt="image" src="https://user-images.githubusercontent.com/10396850/204978398-5ad04e1f-41ca-4d2b-9a04-7ebdcfde36e8.png">

- PIL - 포토샵에서 가능한 리사이징 윤각보정 마스킹처리 등등을 해주는 파이썬 라이브러리다. 특징 학습을 위해 윤각선을 따거나 필터를 사용이 가능하다. 다는 것은 openCV 라는것도 있다.

- PIL / openCV 는 딥러닝 라이브러이에서 기본으로 제공하고 있다. 좀더 디테일한 처리를 원한다면 별도로 사용 가능
- openCV 는 RGB 사용 안하고 BGR 을 사용한다

#### 실습
- 딥러닝은 비정형을 주로 다룬다
- 데이터셋 나누기 - 우리가 이미지를 하나 하나 갖고와 넘파이로 넣어서 하나 하나 전처리 가능하지만 텐서플로우 제공 
- CNN - 이지미 전처러 기능을 갖고 있는 층이 따로 있다. 컨블루션 과정
- 풀리케넥트 - 일차원 펴는 순간 주변 정보를 읽어 버리는 단점이 있다
- Backend.AI 는 google colab 대비 파일이 삭제 되지 않는 이상 세션별로 노트북을 다시 불러오지 않아도 된다

- 학술적 이미지로 
<img width="1012" alt="image" src="https://user-images.githubusercontent.com/10396850/204981165-79b1ea12-b343-4791-8d64-b5313e00212b.png">

- 정상 / 감염 - 세포에 쩜이 찍혀있다.
<img width="987" alt="image" src="https://user-images.githubusercontent.com/10396850/204981971-4825f7d4-81cb-4d82-bd95-b293996c0646.png">

- 최근 스타트업 [아트랩](https://artlab.ai/) ...

- Fill in the blanks
``` python
# ImageDataGenerator 를 통해 이미지를 로드하고 전처리 합니다.
from tensorflow.keras.preprocessing.image import _____________*1

# validation_split 값을 통해 학습:검증 비율을 8:2 로 나눕니다.
datagen = _____________(rescale=1/255.0, validation_split=0.2)
```

- 이미지 사이즈는? 적절하게 ... 속도 / 성능 / 압축
```
# 원본 이미지는 100~200 내외입니다.
# 큰것이 좋을까? 작은것이 좋을까? 상황에 따라 다르다.
# 작은건 어떨때 좋을까? - 이미지가 아주 많아서 사이즈를 줄여 줌으로 baseline 만들때 속도가 단축된다
# 크면? 연산 속도가 오래 걸린다
# 절절하게 ...
height = ?
width = ?
```

#### 학습 세트
<img width="1013" alt="image" src="https://user-images.githubusercontent.com/10396850/204988514-c219b5e5-3630-4c42-94be-65635d31979c.png">


#### CNN은 어떻게 동작하는가? Convolutional 연산은 어떻게 되는가?
- https://poloclub.github.io/cnn-explainer/
<img width="1322" alt="image" src="https://user-images.githubusercontent.com/10396850/204992068-622e232c-0838-4540-aa03-dfa977510c03.png">
- Convolutional ?
- pooling ?
- CNN 시신경을 모방했지만 지금에 와서는 그렇게만 볼 수 없다
- 필터 :
- 커널 Kernel : 
- 합성곱 Convolution
- tf 공식 문서 cnn 가이드 : https://www.tensorflow.org/tutorials/images/cnn
- tf 공식 문서 이미지 분류 https://www.tensorflow.org/tutorials/images/classification
``` python
model = Sequential()
# 입력층
model.add(Conv2D(filters=16, kernel_size=(3,3), activation='relu', input_shape=(height, width, 3)))
model.add(MaxPool2D(2,2))
model.add(Dropout(0.2))

# Fully-connected layer

# 출력층
model.add(Dense(?, activation='________'))
```

#### 레이어 설정

```python
model = Sequential()
# 입력층
model.add(Conv2D(filters=16, kernel_size=(3,3), activation='relu', input_shape=(height, width, 3)))
model.add(MaxPool2D(2,2))
model.add(Dropout(0.2))

model.add(Conv2D(filters=16, kernel_size=(3,3), activation='relu'))
model.add(MaxPool2D(2,2))
model.add(Dropout(0.2))
          
# Fully-connected layer  
model.add(Flatten())
model.add(Dense(128, activation='relu'))

# 출력층
model.add(Dense(1, activation='sigmoid'))
```

#### 모델요약
<img width="731" alt="image" src="https://user-images.githubusercontent.com/10396850/204995101-9f16aaf2-25ba-4a8c-851f-60661b8294c5.png">

#### 텐서플로우와 케라스
- 파이토치를 선호하는 분들도 있지만 텐서플로우가 케라스 API 도입하면서 좋아짐
- 프로덕트는 tf
- 연구는 파이토치

#### 학습
- 학습이 계속(에포크를 늘리면) 되면 loss 는 줄고 accuracy 는 는다. 
![image](https://user-images.githubusercontent.com/10396850/205002980-67a944c2-7759-45ac-b669-48a319aa8678.png)
- https://asia02.app.backend.ai:10477/notebooks/02-malaria-cnn-basic-input.ipynb / backend.ai 이용 / 개인 로그인 필요
<img width="826" alt="image" src="https://user-images.githubusercontent.com/10396850/205003522-1f188f99-4ce8-45c7-8fee-a26eaa6310aa.png">

#### 마지막 실습 : 75p - 이미지 인식 경진대회 우승 알고리즘을 이용
- 2번째 실습과 모델 부분만 바꾸어 쓴다 vcc /  - 전이학습(Transfer Learning) - 파라미터값만 조정해서 쓸수 있도록 만들어 두엇다.
- https://drive.google.com/file/d/14qymHoNxc3kYJRxaISIFm1OmSRdhO4KB/view?usp=share_link
- AlexNet 26% 오류를 16% 까지 감소
- AlexNet 이후 층을 깊게 쌓는 모델이 등장했다.
- 딥러닝은 비정형에서 좋은 성능을 정형은 부스팅계열을 사용
- 정형 -> 사람이 처리하여 넣어줌
- 비정형 -> 알아서!
- [03-malaria-vgg-resnet-output.ipynb](03-malaria-vgg-resnet-output.ipynb)
- [02-malaria-cnn-basic-output.ipynb](02-malaria-cnn-basic-output.ipynb)
- 


#### Backend.AI
- https://cloud.backend.ai
<img width="1561" alt="image" src="https://user-images.githubusercontent.com/10396850/205005801-82f9d0c8-3516-4e50-b839-6439e1ed9d7d.png">
<img width="1561" alt="image" src="https://user-images.githubusercontent.com/10396850/205005993-4b72f559-ee5a-44e0-8222-6b96923f15bf.png">
<img width="984" alt="image" src="https://user-images.githubusercontent.com/10396850/205005269-04bbdcfd-8e0a-4901-822d-68e893cb7206.png">


#### blank answer sheet
_____________*1 : ImageDataGenerator


#### 오늘의코드
- [todaycode](https://www.youtube.com/todaycode) 님 여러운거 쉽게 설명해 주셔서 감사합니다. 역시 어렵지만 못피하니 즐겨야죠. 하하하
