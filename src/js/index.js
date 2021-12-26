$(function () {
  $(".platform").bind("click", (e) => {
    $(".platform").removeClass("active");
    $(e.target).addClass("active");
  });

  $(".search-button").bind("click", () => {
    const val = $(".search-input").val();
    const pt = $(".platform.active")[0].innerText.trim();
    if (val) {
      switch (pt) {
        case "百度":
          window.open(`https://www.baidu.com/baidu?word=${val}`);
          break;
      }
    } else {
      return;
    }
  });

  const section1 = localStorage.getItem("section1");
  const sectionDefault = [
    {
      href: "https://www.douyin.com/",
      img: "assets/logo-douyin.png",
      name: "抖音",
      desc: "抖音让每一个人看见并连接更大的世界，鼓励表达、沟通和记录，激发创造，丰富人们的精神世界，让现实生活更美好。",
    },
    {
      href: "https://weibo.com/",
      img: "assets/logo-weibo.png",
      name: "微博",
      desc: "随时随地发现新鲜事。",
    },
    {
      href: "https://www.douyin.com/",
      img: "assets/logo-douyin.png",
      name: "抖音",
      desc: "抖音让每一个人看见并连接更大的世界，鼓励表达、沟通和记录，激发创造，丰富人们的精神世界，让现实生活更美好。",
    },
    {
      href: "https://www.douyin.com/",
      img: "assets/logo-douyin.png",
      name: "抖音",
      desc: "抖音让每一个人看见并连接更大的世界，鼓励表达、沟通和记录，激发创造，丰富人们的精神世界，让现实生活更美好。",
    },
    {
      href: "https://www.douyin.com/",
      img: "assets/logo-douyin.png",
      name: "抖音",
      desc: "抖音让每一个人看见并连接更大的世界，鼓励表达、沟通和记录，激发创造，丰富人们的精神世界，让现实生活更美好。",
    },
    {
      href: "https://www.douyin.com/",
      img: "assets/logo-douyin.png",
      name: "抖音",
      desc: "抖音让每一个人看见并连接更大的世界，鼓励表达、沟通和记录，激发创造，丰富人们的精神世界，让现实生活更美好。",
    },
    {
      href: "https://www.douyin.com/",
      img: "assets/logo-douyin.png",
      name: "抖音",
      desc: "抖音让每一个人看见并连接更大的世界，鼓励表达、沟通和记录，激发创造，丰富人们的精神世界，让现实生活更美好。",
    },
    {
      href: "https://www.douyin.com/",
      img: "assets/logo-douyin.png",
      name: "抖音",
      desc: "抖音让每一个人看见并连接更大的世界，鼓励表达、沟通和记录，激发创造，丰富人们的精神世界，让现实生活更美好。",
    },
    {
      href: "https://www.douyin.com/",
      img: "assets/logo-douyin.png",
      name: "抖音",
      desc: "抖音让每一个人看见并连接更大的世界，鼓励表达、沟通和记录，激发创造，丰富人们的精神世界，让现实生活更美好。",
    },
    {
      href: "https://www.douyin.com/",
      img: "assets/logo-douyin.png",
      name: "抖音",
      desc: "抖音让每一个人看见并连接更大的世界，鼓励表达、沟通和记录，激发创造，丰富人们的精神世界，让现实生活更美好。",
    },
    {
      href: "https://www.douyin.com/",
      img: "assets/logo-douyin.png",
      name: "抖音",
      desc: "抖音让每一个人看见并连接更大的世界，鼓励表达、沟通和记录，激发创造，丰富人们的精神世界，让现实生活更美好。",
    },
    {
      href: "https://www.douyin.com/",
      img: "assets/logo-douyin.png",
      name: "抖音",
      desc: "抖音让每一个人看见并连接更大的世界，鼓励表达、沟通和记录，激发创造，丰富人们的精神世界，让现实生活更美好。",
    },
    {
      href: "https://www.douyin.com/",
      img: "assets/logo-douyin.png",
      name: "抖音",
      desc: "抖音让每一个人看见并连接更大的世界，鼓励表达、沟通和记录，激发创造，丰富人们的精神世界，让现实生活更美好。",
    },
    {
      href: "https://www.douyin.com/",
      img: "assets/logo-douyin.png",
      name: "抖音",
      desc: "抖音让每一个人看见并连接更大的世界，鼓励表达、沟通和记录，激发创造，丰富人们的精神世界，让现实生活更美好。",
    },
    {
      href: "https://www.douyin.com/",
      img: "assets/logo-douyin.png",
      name: "抖音",
      desc: "抖音让每一个人看见并连接更大的世界，鼓励表达、沟通和记录，激发创造，丰富人们的精神世界，让现实生活更美好。",
    },
    {
      href: "https://www.douyin.com/",
      img: "assets/logo-douyin.png",
      name: "抖音",
      desc: "抖音让每一个人看见并连接更大的世界，鼓励表达、沟通和记录，激发创造，丰富人们的精神世界，让现实生活更美好。",
    },
    {
      href: "https://www.douyin.com/",
      img: "assets/logo-douyin.png",
      name: "抖音",
      desc: "抖音让每一个人看见并连接更大的世界，鼓励表达、沟通和记录，激发创造，丰富人们的精神世界，让现实生活更美好。",
    },
    {
      href: "https://www.douyin.com/",
      img: "assets/logo-douyin.png",
      name: "抖音",
      desc: "抖音让每一个人看见并连接更大的世界，鼓励表达、沟通和记录，激发创造，丰富人们的精神世界，让现实生活更美好。",
    },
    {
      href: "https://www.douyin.com/",
      img: "assets/logo-douyin.png",
      name: "抖音",
      desc: "抖音让每一个人看见并连接更大的世界，鼓励表达、沟通和记录，激发创造，丰富人们的精神世界，让现实生活更美好。",
    },
    {
      href: "https://www.douyin.com/",
      img: "assets/logo-douyin.png",
      name: "抖音",
      desc: "抖音让每一个人看见并连接更大的世界，鼓励表达、沟通和记录，激发创造，丰富人们的精神世界，让现实生活更美好。",
    },
    {
      href: "https://www.douyin.com/",
      img: "assets/logo-douyin.png",
      name: "抖音",
      desc: "抖音让每一个人看见并连接更大的世界，鼓励表达、沟通和记录，激发创造，丰富人们的精神世界，让现实生活更美好。",
    },
    {
      href: "https://www.douyin.com/",
      img: "assets/logo-douyin.png",
      name: "抖音",
      desc: "抖音让每一个人看见并连接更大的世界，鼓励表达、沟通和记录，激发创造，丰富人们的精神世界，让现实生活更美好。",
    },
  ];
  const section1Arr = section1 ? section1 : sectionDefault;
  renderPt("#section-1", section1Arr);
  renderPt("#section-2", section1Arr);
  renderPt("#section-3", section1Arr);
  renderPt("#section-4", section1Arr);
  renderPt("#section-5", section1Arr);

  function renderPt(id, arr) {
    if (arr.length === 0) {
      return;
    }
    let dom = "";
    arr.map((item) => {
      dom += `
      <a class="pt-box" href="${item.href}" target="_blank">
        <img
          src="${item.img}"
          alt="抖音"
        />
        <div>
          <div class="pt-name">${item.name}</div>
          <div class="pt-desc">
            ${item.desc}
          </div>
        </div>
      </a>
    `;
    });
    $(`${id} .content-box`).empty().append(dom);
  }

  let onScroll = true;
  $(".nav-li").bind("click", function (e) {
    $(".nav-li").removeClass("active");
    $(e.target).addClass("active");

    const id = $(e.target).data("id").split("-")[1];
    const sectionId = `#section-${id}`;
    onScroll = false;
    setTimeout(() => {
      onScroll = true;
    }, 1000);
    window.scrollTo({
      top: $(sectionId).offset().top - 20,
      behavior: "smooth",
    });
  });

  const cards = $(".card");
  const topArrs = [];
  const length = cards.length;
  for (let i = 0; i < length; i++) {
    const sectionId = `#section-${i + 1}`;
    topArrs.push($(sectionId).offset().top);
  }

  $(window).scroll(function (event) {
    const scrollTop = $(this).scrollTop();
    if (scrollTop > 100) {
      $(".nav-ul").css({ position: "fixed", top: "10px" });
    } else if (scrollTop < 100) {
      $(".nav-ul").css({ position: "static", top: "0" });
    }
    if (onScroll) {
      let active = 0;
      for (let i = 0; i < topArrs.length - 1; i++) {
        if (topArrs[i] < scrollTop && scrollTop < topArrs[i + 1]) {
          active = i;
          break;
        }
      }
      $(".nav-li").removeClass("active");
      $(`#nav-${active + 1}`).addClass("active");
    }
  });
});
