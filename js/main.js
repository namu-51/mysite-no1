'use strict';

{

  //  swiper

  //スワイパー ブレイクポイント768切り替え PC画像3枚 ページネーション ボタン
  const swiper = new Swiper('.swiper', {
    loop: true,
    // autoplay: {
    //   delay: 2500,
    // },
    effect: 'coverflow',
    speed: 1500,
    slidesPerView: 1,
    spaceBetween: 58,
    breakpoints: {
      768: {
        slidesPerView: 1.8,
        spaceBetween: 40,
        centeredSlides: true,
      },
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      formatFractionCurrent: function (n) {
        return '0' + n;
      },
      formatFractionTotal: function (n) {
        return '0' + n;
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  window.addEventListener("scroll", function () {
    // スライダーのコンテナ要素を取得
    const sliderContainer = document.querySelector(".swiper");
    // スライダーのコンテナの位置情報を取得
    const rect = sliderContainer.getBoundingClientRect();
    // ウィンドウの高さを取得（クロスブラウザ対応）
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < windowHeight && rect.bottom >= 0) {
      // スライダーが画面内に入った場合、自動再生を有効にして開始
      swiper.autoplay.start();
      swiper.params.autoplay.delay = 800; // 自動再生の遅延設定
    } else {
      // 画面外に出た場合、自動再生を停止
      swiper.autoplay.stop();
    }
  });


  //  GSAP

  document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger)
    // テキスト１文字ずつ分離
    // const jsTexts = document.querySelectorAll('.main-visual__heading');
    // jsTexts.forEach(jsText => {
    //   let newText = '';
    //   const text = jsText.textContent;
    //   const cutText = text.trim().split('');
    //   for (let i = 0; i < cutText.length; i++) {
    //     cutText[i] = cutText[i].replace(' ', '&nbsp;');
    //     newText += `<span>${cutText[i]}</span>`;
    //   }
    //   jsText.innerHTML = newText;
    // });

    // ライブラリ SplitTypeで文字分割
    const text1 = new SplitType(".main-visual__heading .first");
    const text2 = new SplitType(".main-visual__heading .second");

    gsap
      .timeline()
      .set(".main-visual__count span",
        { autoAlpha: 0 }
      )
      .fromTo(".main-visual__count span:nth-child(1)", 1,
        { autoAlpha: 1 },
        { autoAlpha: 0 }
      )
      .fromTo(".main-visual__count span:nth-child(2)", 1,
        { autoAlpha: 1 },
        { autoAlpha: 0 }
      )
      .fromTo(".main-visual__count span:nth-child(3)", 1,
        { autoAlpha: 1 },
        { autoAlpha: 0 }
      )
      .to(".first", 0.9,
        {
          left: '-100%',
          ease: 'power4.in'
        }
      )
      .to(".second", 0.9,
        {
          left: '-100%',
          ease: 'power4.in'
        },
        '-=0.6'
      )
      .to(".third", 0.9,
        {
          left: '-100%',
          ease: 'power4.in'
        },
        '-=0.6'
      )
      .to(".main-visual__inner", 0.6,
        {
          height: "100%",
          ease: 'power2.inOut'
        },
        '+=0.4'
      )
      .to(".main-visual__inner", 0.8,
        {
          width: "85%",
          ease: 'power2.inOut'
        }
      )
      .fromTo(".main-visual__bg", 0.8,
        {
          y: '0%',
        },
        {
          y: '100%',
          ease: 'power2.inOut'
        },
        '<'
      )
      .fromTo("header", 0.6,
        {
          autoAlpha: 0,
          y: -200
        },
        {
          autoAlpha: 1,
          y: 0
        }
      )
      .fromTo(".main-visual__heading .first .char", 0.5,
        {
          autoAlpha: 0,
          x: 800
        },
        {
          autoAlpha: 1,
          x: 0,
          stagger: {
            amount: 0.5,
            from: 'start',
            ease: 'none'
          }
        },
        '+=0.1'
      )
      .fromTo(".main-visual__heading .second .char", 0.6,
        {
          autoAlpha: 0,
          x: -800
        },
        {
          autoAlpha: 1,
          x: 0,
          stagger: {
            amount: 0.5,
            from: 'end',
            ease: 'none'
          },
        },
        '-=1'
      )
      .to(".main-visual__heading", 0.4,
        { autoAlpha: 0 },
        '+=0.2'
      )
      .to(".main-visual__heading", 0.6,
        {
          autoAlpha: 1,
          scale: 1.15,
        }
      )
      .to(".main-visual__inner", 0.6,
        { "--scroll": '1200px' }
      )
      .to(".scroll i", 0.8,
        {
          autoAlpha: 1,
          y: 20,
          stagger: {
            amount: 0.3,
            ease: 'none'
          },
          repeat: -1
        },
        '+=0.6'
      )
      .to(".scroll",
        {
          autoAlpha: 0,
          scrollTrigger: {
            trigger: ".work",
            start: 'top 70%',
            // markers: true,
          }
        }
      )
  });



  //  IntersectionObserver

  // タイミングオプション呼び出し関数
  // function getTiming(duration = 1000, delay = 500, easing = 'ease', fill = 'forwards') {
  //   return { duration, delay, easing, fill };
  // }

  // const fadeContent = (entries, obs) => {
  //   entries.forEach((entry, index) => {
  //     if (entry.isIntersecting && entry.target.classList.contains('slide-up')) {
  //       entry.target.animate(
  //         {
  //           opacity: [0, 1],
  //           translate: ['0 300px', 0],
  //         },
  //         getTiming(undefined, 300 * index)
  //       );
  //       obs.unobserve(entry.target);
  //     } else if (entry.isIntersecting && entry.target.classList.contains('slide-down')) {
  //       entry.target.animate(
  //         {
  //           opacity: [0, 1],
  //           translate: ['0 -300px', 0],
  //         },
  //         getTiming()
  //       );
  //       obs.unobserve(entry.target);
  //     } else if (entry.isIntersecting && entry.target.classList.contains('slide-left')) {
  //       entry.target.animate(
  //         {
  //           opacity: [0, 1],
  //           translate: ['300px 0', 0],
  //         },
  //         getTiming(undefined, 1000)
  //       );
  //       obs.unobserve(entry.target);
  //     } else if (entry.isIntersecting && entry.target.classList.contains('slide-right')) {
  //       entry.target.animate(
  //         {
  //           opacity: [0, 1],
  //           translate: ['-300px 0', 0],
  //         },
  //         getTiming()
  //       );
  //       obs.unobserve(entry.target);
  //     }
  //   });
  // };

  // const observer = new IntersectionObserver(fadeContent, { threshold: 0.3 });

  // const fadeElements = document.querySelectorAll('.fade-in');

  // fadeElements.forEach(fadeElement => {
  //   observer.observe(fadeElement);
  // });



  //  ScrollReveal
  ScrollReveal().reveal('.work__heading', {
    duration: 2200,
    origin: 'bottom',
    distance: '300px',
    opacity: 0,
    interval: 300,
    reset: false,
    viewOffset: {
      top: 80,
    },
  });

  ScrollReveal().reveal('.work__img', {
    delay: 600,
    duration: 2200,
    origin: 'bottom',
    distance: '300px',
    opacity: 0,
    interval: 300,
    reset: false,
    viewOffset: {
      top: 80,
    },
  });

  ScrollReveal().reveal('.work__description', {
    delay: 600,
    duration: 2200,
    origin: 'bottom',
    distance: '300px',
    opacity: 0,
    interval: 300,
    reset: false,
    viewOffset: {
      top: 80,
    },
  });

  ScrollReveal().reveal('.about__img', {
    delay: 800,
    duration: 1500,
    origin: 'left',
    distance: '300px',
    opacity: 0,
    reset: false,
    viewOffset: {
      top: 80,
    },
  });

  ScrollReveal().reveal('.about__description', {
    delay: 1200,
    duration: 1500,
    origin: 'right',
    distance: '300px',
    opacity: 0,
    reset: false,
    viewOffset: {
      top: 80,
    },
  });

  ScrollReveal().reveal('.map', {
    delay: 800,
    duration: 1500,
    origin: 'left',
    distance: '300px',
    opacity: 0,
    reset: false,
    viewOffset: {
      top: 80,
    },
  });

  ScrollReveal().reveal('.access__info', {
    delay: 1200,
    duration: 1500,
    origin: 'right',
    distance: '300px',
    opacity: 0,
    reset: false,
    viewOffset: {
      top: 80,
    },
  });



  //  トップへ戻るボタン スクロールで出現
  const toTop = document.querySelector('.to-top');
  toTop.style.opacity = '0';

  function getScroll() {
    if (window.scrollY > 1000) {
      // toTop.classList.add('scrolled');
      toTop.style.opacity = '1';
      toTop.style.transition = '0.8s';
    } else if (window.scrollY < 1000) {
      // toTop.classList.remove('scrolled');
      toTop.style.opacity = '0';
      toTop.style.transition = '0.8s';
    }
  }

  window.addEventListener('scroll', getScroll);

  toTop.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });



  //  アンカーリンク ヘッダー固定 position-fixed
  window.addEventListener('DOMContentLoaded', () => {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    const header = document.querySelector('.header');

    anchorLinks.forEach(anchorLink => {
      anchorLink.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchorLink.hash;
        const targetElement = document.querySelector(targetId);
        const targetOffset = window.scrollY + targetElement.getBoundingClientRect().top;
        const headerHeight = header.offsetHeight;
        const totalScroll = targetOffset - headerHeight;
        window.scrollTo({
          top: totalScroll,
          behavior: "smooth"
        });
      });
    });
  });


}