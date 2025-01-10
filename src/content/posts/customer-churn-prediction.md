---
title: "Müşteri Kaybı (Churn) Tahmin Projesi"
date: "2024-03-20"
excerpt: "Telekom şirketinde müşteri kaybını tahmin eden makine öğrenmesi modeli"
---

Bu projede, bir telekom şirketinin müşteri kaybını tahmin edebilecek bir makine öğrenmesi modeli geliştirilmiştir. Model, müşteri terkini azaltmaya yönelik stratejiler geliştirmek için kullanılabilir.

## Veri Seti

Proje için kullanılan veri seti, Kaliforniya'daki bir telekom şirketinin 7043 müşterisine ait ev telefonu ve İnternet hizmetleri abonelik bilgilerini içermektedir. Bu veri seti:
- Müşteri demografik bilgileri
- Hizmet kullanım detayları
- Abonelik süreleri
- Ödeme bilgileri
gibi çeşitli özellikleri içermektedir.

## Proje Amacı

Bu projenin temel amacı:
- Müşteri kaybına neden olan faktörlerin belirlenmesi
- Kaybedilme riski yüksek müşterilerin önceden tespit edilmesi
- Müşteri kaybını önleyici stratejilerin geliştirilmesi için veri tabanlı öngörüler sağlanması

## Proje Adımları

### 1. Veri Analizi ve Hazırlık
- Veri seti keşfi ve özelliklerin analizi
- Eksik verilerin tespiti ve işlenmesi
- Aykırı değerlerin belirlenmesi ve düzeltilmesi

### 2. Özellik Mühendisliği
- Yeni özelliklerin türetilmesi
- Kategorik değişkenlerin sayısal formata dönüştürülmesi
- Özellik ölçeklendirme ve normalizasyon

### 3. Model Geliştirme
- Model seçimi ve karşılaştırması
- Hiperparametre optimizasyonu
- Model performans değerlendirmesi

## Model Performansı

Geliştirilen model yaklaşık %82 başarı oranı ile müşteri kaybını tahmin etmektedir. Bu oran:
- Yüksek risk taşıyan müşterilerin doğru tespitini
- Proaktif müşteri tutundurma stratejilerinin uygulanabilirliğini
- Modelin pratik kullanılabilirliğini
göstermektedir.

## Sonuç ve İş Etkisi

Bu tahmin modeli sayesinde şirket:
- Müşteri kaybını önceden tespit edebilir
- Hedefli müşteri tutundurma kampanyaları geliştirebilir
- Müşteri memnuniyetini artırıcı aksiyonlar alabilir
- Gelir kaybını minimize edebilir

Proje detaylarına ve kaynak kodlarına [GitHub](https://github.com/melisacevik/Machine-Learning/blob/master/case-study/case-study3.py) üzerinden ulaşabilirsiniz. 