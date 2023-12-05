import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Dil verilerini ve ayarlarını yükleyin
const resources = {
    en: {
        translation: {
            'aciklama1': "I'm a Full Stack Developer...",
            'aciklama2': '...who likes to craft solid and scalable frontend products with great user experiences.',
            'info': 'Basic Information',
            'hakkimda': 'About Me',
            'skills': 'Skills',
            'dogumTarihi': 'Date of Birth',
            'ikamet': 'City of Residence',
            'egitim': 'Educational Status',
            'rol': 'Preffered Role',
            'projeAciklama': 'A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.',
            'message': 'Send me a message!',
            'footerMessage': 'Got a question or proposal, or just want to say hello? Go ahead.',
            'projects': 'Projects'
        }
    },
    tr: {
        translation: {
            'aciklama1': "Ben Full Stack Developer'ım...",
            'aciklama2': '...mükemmel kullanıcı deneyimlerine sahip, sağlam ve ölçeklenebilir ön uç ürünleri oluşturmayı seven birisi.',
            'info': 'Temel Bilgiler',
            'hakkimda': 'Hakkımda',
            'skills': 'Yetenekler',
            'dogumTarihi': 'Doğum Tarihi',
            'ikamet': 'İkamet Şehri',
            'egitim': 'Eğitim Durumu',
            'rol': 'Tercih Ettiği Rol',
            'projeAciklama': 'Kullanıcılarınızın hangi çerezleri kabul edeceğini veya reddedeceğini seçmesine olanak tanıyan basit, özelleştirilebilir, minimal kurulum çerez eklentisi. Bu, vanilya JS, SCSS ve Parcel Bundler ile oluşturulmuştur ve bir NPM paketi olarak mevcuttur ve git deposu, kod ve temalarda her türlü özelleştirmeyi mümkün kılar.',
            'message': 'Bana mesaj gönder!',
            'footerMessage': 'Bir sorunuz veya öneriniz mi var, yoksa sadece merhaba mı demek istiyorsunuz? Devam et.',
            'projects': 'Projeler'
        }

    }
};

const selectedLang = "tr";
localStorage.setItem("selectedLang", selectedLang);

const storedLang = localStorage.getItem("selectedLang");
const defaultLang = "en";

const langToUse = storedLang || defaultLang;



i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: langToUse,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;