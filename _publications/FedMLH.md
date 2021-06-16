---
title: "Federated Multiple Label Hashing (FedMLH): Communication Efficient Federated Learning on Extreme Classification Tasks"
collection: publications
permalink: /publications/FedMLH
# venue: "In Submission"
# date: 2021-06-01
# citation: '<b>Zhenwei Dai</b>, Chen Dun, Yuxin Tang, Anshumali Shrivastava.'
---


## Abstract
Federated learning enables many local devices to train a deep learning model jointly without sharing the local data. Currently, most of federated training schemes learns a global model by averaging the parameters of local models. 
However, most of these training schemes suffer from high communication cost resulted from transmitting full local model parameters. Moreover, directly averaging model parameters leads to a significant performance degradation, due to the class-imbalanced non-iid data on different devices. Especially for the real life federated learning tasks involving extreme classification, (1) communication becomes the main bottleneck since the model size increases proportionally to the number of output classes; (2) extreme classification (such as user recommendation) normally have extremely imbalanced classes and heterogeneous data on different devices. To overcome this problem, we propose federated multiple label hashing (FedMLH), which leverages label hashing to simultaneously reduce the model size (up to 3.40X decrease) with communication cost (up to 18.75X decrease) and achieves significant better accuracy (up to 35.5% relative accuracy improvement) and faster convergence rate (up to 5.5X increase) for free on the federated extreme classification tasks compared to federated average algorithm.