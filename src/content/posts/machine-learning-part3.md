---
title: "Makine Öğrenmesi Part-3"
date: "2024-03-30"
excerpt: "Yanlılık - Varyans Değiş Tokuşu (Bias-Variance Tradeoff)"
category: "Machine Learning, Data Science"
---

🧡 Merhaba! [Part-2 yazımda](/posts/machine-learning-part2) makine öğrenmesi türlerine değinmiştim. Bu yazıda Yanlılık - Varyans Değiş Tokuşu (Bias-Variance Tradeoff)'u ele alacağım.

💡 Makine öğrenmesi algoritmalarını daha iyi anlamak ve verileriniz üzerinde daha iyi performans elde etmek için bunu nasıl kullanacağınızı keşfedeceksiniz.

*İyi okumalar!*

*Tahmin modellerini tartıştığımızda, tahmin hataları önemsediğimiz iki ana alt bileşene ayrılabilir: "bias"tan kaynaklanan hata ve "varyans"tan kaynaklanan hata.*

## 1. Yanlılık Hatası (Bias Error)

Bias ☞ modelin öğrenmeye çalıştığı fonksiyon hakkında yaptığı varsayımdır.

Genel olarak doğrusal algoritmaların yüksek bir yanlılığı vardır, bu da öğrenilmesini hızlı ve anlaşılmasını kolaylaştırır ancak genellikle daha az esnektir.

Bias, bu modellerin tahminlerinin doğru değerden ne kadar uzakta olduğunu ölçer.

- **Düşük Yanlılık (Low-Bias)**: Modelin, hedef fonksiyonu belirlerken daha az varsayıma dayanması anlamına gelir.
  ☞ Decision Trees, K-Nearest Neighbors, Support Vector Machines

- **Yüksek Yanlılık (High-Bias)**: Modelin, hedef fonksiyonu belirlerken daha fazla varsayıma dayanması anlamına gelir.
  ☞ Linear Regression, Linear Discriminant Analysis and Logistic Regression

## 2. Varyans Hatası (Variance Error)

Varyans ☞ farklı eğitim verileri kullanıldığında hedef fonksiyonun tahmininin değişeceği miktardır.

Hedef fonksiyon, bir makine öğrenimi algoritması tarafından eğitim verilerinden tahmin edilir, bu nedenle algoritmanın bir miktar farklılığa sahip olmasını beklemeliyiz.

- **Düşük Varyans**: Model, eğitim verilerindeki küçük değişikliklerden çok az etkilenerek, tutarlı tahminler sunar.
  ☞ Linear Regression, Linear Discriminant Analysis and Logistic Regression.

- **Yüksek Varyans**: Eğitim veri setindeki değişikliklerle modelin tahminlerinde büyük dalgalanmalar meydana gelir.
  ☞ Decision Trees, K-Nearest Neighbors and Support Vector Machines.

*🏹 Hedefimiz*,  
🔽 hem düşük varyans,  
🔽 hem de düşük yanlılık gösteren bir model geliştirmektir.

Bu ideal durum, modelin eğitim verilerini etkin bir şekilde öğrendiğini ve aynı zamanda yeni verilere karşı esnek kaldığını gösterir. Bu dengeli yaklaşım, modelin eğitim verilerine aşırı uyum sağlamasına (overfitting) ve yetersiz kalmasına (underfitting) izin vermez, böylece model gerçek durumlara karşı güvenilir tahminler sunabilir.

💡 En iyi model veri setinin genel yapısını yakalayan ve yeni verilere iyi genelleme yapabilen bir yapıdadır!

Örneğin 👇🏻

## Görselin Açıklaması

Mavi yıldızlar bir sınıfı, kırmızı çemberler ise diğer bir sınıfı temsil eder ve siyah çizgi modelin tahmin çizgisini gösterir.

**a. Underfitting durumu (Düşük uyum):**
- Düşük model karmaşıklığı olarak isimlendirilir.
- High Bias ve Low Variance ile oluşur.
- Eğitim ve test hatası çok yüksek. Modelin train setini yeterince iyi temsil edemediğini gösterir.

**b. Optimal model:**
- Modelin tahmin çizgisi her iki sınıfı da oldukça iyi bir şekilde ayırır. Bu, modelin veri setinin yapısal özelliklerini yeterli düzeyde öğrendiğini ve iyi bir genelleme yapabildiğini gösterir.
- Model karmaşıklığının ve performansının optimal noktada olduğunu gösterir.

**c. Overfitting (Aşırı uyum):**
- Yüksek model karmaşıklığı olarak isimlendirilir.
- Siyah çizgi, veri noktalarına mükemmel uyum sağlamaya çalışırken çok fazla kıvrım içerir, bu da modelin veri setindeki gürültüyü de öğrenmeye çalıştığını gösterir. Yani **_model, verideki örüntüyü ezberler._**
- Eğitim hatası düşerken, test hatası artar.

Özetle,

Makine öğrenmesi modellerinde Bias-Variance Tradeoff, modelin hem eğitim verileri üzerindeki performansını hem de genelleştirme yeteneğini optimize etmek için denge sağlamayı hedefler.  
İdeal bir model, veri setinin karmaşıklığını ve yapısal özelliklerini doğru bir şekilde yakalayarak yeni verilere karşı sağlam ve güvenilir tahminlerde bulunabilir.  
Modelin ne kadar karmaşık olması gerektiğini belirlemek, uygulamanın gereksinimlerine ve kullanılacak veri setine bağlıdır. Bu nedenle, model seçimi yaparken yanlılık ve varyans arasındaki ilişkiyi dikkate almak, aşırı uyum (overfitting) ve yetersiz uyum (underfitting) gibi istenmeyen durumların önüne geçilmesinde kritik bir role sahiptir.  
Makine öğrenmesi projelerinde başarıya ulaşmak için, modellerin bu iki temel unsuru dengeli bir şekilde ele almasını sağlamak ve bu sayede veri setinin genel yapısını en iyi şekilde modellemek gerekir.

Okuduğunuz için teşekkür ederim. ✨

Kaynaklar:

1. [Vijayakumar, Sethu](https://en.wikipedia.org/wiki/Sethu_Vijayakumar) (2007). ["The Bias–Variance Tradeoff"](http://www.inf.ed.ac.uk/teaching/courses/mlsc/Notes/Lecture4/BiasVariance.pdf) (PDF). [University of Edinburgh](https://en.wikipedia.org/wiki/University_of_Edinburgh). Retrieved 19 August 2014.

2. Fortmann-Roe, Scott (2012). ["Understanding the Bias–Variance Tradeoff"](http://scott.fortmann-roe.com/docs/BiasVariance.html).

3. Neal, Brady; Mittal, Sarthak; Baratin, Aristide; Tantia, Vinayak; Scicluna, Matthew; Lacoste-Julien, Simon; Mitliagkas, Ioannis (2019). [*A Modern Take on the Bias-Variance Tradeoff in Neural Networks*](https://openreview.net/forum?id=HkgmzhC5F7). International Conference on Learning Representations (ICLR) 2019. 