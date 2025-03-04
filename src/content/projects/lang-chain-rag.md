---
title: "LangChain - Bellek Genişletme (RAG)"
date: "2025-03-07"
excerpt: "Bu çalışma, bellek genişletme teknikleri kullanarak modelin dış kaynaklardan bilgi almasını sağlar."
technologies: ["Python", "LangChain", "OpenAI", "Streamlit", "RAG"]
githubUrl: "https://github.com/melisacevik/Generative-AI/tree/master/module4-langchain"
demoUrl: ""
image: ""
---

Bu projede, LangChain kullanarak bir chatbot oluşturulmuştur. Chatbot, OpenAI'nin GPT-3.5 Turbo modelini kullanarak metin üretimi yapmaktadır.

Kullanıcıdan alınan web URL'sinden ve PDF'lerden bilgi alarak modelin daha spesifik yanıtlar vermesini sağlar.


### 2️⃣ LangChain: Bellek Genişletme (RAG)

Bu çalışma, bellek genişletme teknikleri kullanarak modelin dış kaynaklardan bilgi almasını sağlar.

![Ekran Resmi 2025-02-21 16 17 30](https://github.com/user-attachments/assets/18a6c6f7-7e8d-428a-ab7a-a33745c39f20)


![Ekran Resmi 2025-02-21 16 18 58](https://github.com/user-attachments/assets/e1a5e2d6-900f-477d-b971-2e847563dbbd)



#### 📌 Özellikler
- **Web Üzerinden Bilgi Alma:** Belirtilen URL’den içerik toplayarak sorulara daha kapsamlı yanıt verir.
- **PDF Desteği:** PDF dosyalarını işler ve metinden bilgi çıkararak yanıt oluşturur.
- **Özel Prompt Kullanımı:** Modelin dış bilgi kaynaklarına erişimini sağlayarak daha bilinçli yanıtlar oluşturmasını destekler.

#### 🚀 Kullanım
```bash
streamlit run module4/rag.py
```

#### 📂 Dosya Yapısı
```
├── rag.py            # Streamlit tabanlı bellek genişletme uygulaması
├── raghelper.py      # Web ve PDF üzerinden içerik alarak bellek genişletme işlevselliği
```

Bu modül, farklı büyük dil modellerinin karşılaştırmasını yaparak kullanıcıların en iyi modeli seçmesine yardımcı olmayı ve ek bellek genişletme teknikleriyle daha verimli bilgi edinmesini sağlamayı amaçlamaktadır.