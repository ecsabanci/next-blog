---
title: "LangChain ile Model Karşılaştırma"
date: "2025-03-06"
excerpt: "LangChain ile OpenAI, Gemini Pro ve Deepseek Chat modellerini karşılaştırma"
technologies: ["Python", "LangChain", "OpenAI", "Streamlit", "OpenAI API", "Gemini Pro", "Deepseek Chat"]
githubUrl: "https://github.com/melisacevik/Generative-AI/tree/master/module4-langchain"
demoUrl: ""
image: ""
---

Bu projede, LangChain kullanarak bir chatbot oluşturulmuştur. Chatbot, OpenAI'nin GPT-3.5 Turbo modelini kullanarak metin üretimi yapmaktadır.

### 1️⃣ LangChain: Model Karşılaştırma

Bu çalışma, farklı yapay zeka dil modellerinin performanslarını karşılaştırmak için bir arayüz sunar.
Kullanıcıdan alınan prompt ile farklı modellerin yanıtlarını karşılaştırır ve süre ölçümü yapar.

![Ekran Resmi 2025-02-13 10 34 02](https://github.com/user-attachments/assets/2f9591db-d250-47be-a96c-6a8648d66b91)

#### 📌 Özellikler
- **Model Karşılaştırma:**
  - **GPT-4 Turbo**
  - **Gemini Pro**
  - **Deepseek Chat**
  - Kullanıcı girdisine bağlı olarak farklı modellerin yanıtlarını karşılaştırır ve süre ölçümü yapar.

#### 🚀 Kullanım
```bash
streamlit run module4/model.py
```

#### 📂 Dosya Yapısı
```
├── model.py          # Streamlit tabanlı model karşılaştırma arayüzü
├── modelhelper.py    # Farklı yapay zeka modellerinin API entegrasyonu
```

---
