# ML outlier detection
::: tip Orz ... peace of mind
- 데이터 파이프라인 구성과 관리를 위해 [Apache Airflow](https://airflow.apache.org/) 사용
- 하지만 장애는 Airflow 와는 별도로 지속적으로 발생하고 ...
![소화불량](https://gvsc.rajephon.dev/before.jpg)

- 그러 그러 해서 outlier detection / anomaly detection 에 관심이 생김 !
- 데이터 엔지니어링 팀이 답해야 하는 가장 중요한 질문은? 데이터 "정상"으로 유무 확인
:::

### Discovery
- [airflow provider anomaly detection github](https://github.com/andrewm4894/airflow-provider-anomaly-detection) 관련 오픈 소스 포착
![airflow-provider-anomaly-detection](https://user-images.githubusercontent.com/10396850/260209900-dfd16842-4404-4ccb-a01f-3237e60b635b.png)

- This post started with the article below. Thank you very much.
- [Painless Anomaly Detection with Apache Airflow](https://medium.com/apache-airflow/painless-anomaly-detection-with-apache-airflow-dfd83f320a9e)
![Data observability is so hot right now](https://miro.medium.com/v2/resize:fit:640/format:webp/1*d6ExBjGqE3r8G8_ECfbFHQ.jpeg)

### Draft Architects
![image](https://github.com/log-diginori/log-diginori.github.io/assets/10396850/1f5c2361-d27b-4718-813f-2ad0ef4320cd)

(작성중 ...)

### ref
- 1. [이상 탐지를 위한 다변량, 다단계, LSTM](https://medium.com/@andrewm4894/multi-variate-multi-step-lstm-for-anomaly-detection-ac78ae990a0)
- 2. [베어링의 진동센서 데이터에서 이상 감지, 시계열 데이터에 대한 이상 탐지를 위한 심층 학습 신경망 만들기](https://developer.ibm.com/tutorials/iot-deep-learning-anomaly-detection-5/)
- 3. [기계 학습(scikit-learn, pandas)을 사용한 시스템 로그의 이상 탐지](https://medium.com/@lfoster49203/anomaly-detection-in-system-logs-using-machine-learning-scikit-learn-pandas-b7e893ad0a95)
- 4. [복잡한 쿼리 언어나 추가 구성 없이 비정상적인 로그 패턴에 대해 자동으로 경고합니다 data dog](https://www.datadoghq.com/dg/logs/log-anomaly-detection/?utm_source=advertisement&utm_medium=search&utm_campaign=dg-google-logs-apac-loganomalydetection&utm_keyword=anomaly%20detection%20in%20log%20files&utm_matchtype=p&utm_campaignid=15422044009&utm_adgroupid=135367265239&gad=1&gclid=Cj0KCQjwoeemBhCfARIsADR2QCsBCjjVfkFXrEkBH5narjn4OMhb5Z71enINZ9LXWPf4KVXdtBCjwL0aAg7rEALw_wcB)
- 5. [기계 학습을 통한 로그 분석: ML/AI를 사용하여 로그를 분석하는 자동화된 접근 방식](https://www.zebrium.com/blog/part-1-machine-learning-for-logs)
- 6. [논문:DeepLog: Anomaly Detection and Diagnosis from System Logs through Deep Learning](https://users.cs.utah.edu/~lifeifei/papers/deeplog.pdf)
- 7. [github.python:DeepLog: 딥러닝을 통한 시스템 로그의 이상 탐지 및 진단](https://github.com/Thijsvanede/DeepLog)
- 8. [AIOps:loglizer](https://github.com/logpai/loglizer)
- 9. [github.AIopsTools](https://github.com/jixinpu/aiopstools)

- 10. [Prophet 라이브러리를 사용한 Airflow DAG의 이상 탐지](https://www.mikulskibartosz.name/airflow-prophet-anomaly-detection/)
- 11. [python-prophet-사용하기](https://velog.io/@convin305/python-prophet-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)
- 12. [시계열 예측 패키지 Prophet 소개](https://hyperconnect.github.io/2020/03/09/prophet-package.html)