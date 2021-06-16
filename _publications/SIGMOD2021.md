---
title: "Active Sampling Count Sketch (ASCS) for Online Sparse Estimation of a Trillion Scale Covariance Matrix"
collection: publications
permalink: /publications/SIGMOD2021
venue: "ACM SIGMOD 2021 "
date: 2021-06-22
citation: '<b>Zhenwei Dai</b>, Aditya Desai</b>, Reinhard Heckel</b>, Anshumali Shrivastava. <b>ACM SIGMOD 2021.</b>'
---

[[PDF]](https://arxiv.org/pdf/2010.15951.pdf)

## Abstract
Estimating and storing the covariance (or correlation) matrix of high-dimensional data is computationally challenging. For this problem, both memory and computational requirements scale quadratically with the dimension. Fortunately, high-dimensional covariance matrices observed in text, click-through, and meta-genomics datasets are often sparse. In this paper, we consider the problem of efficiently estimating a sparse covariance matrix, which can scale to matrices with trillions of entries. The scale of the datasets requires the algorithm to be online, as any second pass over the data is prohibitive. In this paper, we propose Active Sampling Count Sketch (ASCS), an online and one-pass sketching algorithm, that recovers the large entries of the covariance matrix accurately. Count Sketch (CS), and other sub-linear compressed sensing algorithms, offer a natural solution to the problem in theory. However, vanilla CS does not work well in practice due to a low signal-to-noise ratio (SNR). At the heart of our approach is a novel active sampling strategy that increases the SNR of classical count sketches. We demonstrate the practicality of our algorithm with synthetic data and real-world high dimensional datasets. ASCS significantly improves over vanilla CS, demonstrating the merit of our active sampling strategy.