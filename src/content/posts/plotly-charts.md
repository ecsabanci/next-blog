---
title: "Plotly ile Oluşturulan Grafiklerin Statik ve Paylaşılabilir Hale Getirilmesi"
date: "2024-06-26"
excerpt: "Plotly grafiklerini statik ve paylaşılabilir hale getirme rehberi"
category: "Data Science"
---

Merhaba! Bugün sizlere, **Plotly** kullanarak oluşturduğunuz grafiklerin nasıl statik hale getirilebileceğini ve bu grafiklerin nasıl online olarak paylaşılabileceğini anlatacağım. Bu sayede projelerinizi ve analizlerinizi daha geniş kitlelerle kolayca paylaşabilirsiniz.

Rapor oluştururken daha statik grafiklere ihtiyaç duyabiliriz ve bu grafiklerin sadece yerel bilgisayarımızda kalmasını tercih etmeyebiliriz. Bu durumda, grafiklerinizi herkesin erişimine açmak için kullanabileceğiniz pratik bir çözüm var: **_Plotly Chart Studio_**.

# Adımlar

1️⃣ Plotly Chart Studio Hesabı Oluşturma
- [Plotly Chart Studio](https://chart-studio.plotly.com/) web sitesine gidin.
- Bir hesap oluşturun veya mevcut Plotly hesabınızla giriş yapın.

2️⃣ Plotly Kütüphanelerini Yükleme

Plotly ve Chart Studio kütüphanelerini yüklemek için aşağıdaki komutu kullanın:

```bash
pip install plotly chart-studio
```

3️⃣ Plotly Credentials Ayarlama
- API key ve kullanıcı adınızı ayarlamanız gerekiyor. Bu bilgileri Plotly hesap ayarlarınızdan bulabilirsiniz.
- `chart-studio` modülünü kullanarak ayarları yapın

```python
import chart_studio
import chart_studio.plotly as py
import chart_studio.tools as tls

username = 'YOUR_USERNAME'  # Plotly kullanıcı adınız
api_key = 'YOUR_API_KEY'    # Plotly API anahtarınız
chart_studio.tools.set_credentials_file(username=username, api_key=api_key)
```

4️⃣ Grafiği Plotly Chart Studio'ya Yükleme

```python
import pandas as pd
import plotly.express as px

# Basit bir veri kümesi oluşturma
data = {
    'Gün': ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma'],
    'Değer': [10, 15, 13, 17, 14]
}
df = pd.DataFrame(data)

# Çizgi Grafik oluşturma
fig = px.line(df, x='Gün', y='Değer', title='Haftalık Değerler',
              labels={'Gün': 'Günler', 'Değer': 'Değerler'},
              color_discrete_sequence=['#1f77b4'])

# Grafik tasarımını düzenleme
fig.update_layout(
    plot_bgcolor='white',
    title_font=dict(family="Roboto Mono", size=24, color='#000000'),
    font=dict(family="Roboto Mono", size=16, color='#000000'),
    xaxis_tickfont=dict(family="Roboto Mono", size=14, color='#000000'),
    yaxis_tickfont=dict(family="Roboto Mono", size=14, color='#000000'),
    showlegend=False
)

# Grafiği Plotly Chart Studio'ya yükleme
py.plot(fig, filename='haftalik_degerler_linechart', auto_open=True)
```

# Avantajlar

- **Kullanım Kolaylığı:** Plotly Chart Studio, grafiklerinizi hızlı ve kolay bir şekilde paylaşmanızı sağlar.
- **Profesyonellik:** Grafiğiniz Plotly'nin kendi sunucularında barındırılır, bu da profesyonel ve güvenilir bir çözüm sunar.
- **Interaktivite:** Grafikler interaktif olarak paylaşılabilir, böylece kullanıcılar grafiklerle etkileşime girebilir.

Bu adımları takip ederek, Plotly ile oluşturduğunuz grafiklerinizi kolayca online hale getirebilir ve paylaşabilirsiniz. Bu sayede projeleriniz ve analizleriniz daha geniş kitlelere ulaşacak ve daha etkili olacak.

Okuduğunuz için teşekkür ederim. ✍️(◔◡◔) 