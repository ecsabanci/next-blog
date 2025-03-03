---
title: "A/B Testi ile Teklif Verme Stratejilerinin Karşılaştırılması"
date: "2024-03-20"
excerpt: "Maximum Bidding ve Average Bidding stratejilerinin dönüşüm oranları açısından karşılaştırılması"
---

Bu projede, bir firmanın web sitesinde uygulanan iki farklı teklif verme stratejisinin (Maximum Bidding ve Average Bidding) dönüşüm oranları açısından karşılaştırılması yapılmıştır.

## Veri Seti Hikayesi

Veri seti, bir firmanın web sitesi verilerini içermektedir ve şu bilgileri kapsamaktadır:
- Kullanıcıların gördükleri reklam sayıları
- Tıklanan reklam sayıları
- Kazanç bilgileri
- Kontrol grubu (Maximum Bidding) verileri
- Test grubu (Average Bidding) verileri

## Proje Amacı

Bu A/B testinin temel amacı:
- "Average Bidding" ve "Maximum Bidding" stratejilerinin karşılaştırılması
- Dönüşüm oranları arasındaki farkların analizi
- En etkili teklif verme stratejisinin belirlenmesi
- Veri odaklı karar verme sürecinin oluşturulması

## Proje Adımları

### 1. Veri Analizi ve Hazırlık
- Kontrol ve test grubu verilerinin yüklenmesi
- Veri setlerinin yapısal analizi
- Temel istatistiksel ölçümlerin hesaplanması
- Veri kalitesi kontrolü

### 2. A/B Testi Hipotezinin Tanımlanması
- Null hipotezinin belirlenmesi
- Alternatif hipotezin belirlenmesi
- Test parametrelerinin seçimi
- Anlamlılık düzeyinin belirlenmesi

### 3. İstatistiksel Testler
- Normallik varsayımının kontrolü
  - Shapiro-Wilk testi
  - Q-Q plot analizi
- Varyans homojenliği testi
- Bağımsız İki Örneklem T-Testi
- Alternatif testlerin değerlendirilmesi

### 4. Test Sonuçlarının Analizi
- P-değeri hesaplaması
- Güven aralıklarının belirlenmesi
- Etki büyüklüğünün hesaplanması
- Sonuçların yorumlanması

## Bulgular

### Temel İstatistikler
- Her iki grubun ortalama dönüşüm oranları
- Standart sapmalar
- Minimum ve maksimum değerler
- Çeyrekler arası aralık

### Test Sonuçları
- İstatistiksel anlamlılık düzeyi
- Gruplar arası farkların büyüklüğü
- Güven aralıkları
- Pratik anlamlılık

## Sonuç ve Öneriler

### Ana Bulgular
- Maximum Bidding ve Average Bidding arasında istatistiksel olarak anlamlı bir fark bulunmamıştır
- Her iki strateji de benzer dönüşüm oranları sağlamaktadır
- Mevcut durumda Average Bidding'e geçiş için güçlü bir kanıt yoktur

### Öneriler
1. Mevcut Maximum Bidding stratejisine devam edilebilir
2. Daha uzun süreli test periyotları düşünülebilir
3. Farklı metrikler üzerinden yeni testler yapılabilir
4. Maliyet faktörü de analize dahil edilebilir

## Metodolojik Notlar

Bu çalışmada:
- Bilimsel A/B test metodolojisi kullanılmıştır
- İstatistiksel varsayımlar dikkatle kontrol edilmiştir
- Uygun test yöntemleri seçilmiştir
- Sonuçlar titizlikle yorumlanmıştır

Proje detaylarına ve kaynak kodlarına [GitHub](https://github.com/melisacevik/AB-Testing) üzerinden ulaşabilirsiniz. 