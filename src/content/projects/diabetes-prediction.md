---
title: "Diyabet Tahmin Projesi"
date: "2024-03-20"
excerpt: "Makine öğrenmesi ile diyabet hastalığının tahmin edilmesi"
---

Bu projede, çeşitli sağlık göstergelerini kullanarak bir kişinin diyabet hastası olup olmadığını tahmin eden bir makine öğrenmesi modeli geliştirilmiştir. Model, hastalığın erken teşhisi ve tedavisi için kullanılabilir.

## Veri Seti Hakkında

Veri seti, ABD'deki Ulusal Diyabet-Sindirim-Böbrek Hastalıkları Enstitüleri'nden elde edilmiştir. Arizona Eyaleti'nin Phoenix şehrinde yaşayan, 21 yaş ve üzerindeki Pima Indian kadınları üzerinde yapılan diyabet araştırmasından derlenmiştir. Veri seti:
- 768 gözlem
- 8 sayısal bağımsız değişken
- 1 hedef değişken (outcome)
içermektedir.

## Değişkenler ve Açıklamaları

1. **Pregnancies**: Hamilelik sayısı
2. **Glucose**: Glikoz seviyesi
3. **BloodPressure**: Kan basıncı değeri
4. **SkinThickness**: Cilt kalınlığı ölçümü
5. **Insulin**: İnsülin seviyesi
6. **BMI**: Vücut kitle indeksi
7. **DiabetesPedigreeFunction**: Soydan gelen diyabet olma ihtimalini hesaplayan fonksiyon
8. **Age**: Yaş (yıl)
9. **Outcome**: Diyabet durumu (1: Hasta, 0: Sağlıklı)

## Proje Adımları

### 1. Keşifçi Veri Analizi (EDA)
- Veri setinin genel yapısının incelenmesi
- Değişken dağılımlarının analizi
- Korelasyon analizleri
- Görselleştirmeler

### 2. Veri Ön İşleme
- Eksik değerlerin tespiti ve işlenmesi
- Aykırı değerlerin analizi
- Özellik ölçeklendirme
- Veri dengesizliği kontrolü

### 3. Model Geliştirme ve Tahmin
- Uygun algoritmanın seçilmesi
- Model eğitimi
- Parametre optimizasyonu
- Tahminlerin gerçekleştirilmesi

### 4. Model Değerlendirme
- Performans metriklerinin hesaplanması
- Karmaşıklık matrisinin analizi
- ROC eğrisi analizi

### 5. Model Doğrulama
- Holdout yöntemi ile doğrulama
- 10 katlı çapraz doğrulama
- Yeni gözlemler için tahmin

## Model Performansı

Geliştirilen model yaklaşık %80 başarı oranı ile diyabet tahmini yapmaktadır. Bu oran:
- Erken teşhis için yeterli güvenilirliği
- Klinik karar destek sistemi olarak kullanılabilirliği
- Pratik uygulanabilirliği
göstermektedir.

## Sonuç ve Öneriler

Bu tahmin modeli:
- Diyabet riskinin erken tespitine yardımcı olabilir
- Sağlık profesyonellerine karar desteği sağlayabilir
- Risk faktörlerinin daha iyi anlaşılmasına katkıda bulunabilir
- Önleyici sağlık hizmetlerinin planlanmasında kullanılabilir

Proje detaylarına ve kaynak kodlarına [GitHub](https://github.com/melisacevik/Machine-Learning/blob/master/logistic_regression.py) üzerinden ulaşabilirsiniz. 