---
title: "VoiceDraw: Sesli Komutlarla Görsel Oluşturma"
date: "2025-03-05"
excerpt: "Ses ile çizim yapan uygulama"
technologies: ["Python", "Streamlit", "OpenAI", "StabilityAI", "AssemblyAI"]
githubUrl: "https://github.com/melisacevik/Generative-AI/tree/master/module3"
demoUrl: ""
image: ""
---

Bu projede, kullanıcıların sesli komutlarla görseller oluşturmasını sağlayan bir uygulama geliştirilmiştir. Uygulama, ses kaydını alıp metne çevirir ve ardından yapay zeka modelleriyle görsel üretir.

### VoiceDraw: Sesli Komutlarla Görsel Oluşturma

VoiceDraw, kullanıcıların sesli komutlarla görseller oluşturmasını sağlayan bir uygulamadır. Uygulama, ses kaydını alıp metne çevirir ve ardından yapay zeka modelleriyle görsel üretir.

![Ekran Resmi 2025-02-21 16 01 31](https://github.com/user-attachments/assets/228cf806-c437-4aaf-83da-a4ceff70af55)

### 📌 Özellikler
- **Ses Kaydı:** Kullanıcıdan sesli giriş alır.
- **Metne Dönüştürme:** OpenAI Whisper API ile sesi metne çevirir.
- **Görsel Üretimi:**
  - OpenAI DALL-E 3 kullanarak metinden görsel üretir.
  - Google Gemini Vision Pro kullanarak görsel bazlı düzenlemeler yapar.
- **Streamlit Arayüzü:** Kullanıcı dostu bir arayüz sunar.
- **Görsel İndirme:** Üretilen görselleri indirilebilir hale getirir.

### 🚀 Proje Adımları

1. **Ses Kaydı:**
   - Kullanıcıdan sesli giriş alır.
   - Ses kaydını almak için gerekli kodlar yazılır.

2. **Metne Dönüştürme:**
   - OpenAI Whisper API ile sesi metne çevirir.

3. **Görsel Üretimi:**
   - OpenAI DALL-E 3 kullanarak metinden görsel üretir.
   - Google Gemini Vision Pro kullanarak görsel bazlı düzenlemeler yapar.

4. **Streamlit Arayüzü:**
   - Kullanıcı dostu bir arayüz sunar.

5. **Görsel İndirme:**
   - Üretilen görselleri indirilebilir hale getirir.

### 🛠️ Teknolojiler
- **Python:** Programlama dilidir.
- **Streamlit:** Kullanıcı arayüzü oluşturmak için kullanılır.
- **OpenAI:** Yapay zeka modelleri için API'ler sunar.
- **Google Gemini Vision Pro:** Görsel işleme için kullanılır.

### 📚 Referanslar
- [OpenAI Whisper API](https://platform.openai.com/docs/guides/speech-to-text)
- [Google Gemini Vision Pro](https://developers.google.com/gemini/vision)
- [Streamlit](https://streamlit.io/)
