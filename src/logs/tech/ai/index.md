# AI & DEEP LEARNING

### Backend.AI
::: tip
AI & DEEP LEARNING 을 모르고 
"피할 수 없으면 즐겨라!" 라고 하여 lablup 세미나에 온 기록입니다.
횡성 수설 하니까 양해 바랍니다
:::

#### wrming up - 텐서플로 공식 예제를 돌려 보자 -> Backend.AI 에 올려서

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

#### 말라리아 셀 이미지
- 공공 데이터다
- 01_malaria_image_PIL_OpenCV.ipynb
- SIGMOID - 0에 가까우면 감염되지 않음 1에 가까우면 감염되엇다 - 현미경 이미지를 보고 파악
- SIGMOID 는 활성화 함수로 쓸때 양족 끝에 기울기가 0인 곳이 있다보니 ... 그 과정이 미분 ... 그라디언트 ( 아 T T )
<img width="1260" alt="image" src="https://user-images.githubusercontent.com/10396850/204975117-17690e42-d5be-47a2-8e31-e274bb99b388.png">

- activation 활성화 함수 예전에는 SIGMOID 많이 사용 기울기소실이라는 문제가 있다. relu 가 대안 하지만 비슷한 문제가 없는건 아니다.
- 바이너리 클래스픽케이션 할때 
