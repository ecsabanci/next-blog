---
title: "FLO Müşteri Segmentasyonu Projesi"
date: "2024-03-20"
excerpt: "Denetimsiz öğrenme ile müşteri segmentasyonu ve pazarlama stratejileri"
---

Bu projede, FLO'nun müşterilerini segmentlere ayırarak her segment için özel pazarlama stratejileri geliştirmeyi amaçlayan bir denetimsiz öğrenme çalışması gerçekleştirilmiştir.

## Veri Seti Hikayesi

Veri seti, 2020-2021 yılları arasında OmniChannel (hem online hem offline alışveriş yapan) müşterilerin geçmiş alışveriş davranışlarından elde edilen bilgileri içermektedir. Bu veriler:
- Müşteri demografik bilgileri
- Alışveriş tarihleri
- Alışveriş tutarları
- Alışveriş kanalları
gibi önemli özellikleri kapsamaktadır.

## Proje Adımları

### 1. Veri Hazırlama
- Veri setinin yapısının incelenmesi
- Eksik ve aykırı değerlerin tespiti
- Gerekli veri dönüşümlerinin yapılması
- Analiz için feature'ların hazırlanması

### 2. K-Means ile Müşteri Segmentasyonu
- Değişkenlerin standartlaştırılması
- Optimum küme sayısının belirlenmesi
  - Elbow yöntemi
  - Silhouette analizi
- Model oluşturma ve segmentasyon
- Segmentlerin istatistiksel analizi

### 3. Hiyerarşik Kümeleme ile Müşteri Segmentasyonu
- Farklı bağlantı yöntemlerinin denenmesi
- Dendogram analizi
- Küme sayısının belirlenmesi
- Segmentasyon ve sonuçların karşılaştırılması

## Müşteri Segmentleri ve Özellikleri

### Segment 1: Yüksek Değerli Müşteriler
- Yüksek alışveriş sıklığı
- Yüksek ortalama sepet tutarı
- Hem online hem offline kanalları aktif kullanım

### Segment 2: Orta Segment Müşteriler
- Orta düzey alışveriş sıklığı
- Ortalama sepet tutarı
- Genellikle tek kanal tercihi

### Segment 3: Risk Altındaki Müşteriler
- Düşük alışveriş sıklığı
- Düşük sepet tutarı
- Uzun süredir alışveriş yapmamış

## Pazarlama Önerileri

### Yüksek Değerli Müşteriler İçin
- VIP müşteri programları
- Özel indirim ve kampanyalar
- Erken erişim fırsatları
- Kişiselleştirilmiş ürün önerileri

### Orta Segment Müşteriler İçin
- Sadakat programları
- Cross-selling kampanyaları
- Kanal çeşitlendirme teşvikleri
- Sezonsal kampanyalar

### Risk Altındaki Müşteriler İçin
- Geri kazanım kampanyaları
- Özel indirim kuponları
- İletişim stratejilerinin güncellenmesi
- Müşteri memnuniyeti araştırmaları

## Sonuç ve İş Etkisi

Bu segmentasyon çalışması sayesinde:
- Müşteri davranışları daha iyi anlaşıldı
- Hedefli pazarlama stratejileri geliştirildi
- Kaynak kullanımı optimize edildi
- Müşteri yaşam boyu değeri artırıldı

Proje detaylarına ve kaynak kodlarına [GitHub](https://github.com/melisacevik/Machine-Learning/blob/master/case-study/FLO_project.py) üzerinden ulaşabilirsiniz. 