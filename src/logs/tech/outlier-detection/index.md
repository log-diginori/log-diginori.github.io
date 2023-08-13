# ML outlier detection
::: tip Orz ... peace of mind
- 데이터 파이프라인 구성과 관리를 위해 [Apache Airflow](https://airflow.apache.org/) 사용
- 하지만 장애는 Airflow 와는 별도로 지속적으로 발생하고 ...
![소화불량](https://gvsc.rajephon.dev/before.jpg)

- 그러 그러 해서 outlier detection / anomaly detection 에 관심이 생김 !
:::

### Discovery
- [airflow provider anomaly detection github](https://github.com/andrewm4894/airflow-provider-anomaly-detection) 관련 오픈 소스 포착
![airflow-provider-anomaly-detection](https://user-images.githubusercontent.com/10396850/260209900-dfd16842-4404-4ccb-a01f-3237e60b635b.png)

- This post started with the article below. Thank you very much.
- [Painless Anomaly Detection with Apache Airflow](https://medium.com/apache-airflow/painless-anomaly-detection-with-apache-airflow-dfd83f320a9e)
![Data observability is so hot right now](https://miro.medium.com/v2/resize:fit:640/format:webp/1*d6ExBjGqE3r8G8_ECfbFHQ.jpeg)

### Draft Architects
![image](https://github.com/log-diginori/log-diginori.github.io/assets/10396850/1f5c2361-d27b-4718-813f-2ad0ef4320cd)

ref-1 의 실습 코드를 포크 하여 

### ref
- 1. [이상 탐지를 위한 다변량, 다단계, LSTM](https://medium.com/@andrewm4894/multi-variate-multi-step-lstm-for-anomaly-detection-ac78ae990a0)
- 2. [베어링의 진동센서 데이터에서 이상 감지, 시계열 데이터에 대한 이상 탐지를 위한 심층 학습 신경망 만들기](https://developer.ibm.com/tutorials/iot-deep-learning-anomaly-detection-5/)

![딥 러닝 및 LSTM](https://developer.ibm.com/developer/default/tutorials/iot-deep-learning-anomaly-detection-5/images/image1.png)
