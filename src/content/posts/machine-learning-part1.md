---
title: "Makine Öğrenmesi Part-1"
date: "2024-03-24"
excerpt: "Data Science, Machine Learning, Artificial Intelligence meraklılarına Machine Learning serisi"
category: "Machine Learning, Data Science"
---

Merhaba. Data Science, Machine Learning, Artificial Intelligence meraklılarına Medium' da Machine Learning serisi başlatıyorum. Why not? 🥲 Part-1 yazım, makine öğrenmesine ilk temasımız olup giriş seviyesinde başlayacaktır.

Umarım öğretici ve akıcı olur. 🚀

Let's get started!

## Makine Öğrenmesi Nedir?

Makine öğrenmesi yapay zekanın (AI) bir alt kümesidir. Bilgisayarları verilerden öğrenmeyi öğretmeye ve bunu yapmak için açıkça programlanmak yerine deneyimle geliştirmeye odaklanır. Makine öğrenmesinde algoritmalar, analize dayalı en iyi kararları vermek ve tahminleri yapmak için eğitilir.

*Makine öğrenmesindeki bir algoritma, bir makine öğrenmesi modeli oluşturmak için veriler üzerinde çalıştırılan prosedürdür.*

Makine öğrenmesi uygulamaları ile her alanda karşılaşmaktayız — evlerimizde, alışveriş sepetlerimizde, eğlence ortamlarımızda ve sağlık alanlarında.

## Algoritma vs. Model

Makine öğrenmesi algoritmaları elindeki verileri inceleyerek bir "örüntü tanıma" gerçekleştirir. Yani, algoritmalar verilerden ***öğrenir.***

Makine öğrenmesindeki bir "model", veriler üzerinde çalışan bir makine öğrenmesi algoritmasının çıktısıdır. Yani bir model, algoritma tarafından öğrenilenleri temsil eder.

## Makine Öğrenmesi Yapısı

1. **X(Input - Girdi)**
* Observations( Gözlemler ): Veri seti içerisindeki satırlar
* Features( Özellikler ): Veri seti içerisindeki sütunlar

2. **Y(Output - Çıktı)**
* **Y** : Veri seti içerisinde bulunan "Output" sütunu
* **Yp** : Model geliştirme aşamasından sonra tahmin edilen "Output" sütunu

Makine öğrenmesi sonucunda tahmin ettiğimiz output sütununun türüne göre makine öğrenmesini temel olarak 2 gruba ayırabiliriz:

a) Regression ( Regresyon ): Output sütunumuz sayısal değer ise yani, bağımlı değişkeni (hedeflediğimiz değişkeni) sayısal olan problemlere regresyon problemleri denir.  
— *Ürün fiyatı tahmini, evin m2 tahmini, maaş tahmini, kilo tahmini*...

b) Classification ( Sınıflandırma ) : Output sütunumuz kategorik değerler ise yani, bağımlı değişkeni kategorik olan problemlere sınıflandırma problemi denir.  
— *Müşteri terk ( churn ) durumu, hasta durumu tahmini*...

🚨NOT: Sınıflandırma problemlerimizin içinde Clustering( Kümeleme ) yapısını da öğreneceğiz. Fakat Clustering'in en büyük farkı; **Y** olarak tanımladığımız, veri seti içerisinde bulunan output sütununun olmamasıdır! ( sadece Yp var )

## Değişken Türleri ( Variable Types )

Değişkenler, veri bilimi ve istatistiksel analizlerde temel bir rol oynar. Verileri anlamak ve analiz etmek için değişken türlerini anlamak önemlidir. İşte yaygın olarak karşılaşılan değişken türleri:

1. **Sayısal Değişkenler**
* Integer: Tam sayıları temsil eder. Örneğin, bir kişinin yaşını ifade etmek için kullanılabilir.
* Float: Ondalık sayıları temsil eder. Örneğin, bir ürünün fiyatını ifade etmek için kullanılabilir.

2. **Kategorik Değişkenler**
* Nominal: Aynı kategoride olan öğeleri gruplar. Örneğin, renkler veya ülkeler gibi.
* Ordinal: Kategoriler arasında belirli bir sıralama veya düzen vardır. Örneğin, eğitim düzeyi gibi.

Bu kategoriler genellikle 0 ve 1 gibi değerlerle kodlanır.

*Farkları:*
* Nominal değişkenlerde sınıflar arasında herhangi bir sıralama yoktur, sadece farklı kategoriler vardır. Örneğin, bir öğrencinin sahip olduğu favori renk.
* Ordinal değişkenlerde ise sınıflar arasında belirli bir sıralama vardır. Örneğin, müşterilerin ürün kalitesini derecelendirmesi gibi.

**3. Bağımlı Değişkenler**
* Target: İlgilendiğimiz problemdeki sonuç değişkenidir.  
Bir müşterinin bir ürünü satın alıp almaması veya Titanic veri setindeki "survived" (hayatta kalma durumu) değişkeni örnek olarak verilebilir.

**4. Bağımsız Değişkenler:**
* Feature: Bağımlı değişkenin tahmin edilmesinde veya açıklanmasında kullanılan diğer değişkenlerdir.  
Örneğin, bir müşterinin yaşına, cinsiyetine ve gelirine dayalı olarak bir ürün satın alma olasılığını tahmin etmek için kullanılan değişkenler. Titanic veri setindeki "pclass" ve "age" gibi özellikler bu tür değişkenlere örnektir.

Bu değişken türlerini anlamak, veri analizi ve modelleme süreçlerinde doğru yaklaşımları benimsemek için temel bir adımdır.

## Özetle,

bu yazı makine öğrenmesinin temel kavramlarını ve yapılarını açıklamak için tasarlanmıştır. Makine öğrenmesi, yapay zekanın bir alt dalı olup, bilgisayarların verilerden deneyimle öğrenmesine odaklanır. Algoritmalar, veriler üzerinde çalışarak desenleri tanır ve analiz ederler. Makine öğrenmesinde girdi ve çıktılar önemli rol oynar; girdiler veri setindeki gözlemleri ve özellikleri temsil ederken, çıktılar hedeflenen sonuçları belirtir. Regresyon ve sınıflandırma olmak üzere iki temel çıktı türü vardır ve veri setlerinde farklı değişken türleri bulunur, bu da veri analizi ve modelleme süreçlerinde önemlidir.

Bir sonraki yazımızda Öğrenme Türlerini ele alacağım.

Okuduğunuz için teşekkür ederim. 🧡 