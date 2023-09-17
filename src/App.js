import './App.css';
import { useEffect, useState } from 'react'
import HashLoader from "react-spinners/HashLoader";
import { PiDesktopTowerBold } from 'react-icons/pi';
import { BiServer, BiCctv } from 'react-icons/bi';
import { GrHostMaintenance } from 'react-icons/gr';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { SlWrench } from 'react-icons/sl';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFlip, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';

export default function Home() {
  const franchises = ['hp', 'siemens', 'ABB', 'Sew-eurodrive', 'schneider', 'sick', 'pilz', 'allen-bradley', 'dahua', 'inform', 'dell', 'lenovo', 'nexans', 'legrand', 'omron', 'digitus', 'wisetech', 'paradox', 'honeywell', 'apc', 'hcs']
  const [windowWidth, setWindowWidth] = useState(0);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    setLoading(false)

    document.addEventListener('scroll', () => {
      const title = document.getElementById('title')
      const titleExp = document.getElementById('title-explanation')

      if (title) {
        if (window.innerWidth >= 1000) {
          if (window.scrollY >= 40) {
            title.classList.add('text-6xl')
            title.classList.remove('text-7xl')
            titleExp.classList.add('text-2xl')
            titleExp.classList.remove('text-3xl')
          } else {
            title.classList.add('text-7xl')
            title.classList.remove('text-6xl')
            titleExp.classList.add('text-3xl')
            titleExp.classList.remove('text-2xl')
          }
        } else if (window.innerWidth >= 700) {
          if (window.scrollY >= 40) {
            title.classList.add('text-5xl')
            title.classList.remove('text-6xl')
            titleExp.classList.add('text-xl')
            titleExp.classList.remove('text-2xl')
          } else {
            title.classList.add('text-6xl')
            title.classList.remove('text-5xl')
            titleExp.classList.add('text-2xl')
            titleExp.classList.remove('text-xl')
          }
        } else if (window.innerWidth >= 500) {
          if (window.scrollY >= 40) {
            title.classList.add('text-3xl')
            title.classList.remove('text-4xl')
            titleExp.classList.add('text-lg')
            titleExp.classList.remove('text-xl')
          } else {
            title.classList.add('text-4xl')
            title.classList.remove('text-3xl')
            titleExp.classList.add('text-xl')
            titleExp.classList.remove('text-lg')
          }
        } else {
          if (window.scrollY >= 40) {
            title.classList.add('text-2xl')
            title.classList.remove('text-3xl')
            titleExp.classList.add('text-base')
            titleExp.classList.remove('text-lg')
          } else {
            title.classList.add('text-3xl')
            title.classList.remove('text-2xl')
            titleExp.classList.add('text-lg')
            titleExp.classList.remove('text-base')
          }
        }
      }
      if (window.scrollY >= 100) animationFunction()
    })
  }, [])

  const textSizeSetter = () => {
    if (windowWidth >= 1000) return 'text-7xl'
    else if (windowWidth >= 700) return 'text-6xl'
    else if (windowWidth >= 500) return 'text-4xl'
    else return 'text-3xl'
  }

  const explanationSizeSetter = () => {
    if (windowWidth >= 1000) return 'text-3xl'
    else if (windowWidth >= 700) return 'text-2xl'
    else if (windowWidth >= 500) return 'text-xl'
    else return 'text-lg'
  }

  const animationFunction = () => {
    const serviceCards = document.querySelectorAll('.service-card')

    serviceCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.remove('opacity-0')
        card.classList.add('opacity-100')
      }, 200 * index)
    })
  }

  const scrollHandler = section => {
    switch (section) {
      case 'home':
        window.scrollTo({ top: 0, behavior: 'smooth' })
        break
      case 'services':
        const services = document.getElementById('services')
        if (window.innerWidth >= 1400) window.scrollTo({ top: services.offsetTop + 300, behavior: 'smooth' })
        else if (window.innerWidth >= 1000) window.scrollTo({ top: services.offsetTop + 250, behavior: 'smooth' })
        else if (window.innerWidth >= 700) window.scrollTo({ top: services.offsetTop + 250, behavior: 'smooth' })
        else window.scrollTo({ top: services.offsetTop + 250, behavior: 'smooth' })
        break
      case 'contact':
        const contact = document.getElementById('contact')
        if (window.innerWidth >= 1400) window.scrollTo({ top: contact.offsetTop + 350, behavior: 'smooth' })
        else if (window.innerWidth >= 1000) window.scrollTo({ top: contact.offsetTop + 320, behavior: 'smooth' })
        else if (window.innerWidth >= 700) window.scrollTo({ top: contact.offsetTop + 350, behavior: 'smooth' })
        else window.scrollTo({ top: contact.offsetTop + 250, behavior: 'smooth' })
        break
      case 'franchises':
        const franchises = document.getElementById('franchises')
        if (window.innerWidth >= 1000) window.scrollTo({ top: franchises.offsetTop + 350, behavior: 'smooth' })
        else if (window.innerWidth >= 700) window.scrollTo({ top: franchises.offsetTop + 300, behavior: 'smooth' })
        else window.scrollTo({ top: franchises.offsetTop + 250, behavior: 'smooth' })
        break
      default:
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className='w-full'>
      {loading ? <div className='flex justify-center items-center h-screen bg-gray-300'><HashLoader loading={loading} color='red' size={50} aria-label="Loading Spinner" data-testid="loader" /></div> :
        <>
          <header>
            <div className='fixed w-full z-20 text-white border-b-4 border-red-600' role='navigation'>
              <nav className='md:flex justify-between items-center bg-gray-200 mx-auto lg:px-20 md:px-10 px-5'>
                <div className='flex justify-between py-2'>
                  <button onClick={() => scrollHandler('')} className='mx-auto'><span className="text-4xl font-bold font-serif text-red-400 hover:text-red-500 italic">B<span className='text-red-600'>B</span>B</span></button>
                </div>
                <div className='flex md:justify-end justify-center py-3 lg:space-x-10 space-x-2'>
                  <button onClick={() => scrollHandler('home')} className='text-red-600 hover:text-red-700'>Ana sayfa</button>
                  <button onClick={() => scrollHandler('services')} className='text-red-600 hover:text-red-700'>Hizmetlerimiz</button>
                  <button onClick={() => scrollHandler('contact')} className='text-red-600 hover:text-red-700'>İletişim</button>
                  <button onClick={() => scrollHandler('franchises')} className='text-red-600 hover:text-red-700'>Bayiliklerimiz</button>
                </div>
              </nav>
            </div>
          </header>
          <div className='md:h-[3.7rem] h-[6.7rem] bg-blue-600'></div> {/*boşluğu dengelemek için*/}

          <div className='fixed w-full h-5/6 bg-rose-500 pt-32 text-center'>
            <h1 id='title' className={`${textSizeSetter()} font-bold text-gray-100`}>Bilgi Bilişim Bilgisayar</h1>
            <h3 id='title-explanation' className={`${explanationSizeSetter()} text-3xl mt-5 text-red-200`}>-Kaliteli ve güvenilir hizmet-</h3>
          </div>

          <main className="shadow absolute top-[60%] bg-gray-200 py-32 rounded-3xl z-10">
            <section id='services'>
              <h2 className='text-center text-4xl font-semibold text-red-600 underline underline-offset-4'>Hizmetlerimiz</h2>
              <div className='flex justify-evenly items-center flex-wrap bg-gray-100 w-11/12 mx-auto mt-12 py-10 rounded-3xl'>
                <figure className='service-card opacity-0'>
                  <div className='service-card-text'><PiDesktopTowerBold /><figcaption>Donanım Satışı</figcaption></div>
                  <Swipe imgs={['img1.png', 'img2.jpg', 'img3.png']} classes={['', 'rounded-3xl', '']} alts={['server', 'computer case', 'printer']} dim3={[200, 200]} delay={2700} />
                </figure>
                <figure className='service-card opacity-0'>
                  <div className='service-card-text'><BiCctv /><figcaption>Güvenlik Sistemleri</figcaption></div>
                  <Swiper slidesPerView={1} loop={true} modules={[Autoplay]} autoplay={{ delay: 2000 }}>
                    <SwiperSlide>
                      <img src="images/img16.png" className={`mx-auto`} width={300} height={300} alt={`bullet kamera resmi`} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="images/img17.png" className={`mx-auto`} width={200} height={200} alt={`eyeball kamera resmi`} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="images/img18.png" className={`mx-auto`} width={300} height={300} alt={`bullet kamera resmi`} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="images/img19.png" className={`mx-auto`} width={220} height={220} alt={`spitdome kamera resmi`} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="images/img20.png" className={`mx-auto relative bottom-10`} width={300} height={300} alt={`kayıt cihazı resmi`} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="images/img21.png" className={`mx-auto`} width={200} height={200} alt={`wisetech alarm sistemi resmi`} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="images/img22.png" className={`mx-auto`} width={200} height={200} alt={`paradox güvenlik sistemi resmi`} />
                    </SwiperSlide>
                  </Swiper>
                </figure>
                <figure className='service-card opacity-0'>
                  <div className='service-card-text'><BiServer /><figcaption>Network Çözümleri</figcaption></div>
                  <Swipe imgs={['img4.jpg', 'img5.png', 'img6.png']} classes={['rounded-3xl', '', 'rounded-3xl']} alts={['switch', 'switch', 'industrial switch']} dim3={[200, 200]} delay={2500} />
                </figure>
                <figure className='service-card opacity-0'>
                  <div className='service-card-text'><SlWrench /><figcaption>Personel Takip Sistemleri</figcaption></div>
                  <Swipe imgs={['img23.webp', 'img24.webp', 'img25.webp']} classes={['rounded-3xl', 'rounded-3xl', 'rounded-3xl']} alts={['zkteco kartlı geçiş sistemi', 'honeywell kartlı geçiş sistemi']} dim3={[200, 200]} delay={2500} />
                </figure>
                <figure className='service-card opacity-0'>
                  <div className='service-card-text'>
                    <style>{`svg path {stroke: rgb(248 113 113)}`}</style>
                    <GrHostMaintenance /><figcaption>Bakım Anlaşmaları</figcaption>
                  </div>
                  <Swipe imgs={['img7.jpg', 'img8.png', 'img9.jpg']} classes={['rounded-3xl', '', 'rounded-3xl']} alts={['shaking hands', 'shaking hands', 'shaking hands']} dim2={[200, 200]} delay={3500} />
                </figure>
                <figure className='service-card opacity-0'>
                  <div className='service-card-text'><AiOutlineInfoCircle /><figcaption>Danışmanlık Hizmetleri</figcaption></div>
                  <Swipe imgs={['img10.png', 'img11.jpeg', 'img12.jpg']} classes={['rounded-3xl', 'rounded-3xl', 'rounded-3xl']} alts={['talking people', 'talking people', 'talking people']} dim1={[220, 220]} delay={3500} />
                </figure>
                <figure className='service-card opacity-0'>
                  <div className='service-card-text'><SlWrench /><figcaption>Teknik Servis</figcaption></div>
                  <Swipe imgs={['img13.jpg', 'img14.jpg', 'img15.png']} classes={['rounded-3xl', 'rounded-3xl', 'rounded-3xl']} alts={['technician', 'technician', 'wrench and screwdriver']} delay={4000} />
                </figure>
              </div>
            </section>

            <section id='choose'>
              <div className='lg:w-3/4 w-11/12 mx-auto px-10 py-10 mt-10 bg-red-500 rounded-3xl'>
                <h2 className='mb-5 text-center text-4xl font-semibold text-red-100 underline underline-offset-4'>Neden bizi seçmelisiniz?</h2>
                <p className='text-xl leading-8 text-red-100'><span className='text-white text-2xl font-semibold'>Bilgi Bilişim Bilgisayar</span> olarak 24 yıllık deneyimimizle ağ ve güvenlik sistemleri, bilgisayar donanımı ve elektrik altyapı çözümleri konularında müşterilerimize en iyi hizmeti sunmaktayız. Uzman kadromuz ve son teknoloji ürünleri ile işletmenizin bilişim, güvenlik sistemleri ve elektrik altyapısı ihtiyaçlarına etkin çözümler üretiyoruz. Kurumsal firma ve kamu kurumlarının güvenilir teknoloji ve elektrik altyapısı ortağı olma vizyonumuzla faaliyetlerimizi sürdürüyor, müşterilerimizin memnuniyetini her zaman ön planda tutuyoruz. Uzun yıllara dayanan bilgi birikimi ve deneyimimizle bilişim, güvenlik sistemleri ve elektrik altyapısı konularında siz değerli müşterilerimize en iyi hizmeti sunmaya devam edeceğiz.</p>
              </div>
            </section>

            <section id='contact'>
              <h2 className='py-10 text-center text-4xl font-semibold text-red-600 underline underline-offset-4'>İletişim bilgileri ve adres</h2>
              <div className='grid md:grid-cols-2 lg:w-10/12 w-11/12 gap-5 bg-red-200 px-5 py-5 mx-auto rounded-3xl'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.2154309173848!2d29.322599875777364!3d40.86714622810357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad90cbbc69413%3A0xa54c119387f190b4!2sBilgi%20Bili%C5%9Fim%20Bilgisayar!5e0!3m2!1str!2str!4v1691574628220!5m2!1str!2str" className='mx-auto' width="100%" height="450" title='map' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className='md:text-center'>
                  <div className='inline-block border-b border-red-600'><h3 className='text-3xl text-gray-600'>Adres</h3></div>
                  <p className='text-xl'>Aydınlı mah. Zeki sk. no:1/A <br />Tuzla/İstanbul</p>

                  <div className='inline-block border-b border-red-600 mt-10'><h3 className='text-3xl text-gray-600'>İletişim bilgileri</h3></div>
                  <p className='text-xl text-gray-600'>0216 37 999 37</p>
                  <p className='text-xl text-gray-600'>bilgibilisim@bilgibilisim.com.tr</p>
                  <p className='text-xl text-gray-600'>satis@bilgibilisim.com.tr</p>
                  <p className='text-xl text-gray-600'>teknik@bilgibilisim.com.tr</p>
                </div>
              </div>
            </section>

            <section id='franchises'>
              <div className='w-10/12 mx-auto px-10 py-10 mt-10 bg-gray-100 border-red-400 border-4 rounded-3xl'>
                <h2 className='mb-5 text-center text-3xl font-semibold text-red-600'>Bayiliklerimiz</h2>
                <div className='flex flex-wrap justify-center'>
                  {franchises.map((franchise, index) =>
                    <img className="fran-item" src={`logos/logo${index + 1}.png`} alt={`${franchise} logo`} key={index} />
                  )}
                </div>
              </div>
            </section>

            <div className='absolute bottom-0 w-full h-4 bg-red-500' />
          </main>
        </>
      }
    </div>
  )
}
export function Swipe({ imgs, classes, alts, dim1 = [300, 300], dim2 = [300, 300], dim3 = [300, 300], delay }) {
  return (
    <Swiper slidesPerView={1} loop={true} modules={[Autoplay]} autoplay={{ delay: delay }}>
      <SwiperSlide>
        <img src={`images/${imgs[0]}`} className={`mx-auto ${classes[0]}`} width={dim1[0]} height={dim1[1]} alt={`${alts[0]}`} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={`images/${imgs[1]}`} className={`mx-auto ${classes[1]}`} width={dim2[0]} height={dim2[1]} alt={`${alts[1]}`} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={`images/${imgs[2]}`} className={`mx-auto ${classes[2]}`} width={dim3[0]} height={dim3[1]} alt={`${alts[2]}`} />
      </SwiperSlide>
    </Swiper>
  )
}